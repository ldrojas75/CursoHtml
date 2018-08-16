(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){


// reemplazar un nodo con controlar

var viejoNodo = document.querySelector('main h2');
var nuevoNodo = document.querySelector('footer h2');
viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

// reemplazar nodo con uno nuevo

var nuevoTitulo = document.createElement('h2');
var nuevoTexto = document.createTextNode('Hola mundo');
nuevoTitulo.appendChild(nuevoTexto);
var viejoNodo = document.querySelector('main h2');
viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);



/*
// eliminar nodos

var primerPost = document.querySelector('main article');
primerPost.parentNode.removeChild(primerPost);

var enlaces = document.querySelector('#navegacion nav ul li a');
enlaces.parentNode.removeChild(enlaces);
*/


/*
// clonaer y controlar con insertBefore
// creando lista de posts populares

var sidebar = document.querySelector('aside');
var masVisitados = document.createElement('H2');
var textoVisitados = document.createTextNode('Post más visitados');
masVisitados.appendChild(textoVisitados);
sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
var contenido = document.querySelectorAll('main h2');
for(var i = 0; i < contenido.length; i++){
    var nuevoElemento = document.createElement('LI');
    var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
    nuevoElemento.appendChild(nuevoTexto);
    sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
};
*/


/*
// Clonar nodo
var contenido = document.querySelectorAll('main');
var nuevoContenido = contenido[0].cloneNode(true);

var sidebar = document.querySelector('aside');
sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
*/


/*
// agregar elementos a una nuevaLista


var sidebar = document.querySelector('#sidebar');
var nuevoElemento = document.createElement('H1');
var nuevoTexto = document.createTextNode('Hola Mundo');
nuevoElemento.appendChild(nuevoTexto);
sidebar.appendChild(nuevoElemento);

// agregar entrada 6

var enlacesSidebar = document.querySelectorAll('#sidebar ul');
// creando el enlace
var nuevoEnlace = document.createElement('A');
nuevoEnlace.setAttribute('href', 'http://www.google.com');
var textoEnlace = document.createTextNode('Entrada 6');
nuevoEnlace.appendChild(textoEnlace);
// creando la lista
var nuevaLista = document.createElement('LI');
nuevaLista.appendChild(nuevoEnlace);
// lo agrego al menú
enlacesSidebar[0].appendChild(nuevaLista);

*/


//    node type
/*
    var enlaces = document.querySelectorAll('#menu ul li a')[0];
    console.log(enlaces.nodeType);
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes);
    console.log(enlaces.firstChild);
    console.log(enlaces.firstChild.nodeValue);

    enlaces.firstChild.nodeValue = "Home";
    console.log(enlaces.firstChild.nodeValue);
    enlaces.id = "mi_id";
*/


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
