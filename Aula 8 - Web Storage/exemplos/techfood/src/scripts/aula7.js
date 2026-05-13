function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
  const secaoResumo = document.querySelector("#secao-resumo");
  const listaResumo = document.querySelector("#lista-resumo");

  if (!secaoResumo || !listaResumo) return;

  // Exibe a seção que estava oculta (display:none no CSS)
  secaoResumo.style.display = "block";

  // Passo 1: cria o <li>
  const itemLi = document.createElement("li");
  itemLi.classList.add("item-resumo");

  // Passo 2: cria o <span> com o texto
  const textoSpan = document.createElement("span");
  textoSpan.textContent = qtd + "x " + nome + " — " + preco;

  // Passo 3: cria o botão ✕
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕";
  btnRemover.classList.add("btn-remover");

  btnRemover.addEventListener("click", () => {
    itemLi.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");
    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  // Passo 4: monta a estrutura e insere na página
  itemLi.appendChild(textoSpan);
  itemLi.appendChild(btnRemover);
  listaResumo.appendChild(itemLi);
}

const btnLimpar = document.querySelector("#btn-limpar");
if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo");
    const secaoResumo = document.querySelector("#secao-resumo");

    // Remove todos os badges dos cards
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove());

    // Remove filhos da lista um a um com firstElementChild
    while (listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove();
    }

    secaoResumo.style.display = "none";
  });
}
