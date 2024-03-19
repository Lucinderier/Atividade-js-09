
//   Dica:

//   - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
//     no começo do curso. Se for necessário, reveja partes das aulas anteriores  
//     para relembrar.


/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

// function convertToString (value) => {
//   return String(value)
// }

/*
  02

  - Crie uma função que retorne a quantidade de caracteres que uma string  
    recebida por parâmetro possui.
*/
// function contarCaracteres(str) {
//     return str.length;
// }

// Exemplo de uso:
// let myString = "Olá, amigos do uatsap 😎!";
// let quantidadeDeCaracteres = contarCaracteres(myString);
// console.log("A string possui", quantidadeDeCaracteres, "caracteres.");

/*
  03

  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.

  "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/
// function converterParaMinusculas(str) {
//     return str.toLowerCase();
// }

function converterParaMinusculas(str) {
    return str.toLowerCase();
}
let minhaString = "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO";
let stringMinuscula = converterParaMinusculas(minhaString);
console.log(stringMinuscula);


/*
  04

  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/
function encontrarIndice(caractere, string) {
    return string.indexOf(caractere);
}

// Exemplo de uso:
let myString = "OpenAI é incrível!";
let caractere = "é";
let indice = encontrarIndice(caractere, myString);

if (indice !== -1) {
    console.log(`O caractere "${caractere}" está na posição ${indice} da string.`);
} else {
    console.log(`O caractere "${caractere}" não foi encontrado na string.`);
}

/*
  05

  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/

/*
  06

  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/

/*
  07

  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/

/*
  08

  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/

/*
  09

  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/

/*
  10

  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/

/*
  11

  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
  
  "O Xº item do array [X, X, X] é X."
*/

const numbers = [1, 2, 3]

/*
  12

  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

for (let i = 0; i < letters.length; i++) {
  lettersCopy.push(letters[i])
}