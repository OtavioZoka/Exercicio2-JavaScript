// <!-- Crie uma função despertador que irá solicitar um tempo em ms para o usuário e irá
// disparar uma alerta depois deste tempo-->

window.onload = function () {


}

function despertador() {
    console.log(alert("Espere um minuto"));
    let timerID = setTimeout(function despertador() {
        alert("teste");
    }, 2000);
    clearTimeout(timerId);
}
