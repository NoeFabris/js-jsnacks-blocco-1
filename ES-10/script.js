var windows = {
    'tab' : ['Gmail', 'GitHub', 'Facebook'],
    'activeTab' : 2
}

console.log(windows)
for (let i = 0; i < windows['tab'].length; i++) {
    if (windows['tab'][i] === 'Facebook') {
        console.log('Trovato Social')
        windows['tab'].splice(i ,1)
        if (windows['activeTab'] === i) {
            windows['activeTab'] = windows['activeTab'] - 1
        }
    } else {
    } 
}
console.log(windows)

// for (var key in windows) {
//     if (windows['tab'] === 'Facebook') {
//         console.log('Trovato Social')
//     }
// }