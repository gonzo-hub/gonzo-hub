window.onload = inicio;


function inicio() {

    document.getElementById('boton').addEventListener('click',
        function (e) {
            e.preventDefault();
            var nodo = document.createElement("p");
            var name = document.getElementById("nombre").value;
            var surname = document.getElementById("apellido").value;

            var texto = ("Hola " + name + " " + surname + ", " + "gracias por rellenar el formulario.");

            nodo.innerHTML = texto;

            document.getElementById("parrafo").appendChild(nodo);




        }

    );

}
