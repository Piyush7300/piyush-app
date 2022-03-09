const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getinfo = async (event) => {
     event.preventDefault();

  let cityval = cityname.value;

  if (cityval === "") {
    city_name.innerText = `plz enter the city name before search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=b3edf31240740ffb65655029d020508f`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
      temp.innerText = arrdata[0].main.temp;
      temp_status.innerText = arrdata[0].weather[0].main;

      
    

    } catch {
      city_name.innerText = `plz enter the city name properly`;
    }
  }
};

  

submitbtn.addEventListener("click", getinfo);
