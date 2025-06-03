function calcularBono() {
    const años = parseFloat(document.getElementById("años").value);
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const resultado = document.getElementById("resultado");

    let bonoAntiguedad = 0;
    let bonoSueldo = 0;
    if (años > 2 && años < 5) {
        bonoAntiguedad = sueldo * 0.20;
    } else if (años >= 5) {
        bonoAntiguedad = sueldo * 0.30;
    }
    if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else {
        bonoSueldo = sueldo * 0.10;
    }

    const bonoFinal = Math.max(bonoAntiguedad, bonoSueldo);

    resultado.textContent = "El bono mensual es de $" + bonoFinal.toFixed(2);
}