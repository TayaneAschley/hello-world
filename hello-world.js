// calculadora imc
// var peso = 57;
// var altura = 1.7;
// var IMC = peso / altura ** 2;

// console.log(`Seu IMC é ${IMC}`);

//  Mudando fahrenheit para celsius
// ## formula c = (f-72) / 1,8 ##
// var C = 55;
// var F = 73;
// var resultado = (F - 32) / 1.8;

// console.log(`73 fahrenheit para celsius é ${resultado.toFixed()}`);

// var valorDoTenis = 12999;
// var meuDinheiro = 8000;
// var desconto = valorDoTenis - meuDinheiro;
// var cupom = (100 * desconto) / valorDoTenis;

// console.log(
//   `o juros que sera aplicado para obter o desconto necessario e comprar o tenis é de ${cupom.toFixed()}%`
// );

/* juros composto */
var capitalInicial = 1000;
var tempo = 5;
var taxa = 12.5 / 100;
var Montante = capitalInicial * (1 + taxa) ** tempo;

console.log(`O valor do juros é: ${Montante.toFixed()}`);
