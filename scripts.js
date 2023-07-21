

const key = "3a91ce544880259ebd656f058014fcdc"

function putDataOnScreen(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".climate").innerHTML =Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "% de Umidade"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
}

async function searchCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    putDataOnScreen(dados)
}



function clik() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}