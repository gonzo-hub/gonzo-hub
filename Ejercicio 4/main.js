window.onload = inicio;

function inicio() {
    var valorcolor = leerCookie("color");
    var valorfont = leerCookie("font");
    if (document.getElementById("texto") != null) {
        document.getElementById("texto").style.color = valorcolor;
        document.getElementById("texto").style.fontFamily = valorfont;
    }

    if (document.getElementById("texto2") != null) {
        document.getElementById("texto2").style.fontFamily = valorfont;
        document.getElementById("texto2").style.color = valorcolor;
    }


    if (document.getElementById("rojo") != null) {
        document.getElementById("rojo").addEventListener('click', function (e) {
            document.getElementById("texto").style.color = "red";
            crearCookie("color", "red", 1000);
            
           
        })
    }
    if (document.getElementById("Arial") != null) {
        document.getElementById("Arial").addEventListener('click', function (e) {
            document.getElementById("texto").style.font = "arial";
            crearCookie("font", "Arial", 1000);
            

        })
    }
    if (document.getElementById("verdana") != null) {
        document.getElementById("verdana").addEventListener('click', function (e) {
            document.getElementById("texto2").style.font = "verdana";
            crearCookie("font", "Verdana", 1000);
            

        })
    }

    if (document.getElementById("azul") != null) {
        document.getElementById("azul").addEventListener('click', function (e) {
            document.getElementById("texto2").style.color = "blue";
            crearCookie("color", "blue", 1000);
            


        })
    }
}


function cargar_cookies() {
    var valorcolor1 = leerCookie("color");
    var valorfont1 = leerCookie("font");
    document.getElementById("texto").style.font = valorfont1;
    document.getElementById("texto").style.color = valorcolor1;

    var valorcolor2 = leerCookie("color");
    var valorfont2 = leerCookie("font");
    document.getElementById("texto").style.font = valorfont2;
    document.getElementById("texto").style.color = valorcolor2;

}


//Función para crear cookies
function crearCookie(nombreCookie, valorCookie, diasdevida) {
    //paso a segundos la duración (encontré la recomendación en algún lado)
    var segundos = diasdevida * 60 * 60 * 24;
    var valorFinal;
    if (diasdevida == null || diasdevida == 0) {
        valorFinal = nombreCookie + "=" + valorCookie + ";path=/";;
    } else {
        valorFinal = nombreCookie + "=" + valorCookie; + "; max-age=" + String(segundos) + ";path=/";;
    }
    document.cookie = valorFinal;
}

//Creo una función que lea las cookies
function leerCookie(nombreBuscado) {
   
    var todaslascookies = document.cookie.split(";");
    for (i in todaslascookies) {
        //Limpio los espacios en blanco (por si los hay)
        var limpio = todaslascookies[i].trim();
        //Separo nombre y valor
        var nombre = limpio.substring(0, limpio.indexOf("="));
        var valor = limpio.substring(limpio.indexOf("=") + 1);
        //Si encuentra la cookie devuelve el valor
        if (nombre == nombreBuscado) {
            return valor;
        }
    }
    return "";
}

function borrarCookie(nombreBuscado) {
    document.cookie = nombreBuscado + "= ;    expires = Mon, 1 Jan 1990 00: 00: 00 UTC;path = /;";
}









