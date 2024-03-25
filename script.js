function encriptar() {
    let txt = document.getElementById("txt-encriptar").value.trim();

    if (txt.length === 0) {
        swal(
            "¡Ups! Ha ocurrido un error",
            "Debes ingresar un texto para encriptar",
            "warning"
        );
        return;
    }
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("img-muñeco");

    let txtEncriptado = txt
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("txt-encriptar").value = txtEncriptado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    munieco.src = "./img/encriptado.jpg";
}

function desencriptar() {
    let txt = document.getElementById("txt-desencriptar").value.trim();

    if (txt.length === 0) {
        swal(
            "¡Ups! Ha ocurrido un error",
            "No hay texto encriptado para desencriptar",
            "error"
        );
        return;
    }

    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("img-muñeco");

    let txtDesencriptado = txt
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("txt-desencriptar").value = txtDesencriptado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    munieco.src = "./img/desencriptado.jpg";
}

function copiarTexto() {
    let textoEncriptado = document.getElementById("txt-encriptar").value.trim();

    if (textoEncriptado.length > 0) {
        let tempTextArea = document.createElement("textarea");
        tempTextArea.value = textoEncriptado;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        swal("Texto copiado al portapapeles!", "", "success");

        document.getElementById("txt-desencriptar").value = "";
        document.getElementById("txt-encriptar").value = "";
    } else {
        swal("¡Ups!", "No hay texto encriptado para copiar", "error");
    }
}
