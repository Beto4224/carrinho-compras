let totalCarrinho = 0;
limpar();
function adicionar (){
    //recuperar os valores nome do produto, quantidade e preço
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - R$')[0];
    let valorProduto = produto.split(' - R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    //zerar campo quantidade
    document.getElementById('quantidade').value = '';

    //calcular o preço
    let totalProduto = quantidade*valorProduto;
    totalCarrinho = totalCarrinho + totalProduto;

    //adionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`;

    //atualizar o valor total
    let textoTotalCarrinho = document.getElementById('valor-total');
    textoTotalCarrinho.innerText = `R$${totalCarrinho}`;
}

function limpar () {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerText = `R$${totalCarrinho}`;
}
