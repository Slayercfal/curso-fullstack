

// desconstruindo OBJETO


let pessoa = {

    nome: 'abilio',
    sobrenome:'vinicius',
    idade:'19',
    emprego:'Programador',
};

//console.log(pessoa.nome);
//console.log(pessoa.emprego);

//const {nome:nomePessoa, emprego, idade , sobrenome} = pessoa;

//console.log(nomePessoa)
//console.log(emprego)
//console.log(idade)
//console.log(sobrenome)


//DESCONSTRUIR UM ARRAY!!!!

let nome = ['abilio', 'vinicius' , 'bruno'];

//let {0:abilio , 1:vinicius} = nome;
//console.log(abilio)
//console.log(vinicius)

let [primeironome, segundonome] = nome;

console.log(primeironome)
console.log(segundonome)