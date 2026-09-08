# ❤️ Arthur & Yasmin — Nosso Player

> Um pequeno projeto feito para celebrar dois meses de uma história que começou com um simples "olá".

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge\&logo=fontawesome\&logoColor=white)](https://fontawesome.com/)

---

## 💌 Sobre o projeto

**Nosso Player** é um site desenvolvido como uma surpresa para celebrar dois meses de relacionamento.

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
* ♿ Recursos de acessibilidade nos controles
* 🎛️ Integração com a Media Session API
* 🔒 Verificação de suporte do navegador para recursos da Media Session API
* ⏪ Controle de avanço e retrocesso através dos controles de mídia compatíveis
* ⌨️ Seleção de músicas através do teclado

---

## 🎛️ Media Session API

Uma das partes técnicas mais interessantes do projeto é a utilização da **Media Session API**.

Ela permite que o navegador comunique informações da música para os controles de mídia do sistema operacional e dispositivos compatíveis.

O projeto utiliza a API para:

* Exibir o título da música
* Exibir o artista
* Exibir o álbum
* Exibir a capa da música
* Controlar reprodução e pausa
* Avançar para a próxima música
* Voltar para a música anterior
* Avançar alguns segundos
* Retroceder alguns segundos
* Alterar a posição da reprodução
* Atualizar o estado atual da reprodução

Isso permite que o player interaja com recursos externos ao próprio site, como controles de mídia do sistema, teclados, fones de ouvido e dispositivos compatíveis.

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

Também são utilizados recursos de acessibilidade, como `aria-label`, `aria-hidden`, `role` e elementos semânticos.

### CSS3

Responsável pelo visual e pela responsividade.

O projeto utiliza:

* Flexbox
* Media Queries
* Transições
* Box Shadows
* Border Radius
* Variáveis CSS
* Cores personalizadas
* Estados de foco
* Layout responsivo

A interface foi projetada para funcionar em computadores, tablets e dispositivos móveis.

### JavaScript

Responsável pela lógica da aplicação.

O JavaScript controla:

* Reprodução dos arquivos de áudio
* Playlist
* Música atual
* Navegação entre músicas
* Barra de progresso
* Formatação de tempo
* Atualização das informações da interface
* Eventos do player
* Seleção de músicas
* Media Session API

O código foi dividido em módulos para facilitar a organização e manutenção do projeto.

### Font Awesome

Utilizado para os ícones dos controles do player, como:

* Play
* Pause
* Música anterior
* Próxima música

---

## 🧩 Organização do JavaScript

O JavaScript foi dividido em diferentes módulos, cada um responsável por uma parte específica da aplicação.

### `musicas.js`

Responsável exclusivamente pelos dados da playlist.

Cada música possui informações como:

```javascript
{
    titulo: "Nome da música",
    artista: "Nome do artista",
    arquivo: "musicas/musica.mp3",
    capa: "capas_musicas/capa.jpg"
}
```

### `player.js`

Responsável pelo funcionamento do player.

Controla:

* Reprodução
* Pausa
* Música anterior
* Próxima música
* Seleção de uma música específica
* Barra de progresso
* Tempo atual
* Duração
* Eventos do elemento de áudio
* Tratamento de erros

### `playlist.js`

Responsável pela criação e interação com a playlist.

Controla:

* Criação dos elementos da playlist
* Clique nas músicas
* Seleção através do teclado
* Destaque da música atual

### `mediaSession.js`

Responsável exclusivamente pela integração com a **Media Session API**.

Controla:

* Metadados da música
* Capa exibida nos controles de mídia
* Play
* Pause
* Música anterior
* Próxima música
* Avanço
* Retrocesso
* Alteração da posição da música

### `app.js`

Responsável pela integração dos módulos.

Ele conecta:

```text
musicas.js
     ↓
player.js
     ↓
playlist.js
     ↓
mediaSession.js
```

Dessa forma, cada arquivo possui uma responsabilidade específica, deixando o código mais organizado e fácil de modificar.

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

A playlist é armazenada como uma lista de objetos JavaScript.

Cada objeto representa uma música:

```javascript
{
    titulo: "Doçura",
    artista: "Marina Sena & Çantamarta",
    arquivo: "musicas/docura.mp3",
    capa: "capas_musicas/coisas_naturais.png"
}
```

A partir desses dados, o JavaScript cria automaticamente os elementos da playlist.

Isso permite adicionar ou remover músicas alterando apenas os dados em `musicas.js`, sem precisar modificar manualmente o HTML.

---

## 📁 Estrutura do projeto

```text
2-meses/
│
├── index.html
├── style.css
│
├── js/
│   ├── app.js
│   ├── player.js
│   ├── playlist.js
│   ├── musicas.js
│   └── mediaSession.js
│
├── img/
│   ├── coracao.png
│   └── default-cover.png
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
│   ├── bring_me_back_to_life.mp3
│   ├── do_you_want_to_know_a_secret.mp3
│   ├── i_want_to_hold_your_hand.mp3
│   ├── golden_slumbers_carry_that_weight_the_end.mp3
│   ├── i_want_you.mp3
│   ├── touch_me.mp3
│   ├── light_my_fire.mp3
│   └── bound.mp3
│
└── capas_musicas/
    ├── coisas_naturais.png
    ├── Carta.jpg
    ├── Memorias.jpg
    ├── Hes_my.jpg
    ├── Cant_help.jpg
    ├── Bring_me.jpg
    ├── Plese_Please_Me.jpg
    ├── Abbey_Road.jpg
    ├── the_soft_parade.jpg
    ├── the_doors.jpg
    └── ponderosa.jpg
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

## ♿ Acessibilidade

O projeto também possui algumas práticas de acessibilidade.

Entre elas:

* `aria-label` nos controles
* `aria-hidden` nos ícones decorativos
* Navegação da playlist pelo teclado
* Suporte às teclas `Enter` e `Espaço`
* Estados de foco visíveis
* Elementos semânticos em HTML
* Mensagens de erro utilizando `role="alert"`
* Texto alternativo nas imagens
* Uso de `prefers-reduced-motion` para reduzir animações quando solicitado pelo sistema

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
git clone https://github.com/mynjko2008/2-meses.git
```

### 2. Entre na pasta

```bash
cd 2-meses
```

### 3. Execute o projeto

O projeto utiliza **JavaScript Modules**, através de:

```html
<script type="module" src="js/app.js"></script>
```

Por isso, para executar localmente, é recomendado utilizar um servidor local.

Uma opção simples é utilizar o **Live Server** no Visual Studio Code.

Outra alternativa é utilizar o servidor HTTP do Python:

```bash
python -m http.server
```

Depois, acesse no navegador:

```text
http://localhost:8000
```

Não existem dependências externas de Node.js ou pacotes que precisem ser instalados para executar o projeto.

---

## 🌐 Publicação

O projeto está preparado para ser publicado utilizando o **GitHub Pages**.

A versão publicada pode ser acessada em:

```text
https://mynjko2008.github.io/2-meses/
```

O GitHub Pages permite que o projeto seja disponibilizado diretamente como uma aplicação web estática.

---

## 📚 Objetivos de aprendizado

Apesar de possuir uma finalidade pessoal, o desenvolvimento do projeto também serviu como oportunidade para praticar conceitos importantes de desenvolvimento web.

Entre eles:

* Manipulação do DOM
* Eventos em JavaScript
* Objetos e arrays
* Funções
* Módulos JavaScript
* `import` e `export`
* Manipulação de elementos HTML
* Reprodução de áudio com JavaScript
* APIs nativas do navegador
* Media Session API
* Design responsivo
* Organização de arquivos
* Acessibilidade
* Estruturação de interfaces web
* Separação de responsabilidades

A divisão do JavaScript em módulos também serviu para aplicar conceitos de organização e arquitetura de código em um projeto real.

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