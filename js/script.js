function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function encriptarTexto() {
    let inputTexto = document.getElementById('inputTexto').value;
    let textoEncriptado = encriptar(inputTexto);
    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    let inputTexto = document.getElementById('inputTexto').value;
    let textoDesencriptado = desencriptar(inputTexto);
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const outputMensaje = document.getElementById('outputMensaje');
    const placeholderImage = document.getElementById('placeholderImage');
    const btnCopy = document.getElementById('btn-copy');
    const mensajeInicial = document.getElementById('mensajeInicial');

    outputMensaje.innerText = texto || "Ningún mensaje fue encontrado";
    if (texto) {
        placeholderImage.style.display = 'none';
        btnCopy.style.display = 'block';
        mensajeInicial.style.display = 'none';
    } else {
        placeholderImage.style.display = 'block';
        btnCopy.style.display = 'none';
        mensajeInicial.style.display = 'block';
    }
}

function copiarTexto() {
    const outputMensaje = document.getElementById('outputMensaje').textContent;
    navigator.clipboard.writeText(outputMensaje).then(() => {
        mostrarMensajeCopiado();
    });
}

function mostrarMensajeCopiado() {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}