var curepo = document.body;

var hacheUno = document.createElement("h1");
hacheUno.textContent="hello there";
var hache2 = document.createElement("h2");
var div= document.createElement("div")
var imagen= document.createElement("img")
imagen.setAttribute("src","https://www.placecage.com/gif/200/300")

hache2.textContent="what are you up to?";

var contenedor = document.createElement("container");


curepo.appendChild(hacheUno);

curepo.appendChild(hache2);

hacheUno.setAttribute("style", "margin:auto; text-align:center" );
hache2.setAttribute("style", "margin:auto; text-align:center")
div.appendChild(imagen)
curepo.appendChild(div)