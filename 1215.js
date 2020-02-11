/**
 * Andy de apenas 8 anos tem um sonho - ele deseja criar o seu próprio dicionário. 
 * Isto não é uma tarefa fácil para ele, pois conhece poucas palavras. 
 * Bem, ao invés de pensar nas palavras que sabe, ele teve uma idéia brilhante. 
 * A partir do seu livro de histórias favorito, ele vai criar um dicionário com todas
 * as palavras distintas que existem nele. Ordenando estas palavras em ordem alfabética,
 * o trabalho estará feito. É claro, isso é uma tarefa que toma um certo tempo e portanto,
 * a ajuda de um programador de computador como você é muito bemvinda.

 * Você foi convidado a escrever um programa que liste todas as
 * diferentes palavras que existem em um texto. Neste caso, uma palavra
 * é definida como uma sequência de letras, maiúsculas ou minúsculas.
 * Palavras com apenas uma letra também deverão ser consideradas. Portanto,
 * seu programa deverá ser "CaSe InSeNsItIvE". Por exemplo, palavras como
 * "Apple", "apple" ou "APPLE" deverão ser consideradas como a mesma palavra.
 */

var input = require('fs').readFileSync('./dev/stdin/1215.txt', 'utf8');
var lines = input.split('\n');

var texto = [];
var palavras = [];
var er = /[^a-z]/gi;

while (lines.length > 0 && lines.length <= 10000) {
    /**
     * Faz a leitura das linhas do arquivo. Enquanto
     * houver linhas ele continua lendo. Limitando a
     * 10000 linhas, como pedido no problema.
     */
    texto.push(lines.shift());
}

/**
 * Recebe o texto e substitui os caracteres especiais por ',',
 * e converte todos as letras para minúsculo.
 * em segudida insere as palavras, separando-as pelo ','.
 */
palavras.push((String(texto).toLowerCase()).replace(er, ',').split(','));

/**
 * Faz o filtro selecionando apenas palavras diferetes.
 */
let palavraDiferentes = palavras[0].filter((este, i) => palavras[0].indexOf(este) === i);

// Ordena por ordem alfabética.
palavraDiferentes = (palavraDiferentes.sort());

// Imprime substituindo as vírgulas ',' por uma quebra de linha '\n'.
console.log(palavraDiferentes.toString().replace(/,/g, '\n'));