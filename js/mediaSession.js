export function atualizarMediaSession(musica) {
    if (
        !("mediaSession" in navigator) ||
        typeof MediaMetadata === "undefined"
    ) {
        return;
    }

    navigator.mediaSession.metadata =
        new MediaMetadata({
            title: musica.titulo,
            artist: musica.artista,
            album: "Arthur & Yasmin ❤️",

            artwork: [
                {
                    src: musica.capa,
                    sizes: "96x96",
                    type: obterTipoImagem(musica.capa)
                },
                {
                    src: musica.capa,
                    sizes: "128x128",
                    type: obterTipoImagem(musica.capa)
                },
                {
                    src: musica.capa,
                    sizes: "192x192",
                    type: obterTipoImagem(musica.capa)
                },
                {
                    src: musica.capa,
                    sizes: "256x256",
                    type: obterTipoImagem(musica.capa)
                },
                {
                    src: musica.capa,
                    sizes: "512x512",
                    type: obterTipoImagem(musica.capa)
                }
            ]
        });
}

function obterTipoImagem(caminho) {
    const extensao =
        caminho.split(".").pop().toLowerCase();

    if (extensao === "png") {
        return "image/png";
    }

    if (extensao === "webp") {
        return "image/webp";
    }

    return "image/jpeg";
}

export function configurarMediaSession({
    tocar,
    pausar,
    anterior,
    proxima,
    getAudio
}) {
    if (!("mediaSession" in navigator)) {
        return;
    }

    const audio = getAudio();

    configurarAcao(
        "play",
        tocar
    );

    configurarAcao(
        "pause",
        pausar
    );

    configurarAcao(
        "previoustrack",
        anterior
    );

    configurarAcao(
        "nexttrack",
        proxima
    );

    configurarAcao(
        "seekbackward",
        () => {
            if (!Number.isFinite(audio.duration)) {
                return;
            }

            audio.currentTime =
                Math.max(
                    audio.currentTime - 10,
                    0
                );
        }
    );

    configurarAcao(
        "seekforward",
        () => {
            if (!Number.isFinite(audio.duration)) {
                return;
            }

            audio.currentTime =
                Math.min(
                    audio.currentTime + 10,
                    audio.duration
                );
        }
    );

    configurarAcao(
        "seekto",
        (detalhes) => {
            if (
                detalhes.seekTime === undefined ||
                !Number.isFinite(audio.duration)
            ) {
                return;
            }

            const novaPosicao =
                Math.min(
                    Math.max(detalhes.seekTime, 0),
                    audio.duration
                );

            if (
                detalhes.fastSeek &&
                typeof audio.fastSeek === "function"
            ) {
                audio.fastSeek(novaPosicao);
            } else {
                audio.currentTime = novaPosicao;
            }
        }
    );
}

function configurarAcao(
    acao,
    callback
) {
    try {
        navigator.mediaSession.setActionHandler(
            acao,
            callback
        );
    } catch (erro) {
        console.warn(
            `Ação ${acao} não suportada:`,
            erro
        );
    }
}