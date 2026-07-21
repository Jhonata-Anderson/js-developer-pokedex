# Pokédex

Este projeto é uma Pokédex simples desenvolvida em HTML, CSS e JavaScript, com consumo da Poke API. A aplicação permite visualizar uma lista de pokémon, carregar mais itens e abrir um modal com detalhes de cada personagem.

O projeto foi criado como parte de um curso da DIO, com foco em desenvolvimento front-end, manipulação do DOM e integração com APIs.

## 📌 Objetivo

Construir uma interface interativa de uma Pokédex que:
- exiba uma lista inicial de pokémon;
- carregue mais pokémon ao clicar em "Load More";
- mostre detalhes de um pokémon em um modal;
- aplique estilos visuais e animações básicas.

## ✨ Funcionalidades

- Listagem de pokémon em cards;
- Busca de dados na Poke API;
- Modal com informações detalhadas;
- Exibição de tipos, altura, peso e status base;
- Estilização responsiva;
- Animações simples na interface.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Poke API

## 📁 Estrutura do projeto

```text
pokedex/
│
├── index.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── pokedex.css
│   │   └── modal.css
│   └── js/
│       ├── main.js
│       ├── modal.js
│       ├── poke-api.js
│       └── pokemon_model.js
```

## ▶️ Como executar

Você pode rodar o projeto de duas formas:

### 1. Abrindo diretamente no navegador
- basta abrir o arquivo `index.html` no navegador.

### 2. Usando um servidor local (recomendado)
- abra a pasta do projeto no VS Code;
- instale a extensão Live Server;
- clique com o botão direito em `index.html` e escolha "Open with Live Server".

Também é possível usar o Python para servir os arquivos localmente:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## 🧩 Como usar

1. Abra a aplicação no navegador.
2. Veja a lista inicial de pokémon.
3. Clique em "Load More" para carregar mais cards.
4. Clique em qualquer pokémon para abrir o modal com detalhes.
5. Feche o modal clicando no botão de fechar ou fora da área do card.

## 🧠 Observações técnicas

- A aplicação consome dados da API pública da Poke API.
- Os cards e o modal recebem informações dinamicamente via JavaScript.
- O projeto foi desenvolvido com foco em aprendizado de manipulação de DOM e consumo de API.

## 🤝 Créditos

- Poke API: https://pokeapi.co/
- DIO: por proporcionar o treinamento e o projeto.

## 📝 Licença

Este projeto é apenas para fins educacionais.
