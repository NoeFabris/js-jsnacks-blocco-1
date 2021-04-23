// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

var numeri = []

for (let i = 0; i < 6; i++) {
    var inserimento = prompt('Inserisci un Numero')
    if (inserimento % 2 !== 0) {
        numeri.push(inserimento)
        console.log(numeri[i])
    }
}
console.log(numeri)