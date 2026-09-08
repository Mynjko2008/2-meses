import { atualizarMediaSession } from "./mediaSession.js";

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

    function formatarTempo(tempo) {
        const minutos = Math.floor(tempo / 60);
        const segundos = Math.floor(tempo % 60);

        const segundosFormatados =
            segundos < 10 ? `0${segundos}` : segundos;

        return `${minutos}:${segundosFormatados}`;
    }

    function atualizarEstadoVisual() {
        if (tocando) {
            iconePlay.classList.remove("fa-play");
            iconePlay.classList.add("fa-pause");
            play.setAttribute("aria-label", "Pausar música");
        } else {
            iconePlay.classList.remove("fa-pause");
            iconePlay.classList.add("fa-play");
            play.setAttribute("aria-label", "Reproduzir música");
        }
    }

    function mostrarErro() {
        mensagemErro.hidden = false;
        mensagemErro.textContent =
            "Essa música não está disponível.";
    }

    function esconderErro() {
        mensagemErro.hidden = true;
    }

    function carregarMusica(indice) {
        const musica = musicas[indice];

        musicaAtual = indice;

        tituloMusica.textContent = musica.titulo;
        artistaMusica.textContent = musica.artista;

        imagemMusica.src = musica.capa;
        imagemMusica.alt = `Capa da música ${musica.titulo}`;

        audio.src = musica.arquivo;

        progresso.value = 0;
        progresso.setAttribute("aria-valuenow", "0");

        tempoAtual.textContent = "0:00";
        duracaoMusica.textContent = "0:00";

        esconderErro();
        atualizarEstadoVisual();
        atualizarMediaSession(musica);

        if (aoMudarMusica) {
            aoMudarMusica(musicaAtual);
        }
    }

    async function tocarMusica() {
        try {
            await audio.play();
        } catch (erro) {
            console.error(
                "Não foi possível reproduzir a música:",
                erro
            );

            mostrarErro();
        }
    }

    function pausarMusica() {
        audio.pause();
    }

    function alternarMusica() {
        if (audio.paused) {
            tocarMusica();
        } else {
            pausarMusica();
        }
    }

    function selecionarMusica(indice) {
        carregarMusica(indice);
        tocarMusica();
    }

    function musicaAnterior() {
        musicaAtual--;

        if (musicaAtual < 0) {
            musicaAtual = musicas.length - 1;
        }

        carregarMusica(musicaAtual);
        tocarMusica();
    }

    function proximaMusica() {
        musicaAtual++;

        if (musicaAtual >= musicas.length) {
            musicaAtual = 0;
        }

        carregarMusica(musicaAtual);
        tocarMusica();
    }

    function atualizarProgresso() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        const porcentagem =
            (audio.currentTime / audio.duration) * 100;

        progresso.value = porcentagem;

        progresso.setAttribute(
            "aria-valuenow",
            porcentagem.toFixed(1)
        );

        tempoAtual.textContent =
            formatarTempo(audio.currentTime);
    }

    function atualizarDuracao() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        duracaoMusica.textContent =
            formatarTempo(audio.duration);
    }

    function alterarProgresso() {
        if (
            !Number.isFinite(audio.duration) ||
            audio.duration <= 0
        ) {
            return;
        }

        const novoTempo =
            (progresso.value / 100) * audio.duration;

        audio.currentTime = novoTempo;
    }

    play.addEventListener("click", alternarMusica);
    anterior.addEventListener("click", musicaAnterior);
    proxima.addEventListener("click", proximaMusica);

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

    audio.addEventListener("play", () => {
        tocando = true;
        atualizarEstadoVisual();
    });

    audio.addEventListener("pause", () => {
        tocando = false;
        atualizarEstadoVisual();
    });

    audio.addEventListener("error", () => {
        mostrarErro();
        tocando = false;
        atualizarEstadoVisual();
    });

    audio.addEventListener(
        "ended",
        proximaMusica
    );

    carregarMusica(musicaAtual);

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