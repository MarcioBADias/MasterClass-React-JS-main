import sun from "./calculator.js"; // importação default

import { multiply } from "./calculator.js"; // importação nomeada

import { subtract as menos } from "./calculator.js"; //importação nomeada mudando o nome

import * as calculator from "./calculator.js"; //importação de tudo dentro do módulo criando um novo objeto

console.log('sun', sun(1,2)) // importação default
console.log('multiply', multiply(1,2)) //importação nomeada
console.log('menos', menos(1,2)) //importação nomeada mudando nome
console.log('calculator.divide', calculator.divide(1,2)) //importação de tudo dentro do módulo criando um novo objeto
console.log('calculator.multiply', calculator.multiply(1,2)) //importação de tudo dentro do módulo criando um novo objeto
console.log('calculator.default', calculator.default(1,2)) //importação de tudo dentro do módulo criando um novo objeto quando há uma exportação default
