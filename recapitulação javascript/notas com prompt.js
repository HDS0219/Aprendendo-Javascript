let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));

let resultado = (nota1 + nota2) / 2;

console.log("Resultado: " + resultado);

if (resultado >= 5) {
    console.log("Passou!");
} else{
    console.log("Não passou.")
}
