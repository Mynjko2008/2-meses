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

const listaMusicas = document.getElementById("lista-musicas");

const musicas = [
  {
    titulo: "Doçura",
    artista: "Marina Sena & Çantamarta",
    arquivo: "musicas/docura.mp3",
    capa: "capas_musicas/coisas_naturais.png"
  },
  {
    titulo: "Coisas Naturais",
    artista: "Marina Sena",
    arquivo: "musicas/coisas-naturais.mp3",
    capa: "capas_musicas/coisas_naturais.png"
  },
  {
    titulo: "Mágico",
    artista: "Marina Sena",
    arquivo: "musicas/magico.mp3",
    capa: "capas_musicas/coisas_naturais.png"
  },
  {
    titulo: "Desmitificar",
    artista: "Marina Sena",
    arquivo: "musicas/desmitificar.mp3",
    capa: "capas_musicas/coisas_naturais.png"
  },
  {
    titulo: "Carta de Maria",
    artista: "Rubel & Marina Sena",
    arquivo: "musicas/carta-de-maria.mp3",
    capa: "capas_musicas/Carta.jpg"
  },
  {
    titulo: "Aurora",
    artista: "Jão",
    arquivo: "musicas/aurora.mp3",
    capa: "capas_musicas/Memorias.jpg"
  },
  {
    titulo: "He's My Man",
    artista: "Luvcat",
    arquivo: "musicas/hes-my-man.mp3",
    capa: "capas_musicas/hes_my.jpg"
  },
  {
    titulo: "Can't Help Falling in Love",
    artista: "Elvis Presley",
    arquivo: "musicas/cant-help-falling-in-love.mp3",
    capa: "capas_musicas/cant_help.jpg"
  },
  {
    titulo: "Bring Me Back to Life",
    artista: "Chris Grey & Allegra Jordyn",
    arquivo: "musicas/bring-me-back-to-life.mp3",
    capa: "capas_musicas/bring_me.jpg"
  }
];
const audio = new Audio();

let musicaAtual = 0;
let tocando = false;

function carregarMusica(indice) {
  const musica = musicas[indice];

  tituloMusica.textContent = musica.titulo;
  artistaMusica.textContent = musica.artista;

  imagemMusica.src = musica.capa;
  imagemMusica.alt = `Capa da música ${musica.titulo}`;

  audio.src = musica.arquivo;

  progresso.value = 0;

  tempoAtual.textContent = "0:00";
  duracaoMusica.textContent = "0:00";

  destacarMusica();
}

function tocarMusica() {
  audio.play();

  tocando = true;

  iconePlay.classList.remove("fa-play");
  iconePlay.classList.add("fa-pause");

  play.setAttribute("aria-label", "Pausar música");
}

function pausarMusica() {
  audio.pause();

  tocando = false;

  iconePlay.classList.remove("fa-pause");
  iconePlay.classList.add("fa-play");

  play.setAttribute("aria-label", "Reproduzir música");
}

function alternarMusica() {
  if (tocando) {
    pausarMusica();
  } else {
    tocarMusica();
  }
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

function formatarTempo(tempo) {
  const minutos = Math.floor(tempo / 60);

  const segundos = Math.floor(tempo % 60);

  const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;

  return `${minutos}:${segundosFormatados}`;
}

function atualizarProgresso() {
  if (!audio.duration) {
    return;
  }

  const porcentagem = (audio.currentTime / audio.duration) * 100;

  progresso.value = porcentagem;

  tempoAtual.textContent = formatarTempo(audio.currentTime);
}

function atualizarDuracao() {
  if (!audio.duration) {
    return;
  }

  duracaoMusica.textContent = formatarTempo(audio.duration);
}

function alterarProgresso() {
  if (!audio.duration) {
    return;
  }

  const novoTempo = (progresso.value / 100) * audio.duration;

  audio.currentTime = novoTempo;
}

function criarPlaylist() {
  listaMusicas.innerHTML = "";

  musicas.forEach((musica, indice) => {
    const item = document.createElement("div");

    item.classList.add("musica");

    item.innerHTML = `
            <img
                src="${musica.capa}"
                alt="Capa de ${musica.titulo}"
                width="60"
                height="60"
            >

            <div>
                <strong>${musica.titulo}</strong>
                <span>${musica.artista}</span>
            </div>
        `;

    item.addEventListener("click", () => {
      musicaAtual = indice;

      carregarMusica(musicaAtual);

      tocarMusica();
    });

    listaMusicas.appendChild(item);
  });
}

function destacarMusica() {
  const itens = document.querySelectorAll(".musica");

  itens.forEach((item, indice) => {
    if (indice === musicaAtual) {
      item.classList.add("musica-atual");
    } else {
      item.classList.remove("musica-atual");
    }
  });
}

play.addEventListener("click", alternarMusica);

anterior.addEventListener("click", musicaAnterior);

proxima.addEventListener("click", proximaMusica);

progresso.addEventListener("input", alterarProgresso);

audio.addEventListener("timeupdate", atualizarProgresso);

audio.addEventListener("loadedmetadata", atualizarDuracao);

audio.addEventListener("ended", proximaMusica);

criarPlaylist();

carregarMusica(musicaAtual);