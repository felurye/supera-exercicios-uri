/**
 * Paulinho tem em suas mãos um novo problema. Agora a sua professora
 * lhe pediu que construísse um programa para verificar, à partir de
 * dois valores muito grandes A e B, se B corresponde aos últimos dígitos de A.
 */


var input = require('fs').readFileSync('./dev/stdin/1241.txt', 'utf8');
var lines = input.split('\n');

// Faz a leitura do número de casos testes que rodará
let n = Number(lines.shift());
let valores = [];

for (let i = 0; i < n; i++) {
    /**
     * Faz a leitura das linhas do arquivo. Como exigido pelo problema,
     * deve ser feito a quantidade de leituras com base no primeiro valor
     * lido, a cada interação do 'for' o programa lê uma linha do arquivo.
     */
    valores.push((String(lines.shift())).split(' '));

    /**
     *  Atribui as variáveis o valor de cada indice do
     * array, de modo a deixar o código mais legível.
     * Também recebe o tamanho de cada string, para
     * reazilar os cálculos necessários. O replace
     * serve para remover um caracter de escape que 
     * o JavaScript atribui ao final de cada linha lida.
     */
    A = valores[i][0];
    B = valores[i][1].replace('\r', '');
    tamanhoA = A.length;
    tamanhoB = B.length;

    /* IF para verificar se o valor recebido é maior que 0 e se
    * o tamanho da string é menor ou igual a 1000, como exigido
    * no exercício. 
   */
 
    if (Number(A) > 0 && Number(B) > 0 && tamanhoB <= 1000 && tamanhoA <= 1000) {

        /* A função substring é responsável por pegar exatamente a
         * quantidade de caracteres do final da string de A equivalente
         * ao tamanho de B, logo após faz a comparação dos valores, em
         * casos positivos imprime 'encaixa', senão, 'nao encaixa'.
        */
       console.log(Number(A.substring(A.length, A.length - B.length)) === Number(B) ? "encaixa" : "nao encaixa");
    }
}