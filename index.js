// Función para encriptar texto
function encriptarTexto(texto) {
  const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  // Aplicar encriptación letra por letra
  let textoEncriptado = '';
  for (let letra of texto) {
    //se verifica si la letra actual (letra) está definida en el objeto encriptacion usando encriptacion.hasOwnProperty(letra).
    if (encriptacion.hasOwnProperty(letra)) {
      textoEncriptado += encriptacion[letra];
    } else {
      textoEncriptado += letra; // Mantener cualquier caracter que no esté en las reglas
    }
  }
  return textoEncriptado;
}

// Función para desencriptar texto (invertir el proceso)
function desencriptarTexto(textoEncriptado) {
  // Objeto que define las reglas de desencriptación
  const desencriptacion = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  // Iterar sobre cada palabra encriptada y su correspondiente letra original
  for (let palabraEncriptada in desencriptacion) {
    // Obtener la letra original correspondiente a la palabra encriptada (Reemplaza a lo que coincide en el objeto)
    let letraOriginal = desencriptacion[palabraEncriptada];
    
    // Reemplazar todas las ocurrencias de la palabra encriptada por la letra original
    textoEncriptado = textoEncriptado.split(palabraEncriptada).join(letraOriginal);
  }
  // Devolver el texto desencriptado
  return textoEncriptado;
}



// Obtener elementos del DOM
const textarea = document.querySelector('textarea');
const btnEncriptar = document.querySelector('.btn1');
const btnDesencriptar = document.querySelector('.btn2');
const section2 = document.querySelector('.section2');
const mensajeEncriptado = document.createElement('p');
const btnCopiar = document.createElement('button');
btnCopiar.textContent = 'Copiar';

// Función para mostrar el texto encriptado o desencriptado en la interfaz
function mostrarTextoTransformado(textoTransformado) {
  // Limpiar sección 2
  section2.innerHTML = '';

  // Mostrar texto transformado
  mensajeEncriptado.textContent = textoTransformado;
  section2.appendChild(mensajeEncriptado);

  // Mostrar botón de copiar
  btnCopiar.classList.add('btn3');
  section2.appendChild(btnCopiar);
}

// Event listeners para botones de encriptar y desencriptar
btnEncriptar.addEventListener('click', function() {
  const texto = textarea.value;
  const textoEncriptado = encriptarTexto(texto);
  mostrarTextoTransformado(textoEncriptado);
});

btnDesencriptar.addEventListener('click', function() {
  const textoEncriptado = textarea.value;
  const textoDesencriptado = desencriptarTexto(textoEncriptado);
  mostrarTextoTransformado(textoDesencriptado);
});

// Función para copiar texto al portapapeles
btnCopiar.addEventListener('click', function() {
  navigator.clipboard.writeText(mensajeEncriptado.textContent)
    .then(() => {
      alert('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
});
