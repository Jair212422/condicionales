
function calcularSueldo() {
  const horas = parseFloat(document.getElementById("horas").value);
  const pago = parseFloat(document.getElementById("pago").value);
  const resultado = document.getElementById("resultado");
  let sueldo;

  if (horas <= 40) {
    sueldo = horas * pago;
  } else {
    const horasExtra = horas - 40;
    sueldo = (40 * pago) + (horasExtra * pago * 2);
  }

  resultado.textContent = `El sueldo semanal es: $${sueldo.toFixed(2)}`;
}
