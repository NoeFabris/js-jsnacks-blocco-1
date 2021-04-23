var player = {
    'playerCode' :  '',
    'name' : 'Danilo',
    'surname' : 'Gallinari',
    'age' : 23 ,
    'avgPoints' :  '',
    'LongPointsSucc' : ''
}
var check = false
while (check === false) {
    var avgPointsGen = checkInserimentoNum(numGen())
    if (avgPointsGen < 50) {
        player['avgPoints'] += avgPointsGen
        check = true
    } else {
        check = false
    }
}
console.log(avgPointsGen)
check = false
while (check === false) {
    var LongPointsSuccGen = checkInserimentoNum(numGen())
    if (LongPointsSuccGen < 100) {
        player['LongPointsSucc'] += LongPointsSuccGen + '%'
        check = true
    } else {
        check = false
    }
}
console.log(LongPointsSuccGen)
var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
check = false
var i = 0
while (check === false && i < 3) {
    var codeGen = checkInserimentoNum(numGen())
    if (codeGen < 26) {
        player['playerCode'] += lettere.charAt(codeGen)
        i++
        check = true
    } else {
        check = false
    }
}




console.log(player)