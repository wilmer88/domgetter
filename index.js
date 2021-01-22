var curepo = document.body;
var hacheUno = document.createElement("h1");
var hache2 = document.createElement("h2");
var div= document.createElement("div");
var imagen= document.createElement("img");

var lista = document.createElement("ol")
var parte= document.createElement("li")
var parte2= document.createElement("li")
hacheUno.textContent="hello there";
hache2.textContent="what are you up to?";
parte.textContent="are you a fight fan?";
parte2.textContent="do like Real Madrid?";
lista.appendChild(parte)
lista.appendChild(parte2)

div.setAttribute("style", "margine:auto; text-align:center;")
hacheUno.setAttribute("style", "margin:auto; text-align:center;" );
hache2.setAttribute("style", "margin:auto; text-align:center;")

imagen.setAttribute("src","https://www.placecage.com/gif/200/300")









div.appendChild(imagen)
curepo.appendChild(div)





curepo.appendChild(hacheUno);
curepo.appendChild(hache2);
curepo.appendChild(lista)

