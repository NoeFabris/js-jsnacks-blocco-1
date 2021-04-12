var num = []
var somma = 0

for (var index = 0; index < 10; index++) {
    var inserimento = parseInt(prompt("Inserisci il " + (index + 1)  + " numero"))
    if (Number.isNaN(inserimento)) {
        console.log("inserisci solo numeri")
        index--
    } else {
        num.push(inserimento)
        somma += inserimento     
    }



    // if (index < 4) {
    //     var inserimento = prompt("Inserisci il " + (index)  + " numero")
    //     num.push(inserimento)
    //     console.log(num)  
    //     var somma1 = somma + (inserimento);
    //     console.log(somma)
    // } else {
    //     console.log('fine')
    // }
}
console.log(somma)
console.log('L utente ha inserito questi numeri: ' + num)
