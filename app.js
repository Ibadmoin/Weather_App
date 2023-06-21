var mainTheme = document.querySelector(".mainContainer");
var card = document.getElementById("card");
let data = null;
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

const apiKey = "daff2652b6f168feac89e292fe74e6f2";

function checkWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { list, city } = data;
      document.getElementById('currentTemperature').innerHTML = `${Math.round(data.list[0].main.temp)}°`;
      document.getElementById('currentSpeed').innerHTML = `${Math.round(data.list[0].wind.speed)} Km/h`;
      document.getElementById('currentPrep').innerHTML = `${Math.round(data.list[0].main.humidity)} %`;
      document.getElementById('weatherType').innerHTML = list[0].weather[0].description; // Get the weather description for the current weather item
      const weatherType = list[0].weather[0].description;
      const mainImg = document.getElementById('mainImg');
      
    // weather images according to weather types//
    
    
  
    
    if (weatherType.toLowerCase().includes("thunderstorm")) {
      mainImg.src = "./images/thunder-main.gif";
      mainTheme.style.background = "linear-gradient(180deg, #f4b17c, #f8c07f)";
      card.style.background = "linear-gradient(to left, #f9e177, #ffbe94)";
    } else if (weatherType.toLowerCase().includes("rain")) {
      mainImg.src = "./images/rain.png";
    } else if (weatherType.toLowerCase().includes("cloud")) {
      mainImg.src = "./images/cloudy-main.png";
      mainTheme.style.background = "linear-gradient(180deg, #59d8d6, #6ae7e6)";
      card.style.background = "linear-gradient(to left, #59d8d6, #6ae7e6)";
    } else if (weatherType.toLowerCase().includes("clear sky")) {
      mainImg.src = "./images/hot-main.png";
      mainTheme.style.background = "linear-gradient(180deg, #f4b17c, #f8c07f)";
      card.style.background = "linear-gradient(to left, #f9e177, #ffbe94)";
    } else if (weatherType.toLowerCase().includes("snow")){

    } else if (weatherType.toLowerCase().includes("mist")){

    }
    


    // weather images according to weather types// 

    //

      // log(list);
      list.map((item) => {
        const dateTimeString = item.dt_txt;
        const dateTime = new Date(dateTimeString);
        const formattedTime = dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
        console.log(item.weather[0].description); // Log the weather description
        let imgSrc;
        // condtions to check weaher type of futre forcast box & update them accordingly//
        if(weatherType.toLowerCase().includes("cloud")){
          imgSrc = "./images/icons/cloud.png";
        } else if (weatherType.toLowerCase().includes("rain")){
          imgSrc = "./images/icons/rainy.png";
        } else if (weatherType.toLowerCase().includes("snow")){
          imgSrc = "./images/icons/snowflake.png";

        }else if (weatherType.toLowerCase().includes("thunderstorm")){
          imgSrc = "./images/icons/lightning.png";

        } else if (weatherType.toLowerCase().includes("mist")){
          imgSrc = "./images/icons/wind.png";
        } else if (weatherType.toLowerCase().includes("clear")){
          imgSrc = "./images/icons/sunny-day.png";
        }





        // condtions to check weaher type of futre forcast box & update them accordingly//

        document.querySelector('.future-forcast').innerHTML += ` 
          <div class="forcast-box">
            <div class="time-div">${formattedTime}</div>
            <div class="forcast-box-img"><img src="${imgSrc}" alt=""></div>
            <div class="forcast-box-temp">
              <h2  style="text-align:center;">${Math.round(item.main.temp)} </h2><span>°</span>
            </div>
          </div>`;
          console.log(item.main.temp);
      });
    })
    .catch(error => {
      console.log("Error fetching weather data:", error);

      // sweet alert popup//
      swal({
        title: "Error",
        text: "Enter correct city name",
        icon: "error",
        button: "Ok!",
        
      }
      
      ).then(()=>{
        inputFeild.value = "";
      })
      // sweet alert popup//
      

    });
}

checkWeather();

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
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});