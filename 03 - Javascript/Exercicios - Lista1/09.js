/*9.           Maior valor de uma lista
Dado um array com 10 números aleatórios, mostre qual é o maior número da lista. */
let arr = new Array(10);
for(let i = 0; i < arr.length; i++){
    arr[i] = parseInt((Math.random()*10) + 1)
}
let maior = -1;
arr.forEach(function(el){
    if(maior < el){
        maior = el;
    
    }
})
console.log(`O maior elemento é: ${maior}`)