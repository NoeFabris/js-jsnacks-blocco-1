//Creazione di 2 prompt
//2 numeri 

var word1 = prompt("Inserisci la prima parola")
var word2 = prompt("Inserisci la seconda parola")
console.log(word1)
console.log(word2)
var par1 = word1.length
var par2 = word2.length
console.log(par1)
console.log(par2)

if (!Number.isNaN(parseInt(word1)) || !Number.isNaN(parseInt(word2))) {
    console.log("Inserisci lettere, non numeri")
} else if (par1 == par2) {
    console.log("Le paroe sono lunghe uguali")
} else if (par1 > par2) {
    console.log("La parola piú lunga é " + word1)
    console.log("La parola piú corta é " + word2)
} else {
    console.log("La parola piú lunga é " + word2)
    console.log("La parola piú corta é " + word1)
}


// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//     console.log("Uno o entrambi i numeri non sono validi")
// } else {
//     var numeroMaggiore;
//     if (num1 > num2) {
//         numeroMaggiore = num1
//     } else if (num2 > num1) {
//         numeroMaggiore = num2
//     } if (typeof numeroMaggiore === "number") {
//         console.log("Il numero maggiore é " + numeroMaggiore)
//     } else {
//         console.log("I numeri sono uguali")
//     }
// }