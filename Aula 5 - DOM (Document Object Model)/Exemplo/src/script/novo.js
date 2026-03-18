// New School:

const tituloNhoque = document.querySelector('#card-nhoque h3');
const botoesCompra = document.querySelectorAll('.btn-pedido');
const checkMenu = document.querySelector('#bt_menu');

const quartoCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o Título NHOQUE (pelo ID): ", tituloNhoque)
console.log("2. Quantidade de botões de pedido: ", botoesCompra.length)
console.log(quartoCard)


const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

if (tituloNhoque) {
    console.log("Título capturado:", tituloNhoque.innerText);
}

if (botoesCompra.length > 0) {
    botoesCompra[0].textContent = "Comprar Agora!";
    console.log("Texto do primeiro botão alterado com sucesso.");
}

const precoLasanha = document.querySelector('.card .preco');
console.log("Preço da Lasanha:", precoLasanha.innerText);

const elementoInexistente = document.querySelector('.classe-que-nao-existe');
console.log("Resultado de seletor inexistente:", elementoInexistente);


// Boas-Vindas!
const saudacao = document.querySelector('#boas-vindas')
const horaAgora = new Date()
const hora = horaAgora.getHours()

saudacao.textContent = hora < 16 ? "Bom almoço!🥗" : "Boa janta!🍕"

nomeCompleto.innerHTML = "<strong>Emanuely Macedo Padovan</strong>"

const foto = document.querySelector('#foto-destaque')
const caminhoAtual = foto.getAttribute('src')

// foto.setAttribute('src', 'src/images/esgotado.jpg')
// foto.setAttribute('alt', 'Prato esgotado!')

imagem_card_um.src = 'esgotado.jpg'