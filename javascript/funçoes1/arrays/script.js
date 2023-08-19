const nota1 = document.getElementById('num1');
const nota2 = document.getElementById('num2');
const area = document.getElementById('area');

function calcular(){

    const numero1 = Number(nota1.value)
    const numero2 = Number(nota2.value)

    const resul = (numero1 + numero2)/2;

    if(nota1.value === '' || nota2.value === ''){
        alert('Preencha os dados abaixo');
        
    }else if(resul >= 6){
        area.innerHTML = `<h2>Voce passou com a media ${resul}</h2>`

    }else{
        area.innerHTML = `<h2>Voce reprovou com a media ${resul}</h2>`

    }
}