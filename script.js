function encrip(){

    const menasajefuera = document.getElementById("desaparecetext");
    const imagen = document.getElementById("iomg3");
    const text = document.getElementById("textaEncriptar").value;
    const mensaje = document.getElementById("mensajeencriptado");

// Verificar si el botón ya existe
    if (!document.getElementById("botenes")) {
        const copiarbtn = document.createElement("button");
        const rectangulo = document.getElementById("div-botones");
        copiarbtn.setAttribute("class", "botenes");
        copiarbtn.setAttribute("id", "botenes");
        copiarbtn.innerText = "Copiar";
        copiarbtn.style.display ="inline"

        copiarbtn.addEventListener("click", function () {
            navigator.clipboard.writeText(mensaje.innerText);
        });
        rectangulo.appendChild(copiarbtn);
    }
        mensaje.innerHTML = text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        menasajefuera.innerHTML = "";
        imagen.style.display ="none";
        document.getElementById("textaEncriptar").value="";


            //Eliminar todas las imágenes dentro del contenedo

            /*Otra mandera de Eliminar todas las imágenes dentro del contenedor
            const imagenes = contendor.getElementsByTagName("img");
            for (let i = 0; i < imagenes.length; i++) {
                imagenes[i].remove();
            }
        */

};

function descrip(){


    const menasajefuera = document.getElementById("desaparecetext");
    const imagen  = document.getElementById("iomg3");
    const text = document.getElementById("textaEncriptar").value;
    const mensaje = document.getElementById("mensajeencriptado");
    mensaje.innerHTML = text.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");

    menasajefuera.innerHTML = "";
    imagen.style.display ="none";
    document.getElementById("textaEncriptar").value="";

}