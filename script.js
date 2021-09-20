const produtoInput = document.querySelector('#produto');
const valorInput = document.querySelector('#valor');
const quantidadeInput = document.querySelector('#quanditade');
const btn = document.querySelector('#adicionarProduto');
const btnSoma = document.querySelector('#somarProdutos');
const btnRemover = document.querySelector('#removerItens');

const localValorTotal = document.querySelector('#valorFinal');
const localProdutos = document.querySelector('#local-produtos');
const localValor = document.querySelector('#local-valor');
const localQuantidade = document.querySelector('#local-quantidade');

let produtos = [];

function criarTabela(produtoX, valorX, quantidadeX) {
  const createElementP = document.createElement('p');
  createElementP.innerText = produtoX;
  localProdutos.appendChild(createElementP);

  const createElementV = document.createElement('p');
  createElementV.innerText = 'R$' + valorX + ',00';
  localValor.appendChild(createElementV);

  const createElementQ = document.createElement('p');
  createElementQ.innerText = quantidadeX + ' no carrinho';
  localQuantidade.appendChild(createElementQ);
}

function criarProdutos(produtoX, valorX, quantidadeX) {
  if (valorInput.value.length >= 8 || quantidadeInput.value.length >= 5) {
    alert('Valor muito grande ou quantidade muito grande.');
    return;
  }

  if (valorInput.value === '' || produtoInput.value === '' || quantidadeInput.value === '') {
    alert('Verifique oque você quer adicionar');
    return;
  }
  valorInput.value = '';
  produtoInput.value = '';
  quantidadeInput.value = '';
  const objetoxD = { produto: produtoX, valor: valorX, quantidade: quantidadeX };
  produtos.push(objetoxD);
  criarTabela(produtoX, valorX, quantidadeX);
}

btn.addEventListener('click', () => {
  criarProdutos(produtoInput.value, valorInput.value, quantidadeInput.value);
});

btnSoma.addEventListener('click', () => {
  let arrayLenght = 0
  let soma = 0;

  while (arrayLenght < produtos.length) {
    const element = produtos[arrayLenght]
    const valor = element['valor'];
    const quantidade = element['quantidade'];
    soma += parseInt(valor, 10) * parseInt(quantidade, 10);
    arrayLenght += 1;
  }
  localValorTotal.innerHTML = 'R$' + soma + ',00';
});

btnRemover.addEventListener('click', () => {
  localProdutos.innerHTML = '';
  localValor.innerHTML = '';
  localQuantidade.innerHTML = '';
  localValorTotal.innerHTML = '';
  produtos = [];
});