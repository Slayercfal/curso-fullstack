/*
var arena = document.getElementById('area')


function entrar(){
    var nome = prompt('Digite seu nome');
    

    if(nome === "" || nome === null ){
        alert('Prenncha os dados');
    }else{
        arena.innerHTML = `Bem vindo ${nome} ao projeto`;

        let botaosair = document.createElement('button');
        botaosair.innerText = "sair da conta"
        botaosair.onclick = sair;

        arena.appendChild(botaosair);
    }
}

function sair(){
    alert('atem mais..')
    arena.innerHTML = "voce saiu"
}


function calcular(nota1, nota2){
    var media =( nota1 + nota2 ) /2;

    if(media >= 6){
        console.log(`Voce passou com a media ${media}`)
    }else{
        console.log(`Voce reprovou com a media ${media}`)
    }
}


function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

    console.log(mensagem)
}



*/



// FUNÇAO ANONIMA 


/* () => {}


    1- PARENTESES, QUE E POR ONDE A FUNÇAO RECEBE OS ARGUMENTOS(ASSIM COMO AS TRADICIONAIS)
    2- 'SETA' => - RESPONSAVEL PELO NOME 'ARROW'
    3= E AS CHAVES O BLOCO DE CODIGO QUE REPRESENTA O CORPTO DA FUNÇAO
*/ 

/*
function somar(a, b){
    let total = a + b
    console.log(total)
}

somar(10, 30)


let subtrair = (valor1 , valor2) => {
    let total =  valor1 - valor2

    console.log(total);
}

subtrair(40, 20)

let numeros = [1 ,3 ,5 ,10]


numeros.map((item) => {
    console.log(item)
})

*/



//includes, startswith, endswith



/*
let nomes = ['abilio', 'vinicius', 'bruno', 'maria', 'pedro']


//console.log(nomes.includes('abilio'))

if(nomes.includes('maria')){
    console.log('Esta na lista')
}else{
    console.log('Nao esta na lista')
}


*/

let nome = 'abilio'

console.log(nome.endsWith('lio'))
