export function criarPlaylist(
    musicas,
    aoSelecionarMusica
) {
    const listaMusicas =
        document.getElementById("lista-musicas");

    listaMusicas.innerHTML = "";

    musicas.forEach((musica, indice) => {

        const item = document.createElement("div");

        item.classList.add("musica");

        item.setAttribute("role", "listitem");
        item.setAttribute("tabindex", "0");

        item.setAttribute(
            "aria-label",
            `Reproduzir ${musica.titulo}`
        );

        item.innerHTML = `
            <img
                src="${musica.capa}"
                alt="Capa de ${musica.titulo}"
                width="60"
                height="60"
                loading="lazy"
            >

            <div>
                <strong>${musica.titulo}</strong>
                <span>${musica.artista}</span>
            </div>
        `;

        function selecionarMusica() {
            aoSelecionarMusica(indice);
        }

        item.addEventListener(
            "click",
            selecionarMusica
        );

        item.addEventListener(
            "keydown",
            (evento) => {

                if (
                    evento.key === "Enter" ||
                    evento.key === " "
                ) {
                    evento.preventDefault();
                    selecionarMusica();
                }
            }
        );

        listaMusicas.appendChild(item);
    });
}

export function destacarMusica(indice) {
    const itens =
        document.querySelectorAll(".musica");

    itens.forEach((item, indiceItem) => {
        item.classList.toggle(
            "musica-atual",
            indiceItem === indice
        );
    });
}