window.onload = inicio;
function inicio(){
   document.getElementById('span').style.display = "none";
      
   document.getElementById('mostrar').addEventListener('click', 
   function(e) {
    e.preventDefault();
    document.getElementById('span').style.display= "block";
    document.getElementById('mostrar').style.display = "none ";
   }
);

}