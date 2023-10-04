document.getElementById("convertBtn").addEventListener("click", function () {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        const result = (inputTemp * 9/5) + 32;
        document.getElementById("result").textContent = `${inputTemp}°C is ${result}°F`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        const result = (inputTemp - 32) * 5/9;
        document.getElementById("result").textContent = `${inputTemp}°F is ${result}°C`;
    } else {
        document.getElementById("result").textContent = "Please select valid units for conversion.";
    }
});
