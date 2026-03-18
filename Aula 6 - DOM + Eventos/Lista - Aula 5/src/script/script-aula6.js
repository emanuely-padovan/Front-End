// NOME: EMANUELY MACEDO PADOVAN
// DATA: 18.03.2026

// Exercício 1 - Identidade

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