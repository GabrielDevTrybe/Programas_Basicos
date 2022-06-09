// let euMesmo = {
//     nome: "Gabriel",
//     segundoNome: "Coelho",
//     apelido: "Cansado",
//     idade: 26,
//     hobbies:["jogar video game", "assistir series", "musculação"]
// }
// console.log(`Ola me chamo ${euMesmo.nome} ${euMesmo.segundoNome}, tenho ${euMesmo.idade} de idade. Atualmente meu principal hobbie é ${euMesmo.hobbies[0]}`)


//Funçaõ pra verificar se é palindromo

function seraQueE(str){
let palindromo = str.toString();
    if(palindromo === palindromo.split("").reverse().join("")){
     return true
    }else{
     return false
    }
}
console.log(seraQueE("ana"))


//Segundo jeito de fazer a mesma coisa que o de cima

function isPalindrome(line) {
    let palindromo = ("" + line);
    if(palindromo === ("" + line).split("").reverse().join("")){
      return true
    }else{
      return false
    }
  }
  console.log(isPalindrome("anaa"))
  /////////////////////////////////////////

  //Retornar indice de maior valor.

  function maiorIndice(...arrIndice){
    for(let i = 0; i < arrIndice.length; i++){
      
    }
    return Math.max(...arrIndice)
  }
  console.log(maiorIndice(2, 3, 6, 7, 10, 1))
/////////////////////////////////////////////////


/**
 Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

 */

function maiorNomes(...arrNames){
  let contador = 0;
  let nomes = [];
  for(let i = 0; i < arrNames.length; i++){
    if(arrNames[i] > 0){
      
    }
  }
  return contador
}

console.log(maiorNomes('José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'))



/////////////////////////////////////////////

//Funçao que retorna medias.

function mediaAlunos(...media){
  let somaMedia = 0;
  for(let i = 0; i < media.length; i++){
     somaMedia += media[i]
     
  }
  return somaMedia/media.length

}

console.log(mediaAlunos(5,6.5,7,7.5))



