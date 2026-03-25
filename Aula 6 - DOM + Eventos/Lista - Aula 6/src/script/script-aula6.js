// NOME: EMANUELY MACEDO PADOVAN
// DATA: 18.03.2026

// Exercício 1 - Interação

const qtd = document.querySelector('#btn-curtir')
const totalTxt = document.querySelector('#contador')

if (qtd && totalTxt) {
    let contador = 0

    qtd.addEventListener('click', function() {
        contador++
        totalTxt.textContent = `${contador}`
    })
}

// Exercício 2 - Monitoramento

const texto = document.querySelector('#campo-texto')
const preview = document.querySelector('#preview-texto')

texto.addEventListener('input', () => {
    preview.textContent = `Digitando: ${texto.value}`
})

// Exercício 3 - Sensores

const cor = document.querySelector('#caixa-cor')

cor.addEventListener('mouseover', () => {
    cor.style.background = 'rgb(0, 255, 21)'
})

cor.addEventListener('mouseout', () => {
    cor.style.background = ''
})

// Exercício 4 - Desafio Extra

const reset = document.querySelector('#btn-reset')

if (reset) {
    reset.addEventListener('click', () => {
        texto.value = ''
        preview.textContent = ''

        contador = 0
        totalTxt.textContent = '0'
    })
}