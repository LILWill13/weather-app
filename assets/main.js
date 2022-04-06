//sets and adds event listener to search btn
var cityBtn = $('#cityBtn');
var newSearch = JSON.parse(localStorage.getItem('newSearch'))
const citiesli = JSON.parse(localStorage.getItem('cities')) || [];
// calls function displayWeather when seach button is clicked
cityBtn.click(displayWeather);

function displayWeather(e){
    // prevents input area from erasing text after it is clicked
    e.preventDefault();
    // takes todays date
    var date = moment().format('dddd, MMMM Do');
    // connects to h1 element
    var h1El = $('h1')
    // connects to h2 element
    var h2El = $('h2')
    // takes the name of the city searched for
    var cityInput = $('#cityInput').val()
    // sets h1 element to the city that was searched for but in capital letters
    h1El.text(cityInput.toUpperCase())
    // sets h2 elemnt to the date
    h2El.text(date)

    var jmbTem = $('#jumboTemp')
    var jmbWnd = $('#jumboWind')
    var jmbHum = $('#jumboHum')
    var jmbFeel = $('#jumboFeel')

    var apiKey = '073b3ac39929c47e16ee4c7c719fcb54';

 
    var url ='https://api.openweathermap.org/geo/1.0/direct?q='+ cityInput+'&appid='+ apiKey;

    $.ajax({
        url: url,
        method: 'GET',
        }).then(function (response) {
        if(response ==! 'ok'){
            h1El.text('Sorry')
            h2El.text('City not found :/')
            jmbTem.text(' ')
            jmbWnd.text(' ')
            jmbHum.text(' ')
            jmbFeel.text(' ' ) 
        } else {
        var lat = response[0].lat;
        var lon = response[0].lon; 

        var url2 ='https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&units=imperial&appid=' + apiKey;
        
        $.ajax({
            url: url2,
            method: 'GET',
            }).then(function (res) {
                
            var temp = res.main.temp
            var feelsLike = res.main.feels_like
            var wind = res.wind.speed
            var hum = res.main.humidity
            var icon = res.weather[0].icon
                
            jmbTem.text('Tempture: ' + temp + '°F')
            jmbWnd.text('Wind: ' + wind)
            jmbHum.text('Humidity: ' + hum)
            jmbFeel.text('Feels Like: ' + feelsLike + '°F') 
            
            var url3 = 'http://openweathermap.org/img/wn/'+icon +'@2x.png'
            console.log(url3)
            $.ajax({
                url: url3,
                method: 'GET',
                }).then(function (iconImg) {
                    $('#icon').text(iconImg)
                console.log(iconImg)               
            }); 

        }); 
        batMan(e)
    };
}); 
fiveDay(e);
};

function fiveDay(e) {
    e.preventDefault();

    var cityInput =  $('#cityInput').val();
    var apiKey = '073b3ac39929c47e16ee4c7c719fcb54';

    var url ='https://api.openweathermap.org/geo/1.0/direct?q='+ cityInput+'&appid='+ apiKey;

    
    localStorage.setItem('newSearch',JSON.stringify(cityInput));
   
    $.ajax({
        url: url,
        method: 'GET',
        }).then(function (response) {
        if(response ==! 'ok'){
            $('#fiveDay').attr('style','display:none')
        } else {
            $('#fiveDay').attr('style','display:inital')
        var lat = response[0].lat;
        var lon = response[0].lon; 

        var fiveUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&exclude=current,minutely,hourly,alerts&appid='+ apiKey;

        $.ajax({
            url: fiveUrl,
            method: 'GET',
            }).then(function (res) {


            $('#min1').text('Min Tempture: ' + res.daily[0].temp.min + '°F' )
            $('#max1').text('Max Tempture: ' + res.daily[0].temp.max + '°F' )
            $('#uv1').text('UV Index: ' + res.daily[0].uvi )
            $('#hum1').text('Humidity: ' + res.daily[0].humidity)
            $('#wind1').text('Wind Speed: ' + res.daily[0].wind_speed + 'MPH')


            $('#min2').text('Min Tempture: ' + res.daily[1].temp.min + '°F' )
            $('#max2').text('Max Tempture: ' + res.daily[1].temp.max + '°F' )
            $('#uv2').text('UV Index: ' + res.daily[1].uvi )
            $('#hum2').text('Humidity: ' + res.daily[1].humidity)
            $('#wind2').text('Wind Speed: ' + res.daily[1].wind_speed + 'MPH')

            $('#min3').text('Min Tempture: ' + res.daily[2].temp.min + '°F' )
            $('#max3').text('Max Tempture: ' + res.daily[2].temp.max + '°F' )
            $('#uv3').text('UV Index: ' + res.daily[2].uvi )
            $('#hum3').text('Humidity: ' + res.daily[2].humidity)
            $('#wind3').text('Wind Speed: ' + res.daily[2].wind_speed + 'MPH')

            $('#min4').text('Min Tempture: ' + res.daily[3].temp.min + '°F' )
            $('#max4').text('Max Tempture: ' + res.daily[3].temp.max + '°F' )
            $('#uv4').text('UV Index: ' + res.daily[3].uvi )
            $('#hum4').text('Humidity: ' + res.daily[3].humidity)
            $('#wind4').text('Wind Speed: ' + res.daily[3].wind_speed + 'MPH')

            $('#min5').text('Min Tempture: ' + res.daily[4].temp.min + '°F' )
            $('#max5').text('Max Tempture: ' + res.daily[4].temp.max + '°F' )
            $('#uv5').text('UV Index: ' + res.daily[4].uvi )
            $('#hum5').text('Humidity: ' + res.daily[4].humidity)
            $('#wind5').text('Wind Speed: ' + res.daily[4].wind_speed + 'MPH')
            }); 
        };
    }); 
};

function batMan(e) {
    e.preventDefault();
    $('#cityNames').attr('style','display:inital')

    var cityInput =  JSON.parse(localStorage.getItem('newSearch'))

    var createA = $('<a>')
    createA.addClass('list-group-item list-group-item-action py-3 lh-tight')
    var createDiv = $('<div>')
    createDiv.addClass('d-flex w-100 align-items-center justify-content-between')
    var createStrong = $('<Strong>')
    createStrong.addClass('mb-1').text(cityInput.toUpperCase())
    createDiv.append(createStrong)
    createA.append(createDiv)
    var cityList = $('#cityNames')
    cityList.append(createA)
}
    
var clearBtn =  $('#clear');

