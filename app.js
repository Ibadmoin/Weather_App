var mainTheme = document.querySelector(".mainContainer");
var card = document.getElementById("card");
const log = console.log;

var city = document.querySelector('.input').value ? "" : "karachi";
log(city)

const apiKey = "daff2652b6f168feac89e292fe74e6f2";
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&q=pakistan';
let checkWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  var data = await response.json();
  const { list, city } = data;
  const weatherCondition = list[0].weather[0].id;
  const imgSrc = (weatherCondition > 199 && weatherCondition < 233) ? "images\\thunder-main.gif" :
                 (weatherCondition > 299 && weatherCondition < 532) ? "images\\icons\\rainy.png" :
                 (weatherCondition > 599 && weatherCondition < 623) ? "images\\cloudy-main.png" :
                 (weatherCondition > 700 && weatherCondition < 782) ? "images\\icons\\wind.png" :
                 (weatherCondition > 799 && weatherCondition < 805) ? "images\\hot-main.png" : "";
  document.getElementById('weatherPic').src = imgSrc
  document.getElementById('descriptionWeather').innerHTML = `${list[0].weather[0].description}`;
  document.getElementById('currentTemperature').innerHTML = `${Math.round(data.list[0].main.temp)} °`;
  document.getElementById('currentSpeed').innerHTML = `${Math.round(data.list[0].wind.speed)} Km/h`;
  document.getElementById('currentPrep').innerHTML = `${Math.round(data.list[0].main.humidity)} %`;

  list.map((item) =>{
  const dateTimeString = item.dt_txt;
 log(city)
  const dateTime = new Date(dateTimeString);
  const formattedTime = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const weatherCondition = item.weather[0].id;
  const imgSrc = (weatherCondition > 199 && weatherCondition < 233) ? "images\\thunder-main.gif" :
                 (weatherCondition > 299 && weatherCondition < 532) ? "images\\icons\\rainy.png" :
                 (weatherCondition > 599 && weatherCondition < 623) ? "images\\cloudy-main.png" :
                 (weatherCondition > 700 && weatherCondition < 782) ? "images\\icons\\wind.png" :
                 (weatherCondition > 799 && weatherCondition < 805) ? "images\\hot-main.png" : "";

 

  document.querySelector('.future-forcast').innerHTML += ` 

  <div class="forcast-box">
  <div class="time-div">${formattedTime}</div>
  <div class="forcast-box-img"><img src="${imgSrc}" alt=""></div>
  <div class="forcast-box-temp">
  <h2>${Math.round(item.main.temp)} </h2><span>°</span>
  </div>
  </div>`
})
  
const loader = document.getElementById('loader');
loader.style.display = 'none';

}




var option = 2;
if (option === 1) {
  card.classList.add("storm-theme-cont-bg");
  mainTheme.classList.add("storm-theme-bg");

} else if (option === 2) {
  card.classList.add("hot-theme-cont-bg");
  mainTheme.classList.add("hot-theme-bg");

} else if (option === 3) {
  card.classList.add("cloud-theme-cont-bg");
  mainTheme.classList.add("cloud-theme-bg");
}


window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  checkWeather()
  loader.style.display = 'flex';
});


