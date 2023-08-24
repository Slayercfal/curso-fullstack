

//REST OPERATOR  

//Ao utilizar o operador REST na passagem de parâmetros de funções, ele permite capturar argumentos extras que não foram explicitamente definidos como parâmetros formais na função. Isso é útil quando você não sabe quantos argumentos serão passados à função


/*
function convidados(...nomes){
    console.log('seja bem-vindo')
    console.log(nomes)

}


convidados('abilio', 'vinicius', 'bruno', 'maria')
*/

function Gerador(...numeros){
    console.log(numeros)

    const numeroGerado = Math.floor(Math.random() * numeros.length);

    console.log('Numero gerado foi ' + numeros[numeroGerado]);
}

Gerador(1, 5, 7, 8, 12, 4, 23, 65, 32, 125,)