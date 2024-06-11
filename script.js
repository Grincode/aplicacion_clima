const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const APY_KEY = '759d98343b240c97e7b815b2f4dacbaf'
const diffKelvin = 273.15

document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        // llamar a la API para que traiga datos del clima
        fetchWeather(city)
    } else {
        alert("Por favor, ingresa una ciudad valida.")
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${APY_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponseData = document.getElementById("responseData")
    divResponseData.innerHTML = ""

    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement("h2")
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `La Temperatura es: ${Math.floor(temp - diffKelvin)}°C`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `La humedad es: ${humidity}%`

    const iconInfo = document.createElement("img")
    iconInfo.src = `http://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = `El clima es: ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(iconInfo)
    divResponseData.appendChild(descriptionInfo)
}

