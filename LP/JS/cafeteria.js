class Cliente{
    constructor(nome, telefone, sala){
        this.nome = nome;
        this.telefone = telefone;
        this.sala = sala;
    }
}

class ItemPedido{
    constructor(produto, precoInd, qtd){
        this.produto = produto;
        this.precoInd = precoInd;
        this.qtd = qtd;
    }
}

class Pedido{
    constructor(cliente){
        this.cliente = cliente;
        this.data = Date.now();
        this.itensPedido = [];
        this.valor = 0.0;
    }

    addItem(itemPedido) {
        this.itensPedido.push(itemPedido);
        this.valor += itemPedido.precoInd * itemPedido.qtd;
        // console.log(`${this.cliente.nome} seu valor parcial é de ${this.valor}`)
    }
}

// Fila de pedidos no início do expediente
var pedidos = [];

// Criando um pedido
var cliStefano = new Cliente("Stefano Silva", "9999-9999", 301);
var pedidoStefano = new Pedido(cliStefano);
var itemCoxinhaStf = new ItemPedido("Coxinha de frango", 5.0, 2);
pedidoStefano.addItem(itemCoxinhaStf);
var itemExpressoStf = new ItemPedido("Expresso P", 3.0, 1);
pedidoStefano.addItem(itemExpressoStf);

// Incluindo um pedido na Fila
pedidos.push(pedidoStefano);

// Criando um pedido
var cliAlex = new Cliente("Alex Silva", "8888-8888", 301);
var pedidoAlex = new Pedido(cliAlex);
var itemTapiocaAlex = new ItemPedido("Tapioca de charque com queijo", 9.0, 3);
pedidoAlex.addItem(itemTapiocaAlex);
var itemExpressoAlex = new ItemPedido("Expresso G", 5.0, 1);
pedidoAlex.addItem(itemExpressoAlex);

// Incluindo um pedido na Fila
pedidos.push(pedidoAlex);

// Criando um pedido
var cliIrla = new Cliente("Irla Silva", "7777-7777", 301);
var pedidoIrla = new Pedido(cliIrla);
var itemEmpadaIrla = new ItemPedido("Empada queijo", 5.0, 1);
pedidoIrla.addItem(itemEmpadaIrla);
var itemSucoIrla = new ItemPedido("Suco de laranja s/ açucar", 7.0, 1);
pedidoIrla.addItem(itemSucoIrla);
var itemLakaIrla = new ItemPedido("Chocolate Laka", 2.5, 1);
pedidoIrla.addItem(itemLakaIrla);

// Incluindo um pedido na Fila
pedidos.push(pedidoIrla);

console.log(pedidos);

// Saiu o primeiro pedido
console.log(pedidos.shift());

console.log(pedidos);