let produtos = ['vodka', 'limão', 'gelo'];
let lista = document.querySelector('#lista');


for(let r = 0; r < produtos.length; r++){
    lista.innerHTML += `<li class="list-group-item"> ${produtos[r]} </li>`

}

function adicionarProduto(){
produtos.push(produto.value);
lista.innerHTML += `<li class="list-group-item"> ${produto.value} </li>`

produto.value="";

}else{
alert('digite um produto')

}

function acharBotao() {
    if(event.key === "Enter" && produtos.value != "")
    {
        adicionarProduto();
    }
} else{
    alert("digite um produto");
}