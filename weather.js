const weatherAPI={
    key : 'b1dc43dd911f3e674952a03dec501a84',
    userbase : 'http://api.openweathermap.org/data/2.5/weather'
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let inputCityName = document.getElementById('Search-city');
// let searchIcon = document.querySelector('.fa-search');

//  To listen request..
inputCityName.addEventListener('keypress',(event) => {
    if(event.keyCode == 13)
    {
        console.log(inputCityName.value);
        getWeatherReport(inputCityName.value);
    }
});

// Get Weather Reprot

function getWeatherReport(city){  

    fetch(`${weatherAPI.userbase}?q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
    // console.log(inputCityName.value);

}

// Show Weather Report 
function showWeatherReport(weather){
    console.log(weather);
    
    let welcome = document.getElementById('welcome');
    welcome.style.visibility = 'hidden';
    welcome.style.display = 'none';
    
    let weather_content = document.getElementById('weather-content');
    weather_content.style.visibility = 'visible';
    
    let city = document.getElementById('city');
    city.innerText = `${weather.name} ${weather.sys.country}`;
    
    let temp = document.getElementById('temp');
    temp.innerText = `${parseInt(weather.main.temp)} ℃`;
    
    let type = document.getElementById('type');
    type.innerText = `${weather.weather[0].description}`;
    
    let Showdate = document.getElementById('date');
    var date = new Date();
    var dateonly = date.toLocaleDateString('en-IN');
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    var time = date.getHours();
    Showdate.innerText = `${dateonly}`;
    console.log(time);
    if(type === 'cloudy'){
        var weatherImage = document.getElementById('weatherImage');
        weatherImage.src = './cloudySun.png';
    }
    else if(time > 18)
    {
        var weatherImage = document.getElementById('weatherImage');
        console.log(time+"hel");
        weatherImage.src = './nightImage.jpg';
    }
    else if(time > 9 && time < 17)
    {
        var weatherImage = document.getElementById('weatherImage');
        console.log(time+"hel");
        weatherImage.src = './daysun.jpg';
    }

}

