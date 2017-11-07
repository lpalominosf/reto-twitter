/*
div kamisama id = textcomment 
textarea id = txt
botón id = btn

*/

//boton tweet
var button = document.getElementById("btn");

button.addEventListener("click", function() {
    //Se llama al div contenedor
    var comments = document.getElementById("txt");
    var cont = document.getElementById("cont");
    //llamamos a lo ingresado por el usuario
    var message = document.getElementById("txt").value;
    //limpiamos el textarea
    document.getElementById("txt").value = "";
    //creamos div vacio 
    var newComments = document.createElement("div");
    //arroja alerta si no se ingresan caracteres 
    if (message.length == 0 || message == null) {
        alert("Debes ingresar un mensaje");
        return false;
    }

    //creamos parrafo
    var paragraph = document.createElement("p");
    //creamos nodo de texto 
    var textnode = document.createTextNode(message);
    //pasamos a divContainer su hijo mas pequeño
    paragraph.appendChild(textnode);
    newComments.appendChild(paragraph);
    cont.appendChild(newComments);


    var campo = document.getElementById("txt").value;
    var cuentacampo = campo.value.length;
    var limite = 

    function contador(campo, cuentacampo, limite) {
        if (campo.value.length > limite) {
        	campo.value = campo.value.substring(0, limite)
        } else {
        	cuentacampo.value = limite - campo.value.length
        }
    }

});
