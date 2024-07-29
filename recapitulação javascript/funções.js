//funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Invocação da função

//funções anonimas(funções sem nome)
// Função anônima
let saudacao = function(nome) {
    return `Olá, ${nome}!`;
};

// Arrow function
let saudacaoArrow = (nome) => `Olá, ${nome}!`;

console.log(saudacao("João"));
console.log(saudacaoArrow("Ana"));

