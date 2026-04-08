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
/*
const secao = document.querySelector('.painel')
secao.classList.add('.tema-sepia')

secao.addEventListener('mouseover', () => {
    secao.classList.add('.tema-sepia')
})

secao.addEventListener('mouseout', () => {
    secao.classList.remove('.tema-sepia')
})
*/

// Missão 3 - Calculadora de Coleção (Evento)
const campoQtd = document.querySelector('#qtd-livros')
const total = document.querySelector('#total-pagar')

campoQtd.addEventListener('input', () => {
    const valor = Number(campoQtd.value) * 42.00
    total.textContent = `${valor.toFixed(2)}`
})