var num = [];
var numQuadrado = [];

//Pegar os números
for (let i = 1; i < 6; i++) {
    num[i] = Number(prompt(`Informe o ${i}º número: `))
}

console.log(num);

num.forEach(element => {
    numQuadrado.push(element**2);
});

console.log(numQuadrado);

