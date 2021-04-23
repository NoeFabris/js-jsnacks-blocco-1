//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var num1 = prompt('Inserisci il primo Numero')
var num2 = prompt('Inserisci il secondo Numero')
console.log(num1)
console.log(num2)
if (num1 > num2) {
    console.log(num1 + ' è piu grande')
    document.getElementById('output').innerHTML = num1 + ' è piu grande'
} else if ( num2 > num1){
    console.log(num2 + ' è piu grande')
    document.getElementById('output').innerHTML = num2 + ' è piu grande'
} else {
    console.log('pari')
    document.getElementById('output').innerHTML = 'I numeri sono pari'
}