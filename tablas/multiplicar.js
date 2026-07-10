function generarTablas() {
    let contenedor = document.getElementById("divTabla");
    let contenido ="";

    for (let i = 1; i<=10; i++ ){
        let resultado = 3 * 1;
         contenido = contenido + "<div class='fila-multiplicar'>3 x " + i + " = " + resultado + "</div>";
    }
    contenedor.innerHTML = contenido;
}