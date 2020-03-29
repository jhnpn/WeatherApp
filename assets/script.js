$(document).ready(function () {
    // I want to be able to look up the city by seraching it from the text area
    // global variables
    var weatherIcon = $(".weather-icon");
    var tempValue = $(".temperature-value");
    var tempDescription = $(".temperature-description");
    var location = $(".location");

    $("#search").on("keypress", function (e) {
        let city = e.target.value;
        if (e.key === "Enter") {
            // for loop function

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=680197ef6bd6e3fad50a718e18f05e54", function (data) {
                console.log(data)
                // need to grab the img for the icon
                var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                // console.log(icon) //should give us the link of the icon when we console log it
                var temp = Math.floor(data.main.temp); //Math.floor will round the temp whole
                var weather = data.weather[0].main;
                var location = data.sys.name;

                // now we are plugging it into the icon class
                $(".weather-icon").attr("src", icon);
                $(".temperature-value").append(temp);
                $(".temperature-description").append(weather);
                $(".location").append(location);
            })
        }
    })

    // for loop
    for (var i = 0; i < data.length; i++) {
        
    }
})