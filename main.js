let ultimaFechaHora = null;

function executeActions(ultimaOrden) {
    const enciendeRecam = 'enciende la luz de la recámara';
    const apagaRecam = 'apaga la luz de la recámara';
    const enciendeSala = 'enciende la luz de la sala';
    const apagaSala = 'apaga la luz de la sala';
    const enciendeJardin = 'enciende las luces del jardín';
    const apagaJardin = 'apaga las luces del jardín';
    const enciendeVenti = 'enciende el ventilador';
    const apagaVenti = 'apaga el ventilador';
    const abreCortinas = 'abre las cortinas';
    const cierraCortinas = 'cierra las cortinas';
    const activaAlarm = 'activa la alarma de la casa';
    const desacAlarm = 'desactiva la alarma de la casa';
    const enciendeCam = 'enciende las cámaras de seguridad';
    const apagaCam = 'apaga las cámaras de seguridad';

    let mostrarOrden = ultimaOrden; // Guardar la última orden para mostrarla en el recuadro

    //Para encender luz de la recámara
    if(ultimaOrden.includes(enciendeRecam)) { //Para encontrar palabra en específico
        const imagen = document.querySelector('.overlay-foco1');
        if(imagen) {
            imagen.src = 'media/foco-encendido.gif';
            imagen.alt = 'Foco recámara encendido';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para apagar luz de la recámara
    if(ultimaOrden.includes(apagaRecam)) {
        const imagen1 = document.querySelector('.overlay-foco1');
        if (imagen1) {
            imagen1.src = 'media/foco-apagado.png';
            imagen1.alt = 'Foco recámara apagado';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para encender luz sala
    if(ultimaOrden.includes(enciendeSala)) {
        const imagen2 = document.querySelector('.overlay-foco2');
        if (imagen2) {
            imagen2.src = 'media/foco-encendido.gif';
            imagen2.alt = 'Foco sala encendido';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para apagar luz sala
    if(ultimaOrden.includes(apagaSala)) {
        const imagen3 = document.querySelector('.overlay-foco2');
        if (imagen3) {
            imagen3.src = 'media/foco-apagado.png';
            imagen3.alt = 'Foco sala apagado';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para encender luz jardin
    if(ultimaOrden.includes(enciendeJardin)) {
        const imagen4 = document.querySelectorAll('.overlay-foco3, .overlay-foco4, .overlay-foco5, .overlay-foco6, .overlay-foco7');
        if (imagen4.length > 0) {
            imagen4.forEach(imagenes => {
                imagenes.src = 'media/foco-encendido.gif';
                imagenes.alt = 'Focos jardín encendidos';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para apagar luz jardin
    if(ultimaOrden.includes(apagaJardin)) {
        const imagen5 = document.querySelectorAll('.overlay-foco3, .overlay-foco4, .overlay-foco5, .overlay-foco6, .overlay-foco7');
        if (imagen5.length > 0) {
            imagen5.forEach(imagenes => {
                imagenes.src = 'media/foco-apagado.png';
                imagenes.alt = 'Focos jardín apagados';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para encender ventilador
    if(ultimaOrden.includes(enciendeVenti)) {
        const imagen6 = document.querySelector('.overlay-ventilador');
        if (imagen6) {
            imagen6.src = 'media/ventilador-encendido.gif';
            imagen6.alt = 'Ventilador encendido';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para apagar ventilador
    if(ultimaOrden.includes(apagaVenti)) {
        const imagen7 = document.querySelector('.overlay-ventilador');
        if (imagen7) {
            imagen7.src = 'media/ventilador-apagado.png';
            imagen7.alt = 'Ventilador apagado';
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para abrir cortinas
    if(ultimaOrden.includes(abreCortinas)) {
        const imagen8 = document.querySelectorAll('.overlay-cortina1, .overlay-cortina2, .overlay-cortina3');
        if (imagen8.length > 0) {
            imagen8.forEach(imagen => {
                imagen.src = 'media/cortinas-abiertas.gif';
                imagen.alt = 'Cortinas abiertas';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para cerrar cortinas
    if(ultimaOrden.includes(cierraCortinas)) {
        const imagen9 = document.querySelectorAll('.overlay-cortina1, .overlay-cortina2, .overlay-cortina3');
        if (imagen9.length > 0) {
            imagen9.forEach(imagen => {
                imagen.src = 'media/cortinas-cerradas.png';
                imagen.alt = 'Cortinas cerradas';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para activar alarmas
    if(ultimaOrden.includes(activaAlarm)) {
        const imagen10 = document.querySelector('.overlay-alarma');
        const audio = new Audio('media/encender.mp3');
        if (imagen10) {
            imagen10.src = 'media/alarma-encendida.png';
            imagen10.alt = 'Alarma encendida';
            audio.play();
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para desactivar alarmas
    if(ultimaOrden.includes(desacAlarm)) {
        const imagen11 = document.querySelector('.overlay-alarma');
        const audio = new Audio('media/apagar.mp3');
        if (imagen11) {
            imagen11.src = 'media/alarma-apagada.png';
            imagen11.alt = 'Alarma apagada';
            audio.play();
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para encender camaras
    if(ultimaOrden.includes(enciendeCam)) {
        const imagen12 = document.querySelectorAll('.overlay-camara1, .overlay-camara2, .overlay-camara3');
        if (imagen12.length > 0) {
            imagen12.forEach(imagen => {
                imagen.src = 'media/camara-mov.gif';
                imagen.alt = 'Cámaras encendidas';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    //Para apagar camaras
    if(ultimaOrden.includes(apagaCam)) {
        const imagen13 = document.querySelectorAll('.overlay-camara1, .overlay-camara2, .overlay-camara3');
        if (imagen13.length > 0) {
            imagen13.forEach(imagen => {
                imagen.src = 'media/camara-off.png';
                imagen.alt = 'Alarma apagada';
            });
        } else {
            console.error("No se encontró la imagen para cambiar");
        }
    }

    // Mostrar la última orden en el recuadro
    document.getElementById('orden').innerText = mostrarOrden;
    console.log("Ejecutando acciones para:", ultimaOrden);
}

function obtenerUltimaOrden() {
    axios.get('https://660f6f5a356b87a55c51616a.mockapi.io/ordenes')
        .then(function(response) {
            if (response.data.length > 0) { // Verificar si hay registros
                const ultimaOrden = response.data[response.data.length - 1].orden; // Obtener el contenido de la última orden
                const ultimaFechaHoraOrden = response.data[response.data.length - 1].fecha; // Obtener la fecha y hora de la última orden
                console.log("Última orden:", ultimaOrden); // Mostrar el contenido en la consola
                console.log("Fecha y hora de la última orden:", ultimaFechaHoraOrden); // Mostrar la fecha y hora en la consola

                // Verificar si la última fecha y hora son diferentes a la última fecha y hora consultadas
                if (ultimaFechaHora !== ultimaFechaHoraOrden) {
                    executeActions(ultimaOrden); // Ejecutar la última orden obtenida
                    ultimaFechaHora = ultimaFechaHoraOrden; // Actualizar la última fecha y hora consultadas
                } else {
                    console.log("La última orden es la misma que la anterior. No se ejecutan acciones.");
                }
            } else {
                console.log("No hay registros disponibles");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

// Llamar a la función para obtener la última orden cada 2 segundos
setInterval(obtenerUltimaOrden, 2000);