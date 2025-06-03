function calcularCostoPasaje() {
  const numAlumnos = parseInt(document.getElementById("numAlumnos").value);
  const resultado = document.getElementById("resultado");
  let costoPorAlumno;

  if (numAlumnos > 100) {
    costoPorAlumno = 20;
  } else if (numAlumnos >= 50 && numAlumnos <= 100) {
    costoPorAlumno = 35;
  } else if (numAlumnos >= 20 && numAlumnos <= 49) {
    costoPorAlumno = 40;
  } else {
    costoPorAlumno = 70;
  }

  resultado.textContent = "El costo de pasaje es:"+costoPorAlumno.toFixed(2);
}
