window.onload = function () {
    let numInicio = this.prompt("Escolha o número inicial");
    let numFinal = this.prompt("Escolha o número final");
    setInterval(() => {
        if (numInicio <= numFinal) {
            let y = numInicio;
            const sempre = this.document.querySelector("body");
            const feito = this.document.createElement("p");
            feito.innerHTML = y;
            sempre.appendChild(feito);
            this.console.log(numInicio);
        }
        ++numInicio;

    }, 1000)


}

