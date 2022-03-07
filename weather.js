const weatherAPI={
    key : 'b1dc43dd911f3e674952a03dec501a84',
    userbase : 'api.openweathermap.org/data/2.5/weather'
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let inputCityName = document.getElementById('Search-city');
let searchIcon = document.querySelector('.fa-search');

//  To listen request..
searchIcon.addEventListener("keypress",(event) => {
    if(event.keyCode == 13)
    {
        console.log(inputCityName.value);

    }
});

function getWeather(){  

    inputCityName.featch()
    console.log(inputCityName.value);

}


