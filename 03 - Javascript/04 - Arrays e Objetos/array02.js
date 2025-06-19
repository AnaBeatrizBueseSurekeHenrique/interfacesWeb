const arr = [1,5,10, "ola", true];

let soNumeros = arr.every(function(el){
    return typeof el === "number";
}) // every => retorna true ou false. ou seja, nesse caso true se for td do tipo number false se n for

console.log(soNumeros)