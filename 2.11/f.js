function calcularPago() {
    const consumo = parseFloat(document.getElementById("consumo").value);
    const precioPorKw = 15;

    if (isNaN(consumo) || consumo < 0) {
        document.getElementById("resul").textContent = "Ingresa un consumo válido mayor o igual a cero.";
        return;
    }

    const pago = consumo * precioPorKw;
    document.getElementById("resul").textContent = `El pago por ${consumo.toFixed(2)} KW es $${pago.toFixed(2)}.`;
}
