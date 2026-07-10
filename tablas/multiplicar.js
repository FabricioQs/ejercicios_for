function generarTablas() {
    let contenedor = document.getElementById("divTabla");
    let inputValor = document.getElementById("txtTabla").value;
    let numeroTabla = parseInt(inputValor);
    
    // VALIDACIÓN UX (Parte 9): Mensaje claro si el usuario se equivoca
    if (inputValor === "" || isNaN(numeroTabla)) {
        contenedor.innerHTML = `
            <div class="estado-vacio error">
                <span class="icono-vacio">⚠️</span>
                <p>¡Ups! Olvidaste escribir un número.</p>
                <p style="font-size:14px; margin-top:5px; font-weight:normal; color:#94a3b8;">Por favor, ingresa uno válido en la caja de arriba.</p>
            </div>`;
        return; 
    }
    // Construcción dinámica de la tabla
    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabla * i;
        contenido += "<div class='fila-multiplicar'>" + numeroTabla + " x " + i + " = " + resultado + "</div>";
    }
    contenedor.innerHTML = contenido;
    // Llama a la animación al finalizar con éxito
    lanzarFuegosArtificiales();
}




// 1. Agregamos la palabra "evento" entre los paréntesis
function lanzarFuegosArtificiales(evento) {
    const caracteres = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '=', '+', '÷'];
    const cantidadParticulas = 40; 
    
    // 2. Capturamos la posición exacta del clic en la pantalla
    let origenX = evento.clientX + 'px';
    let origenY = evento.clientY + 'px';
    
    for (let i = 0; i < cantidadParticulas; i++) {
        let particula = document.createElement('div');
        particula.className = 'particula-fuego';
        particula.innerText = caracteres[Math.floor(Math.random() * caracteres.length)];
        
        // 3. Hacemos que las partículas nazcan desde la punta del mouse
        particula.style.left = origenX;
        particula.style.top = origenY;
        
        let angulo = Math.random() * Math.PI * 2;
        let distancia = 100 + Math.random() * 200; 
        
        let tx = Math.cos(angulo) * distancia;
        let ty = Math.sin(angulo) * distancia;
        let rotacion = (Math.random() - 0.5) * 360; 
        
        particula.style.setProperty('--tx', `${tx}px`);
        particula.style.setProperty('--ty', `${ty}px`);
        particula.style.setProperty('--rot', `${rotacion}deg`);
        
        document.body.appendChild(particula);
        
        setTimeout(() => {
            particula.remove();
        }, 1000);
    }
}

document.addEventListener('click', lanzarFuegosArtificiales);