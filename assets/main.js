




var cityBtn = $('#cityBtn')
cityBtn.click(zb)

function zb(){
    var cityInput = $('#cityInput').val()
    

    var apiKey = '5dd607f72025869fc95a703b9eda329e';

 
    var url ='api.openweathermap.org/geo/1.0/direct?q='+ cityInput+'&appid='+ apiKey;

console.log(url)

   fetch(url);
}