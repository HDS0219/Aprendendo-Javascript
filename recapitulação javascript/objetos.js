//Manipulação de objetos (criação, acesso, modificação): 
//Objetos são coleções de pares chave-valor.
let pessoa = {
    nome: "Carlos",
    idade: 28
};

// Acesso
console.log(pessoa.nome); // Carlos
console.log(pessoa["idade"]); // 28

// Modificação
pessoa.idade = 29;
pessoa["nome"] = "Ana";
