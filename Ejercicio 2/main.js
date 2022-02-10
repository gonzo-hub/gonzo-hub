
window.onload = inicio;

//Creo un array con los elementos que voy a añadir
var listado = ["Elemento de prueba", "Texto de prueba", "Otra prueba", "más pruebas", "another one"];

//Creo un contador para ir añadiendo los elementos uno a uno
var contador = 0

function inicio() {
    document.getElementById('boton').addEventListener('click',
        function (e) {
            e.preventDefault();
            var nodo = document.createElement("li");
            nodo.innerHTML = listado[contador];
            document.getElementById("lista").appendChild(nodo);
            contador++;
        }


    );


}















