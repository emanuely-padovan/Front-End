const saudacao =document.querySelector('#boas-vindas')
const hora = new Date().getHours()
if(saudacao) {
    saudacao.textContent = hora < 12 ? "Bom dia! Qual seu pedido?" : "Boo tarde! Confira nosso cardápio."
}

const bt = document.querySelector('#qtd-lasanha')
const inputQtd = document.querySelector('#qtd-lasanha')
const textoPreco = document.querySelector('#preco-lasanha')

if (inputQtd && textoPreco) {
    inputQtd.addEventListener('input', () => {
        const precoUnitario = 45.0
        const total = Number(inputQtd.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)}`

        // Mudança sutil de cor
        textoPreco.style.color = total > 150 ? "#c0392b" : "#e67e22"
    })
}

// Continuação - 18.03.2026

/*
btn.addEventListener('click', function() {
    console.log("O vigia detectou um clique no botão!")
    btn.textContent = "Processando..."
})
*/

const massas = document.querySelector("#secao-massas")
massas.addEventListener('click', (event) => {
    const clicado = event.target 
    if (clicado.classList.contains('btn-pedido')) {
        console.log("Você clicou em um botão de pedido massa...")
    }
})
