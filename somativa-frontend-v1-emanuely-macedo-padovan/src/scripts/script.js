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

