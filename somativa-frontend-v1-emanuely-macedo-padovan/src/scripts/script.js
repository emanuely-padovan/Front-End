// Missão 1 - Boas Vindas Literárias (Manipulação)

const horaAgora = new Date().getHours()
const boasvindas = document.querySelector('#saudacao-livraria')

if (horaAgora < 12) {
    boasvindas.textContent = "Boa leitura matinal!"
} else if (horaAgora >= 12 && horaAgora <= 18) {
    boasvindas.textContent = "Aproveite a tarde para ler!"
} else if (horaAgora > 18) {
    boasvindas.textContent = "Uma boa história antes de dormir?"
} else {
    boasvindas.textContent = "Seu computador apresenta algum erro..."
}

// Missão 2 - Tema de Leitura (Eventos)

const tema = document.querySelector('#banner-cultura')

tema.addEventListener('mouseover', () => {
    tema.classList.add('tema-sepia')
})

tema.addEventListener('mouseout', () => {
    tema.classList.remove('tema-sepia')
})

// Missão 3 - Calculadora de Coleção (Evento)

const campoQtd = document.querySelector('#qtd-livros')
const total = document.querySelector('#total-pagar')

campoQtd.addEventListener('input', () => {
    const valor = Number(campoQtd.value) * 42.00
    total.textContent = `${valor.toFixed(2)}`
    // Outra opção:
    // total.textContent = Number(campoQtd.value) * 42
})

// Missão 4 - Lista de Desejos (Click, InnerHTML e Warn)

const botaoLista = document.querySelector('#btn-lista')
const campoText = document.querySelector('#nome-livro')
const lista = document.querySelector('#lista-leitura')

// botaoLista.addEventListener('click', () {
botaoLista.addEventListener('click', function() {
    // if (campoTexto.value === "") {
    if (campoText.value == "") {
        console.warn("Digite um título válido!")
    } else {
        lista.innerHTML += `<article class="card-leitura"><h3>📖 Título: ${campoText.value} </h3></article>`
    }
})

// Missão 5 - Arquivar Lista

const botaoLimpar = document.querySelector('#btn-limpar')

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        lista.innerHTML = ''
        // alert("Sua lista foi arquivada com sucesso!")
        window.alert("Sua lista foi arquivada com sucesso!")
        campoText.focus()
    })
}