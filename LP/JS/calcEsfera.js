/*
function calcEsfera(raio) {
    let area = 4 * PI * raio**2;
    let vol = (4/3) * PI * raio**3;

    console.log(`A área da esfera é ${area.toFixed(2)} e o seu volume é ${vol.toFixed(2)}`);
}

const PI = 3.14159;

var r = parseFloat(prompt("Informe o valor do raio: "));

calcEsfera(r);
*/


function areaEsf(raio) {
    let area = 4 * PI * raio**2;
    return area;
}

function volumeEsf(raio) {
    return (4/3) * PI * raio**3;
}

const PI = 3.14159;

var r = parseFloat(prompt("Informe o valor do raio: "));

console.log(`Área Esfera = ${areaEsf(r).toFixed(2)} \nVolume Esfera = ${volumeEsf(r).toFixed(2)}`);
