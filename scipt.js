var apiKey = "&limit=5&appid=aa51d6b8f27c7b03af05a72599465512";
var url = "http://api.openweathermap.org/geo/1.0/direct?q=";

var userInput = $('.user-input');
var btn = $('.btn');


function searchApi() {
    fetch(url + userInput + apiKey)
}

btn.onClick = searchApi();