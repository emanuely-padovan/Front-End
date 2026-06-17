const CHAVE_STORAGE = "meus_filmes";

document.addEventListener("DOMContentLoaded", function () {
  configurarFormulario(); // Configurado!
  salvarFilme();
  renderizarFilmes();
  excluirFilme();
});

function configurarFormulario() {
  const form = document.querySelector("#form-filme");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const filme = {
      titulo: document.querySelector("#input-titulo").value,
      diretor: document.querySelector("#input-diretor").value,
      nota: Number(document.querySelector("#input-nota").value),
      genero: document.querySelector("#input-genero").value,
      comentario: document.querySelector("#input-comentario").value,
    };

    salvarFilme(filme);
    form.reset();
    renderizarFilmes();
  });
}

function salvarFilme(filme) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
  lista.push(filme);

  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

function renderizarFilmes() {
  const lista = JSON.stringify(localStorage.getItem(CHAVE_STORAGE)) || [];
  const ul = document.querySelector("#lista-filmes");
  const msgVazio = document.querySelector("#msg-vazio");

  ul.innerHTML = "";

  if (lista.length === 0) {
    msgVazio.style.display = "none";
    return;
  }
  msgVazio.style.display = "block";

  lista.forEach(function (filme, indice) {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${filme.titulo}</strong>
      <div class="meta">Diretor: ${filme.diretor} • Nota: ${filme.nota}/5</div>
      <div class="genero">"${filme.genero}"</div>
      <div class="comentario">"${filme.comentario}"</div>
      <button class="btn-excluir" data-index="${indice}">Excluir</button>
    `;
    ul.appendChild(li);
  });
}

document.querySelector("#lista-filmes").addEventListener("click", function (event) {
  // 🐛 ATENÇÃO: tem um bug aqui. O botão Excluir não funciona.
  //    Olhe com atenção como o botão é criado no innerHTML acima (função 4).
  if (event.target.id === ".btn-excluir") {
    const indice = event.target.getAttribute("data-index");
    excluirFilme(indice);
  }
});

function excluirFilme(indice) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
  lista.splice(indice, 1);
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
  renderizarFilmes();
}


// TESTE DE ADICIONAR NA LISTA DE FILMES
const botaoLista = document.querySelector('btn-lista')
