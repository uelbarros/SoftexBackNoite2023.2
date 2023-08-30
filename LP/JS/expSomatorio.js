function expSomatorio(num) {
    let result = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            result += (2 * i + 1);
        }
        return result;
    } else {
        console.log("Número inválido!");
        return undefined;
    }
}

var num = parseInt(prompt("Informe um número inteiro positivo: "));

console.log(`${num}² = ${expSomatorio(num)}`);


/*

var result = 0;
if(num > 0){
    for (let i = 0; i < num ; i++){
        result += (2 * i + 1);
    }
    console.log(`${num}² = ${result}`);
}else{
    console.log("Número inválido!");
}
*/