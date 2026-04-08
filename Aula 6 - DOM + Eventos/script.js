// Estudo - Introdução ao JavaScript, DOM e Eventos

// 1. Introdução ao JavaScript

// Função de Data e Hora
const tempoAgora = new Date();

const hora = tempoAgora.getHours();

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR');
const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR');

console.log("Pedido realizado em: " + dataFormatada);
console.log("Horário: " + horaFormatada);

if (hora >= 18 && hora <= 23) {
    alert("Estamos abertos! Boa janta.");
}

// Função Matemática
let precoQuebrado = 45.89;
console.log(Math.round(precoQuebrado)); // 46 (Arredonda para o mais próximo)
console.log(Math.floor(precoQuebrado)); // 45 (Arredonda para baixo)
console.log(Math.random()); // Gera número entre 0 e 1

// Função de Texto
let nome = "TechFood";
console.log(nome.trim()); // Remove espaços vazios nas pontas
console.log(nome.toUpperCase()); // TECHFOOD
console.log(nome.length); // Conta os caracteres

// Alerta:
alert("Seja bem-vindo ao TechFood! Aproveite nossos cupons de hoje.");

// Alerta "Formatado":
const cliente = prompt("Para um atendimento personalizado, digite seu nome:");

let nomeFormatado = cliente.trim().toUpperCase();

alert("BEM-VINDO, " + nomeFormatado); // Saída: "BEM-VINDO, ..."

// Mensagem:
const deletar = confirm("Tem certeza que deseja excluir este item?");

if (deletar) {
    alert("Item excluído com sucesso!");
} else {
    alert("Ação cancelada.");
}

// Mensagem ao Usuário:
const tempo = new Date();
const hora2 = tempo.getHours();

if (hora2 < 12) {
    alert("Bom dia! O TechFood já está aceitando pedidos.");
} else {
    alert("Olá! Confira nosso cardápio de almoço e jantar.");
}

// Personalização:
const lasanha = new Prato("Lasanha Bolonhesa", 45.00);

let qtd = prompt("Simulação: Quantas unidades de " + lasanha.nome + " você deseja?");
let total = lasanha.preco * qtd;
// Exibindo o cálculo final
alert("Resumo da Simulação:\nPrato: " + lasanha.nome + "\nTotal: " +
lasanha.exibirComMoeda());

// Lista 1 - Aula 4

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
/*
    class Veiculo {
        constructor(modelo, marca, ano) {
            this.modelo = modelo
            this.marca = marca
            this.ano = ano
        }
        idadeVeiculo() {
            const idade = anoAtual - this.ano
            return idade
        }
    }


    const carro = new Veiculo("Corolla", "Toyota", 2020)
    const anoAtual = new Date().getFullYear()

    alert("Seu " + carro.modelo + " possui " + carro.idadeVeiculo() + "anos.")
*/

// Exercício 5 - Gestão de Frota
/*
    class Veiculo {
        constructor(modelo, marca, ano) {
            this.modelo = modelo
            this.marca = marca
            this.ano = ano
        }
        idadeVeiculo() {
            const idade = anoAtual - this.ano
            return idade
        }
    }

    const carro = new Veiculo("Corolla", "Toyota", 2020)

    const anoAtual = new Date().getFullYear()

    alert("Seu " + carro.modelo + " possui " + carro.idadeVeiculo() + "anos.")
*/





// DOM - Busca - Aula 5
// Antigo:
const topo = document.getElementById('topo-loja');
const listaCards = document.getElementsByClassName('card');
const links = document.getElementsByTagName('a');

console.log("1. O elemento topo:", topo);
console.log("2. O primeiro card da lista:", listaCards[0]);
console.log("3. A lista completa de links:", links);
console.log("4. O endereço (URL) do primeiro link:", links[0].href);

// MODERNO: 
const header = document.querySelector('#topo');
const btn = document.querySelector('.btn-enviar');
const tituloPrato = document.querySelector('#card-nhoque h3');
const todosCards = document.querySelectorAll('.card');

console.log(todosCards.length);

// Manipulação de Texte
const aviso = document.querySelector('#mensagem');
aviso.textContent = "Olá, bem-vindo!";
aviso.innerHTML = "Status: <strong>Confirmado</strong>";

// Manipulação de Imagens (Antigoo)
const foto = document.querySelector('#foto-prato');
const caminhoAtual = foto.getAttribute('src');
foto.setAttribute('src', 'img/esgotado.png');
foto.setAttribute('alt', 'Prato não disponível');


// MODERNO:
const foto1 = document.querySelector('#foto-prato');
const caminhoAtual1 = foto1.src;

foto1.src = 'img/esgotado.png';
foto1.alt = 'Prato não disponível';


// Manipulação:
const campoNome = document.querySelector('#nome');
const campoPreco = document.querySelector('#preco');

function processar() {
    const nome = campoNome.value; // Captura o texto (ex: "Pizza")
    const preco = Number(campoPreco.value); // CONVERSÃO: Texto para Número

    console.log(`Produto: ${nome} | Preço: ${preco}`);
}

// Manipulação de Estilos
const displayPreco = document.querySelector('.preco-total');

displayPreco.style.color = "red";
displayPreco.style.fontSize = "2rem";
displayPreco.style.fontWeight = "bold";

// Mudança - Chamdando o CSS
const box = document.querySelector('.mensagem');

box.classList.add('erro-ativo');
document.body.classList.toggle('dark-mode');
box.style.marginTop = "20px";


// Lista 2 - Aula 5 - DOM

// Exercício 1 - Identidade
/*
const nomeCompleto = document.querySelector('#nome-usuario')
nomeCompleto.textContent = "Emanuely Macedo Padovan"

// Exercício 2 - Imagem de Perfil do Usuário

const fotoPerfil = document.querySelector('#foto-perfil')
fotoPerfil.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/17795/17795980.png')

// Exercício 3 - Personalização

const container = document.querySelector('#container-perfil')
container.style.background = 'rgba(220, 78, 220, 0.36)'

// Exercício 4 - Status Real

const classBadge = document.querySelector('#badge-status')
const statusPerfil = document.querySelector('#badge-status')

classBadge.classList.add('online')
statusPerfil.textContent = "Status: Ativo"

// Exercício 5 - Auditoria

const skills = document.querySelectorAll('.skill')
console.log("Quantidade de skills: ", skills.length)
*/



// Aula 6 - DOM + Eventos

// Detectação de Clique
const btn = document.querySelector('#btn-pedido');

btn.addEventListener('click', function() {
    console.log("O vigia detectou um clique no botão!");
    btn.textContent = "Processando...";
});

// Mouse passar em cima...
const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
    card.style.backgroundColor = "#fdf2e9";
});

// Mouse sair...
card.addEventListener('mouseout', () => {
// Voltando ao normal ao sair com o mouse
card.style.backgroundColor = "white";
});


// Mostrar o que está sendo digitado...
const inputNome = document.querySelector('#campo-nome');
inputNome.addEventListener('keyup', () => {
    let texto = inputNome.value;
    console.log("O usuário está digitando: " + texto);
});

// Manipulação?
const qtd = document.querySelector('#qtd-item');
const totalTxt = document.querySelector('#total');

qtd.addEventListener('input', () => {
    const valor = Number(qtd.value) * 45.00;
    totalTxt.textContent = `Total: R$ ${valor.toFixed(2)}`;
});

// Eventos:
document.addEventListener('click', (event) => {
    const elementoClicado = event.target;

    if (elementoClicado.classList.contains('btn-pedido')) {
        console.log("Você clicou em um botão de pedido!");
    }
});

window.addEventListener('load', () => {
    console.log("Portal TechFood totalmente carregado!");
});

window.addEventListener('scroll', () => {
    console.log("Usuário está rolando a página...");
});


// Lista 3 - Aula 6 - Dom + Eventos
/*
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
*/