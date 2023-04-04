let x = 9;
function typeChecker (x) {
    switch (typeof x ){
    case 'number': console.log('x - число ');
        break;
    case 'string': console.log('x - строка ');
        break;
    case 'boolean': console.log('x - булеан');
        break;
    default: console.log('Тип x не определен');
}
}