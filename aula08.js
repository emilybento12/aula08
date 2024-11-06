function Fruta(nome, cor, preco) {
    this.nome = nome;
    this.cor = cor;
    this.preco = preco;

    this.exibirInfo = function () {
        return `Fruta: ${this.nome}, Cor: ${this.cor}, Preço: R$${this.preco}`;
    };
}

let frutaAtual;

function criarFruta() {
    const nome = prompt("Digite o nome da fruta:");
    const cor = prompt("Digite a cor da fruta:");
    const preco = parseFloat(prompt("Digite o preço da fruta:"));

    frutaAtual = new Fruta(nome, cor, preco);
    alert("Fruta criada com sucesso!");
}

function mostrarFruta() {
    if (frutaAtual) {
        alert(frutaAtual.exibirInfo());
    } else {
        alert("Crie uma fruta primeiro!");
    }
}

function simulador() {
    let opcao;
    do {
        opcao = prompt("Escolha uma opção:\n1. Criar Fruta\n2. Mostrar Fruta\n3. Sair");

        switch (opcao) {
            case "1":
                criarFruta();
                break;
            case "2":
                mostrarFruta();
                break;
            case "3":
                alert("Saindo do simulador...");
                break;
            default:
                alert("Opção inválida! Tente novamente.");
        }
    } while (opcao !== "3");
}

simulador();
