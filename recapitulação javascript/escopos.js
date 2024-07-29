//escopos de funções globais, local ou bloco
//global pode ser acessado em qualquer lugar
let global = "Global";

function funcao() {
    //funções locais pode somente ser usado dentro de funções por exemplo
    let local = "Local";
    if (true) {
        //funções de bloco so pode ser acessado em um unico bloco e nada mais
        let bloco = "Bloco";
        console.log(global); // Acessível
        console.log(local); // Acessível
        console.log(bloco); // Acessível
    }
    console.log(global); // Acessível
    console.log(local); // Acessível
    // console.log(bloco); // Não acessível (erro)
}

funcao();
