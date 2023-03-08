function buttonClicked(){
    var city = document.getElementById("countryInput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var temp = data.main.temp ;
        document.getElementById("dis").innerHTML = "Italy temp : " + temp ;
        var tempCelsius = (data.main.temp - 273.15).toFixed(2);
        console.log(city + " temp: " + (data.main.temp - 273.15).toFixed(2))
        document.getElementById("display").innerHTML = "Temp in celsius : " + tempCelsius + " celsius"
        var wind = data.wind.speed;
        var wind1 = data.wind.deg;
        var wind2 = data.wind.gust;
        document.getElementById("dis1").innerHTML = "Italy Wind " + "<br>Deg : " + wind1 + "<br>Gust : " + wind2 + "<br>Speed : " + wind;
        var weather = data.weather[0].main;
        var weather1 = data.weather[0].description;
        document.getElementById("dis2").innerHTML = "Italy Weather : " + weather + " and " + " Description : " + weather1;
        var coord = data.coord.lat;
        var coord2 = data.coord.lon;
        document.getElementById("dis3").innerHTML = "Italy Coordinat Latitude : " + coord + " and " + " Coordinat Longitude : " + coord2;
        var time = data.sys.sunrise;
        var time1 = data.sys.sunset;
        document.getElementById("dis4").innerHTML = "Italy Sunrise : " + time + " and " + "Italy Sunset : " + time1;









    })

}

