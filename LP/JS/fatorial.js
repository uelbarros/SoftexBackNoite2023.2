function fatorial(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        console.log("Número inválido!");
        return undefined;
    }

}

var num = parseInt(prompt("Informe um número inteiro positivo: "));

console.log(`${num}! = ${fatorial(num)}`);
