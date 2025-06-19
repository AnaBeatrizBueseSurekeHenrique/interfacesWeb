/*let isValid = false
*/
(function (win, doc){
    let isValid = false
    console.log("main", isValid);
    win.alert("ALERTA!!!!!!!!!!!!!!!!!!!!");
    function init(){
        console.log("init da main");
    }
    init()
})(window, document);