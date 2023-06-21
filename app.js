var mainTheme = document.querySelector(".mainContainer");
var card = document.getElementById("card");
const log = console.log;
const searchbtn = document.getElementById("searchbtn");
const inputFeild = document.getElementById("city-input");
console.log(searchbtn);
console.log(inputFeild);
var city = "karachi";



//search button functionality on input feild//
searchbtn.addEventListener("click", () => {
  if (inputFeild.value === "") {
    console.log("empty");
    swal({
      title: "Error",
      text: "Enter any city name",
      icon: "error",
      button: "Ok!",
    });
   
    // add sweetalert here..?
  } else {
   city = inputFeild.value.replace(/[\s.]/g, ""); 
    console.log(city);
    checkWeather(); // Call the checkWeather function to update weather with the new city
  }
});
//search button functionality on input feild//
//---------------------------------------------//
// Enter key functionality on input feild//
inputFeild.addEventListener("keydown", (event)=>{
  if(event.key == "Enter"){
   city = inputFeild.value.replace(/[\s.]/g, "");  // will remove all white spaces from string//
    checkWeather();
  }
});
// Enter key functionality on input feild//

var city = document.querySelector('.input').value ? "" : "karachi";
log(city)

const apiKey = "daff2652b6f168feac89e292fe74e6f2";
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&q=karachi';
let checkWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  var data = await response.json();
  const { list, city } = data;
  document.getElementById('currentTemperature').innerHTML = `${Math.round(data.list[0].main.temp)} °`;
  document.getElementById('currentSpeed').innerHTML = `${Math.round(data.list[0].wind.speed)} Km/h`;
  document.getElementById('currentPrep').innerHTML = `${Math.round(data.list[0].main.humidity)} %`;

  log(list)
list.map((item) =>{
  const dateTimeString = item.dt_txt;
  const dateTime = new Date(dateTimeString);
  const formattedTime = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  document.querySelector('.future-forcast').innerHTML += ` 
  <div class="forcast-box">
  <div class="time-div">${formattedTime}</div>
  <div class="forcast-box-img"><img src="./images/icons/lightning.png" alt=""></div>
  <div class="forcast-box-temp">
  <h2>${item.main.temp} </h2><span>°</span>
  </div>
  </div>`
})
  
}



checkWeather()



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
