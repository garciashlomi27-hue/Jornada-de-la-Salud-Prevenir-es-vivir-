/* =====================================
   JORNADA DE LA SALUD
   SCRIPT.JS
===================================== */

//==============================
// MENSAJE DEL BOTÓN
//==============================

function mensajeSalud(){

alert("💚 ¡Gracias por comprometerte con tu salud! Recuerda que prevenir es vivir.");

}

//==============================
// BARRA DE PROGRESO
//==============================

window.onscroll = function(){

let scroll = document.body.scrollTop || document.documentElement.scrollTop;

let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let porcentaje = (scroll / altura) * 100;

document.getElementById("barraProgreso").style.width = porcentaje + "%";

};

//==============================
// BOTÓN SUBIR
//==============================

const boton = document.getElementById("subir");

window.addEventListener("scroll",function(){

if(window.scrollY > 400){

boton.style.display="block";

}else{

boton.style.display="none";

}

});

boton.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//==============================
// CARRUSEL AUTOMÁTICO
//==============================

let imagenes=document.querySelectorAll(".slide");

let indice=0;

function cambiarImagen(){

imagenes.forEach(function(img){

img.style.display="none";

});

indice++;

if(indice>imagenes.length){

indice=1;

}

imagenes[indice-1].style.display="block";

}

setInterval(cambiarImagen,3000);

cambiarImagen();

//==============================
// ANIMACIÓN DE SECCIONES
//==============================

const secciones=document.querySelectorAll("section");

const mostrar=function(){

secciones.forEach(function(sec){

const posicion=sec.getBoundingClientRect().top;

const pantalla=window.innerHeight;

if(posicion<pantalla-120){

sec.style.opacity="1";

sec.style.transform="translateY(0px)";

}

});

};

secciones.forEach(function(sec){

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1s";

});

window.addEventListener("scroll",mostrar);

mostrar();

//==============================
// EFECTO EN EL MENÚ
//==============================

const enlaces=document.querySelectorAll("nav a");

enlaces.forEach(function(link){

link.addEventListener("mouseover",function(){

this.style.transform="scale(1.1)";

});

link.addEventListener("mouseout",function(){

this.style.transform="scale(1)";

});

});
