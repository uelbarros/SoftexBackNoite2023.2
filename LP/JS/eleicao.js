//Legenda
const CANDIDATOS = {
    candidato01Nome: "Cleidiane Nunes",
    candidato01Num: 889,
    candidato02Nome: "Jorge Braga",
    candidato02Num: 847,
    candidato03Nome: "Renan Souza",
    candidato03Num: 515,
    brancoNome: "Branco",
    brancoNumero: 0,
    nuloNome: "Nulo"
};
//Zereisma
var qtdVotosCandidato01 = 0;
var qtdVotosCandidato02 = 0;
var qtdVotosCandidato03 = 0;
var qtdVotosBranco = 0;
var qtdVotosNulos = 0;

//Início da eleição
do {

    do {

        do {
            var testeLetra = false;
            var voto = prompt(`        Bem-vindo a eleição!
    Candidatos: 
        ${CANDIDATOS.candidato01Nome} : ${CANDIDATOS.candidato01Num}
        ${CANDIDATOS.candidato02Nome} : ${CANDIDATOS.candidato02Num}
        ${CANDIDATOS.candidato03Nome} : ${CANDIDATOS.candidato03Num}
        ${CANDIDATOS.brancoNome} : ${CANDIDATOS.brancoNumero}
    Vote:`);

            for (let i = 0; i < voto.length; i++) {
                if (isNaN(Number(voto[i]))) {
                    testeLetra = true;
                    break;
                }
            }

        } while (testeLetra);

        voto = Number(voto);

        switch (voto) {
            case CANDIDATOS.candidato01Num:
                qtdVotosCandidato01++;
                break;
            case CANDIDATOS.candidato02Num:
                qtdVotosCandidato02++;
                break;
            case CANDIDATOS.candidato03Num:
                qtdVotosCandidato03++;
                break;
            case CANDIDATOS.brancoNumero:
                qtdVotosBranco++;
                break;
            default:
                qtdVotosNulos++;
                break;
        }

        var finalEleicao = prompt("Deseja finalizar a eleição? (SIM | NÃO): ").toUpperCase();

    } while (finalEleicao !== "SIM");

    alert(`Final das Eleições
Votos por Candidatos:
${CANDIDATOS.candidato01Nome} : ${qtdVotosCandidato01}
${CANDIDATOS.candidato02Nome} : ${qtdVotosCandidato02}
${CANDIDATOS.candidato03Nome} : ${qtdVotosCandidato03}
${CANDIDATOS.brancoNome} : ${qtdVotosBranco}
${CANDIDATOS.nuloNome} : ${qtdVotosNulos}`);

    if (qtdVotosCandidato01 > qtdVotosCandidato02 && qtdVotosCandidato01 > qtdVotosCandidato03) {
        alert(`${CANDIDATOS.candidato01Nome} venceu a eleição!`)
    } else if (qtdVotosCandidato02 > qtdVotosCandidato01 && qtdVotosCandidato02 > qtdVotosCandidato03) {
        alert(`${CANDIDATOS.candidato02Nome} venceu a eleição!`)
    } else if (qtdVotosCandidato03 > qtdVotosCandidato01 && qtdVotosCandidato03 > qtdVotosCandidato02) {
        alert(`${CANDIDATOS.candidato03Nome} venceu a eleição!`)
    } else {
        alert(`Eleição indefinida!`);
        eleicaoIndef = true;
    }

} while (eleicaoIndef);
