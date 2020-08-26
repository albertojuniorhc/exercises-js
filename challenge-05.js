/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const myArray = ['alberto', 37, true, { key1: 'valor1', key2: 'valor2' }, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

// console.log(
//     myFunction(myArray)[1]
// );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myNewFunction(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const myArray2 = ['Nath', 31, false, { key1: 'valor10', key2: 'valor20' }, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

// for (let i = 0; i < myArray2.length; i++) {
//     console.log(
//         myNewFunction(myArray2, i)
//     )
// }

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {

    const allBooks = {
        'Livro 01': {
            quantidadePaginas: 100,
            autor: 'Alberto',
            editora: 'Tag Livros'
        },
        'Livro 02': {
            quantidadePaginas: 200,
            autor: 'Nath',
            editora: 'Lag Livros'
        },
        'Livro 03': {
            quantidadePaginas: 300,
            autor: 'Eu',
            editora: 'Meg Livros'
        }
    }

    return bookName === undefined ? allBooks : allBooks[bookName]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

// console.log(
//     book()
// );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
let bookName = 'Livro 02'
console.log(
    'o Livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!'
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
    'o Autor do livro ' + bookName + ' é ' + book(bookName).autor + '!'
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
    'A editora do livro ' + bookName + ' é ' + book(bookName).editora + '!'
);