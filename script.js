function calculateTotal() {
    const numCameras = parseInt(document.getElementById("numCameras").value);
    const totalCost = 300 + (numCameras - 2) * 150;
    document.getElementById("totalCost").textContent = `Total: £${totalCost}`;
}

function selectPlan(numCameras) {
    document.getElementById("numCameras").value = numCameras;
    calculateTotal();
}
