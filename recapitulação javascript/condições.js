//if-else
let hora = 10;
if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

//switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia");
}

//loop for
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

//loop while
let j = 0;
while (j < 5) {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
}

//loop do-while
let k = 0;
do {
    console.log(k); // 0, 1, 2, 3, 4
    k++;
} while (k < 5);

