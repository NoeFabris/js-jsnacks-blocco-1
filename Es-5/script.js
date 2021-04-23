//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var input1 = prompt('Inserisci la prima parola')
var input2 = prompt('Inserisci la seconda parola')
var lungnezzaInput1 = input1.length
var lungnezzaInput2 = input2.length
console.log(lungnezzaInput1)
console.log(lungnezzaInput2)


if (lungnezzaInput1 > lungnezzaInput2) {
    console.log('La parola più lunga è ' + input1)
} else if (lungnezzaInput1 < lungnezzaInput2){
    console.log('La parola più lunga è ' + input2)
} else {
    console.log('Le parole sono pari')
}
