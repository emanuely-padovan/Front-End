// NOME: EMANUELY MACEDO PADOVAN
// DATA: 18.03.2026

// Exercício 1 - Interação

const contCurtidas = document.querySelector('#contador')
const textoCurtidas = document.querySelector('#contador')

if (contCurtidas && textoCurtidas) {
    contCurtidas.addEventListener('input', () => {
        const curtidas =+ 1
        const total = Number(contCurtidas.value) + curtidas
        textoCurtidas.textContent = `${total}`
    })
}

// Exercício 2 - Monitoramento



// Exercício 3 - Sensores



// Exercício 4 - Desafio

