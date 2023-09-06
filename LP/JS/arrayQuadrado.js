var num = [];
var numQuadrado = [];

//Pegar os números
for (let i = 0; i < 5; i++) {
    num[i] = Number(prompt(`Informe o ${i-1}º número: `))
}

console.log(num);

num.forEach(element => {
    numQuadrado.push(element**2);
});

console.log(numQuadrado);

