var peso;
var altura ;
var imc ; 
var resultado;  

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('ipeso').value;
    altura = document.getElementById('ialtura').value;
    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){

        resultado.innerHTML = ` Seu resultado foi ${imc.toFixed(2)}<br> cuidado voce esta muito abaixo do peso`
    }else if(imc > 17 && imc <= 18.49){

        resultado.innerHTML = `Seu resultado foi ${imc.toFixed(2)}<br> Voce esta abaixo do peso`
    }else if(imc >= 18.49 && imc < 24.99){

        resultado.innerHTML = ` Seu resultado foi ${imc.toFixed(2)}<br> Voce esta no peso ideal`
    }else if(imc > 25 && imc <= 29.99){

        resultado.innerHTML = ` Seu resultado foi ${imc.toFixed(2)} <br>Voce esta acima do peso`
    }else if(imc >= 30){

        resultado.innerHTML = ` Seu resultado foi ${imc.toFixed(2)}<br> Voce esta com muito sobre-peso, procure um profissional da saude`
    }

    document.getElementById('ipeso').value = '';
    document.getElementById('ialtura').value = '';
    
}