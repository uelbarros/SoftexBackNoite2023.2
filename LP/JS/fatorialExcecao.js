function fatorial(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        // Lançar um erro
        throw new Error(`${num} é inválido para o cálculo do fatorial`)
    }
}

do {
    var op;
    try {
        var num = parseInt(prompt("Informe um número inteiro positivo: "));
        alert(`${num}! = ${fatorial(num)}`);
    } catch (error) {
        alert(error);
    } finally {
        op = prompt("Deseja repetir o programa? (SIM | NÃO)").toUpperCase();
    }
} while (op === "SIM");