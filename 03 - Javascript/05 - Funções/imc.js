function calcularIMC(peso, altura){
    if(peso === undefined || altura === undefined){
        throw Error("valores inválidos!!");
    }
    return peso / (altura*altura);
}
function classficaIMC(imc){
    if(imc <= 16.9) return 'imc muito baixo!';
    else if(imc <= 18.9) return 'imc baixo!';
    else if(imc <=25.9) return 'normal!';
    else if(imc <= 29.9) return 'acima do peso!';
    else if(imc <= 34.9) return 'obesidade grau 1!';
    else if(imc <= 40) return 'obesidade grau 2!';
    else return 'obesidade grau 3'
}
let imc = calcularIMC(60, 1.65);
console.log(imc)
console.log(classficaIMC(imc));