var triangoloRettangolo = 
{
    'base' : 50,
    'alteza' : 20
}

var ipotenusa = Math.sqrt((Math.pow(triangoloRettangolo.base, 2)) + (Math.pow(triangoloRettangolo.alteza, 2)))
console.log('ipotenusa')
console.log(ipotenusa)

var cateto = ipotenusa / (Math.sqrt(2))
console.log('cateto')
console.log(cateto)

var perimetro = ipotenusa + triangoloRettangolo.base + triangoloRettangolo.alteza
console.log('perimetro')
console.log(perimetro)

var area = triangoloRettangolo.base * triangoloRettangolo.alteza / 2
console.log('area')
console.log(area)

