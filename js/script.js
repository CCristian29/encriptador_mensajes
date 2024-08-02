
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
    document.getElementById('outputMensaje').innerText = textoEncriptado || "Ningún mensaje fue encontrado";
    document.getElementById('outputMostrarMensaje').innerText = ''
    togglePlaceholderImage(textoEncriptado);
}

function desencriptarTexto() {
    let inputTexto = document.getElementById('inputTexto').value;
    let textoDesencriptado = desencriptar(inputTexto);
    document.getElementById('outputMensaje').innerText = textoDesencriptado || "Ningún mensaje fue encontrado";
    document.getElementById('outputMostrarMensaje').innerText = ''
    togglePlaceholderImage(textoDesencriptado);
}

function togglePlaceholderImage(texto) {
    let placeholderImage = document.getElementById('placeholderImage');
    if (texto) {
        placeholderImage.style.display = 'none';
    } else {
        placeholderImage.style.display = 'block';
    }
}
