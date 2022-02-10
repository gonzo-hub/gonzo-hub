window.onload = inicio;

//CRE UN ARRAY PARA CADA FILA DE LA TALBA
var arrProducto = [];
var arrCantidad = [];
var arrUnitario = [];
var arrTotal = [];

function inicio() {

    document.getElementById('anadir').addEventListener("click", anadir);

}

function anadir() {

    var pro = document.getElementById('producto').value;
    var can = document.getElementById('cantidad').value;
    var uni = document.getElementById('precio_unitario').value;

    var total = can * uni;
    arrProducto.push(pro);
    arrCantidad.push(can);
    arrUnitario.push(uni);
    arrTotal.push(total);
    crearTabla();

}




function quitar(pos) {
    arrProducto.splice(pos, 1);
    arrCantidad.splice(pos, 1);
    arrUnitario.splice(pos, 1);
    arrTotal.splice(pos, 1);

}

function crearTabla() {

    var elementTabla  = document.getElementById("idtable");
    elementTabla.innerHTML="";
     

    var table = document.createElement("TABLE");
    // ponemos las cabeceras de todas las filas

    table.innerHTML ="<tr><th>PRODUCTO</th><th>CANTIDAD</th><th>PRECIO UNITARIO</th><th>PRECIO TOTAL</th><th>ACCIONES</th></tr>";

    var totalbase =0;

    // recorremos cada fila de productos
    for (i in arrCantidad) {
        var tr = document.createElement("TR");

        var td = document.createElement("TD");
        td.innerHTML = arrProducto[i] + "(ver detalle)";
        td.setAttribute("id", "PR" + i);
        tr.appendChild(td);


        var td = document.createElement("TD");
        td.innerHTML = arrCantidad[i];
        tr.appendChild(td);


        var td = document.createElement("TD");
        td.innerHTML = arrUnitario[i] + " €";
        tr.appendChild(td);


        var td = document.createElement("TD");
        td.innerHTML = arrTotal[i] + " €";
        tr.appendChild(td);
        totalbase = totalbase +  arrTotal[i];



        var td = document.createElement("TD");
        td.innerHTML = '(ELIMINAR)';
        td.setAttribute("id", "DELETE" + i);
        tr.appendChild(td);

        table.appendChild(tr);

    }

    var iva = totalbase * 0.21;
    var totalfinal = totalbase+iva;

    // METEMOS EL PIE DE TABLA

    // BASE IMPONIBLE
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    td.innerHTML ="BASE IMPONIBLE";
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    td.innerHTML = totalbase + " €";
    tr.appendChild(td);
    table.appendChild(tr);

    // IVA
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    td.innerHTML ="IVA (21%)";
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    td.innerHTML = iva + " €";
    tr.appendChild(td);
    table.appendChild(tr);

    // TOTAL FINAL
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    td.innerHTML ="TOTAL FINAL";
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    tr.appendChild(td);
    var td = document.createElement("TD");
    td.innerHTML = totalfinal + " €";
    tr.appendChild(td);
    table.appendChild(tr);







    elementTabla.appendChild(table);

    for (i in arrCantidad) {
        document.getElementById("PR" + i).addEventListener("click", function (e) {
            var elemento = e.target;
            var elid = elemento.id;
            var num = elid.substring(2);
            num = parseInt(num);
            var texto = "Producto: " + arrProducto[num] + " Cantidad: " + arrCantidad[num] + " Precio unitario " + arrUnitario[num] + " Precio total: " + arrTotal[num];
            alert(texto);
        });

        document.getElementById("DELETE" + i).addEventListener("click", function (e) {
            var elemento = e.target;
            var elid = elemento.id;
            var num = elid.substring(6);
            num = parseInt(num);
            quitar(num);
            crearTabla();
        });
    }
}

