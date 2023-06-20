// var mainTheme = document.querySelector(".mainContainer");
// var card = document.getElementById("card");


// console.log(mainTheme);
// console.log(card);


// var option = +prompt("ENter 1 for storm, 2 for hot , and 3 for cloud");
// if (option === 1) {
//     card.classList.add("storm-theme-cont-bg");
//     mainTheme.classList.add("storm-theme-bg");
    
// } else if(option === 2){
//     card.classList.add("hot-theme-cont-bg");
//     mainTheme.classList.add("hot-theme-bg");

// } else if(option === 3){
//     card.classList.add("cloud-theme-cont-bg");
//     mainTheme.classList.add("cloud-theme-bg");
// }



// fetching weather data from open weather //


function fetchWeatherData(city) {
    const apiKey = "47f182b75a84942b34dadbc2f6521870";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch (apiUrl)
    .then(reponse => reponse.json())
    .then (data =>{
        updateWeatherUI(data);
    }).catch (error => {
        console.log('Error:', error);
    });

};


// update Weather information in UI


function updateWeatherUI(data) {
    const weatherType = document.getElementById("weather-detail");
    const temperature =  document.getElementById("temp-detail");
    const windDetails =  document.getElementById("wind-detail");
    const humidityDetails =  document.getElementById("perp-detail");
    const weatherImg = document.getElementById("weather-img");


    // Exacting requried data form weather data object//
    
    const description = data.weather[0].description;
    const temp = data.main.temp;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    // updating Ui with the exracted info//

    weatherType.textContent = description;
    temperature.textContent = `${Math.round(temp - 273.15)} °`;
    windDetails.textContent = `${windSpeed} km/h`;
    humidityDetails.textContent = `${humidity}%` ;

    if(description.toLowerCase().includes("thunderstorm")){
        weatherImg.src = "./images/thunder-main.gif";

    } else if(description.toLowerCase().includes("rain")){
        weatherImg.src = "./images/rain.png";
    } else if (description.toLowerCase().includes("cloud")){
        weatherImg.src = "./images/cloudy-main.png";
    } else {
        weatherImg.src = "./images/hot-main.png";
    }
   


}



const inputField = document.getElementById("city-input");

inputField.addEventListener('keydown', function(event){
    if(event.key === 'Enter') {
        const city = inputField.value;
        fetchWeatherData(city);
    }
})

const search = document.getElementById("search-icon");

search.addEventListener("click", ()=>{
    if(inputField === ""){
        console.log("empty");
    } else {
        const city = inputField.value;
        fetchWeatherData(city)
    }
})


