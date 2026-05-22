const BASE_URL = "http://localhost:3000"

// 1. Buscar pelos produtos...
async function buscarProdutos() {
    const response = await fetch(`${BASE_URL}/produtos`)
    const dados = await response.json()
    // Tratamento de Erros
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados.dados
}

// 2. Criação dos pedidos...
async function criarPedido(cliente, itens) {
    const response = await fetch(`${BASE_URL}/pedidos`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({cliente, itens}),
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}

// 3. Buscar os pedidos que foram inseridos no Banco de Dados
async function buscarPedidos() {
    const response = await fetch(`${BASE_URL}/pedidos`)
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}

// 4. Deletar pedido do Banco de Dados
async function deletarPedido(id) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
        method: "DELETE",
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}

// 5. Atualizar o status do peido para a cozinha
async function atualizarStatusPedido(id, novoStatus) {
    const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
        // Apagar apenas o STATUS indicado acima
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({status: novoStatus}),
    })
    const dados = await response.json()
    if (!response.ok) throw new Error(dados.erro || `Erro ${response.status}`)
    return dados
}