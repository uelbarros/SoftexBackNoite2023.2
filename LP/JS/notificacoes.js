class Notificacao{
    constructor(nomeApp, msg){
        this.nomeApp = nomeApp;
        this.msg = msg;
    }
}

var notificacoes = [];

var nftWpp = new Notificacao("WhatsApp", "Ruan: Pai me busca na escola")
notificacoes.push(nftWpp);
var ntfIfood = new Notificacao("Ifood", "Psiiuuu... chegou cupom de desconto");
notificacoes.push(ntfIfood);
var ntfFace = new Notificacao("Facebook", "Nova solicitação de amizade");
notificacoes.push(ntfFace);
var ntfZeDel = new Notificacao("Zé Delivery", "Promoção de cerveja, 30 reais de desconto em compras acima de 60 reais");
notificacoes.push(ntfZeDel)

console.log(notificacoes);

// Removendo a nbotificação mais recente (PILHA)
console.log(notificacoes.pop());

console.log(notificacoes);