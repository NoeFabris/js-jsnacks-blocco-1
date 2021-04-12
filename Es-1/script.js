//Creazione di 2 prompt
//2 numeri 

var num1 = parseInt(prompt("Inserisci il primo Numero"))
var num2 = parseInt(prompt("Inserisci il secondo Numero"))
console.log(num1)
console.log(num2)


if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Uno o entrambi i numeri non sono validi")
} else {
    var numeroMaggiore;
    if (num1 > num2) {
        numeroMaggiore = num1
    } else if (num2 > num1) {
        numeroMaggiore = num2
    } if (typeof numeroMaggiore === "number") {
        console.log("Il numero maggiore é " + numeroMaggiore)
    } else {
        console.log("I numeri sono uguali")
    }
}