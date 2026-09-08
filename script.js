// Elementos relacionados às informações da música
const imagemMusica = document.getElementById("imagem-musica");
const tituloMusica = document.getElementById("titulo-musica");
const artistaMusica = document.getElementById("artista-musica");

// Botões do player
const play = document.getElementById("play");
const iconePlay = document.getElementById("icone-play");

const anterior = document.getElementById("anterior");
const proxima = document.getElementById("proxima");

// Elementos da barra de progresso
const progresso = document.getElementById("progresso");
const tempoAtual = document.getElementById("tempo-atual");
const duracaoMusica = document.getElementById("duracao-musica");

// Área onde a playlist será criada
const listaMusicas = document.getElementById("lista-musicas");


// Lista de músicas do site
// Cada objeto representa uma música
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
    arquivo: "musicas/coisas_naturais.mp3",
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
    arquivo: "musicas/desmetificar.mp3",
    capa: "capas_musicas/coisas_naturais.png"
  },
  {
    titulo: "Carta de Maria",
    artista: "Rubel & Marina Sena",
    arquivo: "musicas/carta_de_maria.mp3",
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
    arquivo: "musicas/he_s_my_man.mp3",
    capa: "capas_musicas/Hes_my.jpg"
  },
  {
    titulo: "Can't Help Falling in Love",
    artista: "Elvis Presley",
    arquivo: "musicas/can_t_help_falling_in_love.mp3",
    capa: "capas_musicas/Cant_help.jpg"
  },
  {
    titulo: "Bring Me Back to Life",
    artista: "Chris Grey & Allegra Jordyn",
    arquivo: "musicas/bring_me_back_to_life.mp3",
    capa: "capas_musicas/Bring_me.jpg"
  },
  {
    titulo: "Do You Want To Know A Secret",
    artista: "The Beatles",
    arquivo: "musicas/do_you_want_to_know_a_secret.mp3",
    capa: "capas_musicas/Plese_Please_Me.jpg"
  },
  {
    titulo: "I Want To Hold Your Hand",
    artista: "The Beatles",
    arquivo: "musicas/i_want_to_hold_your_hand.mp3",
    capa: "capas_musicas/Plese_Please_Me.jpg"
  }, 
  {
    titulo: "Golden Slumbers & Carry That Weight & The End",
    artista: "The Beatles",
    arquivo: "musicas/Golden Slumbers _ Carry That Weight _ The End.mp3",
    capa: "capas_musicas/Abbey_Road.jpg"
  }, 
  {
    titulo: "I Want You (She's So Heavy)",
    artista: "The Beatles",
    arquivo: "musicas/i_want_you.mp3",
    capa: "capas_musicas/Abbey_Road.jpg"
  },
  {
    titulo: "Touch Me",
    artista: "The Doors",
    arquivo: "musicas/touch_me.mp3",
    capa: "capas_musicas/the_soft_parade.jpg"
  },
  {
    titulo: "Light My Fire",
    artista: "The Doors",
    arquivo: "musicas/light_my_fire.mp3",
    capa: "capas_musicas/the_doors.jpg"
  },
  {
    titulo: "Bound",
    artista: "The Ponderosa Twins Plus One",
    arquivo: "musicas/bound.mp3",
    capa: "capas_musicas/ponderosa.jpg"
  }
];


// Cria o objeto responsável por reproduzir os arquivos de áudio
const audio = new Audio();

// Índice da música que está selecionada
let musicaAtual = 0;

// Indica se uma música está tocando
let tocando = false;


// Carrega as informações de uma música no player
function carregarMusica(indice) {

  // Pega a música correspondente ao índice recebido
  const musica = musicas[indice];

  // Atualiza o título e o artista
  tituloMusica.textContent = musica.titulo;
  artistaMusica.textContent = musica.artista;

  // Atualiza a capa da música
  imagemMusica.src = musica.capa;
  imagemMusica.alt = `Capa da música ${musica.titulo}`;

  // Define o arquivo de áudio que será reproduzido
  audio.src = musica.arquivo;

  // Volta a barra de progresso para o início
  progresso.value = 0;

  // Reseta os tempos exibidos
  tempoAtual.textContent = "0:00";
  duracaoMusica.textContent = "0:00";

  // Atualiza as informações exibidas nos controles de mídia
  atualizarMediaSession();

  // Destaca a música selecionada na playlist
  destacarMusica();
}


// Atualiza as informações da música na Media Session API
function atualizarMediaSession() {

  // Verifica se o navegador possui suporte à Media Session API
  if (!("mediaSession" in navigator)) {
    return;
  }

  // Pega os dados da música atual
  const musica = musicas[musicaAtual];

  // Define as informações que serão exibidas
  // nos controles de mídia do sistema
  navigator.mediaSession.metadata = new MediaMetadata({
    title: musica.titulo,
    artist: musica.artista,
    album: "Arthur & Yasmin ❤️",

    // Define as capas que podem ser utilizadas pelo sistema
    artwork: [
      {
        src: musica.capa,
        sizes: "96x96",
        type: "image/jpeg"
      },
      {
        src: musica.capa,
        sizes: "128x128",
        type: "image/jpeg"
      },
      {
        src: musica.capa,
        sizes: "192x192",
        type: "image/jpeg"
      },
      {
        src: musica.capa,
        sizes: "256x256",
        type: "image/jpeg"
      },
      {
        src: musica.capa,
        sizes: "512x512",
        type: "image/jpeg"
      }
    ]
  });
}


// Reproduz a música
async function tocarMusica() {

  try {

    // Tenta iniciar a reprodução
    await audio.play();

    // Marca que uma música está tocando
    tocando = true;

    // Troca o ícone de play para pause
    iconePlay.classList.remove("fa-play");
    iconePlay.classList.add("fa-pause");

    // Atualiza a descrição do botão
    play.setAttribute("aria-label", "Pausar música");

    // Informa à Media Session que a música está tocando
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState = "playing";
    }

  } catch (erro) {

    // Mostra um erro caso o navegador impeça a reprodução
    console.error("Não foi possível reproduzir a música:", erro);

  }
}


// Pausa a música atual
function pausarMusica() {

  // Pausa o áudio
  audio.pause();

  // Atualiza o estado do player
  tocando = false;

  // Troca o ícone de pause para play
  iconePlay.classList.remove("fa-pause");
  iconePlay.classList.add("fa-play");

  // Atualiza a descrição do botão
  play.setAttribute("aria-label", "Reproduzir música");

  // Informa à Media Session que a música está pausada
  if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = "paused";
  }
}


// Alterna entre reproduzir e pausar
function alternarMusica() {

  // Se estiver tocando, pausa
  if (tocando) {
    pausarMusica();

  // Caso contrário, reproduz
  } else {
    tocarMusica();
  }
}


// Vai para a música anterior
function musicaAnterior() {

  // Diminui o índice da música
  musicaAtual--;

  // Se estiver na primeira música,
  // volta para a última da lista
  if (musicaAtual < 0) {
    musicaAtual = musicas.length - 1;
  }

  // Carrega a nova música
  carregarMusica(musicaAtual);

  // Começa a reprodução
  tocarMusica();
}


// Vai para a próxima música
function proximaMusica() {

  // Aumenta o índice da música
  musicaAtual++;

  // Se chegar ao final da lista,
  // volta para a primeira música
  if (musicaAtual >= musicas.length) {
    musicaAtual = 0;
  }

  // Carrega a nova música
  carregarMusica(musicaAtual);

  // Começa a reprodução
  tocarMusica();
}


// Converte segundos para o formato minutos:segundos
function formatarTempo(tempo) {

  // Calcula os minutos
  const minutos = Math.floor(tempo / 60);

  // Calcula os segundos restantes
  const segundos = Math.floor(tempo % 60);

  // Adiciona um zero antes dos segundos
  // quando eles possuem apenas um dígito
  const segundosFormatados =
    segundos < 10 ? `0${segundos}` : segundos;

  // Retorna o tempo formatado
  return `${minutos}:${segundosFormatados}`;
}


// Atualiza a barra de progresso e o tempo atual
function atualizarProgresso() {

  // Verifica se a duração da música está disponível
  if (!audio.duration) {
    return;
  }

  // Calcula a porcentagem da música que já foi reproduzida
  const porcentagem =
    (audio.currentTime / audio.duration) * 100;

  // Atualiza a barra de progresso
  progresso.value = porcentagem;

  // Atualiza o tempo mostrado no player
  tempoAtual.textContent =
    formatarTempo(audio.currentTime);

  // Atualiza a posição informada à Media Session
  atualizarPositionState();
}


// Mostra a duração total da música
function atualizarDuracao() {

  // Verifica se a duração está disponível
  if (!audio.duration) {
    return;
  }

  // Mostra a duração formatada
  duracaoMusica.textContent =
    formatarTempo(audio.duration);

  // Atualiza a posição informada à Media Session
  atualizarPositionState();
}


// Atualiza a posição da música na Media Session API
function atualizarPositionState() {

  // Verifica se a Media Session está disponível
  // e se a duração da música é válida
  if (
    !("mediaSession" in navigator) ||
    !audio.duration ||
    !Number.isFinite(audio.duration)
  ) {
    return;
  }

  try {

    // Envia para o sistema a posição atual da música
    navigator.mediaSession.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate,

      // Garante que a posição não ultrapasse a duração
      position: Math.min(
        audio.currentTime,
        audio.duration
      )
    });

  } catch (erro) {

    // Mostra um aviso caso o navegador não consiga atualizar
    console.warn(
      "Não foi possível atualizar a posição da música:",
      erro
    );

  }
}


// Altera a posição da música usando a barra de progresso
function alterarProgresso() {

  // Verifica se a duração da música está disponível
  if (!audio.duration) {
    return;
  }

  // Converte a porcentagem da barra
  // para segundos da música
  const novoTempo =
    (progresso.value / 100) * audio.duration;

  // Define o novo ponto de reprodução
  audio.currentTime = novoTempo;

  // Atualiza a posição na Media Session
  atualizarPositionState();
}


// Cria visualmente os itens da playlist
function criarPlaylist() {

  // Limpa a playlist antes de criá-la
  listaMusicas.innerHTML = "";

  // Percorre todas as músicas da lista
  musicas.forEach((musica, indice) => {

    // Cria uma nova div para representar a música
    const item = document.createElement("div");

    // Adiciona a classe utilizada pelo CSS
    item.classList.add("musica");

    // Cria o conteúdo visual do item
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

    // Adiciona um evento de clique ao item
    item.addEventListener("click", () => {

      // Define a música clicada como a música atual
      musicaAtual = indice;

      // Carrega a música escolhida
      carregarMusica(musicaAtual);

      // Começa a reprodução
      tocarMusica();

    });

    // Adiciona o item criado à playlist
    listaMusicas.appendChild(item);

  });
}


// Destaca visualmente a música que está tocando
function destacarMusica() {

  // Seleciona todos os itens da playlist
  const itens =
    document.querySelectorAll(".musica");

  // Percorre todos os itens
  itens.forEach((item, indice) => {

    // Verifica se o item corresponde à música atual
    if (indice === musicaAtual) {

      // Adiciona a classe que destaca a música
      item.classList.add("musica-atual");

    } else {

      // Remove o destaque das outras músicas
      item.classList.remove("musica-atual");

    }

  });
}


// Configura os controles da Media Session API
function configurarMediaSession() {

  // Verifica se o navegador possui suporte
  if (!("mediaSession" in navigator)) {
    return;
  }


  // Controle de reprodução
  try {

    navigator.mediaSession.setActionHandler(
      "play",
      () => {
        tocarMusica();
      }
    );

  } catch (erro) {

    console.warn(
      "Ação play não suportada:",
      erro
    );

  }


  // Controle de pausa
  try {

    navigator.mediaSession.setActionHandler(
      "pause",
      () => {
        pausarMusica();
      }
    );

  } catch (erro) {

    console.warn(
      "Ação pause não suportada:",
      erro
    );

  }


  // Música anterior
  try {

    navigator.mediaSession.setActionHandler(
      "previoustrack",
      () => {
        musicaAnterior();
      }
    );

  } catch (erro) {

    console.warn(
      "Ação previoustrack não suportada:",
      erro
    );

  }


  // Próxima música
  try {

    navigator.mediaSession.setActionHandler(
      "nexttrack",
      () => {
        proximaMusica();
      }
    );

  } catch (erro) {

    console.warn(
      "Ação nexttrack não suportada:",
      erro
    );

  }


  // Volta alguns segundos na música
  try {

    navigator.mediaSession.setActionHandler(
      "seekbackward",
      (detalhes) => {

        // Usa o valor enviado pelo sistema.
        // Caso não exista, utiliza 10 segundos
        const segundos =
          detalhes.seekOffset || 10;

        // Volta o áudio sem passar do início
        audio.currentTime =
          Math.max(
            audio.currentTime - segundos,
            0
          );

        // Atualiza a posição
        atualizarPositionState();

      }
    );

  } catch (erro) {

    console.warn(
      "Ação seekbackward não suportada:",
      erro
    );

  }


  // Avança alguns segundos na música
  try {

    navigator.mediaSession.setActionHandler(
      "seekforward",
      (detalhes) => {

        // Usa o valor enviado pelo sistema.
        // Caso não exista, utiliza 10 segundos
        const segundos =
          detalhes.seekOffset || 10;

        // Avança sem ultrapassar o final
        audio.currentTime =
          Math.min(
            audio.currentTime + segundos,
            audio.duration
          );

        // Atualiza a posição
        atualizarPositionState();

      }
    );

  } catch (erro) {

    console.warn(
      "Ação seekforward não suportada:",
      erro
    );

  }


  // Define uma posição específica da música
  try {

    navigator.mediaSession.setActionHandler(
      "seekto",
      (detalhes) => {

        // Verifica se foi informada uma posição válida
        if (
          detalhes.seekTime === undefined ||
          !audio.duration
        ) {
          return;
        }

        // Define a nova posição
        audio.currentTime =
          Math.min(
            detalhes.seekTime,
            audio.duration
          );

        // Usa a busca rápida quando disponível
        if (detalhes.fastSeek && audio.fastSeek) {
          audio.fastSeek(audio.currentTime);
        }

        // Atualiza a posição
        atualizarPositionState();

      }
    );

  } catch (erro) {

    console.warn(
      "Ação seekto não suportada:",
      erro
    );

  }

}


// Clique no botão de play/pause
play.addEventListener(
  "click",
  alternarMusica
);


// Clique no botão de música anterior
anterior.addEventListener(
  "click",
  musicaAnterior
);


// Clique no botão de próxima música
proxima.addEventListener(
  "click",
  proximaMusica
);


// Alteração manual da barra de progresso
progresso.addEventListener(
  "input",
  alterarProgresso
);


// Atualiza o progresso enquanto a música toca
audio.addEventListener(
  "timeupdate",
  atualizarProgresso
);


// Obtém a duração assim que os dados da música são carregados
audio.addEventListener(
  "loadedmetadata",
  atualizarDuracao
);


// Executado quando a música começa a tocar
audio.addEventListener(
  "play",
  () => {

    // Atualiza o estado do player
    tocando = true;

    // Troca o ícone para pause
    iconePlay.classList.remove("fa-play");
    iconePlay.classList.add("fa-pause");

    // Atualiza a descrição do botão
    play.setAttribute(
      "aria-label",
      "Pausar música"
    );

    // Atualiza o estado da Media Session
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState =
        "playing";
    }

  }
);


// Executado quando a música é pausada
audio.addEventListener(
  "pause",
  () => {

    // Atualiza o estado do player
    tocando = false;

    // Troca o ícone para play
    iconePlay.classList.remove("fa-pause");
    iconePlay.classList.add("fa-play");

    // Atualiza a descrição do botão
    play.setAttribute(
      "aria-label",
      "Reproduzir música"
    );

    // Atualiza o estado da Media Session
    if ("mediaSession" in navigator) {
      navigator.mediaSession.playbackState =
        "paused";
    }

  }
);


// Quando uma música termina,
// automaticamente toca a próxima
audio.addEventListener(
  "ended",
  proximaMusica
);


// Configura os controles externos da Media Session
configurarMediaSession();

// Cria a playlist na página
criarPlaylist();

// Carrega a primeira música
// sem iniciar a reprodução automaticamente
carregarMusica(musicaAtual);