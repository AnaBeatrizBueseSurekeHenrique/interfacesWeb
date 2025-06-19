const arr = [1,5,10, "ola", true];

let soNumeros = arr.some(function(el){
    return typeof el === "number";
}) // some => se pelo menos um elemebtos, ou seja nessa caso se pelo menos 1 for numero retorna true, se n for, entao retorna false
console.log(soNumeros)