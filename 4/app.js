const arr = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
const newArr = arr.filter(item => item === 'li').length;
console.log( 'li' + ' = ' + newArr); 

const newArr2 = arr.filter(item => item === 'div').length;
console.log( 'div' + ' = ' + newArr2); 

const newArr3 = arr.filter(item => item === 'p').length;
console.log( 'p' + ' = ' + newArr3);

const newArr4 = arr.filter(item => item === 'h1').length;
console.log( 'h1' + ' = ' + newArr4); 

const newArr5 = arr.filter(item => item === 'ol').length;
console.log( 'ol' + ' = ' + newArr5); 

const newArr6 = arr.filter(item => item === 'br').length;
console.log( 'br' + ' = ' + newArr6); 

