function calcularPrecioFinal() {
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = 0.20;
    const iva = 0.15;

    if (isNaN(precio) || precio < 0) {
        document.getElementById("resul").textContent = "Ingresa un precio válido mayor o igual a cero.";
        return;
    }

    const precioConDescuento = precio * (1 - descuento);
    const precioFinal = precioConDescuento * (1 + iva);

    document.getElementById("resul").innerHTML =
        `Precio con descuento: $${precioConDescuento.toFixed(2)}.<br>` +
        `Precio final con IVA: $${precioFinal.toFixed(2)}.`;
}
