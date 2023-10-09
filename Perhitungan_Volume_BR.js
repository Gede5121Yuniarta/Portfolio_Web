// script.js
function hitungVolume() {
    const selectedShape = document.getElementById("shapeSelect").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    switch (selectedShape) {
        case "cube":
            result = Math.pow(inputValue, 3);
            break;
        case "sphere":
            result = (4 / 3) * Math.PI * Math.pow(inputValue, 3);
            break;
        case "cylinder":
            result = Math.PI * Math.pow(inputValue, 2) * inputValue;
            break;
        default:
            result = "Pilih bangun ruang terlebih dahulu.";
    }

    // Mengatur hasil langsung tanpa "Volume: "
    document.getElementById("result").textContent = `${result.toFixed(2)}`;
}