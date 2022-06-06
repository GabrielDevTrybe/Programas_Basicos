
//Programa para mostrar o maior ou menos numero.(Function)

function maiorNum (...numArr){
    return Math.max(...numArr);
    

}
console.log(maiorNum(5, 9, 3, 19, 70, 8, 100, 2, 35, 27,101))

////////////////////////////////////////////////////////////


//Programa para mostrar maior ou menos numero sem (Function)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(Math.max(...numbers))

////////////////////////////////////////////////////////////


//Programa para somar os numeros de um array.(Function)
function somandoTudo(...sumArr){
    let soma = 0;
    for(let i = 0; i < sumArr.length; i++){
        soma += sumArr[i];
    }
    return soma

}
console.log(somandoTudo(5, 9, 3, 19, 70, 8, 100, 2, 35, 27))

/////////////////////////////////////////////////////////////

//Somando todos os numeros sem (Function)
let somando = 0;
let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numeros.length; i++){
    somando += numeros[i]
}
console.log(somando)

/////////////////////////////////////////////////////////////