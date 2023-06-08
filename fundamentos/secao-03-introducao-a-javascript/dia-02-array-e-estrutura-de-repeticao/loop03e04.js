const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaTotal = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaTotal += numbers[index];
}

let jani = somaTotal / numbers.length;

console.log(jani);

if (jani > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}