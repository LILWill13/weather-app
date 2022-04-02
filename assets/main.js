

var cityInput = $('#cityInput').value


var cityBtn = $('#cityBtn')


var apiKey = '5dd607f72025869fc95a703b9eda329e';

 var url ='api.openweathermap.org/data/2.5/weather?q='+ cityInput +'&appid='+ apiKey;
 console.log(url)
