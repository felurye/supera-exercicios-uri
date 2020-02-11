/**
 * Faça um programa que leia um vetor X[10]. Substitua a seguir, 
 * todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.
 */

var input = require('fs').readFileSync('./dev/stdin/1172.txt', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < 10; i++) {
    /**
     * Faz a leitura das linhas do arquivo. Como exigido pelo problema,
     * deve ser feito a leitura de 10 linhas, a cada interação do for
     * o programa lê uma linha do arquivo.
     */
    let n = Number(lines.shift());

    /**
     * O arquivo lido contém os números: 0 -5 63 0 1 4 3 5 -8 4.
     * O operador ternário faz a verificação se o número lido é
     * maior ou igual a 0, caso seja, imprime o valor, senão o substitui
     * por 1.
     */
    console.log(n > 0 ? `X[${i}] = ${n}` : `X[${i}] = 1`);
}