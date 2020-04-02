//!-- Crie uma função “Avisar para Tomar Água” que deverá exibir uma mensagem em
//um alerta de 1 em um minuto para lembrar o usuário do seu aplicativo de tomar
//água.-->
window.onload = function () {
    avisarTomarAgua();

}

function avisarTomarAgua() {
    let timerID = setTimeout(function avisarTomarAgua() {
        alert("Beba Agua");
    }, 2000);
    clearTimeout(timerId);
}