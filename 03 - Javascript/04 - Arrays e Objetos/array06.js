let arr = [1,3,5,7,9];
console.log(arr);
arr.push(11, 13);
console.log(arr);
let removido = arr.pop();
console.log(removido)
let removido2 = arr.shift();
console.log(removido2);
console.log(arr);
arr.unshift(1);

let arr2 = arr.slice(1,3);
console.log(arr2);
console.log(arr);
let arr3 = arr.splice(2,2); // altera o elemento original
console.log(arr3);
console.log(arr);