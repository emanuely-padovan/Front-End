// Slide 3 - Navegação: parentElement
const btnFechar = document.querySelector('.btn-fechar');
const card = btnFechar.demoparentElement;

card.style.display = 'none';

// Slide 4 - Navegação: children e childNodes
const secao = document.querySelector('.lista-noticias')
const filhos = secao.children

console.log(filhos.length)
console.log(filhos[0])

// Slide 5 - Navegação: firstElementChild e lastElementChild
const lista = document.querySelector('.lista-noticias')

const primeiroCard = lista.firstElementChild
primeiroCard.classList.add('noticia-destaque')

const ultimoCard = lista.lastElementChild
ultimoCard.classList.add('noticia-nova')

// Slide 6 - Navegação: nextElementSibling e previousElementSibling
const cardAtivo = document.querySelector('.card-ativo')

const proximo = cardAtivo.nextElementSibling
const anterior = cardAtivo.previousElementSibling

if (proximo) {
  proximo.classList.add('proximo-destaque')
}

// Slide 7 - Criando Elementos: createElement
const novoCard = document.createElement('article')

novoCard.classList.add('card')
novoCard.innerHTML = `<h2>Nova Notícia</h2>
<p>Conteúdo dinâmico gerado pelo JavaScript. </p>
<button class='btn-leitura'> Leia mais </button>`

// Slide 8 - Inserindo Elementos: appendChild e prepend
const lista = document.querySelector('.lista-noticias');
const novoCard = document.createElement('article');

novoCard.classList.add('card');
novoCard.textContent = 'Notícia gerada dinamicamente!';

// appendChild → insere como ÚLTIMO filho
lista.appendChild(novoCard);
// prepend → insere como PRIMEIRO filho
lista.prepend(novoCard);

// Slide 9 - Inserindo Elementos: insertAdjacentHTML
const card = document.querySelector('.card-destaque');

card.insertAdjacentHTML('beforebegin', '<div class="aviso">Em Alta!</div>');
card.insertAdjacentHTML('afterbegin', '<span class="tag">Novo</span>');
card.insertAdjacentHTML('beforeend', '<button>Compartilhar</button>');
card.insertAdjacentHTML('afterend', '<hr class="divisor">');

// Slide 10 - Clonando Elementos: clodeNode
const cardOriginal = document.querySelector('.card:first-child');
const lista = document.querySelector('.lista-noticias');

const copia = cardOriginal.cloneNode(true);
const copiaVazia = cardOriginal.cloneNode(false);
lista.appendChild(copia);

// Slide 11 - Removendo Elementos: remove() e removeChild()
// MODERNO: O elemento se remove sozinho
const cardAntigo = document.querySelector('.card-expirado');

cardAntigo.remove();
// ANTIGO: O pai remove o filho
const lista = document.querySelector('.lista-noticias');
const cardAlvo = document.querySelector('#card-3');
lista.removeChild(cardAlvo);

// Slide 12 - Eventos Avançados: event.preventDefault()
const formulario = document.querySelector('#form-contato');
formulario.addEventListener('submit', (event) => {
// IMPEDE o recarregamento da página
event.preventDefault();
// Agora podemos processar os dados com JS
const nome = document.querySelector('#nome').value;
console.log('Formulário enviado por: ' + nome);
});

// Slide 13 - Bubbling e event.stopPropagation()
const btn = document.querySelector('#btn');
const card = document.querySelector('#card');
btn.addEventListener('click', (event) => {
  console.log('Cliquei no BOTÃO');
// Impede que o evento suba para o card e a seção
event.stopPropagation(); });
card.addEventListener('click', () => {
  console.log('Cliquei no CARD'); // Não será executado
});

// Slide 14 - Delegação de Eventos
const lista = document.querySelector('.lista-noticias');
// UM ouvinte no pai vigia TODOS os filhos
lista.addEventListener('click', (event) => {
const clicado = event.target;

// Verifica se o clique foi num botão de leitura
if (clicado.classList.contains('btn-leitura')) {
  const card = clicado.parentElement;
  card.classList.toggle('card-expandido');
  console.log('Card expandido: ' + card.querySelector('h2').textContent);
  }
});

// Slide 15 - removeEventListener
// A função precisa ter NOME para poder ser removida depois
function aoClicar() {
  console.log('Botão clicado!');
}

const btn = document.querySelector('#btn-enviar');
// Adiciona o ouvinte
btn.addEventListener('click', aoClicar);
// Remove o ouvinte (o botão para de responder)
btn.removeEventListener('click', aoClicar);