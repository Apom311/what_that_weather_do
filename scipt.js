var cityResult = $("#city");
var tempResult = $("#temp");
var humidityResult = $("#humidity");
var windResult = $("#windSpeed");
var mainIcon = $("#mainIcon");
var indexUV = $("#indexUV");
var forecastCards = $("#forecastCards");
var forecastRow = $("#forecastRow");
var btnList = $("#btnList");
var forecastDate = {};
var forecastIcon = {};
var forecastTemp = {};
var forecastHumidity = {};
var today = moment().format('DD' + '/' + 'MM' + '/' + 'YYYY');
var APIKey = "&units=metric&APPID=aa51d6b8f27c7b03af05a72599465512";
var url = "https://api.openweathermap.org/data/2.5/weather?q=";
var citiesArray = JSON.parse(localStorage.getItem("Saved City")) || [];
var searchInput = $("#searchInput");

$(document).ready(function (){
    var userInput = citiesArray[citiesArray.length - 1];
    currentWeather(userInput);
    forecast(userInput);
    lastSearch ();
});

function storeData (userInput) {
    var userInput = searchInput.val().trim().toLowerCase();
    var containsCity = false;

    if (citiesArray != null) {

		$(citiesArray).each(function(x) {
			if (citiesArray[x] === userInput) {
				containsCity = true;
			}
		});
	}

	if (containsCity === false) {
        citiesArray.push(userInput);
	}

	localStorage.setItem("Saved City", JSON.stringify(citiesArray)
);}

$(".btn").on("click", function (event){
    event.preventDefault();
    if (searchInput.val() === "") {
    alert("Please type a userInput to know the current weather");
    } else
    var userInput = searchInput.val().trim().toLowerCase();
    currentWeather(userInput);
    forecast(userInput);
    storeData();
    lastSearch();
    searchInput.val("");
});

function lastSearch () {
    btnList.empty()
    for (var i = 0; i < citiesArray.length; i ++) {
        var newButton = $("<button>").attr("type", "button").attr("class","savedBtn btn btn-secondary btn-lg btn-block");
        newButton.attr("data-name", citiesArray[i])
        newButton.text(citiesArray[i]);
        btnList.prepend(newButton);
    }
    $(".savedBtn").on("click", function(event){
        event.preventDefault();
        var userInput = $(this).data("name");
        currentWeather(userInput);
        forecast(userInput);
    })

}