
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

// Multiplos de 2 até 20.

function multiply(){
    let numbersMultiply = [];
    for(let i = 0; i <= 20; i ++){
        if(i % 2 === 0){
            numbersMultiply.push(i);
        }
    }
    return numbersMultiply
}

console.log(multiply())

////////////////////////////////////////////////////////////////




function numbersOrdem(...ordemArr){
    let numerosOrdenados = [];
    for (let i = 1; i < ordemArr.length; i ++) {
        for (let j = 0; j < i; j ++) {
            if (ordemArr[i] < ordemArr[j]) {
                let position = ordemArr[i];
                ordemArr[i] = ordemArr[j];
                ordemArr[j] = position;
                numerosOrdenados.push(ordemArr[position])
            }
        }
      }
      return numerosOrdenados;

}
  console.log(numbersOrdem(5, 9, 3, 19, 70, 8, 100, 2, 35, 27))