

let btnEncriptar = document.getElementsByClassName('btn__encriptar');
let btnDesencriptar = document.getElementsByClassName('btn__desencriptar');
let btnCopiar = document.getElementById('btn__copiar');
let entrada = document.getElementById('entrada');
let resultado = document.getElementById('resultado');
let msgError = document.getElementById('msgError');
let msgSalida = document.getElementById('salida__mensaje');
let imagen = document.getElementById('imagen');

function encriptar() {
    let entradaValue = entrada.value;
    let regex = /^[a-z\s]+$/;
    if (!regex.test(entradaValue)) {
        activarAnimacion();
        return;
    }
    btnCopiar.style.display = 'block';
    resultado.style.display = 'block';
    let letras = entradaValue.split('');
    let mensajeEncriptado = letras.map(encriptacion).join('');
    resultado.innerHTML = mensajeEncriptado;
    entrada.value = '';
    msgSalida.style.display = 'none';
    imagen.style.display= 'none';
    if (msgError.classList.contains('cambiar-color')) {
        msgError.classList.remove('cambiar-color');
    }
}

function activarAnimacion() {
    console.log(msgError.classList);
    msgError.classList.add('vibrar', 'cambiar-color');

    // Remover la clase de vibrar después de un tiempo para detener la animación
    setTimeout(() => {
        msgError.classList.remove('vibrar');
    }, 1000); // La animación de vibración durará 1 segundo
}

function encriptacion(letra) {
    switch (letra) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return letra;
    }
}

function desencriptar() {
    let entradaValue = entrada.value;
    let mensajeDesencriptado = entradaValue.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');
    resultado.innerHTML = mensajeDesencriptado;
    entradaValue = '';
}

function copiarTexto() {
    entrada.value = resultado.textContent;
    navigator.clipboard.writeText(resultado.textContent);
}

function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualiza la hora cada segundo
setInterval(updateTime, 1000);

// Llama a updateTime al cargar la página para mostrar la hora de inmediato
updateTime();
