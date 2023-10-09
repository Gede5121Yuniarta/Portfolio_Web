function calculateFibonacci() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    if (!isNaN(inputNumber)) {
        const result = fibonacci(inputNumber);
        document.getElementById("fibonacciResult").textContent = result.toString();
    } else {
        alert("Masukkan angka yang valid.");
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

document.getElementById("calculateButton").addEventListener("click", calculateFibonacci);