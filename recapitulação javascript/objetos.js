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

//outro exemplo

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
  };
  console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);

//manipuação de objeto
carro.cor = 'Azul';
delete carro.ano;
console.log(carro);

