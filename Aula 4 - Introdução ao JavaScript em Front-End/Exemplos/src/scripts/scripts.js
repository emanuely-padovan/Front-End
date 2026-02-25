
// const tempoAgora = new Date()
// const hora = tempoAgora.getHours()
// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

// console.log('Hoje é dia: ' + dataFormatada)
// console.log('Horário: ' + horaFormatada)
// console.log('Só a hora: ' + hora)

// if (hora > 12 && hora < 18) {
//     alert ("Boa tarde!")
// } else if (hora >= 18){
//     alert ("Boa noite!")
// } else {
//     alert ("Bom dia!")
// }

// // DIA: 25/02/2026 - TECHFOOD

// class Prato {
//     constructor(nome, preço){
//         this.nome = nome
//         this.preço = preço
//     }
//     exibirMoeda(resultado) {
//         if(resultado) {
//             return "R$" 
//         } else {
//             return "R$"
//         }
//     }
// }

// const lasanha = new Prato('Lasanha Bolonhesa', 45.00)
// let qtd = prompt("Simulação: Quantas unidades de " + lasanha.nome + "você deseja?")

// let total = lasanha.preço * qtd
// alert ("Resumo da simulação: \n Prato: " + lasanha.nome + "\n Total: " + lasanha.exibirMoeda())




alert("Bem vindo!")

const nome = prompt("Para um atendimento mais personaizado. Digite seu nome: ")
let nomeFormatado = nome.trim().toUpperCase()

alert("Bem vindo "  + nomeFormatado + " ao restaurante Sabor & Saber")