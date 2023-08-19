
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