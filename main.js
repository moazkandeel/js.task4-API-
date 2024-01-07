




// async function getData(type){

//     var response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4db353f8df42425a9b4173928233112&q=${type}&days=3`,{

//         method: 'POST',
//     });
    
//     var data = await response.json()
//     console.log(data.location);


// }

// (async function getAlllocation(){

//     await getData('cairo')
//     await getData('london')

// })()


document.querySelector("input").addEventListener("keyup",function (eventInfo) {

    getApi(eventInfo.target.value)
    console.log(eventInfo.target.value)})

    function getApi( type) {
  
        if (type==null) {
            type="cairo"
            
        }
            var topHeading = new XMLHttpRequest();
            topHeading.open(
              "get",`https://api.weatherapi.com/v1/forecast.json?key=a11d7636586f47a491c122448240601&q=${type}07112&days=3` );
            topHeading.send();
            topHeading.addEventListener(`readystatechange`, function () {
              if ((topHeading.readyState == 4) & (topHeading.status == 200)) {
             var allNews = JSON.parse(topHeading.response);
        
                console.log(allNews);
                display( allNews)
              }
            })};
            getApi() 
    
///////////////
        
            function display(x) {

                // console.log(x);
                
                    document.querySelector(".forecast-icon").innerHTML=`<img  class="ps-4 " src="http:${x.current.condition.icon}" alt="">`
                    document.querySelector(".tembrecher").innerHTML= `${x.current.temp_c}<sup>o</sup>c` 
                    document.querySelector(".city").innerHTML= ` ${x.location.name}`
                    document.querySelector(".custom").innerHTML= `${x.current.condition.text}`
                    document.querySelector(".date").innerHTML= `${x.forecast.forecastday[0].date}`
                    document.querySelector(".forecastIcon").innerHTML= `<img  class="ps-4 " src="http:${x.forecast.forecastday[1].day.condition.icon}" alt="">`
                    document.querySelector(".tembrechertwo").innerHTML= `${x.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>c`
                    document.querySelector(".lawTem").innerHTML= `${x.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`
                    document.querySelector(".custom-one").innerHTML= `${x.forecast.forecastday[1].day.condition.text}`
                    document.querySelector(".forecast").innerHTML= `<img  class="ps-4 " src="http:${x.forecast.forecastday[2].day.condition.icon}" alt="">`
                    document.querySelector(".tembrechertherty").innerHTML= `${x.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>c`
                    document.querySelector(".maiTem").innerHTML= `${x.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>`
                    document.querySelector(".desweatherdaytherty").innerHTML= `${x.forecast.forecastday[2].day.condition.text}`
                    
                    
                }
                console.log();








