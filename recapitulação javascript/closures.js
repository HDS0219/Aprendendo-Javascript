//Closures são funções que têm acesso ao escopo de uma função externa mesmo após esta ter sido executada.
function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
}

let contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
