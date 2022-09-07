const productsCart = [
    {
        id: 1,
        name: "Uva crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Cançao",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    },
    
]
const soma = someCart(productsCart)

function someCart(list){
    let somatotal = 0
    for(let i=0; i<list.length; i++){
        somatotal += list[i].price
    }
    return somatotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

/*
<main>
<h2>Virtal Market</h2>
<div class="descrition">
    <p>Item</p>
    <p>Valor</p>
</div>

<ul>
    <li>
        <p>mamao</p>
        <p>19,90</p>
    </li>    
</ul>
<section>
    <div class=" total-compra">
        <p>Valor total</p>
        <p>R$ 200</p>
    </div>

    <button type="submit">Finalizar Compra</button>
</section>

</main>
*/


const body = document.querySelector('body')

const main = document.createElement('main')
main.classList.add('teste')

body.appendChild(main)

const titulo = document.createElement('h2')
titulo.innerText = "Virtual Market";
main.appendChild(titulo)

const divA = document.createElement('div')
divA.classList.add('descrition')

const item = document.createElement('p')
item.innerText = "Item"
divA.appendChild(item)
const preco = document.createElement('p')
preco.innerText = "Valor"
divA.appendChild(preco)

main.appendChild(divA)

const list = document.createElement('ul')
main.appendChild(list)

const section = document.createElement('section')
main.appendChild(section)

const divPreco = document.createElement('div')
const valor = document.createElement('p');
valor.innerText = "Valor total"
divPreco.appendChild(valor)
const somaCarrinho = document.createElement('p')
somaCarrinho.innerText = soma
divPreco.appendChild(somaCarrinho)



divPreco.classList.add('total-compra')
section.appendChild(divPreco)

const button = document.createElement('button')
button.innerText = "Finalizar Compra"
section.appendChild(button)

function listarCart(lista, local){
    for(let i=0; i<lista.length; i++){
        let produto = lista[i]

        let itemAdd = produtoAdd(produto)

        local.appendChild(itemAdd)
    }
}

listarCart(productsCart, list)

function produtoAdd(produto){
    let id   = produto.id;
    let nome = produto.name;
    let preco = produto.price

    let tagLi = document.createElement('li')
    let tagNome = document.createElement('p')
    let tagprice = document.createElement('p')

    tagNome.innerText = nome
    tagprice.innerText = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    tagLi.append(tagNome, tagprice)

    return tagLi
}


console.log(body)

