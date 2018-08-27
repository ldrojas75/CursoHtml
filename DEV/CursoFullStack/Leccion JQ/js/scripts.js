$(document).ready(function(){
    $('#contenido').append("Con jQuery es más fácil")
});

document.addEventListener('DOMContentLoaded', function(event){
    var elemento = document.getElementById('contenido2');
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Con JavaScript es todo más difícil");

    parrafo.appendChild(texto);
    elemento.appendChild(parrafo);


});
