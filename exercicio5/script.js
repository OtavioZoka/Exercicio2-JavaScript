window.onload = function () {
    let numInicio = this.prompt("Escolha o número inicial");
    let numFinal = this.prompt("Escolha o número final");
    this.setTimeout(function live() {
        if (numInicio <= numFinal) {
            let y = numInicio;
            const sempre = this.document.querySelector("body");
            const feito = this.document.createElement("p");
            feito.innerHTML = y;
            sempre.appendChild(feito);
            this.console.log(numInicio);
        }
        numInicio++;
        setTimeout(live, 1000);

    }, 1000)


}