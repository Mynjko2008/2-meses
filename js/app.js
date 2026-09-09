import { musicas } from "./musicas.js";

import { iniciarPlayer } from "./player.js";

import {
    criarPlaylist,
    destacarMusica
} from "./playlist.js";

import {
    configurarMediaSession
} from "./mediaSession.js";

const player = iniciarPlayer(
    musicas,
    (indice) => {
        destacarMusica(indice);
    }
);

criarPlaylist(
    musicas,
    (indice) => {
        player.selecionarMusica(indice);
    }
);

configurarMediaSession({
    tocar: player.tocarMusica,
    pausar: player.pausarMusica,
    anterior: player.musicaAnterior,
    proxima: player.proximaMusica,
    getAudio: player.getAudio
});

destacarMusica(
    player.getMusicaAtual()
);