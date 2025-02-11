'use strict'

// const botaoTeste = document.getElementById('teste')

// function criarElementos(){
//     const body = document.querySelector('body')
//     const novoBotao = document.createElement('button')
//     novoBotao.textContent = 'Botão criado pelo JS'

//     body.appendChild(novoBotao)
// }

// botaoTeste.addEventListener('click', criarElementos) -> botão que cria outro botão

//botaoTeste.addEventListener('click', () => console.log('oi')) -> função anonima

const disciplinas = [
    {nome: 'PWBE', cor: '#ce6db1', icon: 'pwbe.png'},
    {nome: 'PWFE', cor: '#8f44a7;', icon: 'pwfe.png'},
    {nome: 'PPDM', cor: '#9c5899', icon: 'ppdm.png'},
    {nome: 'PRO', cor: '#5c3985', icon: 'pro.png'}
]

function criarItemMenu (disciplina){
    const listaMenu = document.getElementById('menu')
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novoImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    //document.documentElement.style.setProperty('--cor-hover', disciplina.cor)
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novoImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novoImg)
    novoItem.appendChild(novoLink)

    listaMenu.appendChild(novoItem)
}

disciplinas.forEach(criarItemMenu)

// const cardConteudo = [
//     {titulo: 'Rodrigo Garro', imagem: 'garro.jpg', texto: 'Rodrigo Garro é um jogador de Futebol de 27 anos nascido em 1998-01-04, em General Pico, Argentina. Joga como Meia em Corinthians, Brasil.'}
// ]

// function criarCard (cards){
//     cards.forEach (cardConteudo => {
//         const container = document.getElementById('container')
//         const novoCard=document.createElement('div')
//         novocard.classList.add('card')

//         const novoTitulo = document.createElement('h2')
//         novoTitulo.textContent = cardConteudo.titulo

//         const novoParagrafo = document.createElement('p')
//         novoParagrafo.textContent = cardConteudo.texto

//         const novoImagem = document.createElement('img')
//         novoImagem.src = `./img/${cardConteudo.imagem}`

//         novoCard.appendChild(novoTitulo)
//         novoCard.appendChild(novoParagrafo)
//         novoCard.appendChild(novoImagem)
//         container.appendChild(novoCard)

//     })
// }
// criarCard(cardConteudo)
    
const cardConteudo = [
    {titulo: 'Rodrigo Garro', imagem: 'garro.jpg', texto: 'Rodrigo Garro é um jogador de Futebol de 27 anos nascido em 1998-01-04, em General Pico, Argentina. Joga como Meia em Corinthians, Brasil.'},
    {titulo: 'Memphis Depay', imagem: 'depay.jpeg', texto: 'Memphis Depay é centroavante do Corinthians. Nascido em 13 de fevereiro de 1994 em Moordrecht, na Holanda (Países Baixos), o jogador assinou com o Timão em setembro de 2024.'},
    {titulo: 'Yuri Alberto', imagem: 'yuri.avif', texto: 'Yuri Alberto Monteiro da Silva é um jogador de futebol brasileiro que atua como atacante do Corinthians. Ele nasceu em 18 de março de 2001, em São José dos Campos.'},
    {titulo: 'Hugo Souza', imagem: 'hugo.webp', texto: 'Hugo de Souza Nogueira é um goleiro brasileiro que joga no Corinthians. Ele nasceu em 31 de janeiro de 1999, em Duque de Caxias, no Rio de Janeiro. '},
    {titulo: 'Ángel Romero', imagem: 'romero.jpg', texto: 'Ángel Rodrigo Romero Villamayor (Fernando de la Mora, 4 de julho de 1992) é um futebolista paraguaio que atua como atacante. Atualmente joga pelo Corinthians.'}
];

function criarCard(cards) { // Renomeado para 'cards' para evitar confusão
    cards.forEach(card => { // Renomeado para 'card'
        const container = document.getElementById('container'); // Melhor usar 'container' para clareza
        const novocard = document.createElement('div');
        novocard.classList.add('card');

        const novoTitulo = document.createElement('h2');
        novoTitulo.textContent = card.titulo;

        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = card.texto;

        const novoImagem = document.createElement('img');
        novoImagem.src = `./img/${card.imagem}`;
        novoImagem.classList.add('img'); // Adiciona a classe 'img'

        // Adiciona os elementos *dentro* do novocard
        novocard.appendChild(novoImagem);
        novocard.appendChild(novoTitulo);
        novocard.appendChild(novoParagrafo);

        container.appendChild(novocard); // Adiciona o card completo ao container
    });
}

criarCard(cardConteudo); // Passa o array cardConteudo como argumento

