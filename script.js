let city = "Atlanta";
 
const url = 
"https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8b5e0537b2b17abc10e53b7116cb33e1&units=imperial";

let request = new XMLHttpRequest(); // Create an object
request.open("GET", url); // open a new request that will use url to access API
request.responseType = "json"; // I want the date to be in Json format
request.send(); // I send my request
request.onload = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          let weatherDatas = request.response; // Store a response
          //main.temp
          // console.log(storeResponse); 
          let temperature = weatherDatas.main.temp; 
          console.log(temperature);
          document.querySelector("#temperature").textContent = temperature; //output the temperature of the city on webpage
          document.querySelector("#city").textContent = city; //output the name of the city on webpage
        }
        else{
          alert("An error occured! Come back later!");
        }
      }
    }
