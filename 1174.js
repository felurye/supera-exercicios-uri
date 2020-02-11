/**
 * Faça um programa que leia um vetor A[100]. No final, 
 * mostre todas as posições do vetor que armazenam um valor
 * menor ou igual a 10 e o valor armazenado em cada uma das posições.
 */

var input = require('fs').readFileSync('./dev/stdin/1174.txt', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < 100; i++) {
    /**
     * Faz a leitura das linhas do arquivo. Como exigido pelo problema,
     * deve ser feito a leitura de 100 linhas, a cada interação do 'for'
     * o programa lê uma linha do arquivo.
     */
    let n = Number(lines.shift());

    /**
     * O 'if' faz a verificação se o número lido é
     * menor ou igual a 10, caso seja, imprime o valor
     * com seu index.
     */
    if (n <= 10) {
        console.log('A[' + i + '] = ' + n.toFixed(1));
    }
}