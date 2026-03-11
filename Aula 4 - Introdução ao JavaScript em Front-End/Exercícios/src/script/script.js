// NOME: Emanuely Macedo Padovan
// DATA: 25/02/2026

// Exercício 1 - Personalizador de Acesso
/*
    const nome = prompt("Digite o seu NOME: ")
    const sobrenome = prompt("Digite o seu SOBRENOME: ")

    let nomeFormatado = nome.concat(`${sobrenome}`).trim()

    alert("Olá, " + nomeFormatado.toUpperCase)
    alert("Caracteres: " + nomeFormatado.length)
*/

// Exercício 2 - Calculadora de Divisão de Conta
/*
    const valor = prompt("Valor total da conta: ")
    const quantidade = prompt("Quantas pessoas foram? ")

    let div = valor/quantidade

    alert("Cada amigo deve pagar R$ " + div.toFixed(2))
*/

// Exercício 3 - Validador de Promoção
/*
const valorCompra = prompt("Quanto foi gasto? ")
const cupomResposta = prompt("Você possui algum tipo de cupom? (Apenas SIM ou NÃO) ").toLowerCase

let cupom = false

if (valorCompra > 150.00 || cupomResposta == "sim") {
    cupom = true
}

if (cupom == true) {
    alert("Frete grátis liberado!")
} else {
    alert("Frete pago!")
}
*/

// Exercício 4 - Sorteador de Brindes
/*
const numero = prompt("Escolha um número de 1 a 10!")
let numeroGerado = Math.floor(Math.random() * 10) + 1

if (numero == numeroGerado) {
    alert("Parabéns, você ganhou um brinde! O número sorteado foi " + numeroGerado)
} else {
    alert("Que pena, o número sorteado foi " + numeroGerado)
}
*/

// Exercício 5 -Gestão de Frota

// class Veiculo {
//     constructor(modelo, marca, ano) {
//         this.modelo = modelo
//         this.marca = marca
//         this.ano = ano
//     }
//     idadeVeiculo() {
//         const idade = anoAtual - this.ano
//         return idade
//     }
// }

// const carro = new Veiculo("Corolla", "Toyota", 2020)
// const anoAtual = new Date().getFullYear()

// alert("Seu " + carro.modelo + " possui " + carro.idadeVeiculo() + "anos.")

// Exercício 5 - Gestão de Frota

    // class Veiculo {
    //     constructor(modelo, marca, ano) {
    //         this.modelo = modelo
    //         this.marca = marca
    //         this.ano = ano
    //     }
    //     idadeVeiculo() {
    //         const idade = anoAtual - this.ano
    //         return idade
    //     }
    // }

    // const carro = new Veiculo("Corolla", "Toyota", 2020)

    // const anoAtual = new Date().getFullYear()

    // alert("Seu " + carro.modelo + " possui " + carro.idadeVeiculo() + "anos.")