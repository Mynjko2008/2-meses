# ❤️ Arthur & Yasmin — Nosso Player

> Um pequeno projeto feito para celebrar dois meses de uma história que começou com um simples "olá".

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge\&logo=fontawesome\&logoColor=white)](https://fontawesome.com/)

---

## 💌 Sobre o projeto

**Nosso Player** é um site desenvolvido como uma surpresa de aniversário de dois meses de relacionamento.

A ideia surgiu a partir de algo simples: transformar músicas que fazem parte da nossa história em uma experiência interativa.

Em vez de criar apenas uma página comemorativa, o projeto foi desenvolvido como um **player de música funcional**, com playlist dinâmica, controles de reprodução, barra de progresso e integração com os controles de mídia do dispositivo.

O resultado é uma combinação entre **desenvolvimento web e memória afetiva**.

> Cada música representa um pouco de nós.
> Estilos diferentes, histórias diferentes, mas a mesma playlist. ❤️

---

## 🎧 Funcionalidades

O projeto conta com:

* ▶️ Reprodução e pausa de músicas
* ⏮️ Navegação para a música anterior
* ⏭️ Navegação para a próxima música
* 🎵 Playlist gerada dinamicamente com JavaScript
* 🖼️ Exibição da capa da música atual
* ⏱️ Barra de progresso interativa
* 🕐 Exibição do tempo atual e duração da música
* 🔄 Reprodução automática da próxima música
* 🎨 Destaque visual da música atualmente selecionada
* 📱 Layout responsivo para diferentes tamanhos de tela
* ♿ Atributos de acessibilidade nos controles
* 🎛️ Integração com a **Media Session API**
* 🔒 Detecção de suporte do navegador para recursos da Media Session API
* ⏪ Controle de avanço e retrocesso através dos controles de mídia compatíveis

---

## 🎛️ Media Session API

Uma das partes técnicas mais interessantes do projeto é a utilização da **Media Session API**.

Ela permite que o navegador comunique informações da música para os controles de mídia do sistema operacional e dispositivos compatíveis.

O projeto utiliza a API para:

* Exibir título da música
* Exibir artista
* Exibir o álbum
* Exibir a capa da música
* Controlar reprodução e pausa
* Avançar para a próxima música
* Voltar para a música anterior
* Avançar alguns segundos
* Retroceder alguns segundos
* Alterar a posição da reprodução
* Atualizar o estado atual da reprodução

Isso faz com que o player vá além de simplesmente reproduzir um arquivo `.mp3` dentro da página.

---

## 🛠️ Tecnologias utilizadas

### HTML5

Responsável pela estrutura da aplicação.

O HTML organiza:

* Player
* Informações da música
* Controles
* Playlist
* Mensagem comemorativa
* Rodapé

Também são utilizados recursos de acessibilidade, como `aria-label` e `aria-hidden`.

### CSS3

Responsável pelo visual e pela responsividade.

O projeto utiliza:

* Flexbox
* Media Queries
* Transições
* Box Shadows
* Border Radius
* Cores personalizadas
* Layout responsivo

A interface foi projetada para funcionar tanto em computadores quanto em dispositivos móveis.

### JavaScript

Responsável pela lógica do player.

O JavaScript controla:

* Reprodução dos arquivos de áudio
* Playlist
* Música atual
* Navegação entre músicas
* Barra de progresso
* Formatação de tempo
* Atualização das informações da interface
* Eventos do player
* Media Session API

### Font Awesome

Utilizado para os ícones dos controles do player, como:

* Play
* Pause
* Música anterior
* Próxima música

---

## 🎨 Identidade visual

A interface foi construída utilizando uma paleta escolhida para representar a proposta romântica do projeto.

| Cor                | Hexadecimal | Utilização                   |
| ------------------ | ----------- | ---------------------------- |
| 🔴 Vermelho        | `#A83232`   | Destaques e ações principais |
| 🟥 Vermelho escuro | `#7F2424`   | Estados secundários          |
| 🤎 Marrom          | `#4A2C24`   | Elementos estruturais        |
| 🟤 Marrom escuro   | `#2B1A16`   | Fundo e rodapé               |
| 🟨 Creme           | `#F5E6D0`   | Fundo principal              |
| 🤍 Creme claro     | `#FFF8EF`   | Cards e áreas de conteúdo    |
| ⚪ Branco           | `#FFFFFF`   | Textos e contraste           |

A escolha das cores busca equilibrar uma aparência romântica com uma interface simples e confortável de utilizar.

---

## 🎵 Playlist

A playlist foi construída diretamente no JavaScript através de uma lista de objetos.

Cada música possui informações como:

```javascript
{
    titulo: "Nome da música",
    artista: "Nome do artista",
    arquivo: "musicas/musica.mp3",
    capa: "capas_musicas/capa.jpg"
}
```

Isso permite adicionar novas músicas sem precisar criar manualmente cada elemento da playlist no HTML.

O JavaScript utiliza esses dados para gerar os elementos visualmente na página.

---

## 📁 Estrutura do projeto

```text
nosso-player/
│
├── index.html
├── style.css
├── script.js
│
├── img/
│   └── coracao.png
│
├── musicas/
│   ├── docura.mp3
│   ├── coisas_naturais.mp3
│   ├── magico.mp3
│   ├── desmetificar.mp3
│   ├── carta_de_maria.mp3
│   ├── aurora.mp3
│   ├── he_s_my_man.mp3
│   ├── can_t_help_falling_in_love.mp3
│   └── bring_me_back_to_life.mp3
│
└── capas_musicas/
    ├── coisas_naturais.png
    ├── Carta.jpg
    ├── Memorias.jpg
    ├── hes_my.jpg
    ├── cant_help.jpg
    └── bring_me.jpg
```

---

## 📱 Responsividade

O site possui adaptações para diferentes tamanhos de tela.

Foram definidos breakpoints para:

* 💻 Desktop
* 📱 Tablets
* 📱 Celulares
* 📱 Dispositivos com telas muito pequenas

Elementos como a capa da música, controles, textos, espaçamentos e cards são redimensionados conforme o tamanho disponível.

---

## 💭 A mensagem

Além do player, o site possui uma seção especial dedicada à Yasmin.

Nela está uma adaptação musical criada especialmente para representar a nossa história e a ideia central do projeto:

**duas pessoas que, de alguma forma, estavam destinadas a se encontrar e se apaixonar.**

A seção funciona como a parte mais pessoal da aplicação, enquanto o player representa a parte técnica do projeto.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://mynjko2008.github.io/2-meses/.git
```

### 2. Entre na pasta

```bash
cd nosso-player
```

### 3. Execute o projeto

Como o projeto é desenvolvido utilizando HTML, CSS e JavaScript puro, não é necessário instalar dependências ou utilizar um servidor para executá-lo localmente.

Basta abrir:

```text
index.html
```

em um navegador compatível.

---

## 🌐 Publicação

O projeto pode ser publicado gratuitamente utilizando o **GitHub Pages**.

Após configurar o GitHub Pages, o site pode ser acessado através de uma URL no formato:

```text
https://mynjko2008.github.io/2-meses/
```

---

## 📚 Objetivos de aprendizado

Apesar de possuir uma finalidade pessoal, o desenvolvimento do projeto também serviu como oportunidade para praticar conceitos importantes de desenvolvimento web.

Entre eles:

* Manipulação do DOM
* Eventos em JavaScript
* Objetos e arrays
* Funções
* Manipulação de elementos HTML
* Reprodução de áudio com JavaScript
* APIs nativas do navegador
* Media Session API
* Design responsivo
* Organização de arquivos
* Acessibilidade
* Estruturação de interfaces web

---

## ❤️ Por trás do código

Este projeto nasceu de uma situação bastante simples:

**eu queria dar um presente que tivesse algo meu.**

Em vez de comprar alguma coisa pronta, decidi transformar programação em parte do presente.

Cada música foi escolhida por representar algum aspecto da nossa relação, enquanto o código foi escrito para transformar essas músicas em uma experiência que pudesse ser acessada pelo navegador.

No final, o projeto acabou sendo duas coisas ao mesmo tempo:

**um presente para a pessoa que eu amo e um projeto para o desenvolvedor que estou me tornando.**

---

## 👨‍💻 Autor

**Arthur Mynjko Lara Bento**

Estudante de Técnico em Desenvolvimento de Sistemas.

Projeto desenvolvido como uma experiência pessoal e também como forma de aplicar conhecimentos de desenvolvimento web.

---

## ❤️ Feito para nós dois

> "Destinados a se apaixonar."

**Arthur & Yasmin — 2 meses.**

Feito com código, música e muito amor. ❤️