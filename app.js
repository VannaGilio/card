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

const cardConteudo = [
    {titulo: 'Rodrigo Garro', imagem: 'garro.jpg', texto: 'Rodrigo Garro é um jogador de Futebol de 27 anos nascido em 1998-01-04, em General Pico, Argentina. Joga como Meia em Corinthians, Brasil.'}
]

function criarCard (cardConteudo){
    const card = document.getElementById('card')
    const novoTitulo = document.createElement('h2')
    const novoParagrafo = document.createElement('p')
    const novoImagem = document.createElement('img')


    card.appendChild(novoTitulo)
}

cardConteudo.forEach(criarCard)