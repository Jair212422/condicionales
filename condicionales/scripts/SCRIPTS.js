function verificarVoto() {
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultadoVoto");

  if (edad >= 18) {
    resultado.textContent = "Sí puedes votar.";
  } else if (edad >= 0) {
    resultado.textContent = "No puedes votar.";
  } else {
    resultado.textContent = "Por favor, introduce una edad válida.";
  }
}

function calcularSueldos() {
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

  function elegirRegalo() {
    const dinero = parseFloat(document.getElementById("dinero").value);
    const resultado = document.getElementById("resultadoRegalo");
    const regalo = "";
  
    if (dinero <= 10) {
      resultado.textContent = "Puedes regalar una Tarjeta.";
    } else if (dinero <= 100) {
      resultado.textContent = "Puedes regalar Chocolates.";
    } else if (dinero <= 250) {
      resultado.textContent = "Puedes regalar Flores.";
    } else {
      resultado.textContent = "Puedes regalar un Anillo.";
    }
  }
  function calcularEstacionamiento() {
    const horas = parseInt(document.getElementById("horas").value);
    const resultado = document.getElementById("resultadoEstacionamiento");
    let total = 0;
  
    if (horas <= 2) {
      total = horas * 5;
    } else if (horas <= 5) {
      total = (2 * 5) + (horas - 2) * 4;
    } else if (horas <= 10) {
      total = (2 * 5) + (3 * 4) + (horas - 5) * 3;
    } else {
      total = (2 * 5) + (3 * 4) + (5 * 3) + (horas - 10) * 2;
    }
  
    resultado.textContent = "Total a pagar: $" + total + ".00";
  }
  function buscarMenor() {
    const nombre1 = document.getElementById("nombre1").value;
    const edad1 = parseInt(document.getElementById("edad1").value);

    const nombre2 = document.getElementById("nombre2").value;
    const edad2 = parseInt(document.getElementById("edad2").value);

    const nombre3 = document.getElementById("nombre3").value;
    const edad3 = parseInt(document.getElementById("edad3").value);

    let menorNombre = nombre1;
    let menorEdad = edad1;

    if (edad2 < menorEdad) {
      menorNombre = nombre2;
      menorEdad = edad2;
    }

    if (edad3 < menorEdad) {
      menorNombre = nombre3;
      menorEdad = edad3;
    }

    document.getElementById("resultadoMenor").textContent =
      "La persona de menor edad es " + menorNombre + " con " + menorEdad + " años.";
  }
function calcularDescuento(){
    const precio = parseFloat(document.getElementById("precio").value);
    let descuento = 0;
    if(precio>=200){
        descuento = precio * 0.15;
    } else if(precio > 100){
        descuento = precio * 0.12;
    } else{
        descuento = precio * 0.10;
    }
    const costoFinal = precio - descuento;
    document.getElementById("resultado").innerHTML="El costo con descuento es de:$"+descuento.toFixed(2)+"<br>"+"Costo final:$"+costoFinal.toFixed(2);
}
function calcularBeca() {
    const edad = parseInt(document.getElementById("edad").value);
    const promedio = parseFloat(document.getElementById("promedio").value);
    const resultado = document.getElementById("resultado");
    let beca = "";

    if (edad > 18) {
      if (promedio >= 9) {
        beca = "$2000.00";
      } else if (promedio >= 7.5) {
        beca = "$1000.00";
      } else if (promedio >= 6.0) {
        beca = "$500.00";
      } else {
        beca = "Carta de invitación a estudiar más.";
      }
    } else {
      if (promedio >= 9) {
        beca = "$3000.00";
      } else if (promedio >= 8) {
        beca = "$2000.00";
      } else if (promedio >= 6) {
        beca = "$100.00";
      } else {
        beca = "Carta de invitación a estudiar más.";
      }
    }

    resultado.textContent = "resultado: " + beca;
  }
function calculaBono() {
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

  function calcularPoliza() {
    const tipo = document.getElementById("tipoPoliza").value.toUpperCase()
    const edad = parseInt(document.getElementById("edad").value)
    const alcohol = parseInt(document.getElementById("alcohol").value)
    const lentes = parseInt(document.getElementById("lentes").value)
    const enfermedad = parseInt(document.getElementById("enfermedad").value)

    let base = 0
    if (tipo === "A") {
      base = 1200
    } else {
      base = 950
    }
    let aumento = 0
    if (alcohol === 1) {
      aumento = aumento + base * 0.10
    }
    if (lentes === 1) {
      aumento = aumento + base * 0.05
    }
    if (enfermedad === 1) {
      aumento = aumento + base * 0.05
    }
    if (edad > 40) {
      aumento = aumento + base * 0.20
    } else {
      aumento = aumento + base * 0.10
    }
    const total = base + aumento

    document.getElementById("resultado").textContent = "Costo total de la póliza: $" + total
  }
  function determinarDestino() {
    const costoKm = parseFloat(document.getElementById("costoKm").value);
    const presupuesto = parseFloat(document.getElementById("presupuesto").value);

    const mexicoKm = 750;
    const pvKm = 800;
    const acapulcoKm = 1200;
    const cancunKm = 1800;

    const mexicoCosto = mexicoKm * 2 * costoKm;
    const pvCosto = pvKm * 2 * costoKm;
    const acapulcoCosto = acapulcoKm * 2 * costoKm;
    const cancunCosto = cancunKm * 2 * costoKm;

    let mensaje = "";

    if (presupuesto >= cancunCosto) {
      mensaje = "Puedes ir a Cancún. Costo total: $" + cancunCosto.toFixed(2);
    } else if (presupuesto >= acapulcoCosto) {
      mensaje = "Puedes ir a Acapulco. Costo total: $" + acapulcoCosto.toFixed(2);
    } else if (presupuesto >= pvCosto) {
      mensaje = "Puedes ir a Puerto Vallarta. Costo total: $" + pvCosto.toFixed(2);
    } else if (presupuesto >= mexicoCosto) {
      mensaje = "Puedes ir a Ciudad de México. Costo total: $" + mexicoCosto.toFixed(2);
    } else {
      mensaje = "No te alcanza el presupuesto. Debes quedarte en casa.";
    }

    document.getElementById("resultadoDestino").textContent = mensaje;
  }
  function calcularBono() {
    const años = parseInt(document.getElementById("años").value);
    let bono = 0;
    if (años >= 1 && años <= 5) {
      bono = años * 100;
    } else if (años > 5) {
      bono = 1000;
    } else {
      bono = 0;
    }
    if (bono > 0) {
      document.getElementById("resultadoBono").textContent = "El bono es de: $" + bono;
    } else {
      document.getElementById("resultadoBono").textContent = "No tiene bono por antigüedad.";
    }
  }
  function calcularSueldo() {
    const horas = parseInt(document.getElementById("horas").value);
    const pago = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;

    if (horas > 50) {
      document.getElementById("resultadoSueldo").textContent = "No está permitido trabajar más de 50 horas.";
      return;
    }

    if (horas <= 40) {
      sueldo = horas * pago;
    } else if (horas <= 45) {
      sueldo = (40 * pago) + ((horas - 40) * pago * 2);
    } else if (horas <= 50) {
      sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
    }

    document.getElementById("resultadoSueldo").textContent = "El sueldo semanal es: $" + sueldo.toFixed(2);
  }
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
  