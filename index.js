

let anios;
function solicitarAnio() {
    let anioActual = parseInt(prompt("en que año estamos?"));

    if (isNaN(anioActual)) {
        alert('no ingresó un dato correcto')
        solicitarAnio();
    } else {
        alert('gracias, continuemos...')
        solicitarAnioNacimiento(anioActual);
    }
}


function solicitarAnioNacimiento(anioActual) {
    let anioNacimiento = parseInt(prompt("en que año naciste?"));

    if (isNaN(anioNacimiento)) {
        alert("No podes ingresar letras mi rey")
        solicitarAnioNacimiento(anioActual)
    }

    else {
        let resultado = anioActual - anioNacimiento;
        alert("tenes " + resultado + " años");
        finalizarPrograma(resultado)
    }
}
function finalizarPrograma(resultado) {
    if (resultado > 35) {
        alert("que viejo");
    }
    else {
        alert("sos joven rey");
    }
}

solicitarAnio()

function edad() {
    while (anios != 0) {
        anios = parseInt(prompt("Cual era tu edad? o ingresa 0 para salir"));


        if (isNaN(anios)) {
            alert('no ingresó un dato correcto')
            edad(anios);
        }
        else {
            alert("gracias, continuemos")
            opinologo(anios);
        }
    }
    
    
}
function opinologo(anios) {

    if (anios >= 1 && anios <= 100) {

        if (anios < 2) {
            alert("Sos un bebé")
        }
        else if (anios >= 2 && anios <= 12) {
            alert("Sos un niño")
        }
        else if (anios >= 13 && anios <= 19) {
            alert("Sos un adolescente")
        }
        else if (anios >= 20 && anios <= 30) {
            alert("Sos joven")
        }
        else if (anios >= 31 && anios <= 60) {
            alert("Sos adulto")
        }
        else if (anios >= 61 && anios <= 75) {
            alert("Sos adulto mayor")
        }
        else {
            alert("Sos un anciano")
        }
    }
}
edad()


alert("Gracias por utilizar nuestros servicios")
alert("Vuelva prontos")