

// spread operator

//permite espalhar os elementos de uma estrutura de dados (como um array ou objeto) em outro lugar


/*
let primeiros = [1, 2, 3];

let numeros = [...primeiros , 4, 5, 10]

console.log(numeros)

*/

/*
let pessoa = {
    nome:'abilio',
    idade: '19',
    cargo: 'programador'
}

let novaPessoa = {
    ...pessoa,
    status:'ativo',
    cidade: 'petrolina'
}

console.log(novaPessoa)

*/

function novoUsuario(info){
    let dados = {
        ...info,
        status:'ativo',
        inicio:'20/06/2023',
        codigo:'123123'
    }
    console.log(dados)
}

novoUsuario({
    nome: 'abilio',
    sobrenome:'vinicius',
    idade: 19,
    cargo: 'programador'
})
