let searchCity = document.getElementById('search');
  searchCity.addEventListener('click', function () {
    
    let apiKey ='37ed36347dc7942d969a803f3d26222a'
    
    let citysearch = document.getElementById('city-name');
    let temphtml = document.getElementById('temperature');
    let descriptionOfcity = document.getElementById('description');
    let searchinput = document.getElementById('searchInput');
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchinput.value}&appid=${apiKey}`;
    async function getWeather() {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        else {
          let data = await response.json();

          let Temp = data['main']['temp'];
          let currentTemp = (Temp - 273.15).toFixed(2);
          let name = data['name'];
          let discription = data['weather'][0]['description'];
          citysearch.innerHTML = name;
          temphtml.innerHTML = currentTemp;
          // let imageurl =`<img src="http://openweathermap.org/img/wn/${data['weather'][0]['icon']}.png" alt="icon">` 
          descriptionOfcity.innerHTML = `${discription}`;
          searchinput.value = '';




        }



      }
      catch (error) {
        console.error('Error:', error);
      }


    }
    getWeather();


  });











