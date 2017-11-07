/*
div kamisama id = textcomment 
textarea id = txt
botón id = btn

*/
window.onload = function() {

    //boton tweet
    var button = document.getElementById("btn");

    button.addEventListener("click", function() {

        //Se llama al div contenedor
        var comments = document.getElementById("txt");
        var cont = document.getElementById("cont");
        //llamamos a lo ingresado por el usuario
        var messages = document.getElementById("txt").value;
        //limpiamos el textarea
        document.getElementById("txt").value = "";


        //creamos div vacio 
        var newComments = document.createElement("div");
        //arroja alerta si no se ingresan caracteres 
        if (messages.length == 0 || messages == null) {
            document.getElementById("btn").disabled = true;
            return false;
        } else {
            document.getElementById("btn").disabled = false;
        }

        //creamos parrafo
        var paragraph = document.createElement("p");
        //creamos nodo de texto 
        var textnode = document.createTextNode(messages);
        //pasamos a divContainer su hijo mas pequeño
        paragraph.appendChild(textnode);
        //pasamos a los comentarios el parrafo
        newComments.appendChild(paragraph);
        //pasamos los comentarios al contador o div que contiene al resto
        cont.appendChild(newComments);
        /*realiza un clear a la cantidad de caracteres 
		volviendo a la cantidad de 140
    	se ubica dentro del evento click, ya que al terminar 
    	el comentario el contador vuelve a 140*/
        var charactersLeft = document.getElementById("char-left");
        charactersLeft.innerHTML = "140";
    })

    //var msg toma el area de texto
    var message = document.getElementById("txt");
    /*funcion creada para el evento onkeydown, ha que los caracteres
	se vayan descontando y ademas queden en valores negativos*/
    message.onkeydown = function() {

        //máximo de caracteres
        var maxCharacters = 140;

        //estas variables indican el color que tendra cada cambio de caracteres
        var maroonWarning = 30;
        var crimsonWarning = 20;

        /* negativeChars corresponde al valor 
        negativo que tendra en ingreso de caracteres y el color que tomaran*/
        var negativeChars = 1;

        var left = "char-left";
        //tomamos el parrafo 
        var charactersLeft = document.getElementById("char-left");
        //var msg2 toma el valor ingresado por el usuario
        var message2 = document.getElementById("txt").value;
        /*el parrafo "char-left" es igual a la cantidad 
        maxima de caracteres permitidos y se lo resta a la longitud
        de lo ingresado por el usuario*/
        charactersLeft.innerHTML = maxCharacters - message2.length;
        //condiciones para que se ejecuten los cambios de color
        var warnLabel = msg.value.length >= maxCharacters - left ? " warning" : "";
        if (message.value.length >= maxCharacters - maroonWarning) {
            charactersLeft.className = left + "maroonwarning";
        } else if (message.value.length >= maxCharacters - crimsonWarning) {
            charactersLeft.className = left + "maroonwarning";
        } else if (message.value.length > maxCharacters - negativeChars) {
            charactersLeft.className = left + "negative";
        } else {
            charactersLeft.className = left;
        }
    }
}