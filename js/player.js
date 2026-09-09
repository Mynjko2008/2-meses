import {
    atualizarMediaSession,
    atualizarEstadoMediaSession
} from "./mediaSession.js";

export function iniciarPlayer(musicas, aoMudarMusica) {

    const audio = document.getElementById("audio-player");
    const imagemMusica = document.getElementById("imagem-musica");
    const tituloMusica = document.getElementById("titulo-musica");
    const artistaMusica = document.getElementById("artista-musica");
    const play = document.getElementById("play");
    const iconePlay = document.getElementById("icone-play");
    const anterior = document.getElementById("anterior");
    const proxima = document.getElementById("proxima");
    const progresso = document.getElementById("progresso");
    const tempoAtual = document.getElementById("tempo-atual");
    const duracaoMusica = document.getElementById("duracao-musica");
    const mensagemErro = document.getElementById("mensagem-erro");

    let musicaAtual = 0;
    let tocando = false;
    let tentandoRecuperar = false;

    function formatarTempo(tempo) {
        const minutos = Math.floor(tempo / 60);
        const segundos = Math.floor(tempo % 60);

        const segundosFormatados =
            segundos < 10
                ? `0${segundos}`
                : segundos;

        return `${minutos}:${segundosFormatados}`;
    }

    function atualizarEstadoVisual() {
        if (tocando) {
            iconePlay.classList.remove("fa-play");
            iconePlay.classList.add("fa-pause");

            play.setAttribute(
                "aria-label",
                "Pausar música"
            );
        } else {
            iconePlay.classList.remove("fa-pause");
            iconePlay.classList.add("fa-play");

            play.setAttribute(
                "aria-label",
                "Reproduzir música"
            );
        }
    }

    function atualizarEstadoSistema(estado) {
        atualizarEstadoMediaSession(estado);
    }

    function mostrarErro(mensagem = "Essa música não está disponível.") {
        mensagemErro.hidden = false;
        mensagemErro.textContent = mensagem;
    }

    function esconderErro() {
        mensagemErro.hidden = true;
    }

    function carregarMusica(indice) {
        if (
            indice < 0 ||
            indice >= musicas.length
        ) {
            return false;
        }

        const musica = musicas[indice];

        musicaAtual = indice;

        tituloMusica.textContent =
            musica.titulo;

        artistaMusica.textContent =
            musica.artista;

        imagemMusica.src =
            musica.capa;

        imagemMusica.alt =
            `Capa da música ${musica.titulo}`;

        audio.src =
            musica.arquivo;

        progresso.value = 0;

        progresso.setAttribute(
            "aria-valuenow",
            "0"
        );

        tempoAtual.textContent =
            "0:00";

        duracaoMusica.textContent =
            "0:00";

        esconderErro();

        tocando = false;

        atualizarEstadoVisual();
        atualizarEstadoSistema("paused");
        atualizarMediaSession(musica);

        if (aoMudarMusica) {
            aoMudarMusica(musicaAtual);
        }

        return true;
    }

    async function tocarMusica() {
        if (!audio.src) {
            return;
        }

        try {
            await audio.play();
        } catch (erro) {
            console.error(
                "Não foi possível reproduzir a música:",
                erro
            );

            tocando = false;

            atualizarEstadoVisual();
            atualizarEstadoSistema("paused");

            mostrarErro(
                "Não foi possível reproduzir esta música."
            );
        }
    }

    function pausarMusica() {
        audio.pause();

        tocando = false;

        atualizarEstadoVisual();
        atualizarEstadoSistema("paused");
    }

    function alternarMusica() {
        if (audio.paused) {
            tocarMusica();
        } else {
            pausarMusica();
        }
    }

    async function selecionarMusica(indice) {
        if (!carregarMusica(indice)) {
            return;
        }

        await tocarMusica();
    }

    async function musicaAnterior() {
        let novoIndice =
            musicaAtual - 1;

        if (novoIndice < 0) {
            novoIndice =
                musicas.length - 1;
        }

        if (!carregarMusica(novoIndice)) {
            return;
        }

        await tocarMusica();
    }

    async function proximaMusica() {
        let novoIndice =
            musicaAtual + 1;

        if (novoIndice >= musicas.length) {
            novoIndice = 0;
        }

        if (!carregarMusica(novoIndice)) {
            return;
        }

        await tocarMusica();
    }

    async function musicaTerminou() {
        if (tentandoRecuperar) {
            return;
        }

        tentandoRecuperar = true;

        try {
            await proximaMusica();
        } finally {
            tentandoRecuperar = false;
        }
    }

    async function tentarRecuperarReproducao() {
        if (
            audio.paused ||
            tentandoRecuperar
        ) {
            return;
        }

        tentandoRecuperar = true;

        try {
            await audio.play();
        } catch (erro) {
            console.warn(
                "Não foi possível recuperar a reprodução:",
                erro
            );
        } finally {
            tentandoRecuperar = false;
        }
    }

    function atualizarProgresso() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        const porcentagem =
            (audio.currentTime /
                audio.duration) * 100;

        progresso.value =
            porcentagem;

        progresso.setAttribute(
            "aria-valuenow",
            porcentagem.toFixed(1)
        );

        tempoAtual.textContent =
            formatarTempo(
                audio.currentTime
            );
    }

    function atualizarDuracao() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        duracaoMusica.textContent =
            formatarTempo(
                audio.duration
            );
    }

    function alterarProgresso() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        const novoTempo =
            (progresso.value / 100) *
            audio.duration;

        audio.currentTime =
            novoTempo;
    }

    play.addEventListener(
        "click",
        alternarMusica
    );

    anterior.addEventListener(
        "click",
        musicaAnterior
    );

    proxima.addEventListener(
        "click",
        proximaMusica
    );

    progresso.addEventListener(
        "input",
        alterarProgresso
    );

    audio.addEventListener(
        "timeupdate",
        atualizarProgresso
    );

    audio.addEventListener(
        "loadedmetadata",
        atualizarDuracao
    );

    audio.addEventListener(
        "play",
        () => {
            tocando = true;

            atualizarEstadoVisual();
            atualizarEstadoSistema("playing");
        }
    );

    audio.addEventListener(
        "playing",
        () => {
            tocando = true;

            atualizarEstadoVisual();
            atualizarEstadoSistema("playing");
        }
    );

    audio.addEventListener(
        "pause",
        () => {
            tocando = false;

            atualizarEstadoVisual();
            atualizarEstadoSistema("paused");
        }
    );

    audio.addEventListener(
        "waiting",
        () => {
            console.log(
                "Aguardando carregamento da música..."
            );
        }
    );

    audio.addEventListener(
        "stalled",
        () => {
            console.warn(
                "A reprodução foi interrompida temporariamente."
            );

            tentarRecuperarReproducao();
        }
    );

    audio.addEventListener(
        "canplay",
        () => {
            if (
                !audio.paused &&
                audio.readyState >= 3
            ) {
                tentarRecuperarReproducao();
            }
        }
    );

    audio.addEventListener(
        "error",
        () => {
            console.error(
                "Erro ao carregar a música:",
                audio.error
            );

            tocando = false;

            atualizarEstadoVisual();
            atualizarEstadoSistema("paused");

            mostrarErro(
                "Não foi possível carregar esta música."
            );

            setTimeout(() => {
                if (musicas.length > 1) {
                    musicaTerminou();
                }
            }, 500);
        }
    );

    audio.addEventListener(
        "ended",
        musicaTerminou
    );

    carregarMusica(
        musicaAtual
    );

    return {
        tocarMusica,
        pausarMusica,
        musicaAnterior,
        proximaMusica,
        selecionarMusica,
        alterarProgresso,

        getAudio() {
            return audio;
        },

        getMusicaAtual() {
            return musicaAtual;
        }
    };
}