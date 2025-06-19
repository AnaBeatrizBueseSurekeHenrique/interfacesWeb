function fn(cb){
    console.log("executar função de callback");
    console.log(typeof cb);
    cb();
}/*
fn(function(){
    console.log("funcao passada como parametro");
})
*/
function callback(){
    console.log("funcao passada como parametro");
}
fn(callback);
const objeto = {
    nome : "teste",
    callback
}
objeto.callback()