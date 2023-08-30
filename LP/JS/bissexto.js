function bissexto(ano) {
    if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0) {
        return true;
    } else {
        return false;
    }
}

var ano = parseInt(prompt("Informe um ano pra saber se é bissexto: "));

if(bissexto(ano)){
    console.log(`O ${ano} é bissexto.`);
}else{
    console.log(`O ${ano} não é bissexto.`);
}

//* console.log(bissexto(ano));