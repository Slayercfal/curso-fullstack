
// while = enquanto


/*
var x = 0

function clicar(){
    while(x < 10){
    document.write(`<br> o valor do ${x}`);

    x++;
    }
}
*/

// for = para

/*
function clicar(){
    var valor = 30;

    for(a = 0; a <= valor ; a++){
        document.write(`<br>O valor de a e ${a}`)

    }
}
*/

// switch


function clicar(){
    var valor = prompt('Digite um valor de 1 a 4')


    switch(Number(valor)){

        case 1:
            chamr()
            break
        case 2: 
            alert('Voce escolheu 2 = agua')
            break
        case 3:
            alert('voce escolheu 3 = sorvete')
            break
        case 4:
            alert('Voce escolheu 4 = chamar o garçom')
            break
        default:
            alert('escolha uma opçao entre 1 a 4')
            break
    }
}

function chamr(){
    alert('Funçao chamada')

    document.body.style.background = 'blue'
}

// condicionais


var numero = 10

numero === 30 ? console.log('numero e igual a 10') : console.log('numero nao tem o valor 10')