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
          let storeResponse = request.response; // Store a response
          console.log(storeResponse); 
        }
        else{
          alert("An error occured! Come back later!");
        }
      }
    }
