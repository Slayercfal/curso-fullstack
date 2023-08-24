


// MAP = percorer todo um array


/*
let lista =['abilio', 'maria','jose']


lista.map((item, index) =>{
    console.log(`passando ${item}`)
    console.log(index)
} )

*/

// REDUCE = REDUZIR UM ARRAY


/*
let numeros = [5,3,2, 5];


let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total ate o momento`) // ir acumulando
    console.log(`${numero} - valor atual`) // e o valor atual
    //console.log(`${indice} - indice atual`) // posiçao atual
    //console.log(`${original} array original`) // original

    console.log('====================')

    return acumulador += numero;
})

console.log(total)

*/


// FIND = fazer uma busca em uma lista []


/*
let listagem = [5, 3, 'abilio', 2, 'matheus']

let busca = listagem.find((item) =>{

    if(item === 'abilio'){
        return console.log('item encontrado com sucesso')
    }

})

console.log(busca)

*/


// filter = filtrar alguma coisa

let palavras = ['abilio', 'vinicius', 'bruno', 'ana', 'jose' , 'abilio']

let resultado = palavras.filter((item) =>{

    return item === 'abilio';
})

console.log(resultado)