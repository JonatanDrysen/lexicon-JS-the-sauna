    document.getElementById("tempForm").addEventListener("submit", checkTemp = (event) => {
        event.preventDefault()
        const tempF = event.target.elements[0].value
        const tempC = convertFahrenheit(tempF)
        const okTemp = isTempOK(tempC)
        if(okTemp !== undefined) {
            console.log(`Temperature is set to ${okTemp}° Celsius.`)
        }
    })

    function convertFahrenheit(tempF) {
        const tempC = Math.floor((tempF - 32) / 1.8)
        return tempC
    }

    function isTempOK(tempC) {
        const allowedTemps = [73, 74, 75, 76, 77]
        let result
        
        for(const temp of allowedTemps) {
            if(tempC < temp) {
                alert(`That is only ${tempC}°C! Turn it up!`)
                break;
            } else if(tempC === 75) {
                alert(`That is ${tempC}°C, perfect!`)
                result = tempC
                break;
            } else if(allowedTemps.includes(tempC)) {
                alert(`That is ${tempC}°C, temp ok!`)
                result = tempC
                break;
            } else {
                alert(`That is ${tempC}°C! Too hot!`)
                break;
            }
        }
        return result
    }