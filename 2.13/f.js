function calcularAhorros() {
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const porcentajeAhorro = 0.15;
    const semanasAlMes = 4;
    const mesesAlAño = 12;

    if (isNaN(sueldo) || sueldo < 0) {
        document.getElementById("resul").textContent = "Ingresa un sueldo válido mayor o igual a cero.";
        return;
    }

    const ahorroSemanal = sueldo * porcentajeAhorro;
    const ahorroMensual = ahorroSemanal * semanasAlMes;
    const ahorroAnual = ahorroMensual * mesesAlAño;

    document.getElementById("resul").innerHTML =
        `Ahorro semanal: $${ahorroSemanal.toFixed(2)}.<br>` +
        `Ahorro mensual: $${ahorroMensual.toFixed(2)}.<br>` +
        `Ahorro anual: $${ahorroAnual.toFixed(2)}.`;
}
