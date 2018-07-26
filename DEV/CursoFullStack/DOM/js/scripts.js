(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

//    node type

    var enlaces = document.querySelectorAll('#menu ul li a')[0];
    console.log(enlaces.nodeType);
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes);
    console.log(enlaces.firstChild);
    console.log(enlaces.firstChild.nodeValue);

    enlaces.firstChild.nodeValue = "Home";
    console.log(enlaces.firstChild.nodeValue);
    enlaces.id = "mi_id";

/*
//    queySelector

    var logo = document.querySelector('.logo');
    console.log(logo);

    var encabezado = document.querySelector('aside h2');
    console.log(encabezado);

    var encabezados = document.querySelectorAll('h2');
    console.log(encabezados);

    encabezados[2].innerText = "Metro mío";

*/

/*
//    getElementsByTagName()

    var enlaces = document.getElementsByTagName('a');
    console.log(enlaces);
    console.log(enlaces.length);

    for(var i = 0; i < enlaces.length; i++){
            enlaces[i].setAttribute('target', '_blank');
        };

    var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    console.log(enlacesSidebar);
    console.log(enlacesSidebar[1]);

    for(i = 0
        ; i < enlacesSidebar.length; i++){
        enlacesSidebar[i].setAttribute('href', 'http://www.google.com');
    };
*/


/*
//    getElementsByClassName('className')

    var navegacion = document.getElementsByClassName('navegacion');

    var contenido = document.getElementsByClassName('contenido');
    console.log(contenido[0]);

    contenido[0].style.display = 'none';
*/

/*

//    getElementById

    var logo = document.getElementById('logo')
    var navegacion = document.getElementById('navegacion')
*/

  });
})();
