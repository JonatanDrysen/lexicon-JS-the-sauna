document.getElementById("tempForm").addEventListener("submit", function checkTemp(event) {
    event.preventDefault()
    const tempF = event.target.elements[0].value
    const tempC = convertFahrenheit(tempF)
})

function convertFahrenheit(tempF) {
    const tempC = Math.floor((tempF - 32) / 1.8)
    return tempC
}