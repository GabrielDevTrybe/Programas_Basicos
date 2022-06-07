
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





  ///////////////////////////////////////////////////////////


  //Template string.

//   const nome = "Gabriel";
//   const idade = 26;
//   const cidade = "Campinas";

//   const newTemp = `Meu nome é ${nome}, tenho ${idade} anos e moro na cidade de ${cidade}`

//   console.log(newTemp)



//   function numerosAteDez(){
//       let numbersAte = [];
//       for(let i = 1; i <= 10; i++){
//           numbersAte.push(i);
//       }
//       return numbersAte
//   }

//   console.log(`Numeros crescentes de 1 até 10 são: ${numerosAteDez()}`)



function listaFrutas(...arrFrutas){
    let soma = 0;
    for(let i = 0; i < arrFrutas.length; i++){
        soma += arrFrutas[i]
    }
    if(soma > 15){
        return soma
        
    }else{
        return " valor menor que 16"
    }
    
}

console.log(listaFrutas(5,5,10,20))

////////////////////////////////////////


// metodo para inverter uma palavra em string

let word = 'Gabriel Coelho';
let inversao = word.split("").reverse().join("");
console.log(inversao)

/////////////////////////////////////////////////

let array = ['java', 'javascript', 'python', 'html', 'css'];
for(let i = 0; i < array.length; i++){
    
}
