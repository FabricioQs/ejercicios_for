function generarTablas() {
    let contenedor = document.getElementById("divTabla");
    let numeroTabla = parseInt(document.getElementById("txtTabla").value);
    let contenido = "";
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroTabla * i;
        contenido = contenido + "<div class='fila-multiplicar'>" + numeroTabla + " x " + i + " = " + resultado + "</div>";
    }
    contenedor.innerHTML = contenido;
}