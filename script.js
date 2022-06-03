let city = "Atlanta";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=8b5e0537b2b17abc10e53b7116cb33e1&units=metric";

//update the weather automatically
function retrievePrice() {
  // I create a request with JS.
  let request = new XMLHttpRequest(); // Create an object
  request.open("GET", url); // open a new request that will use url to access API
  request.responseType = "json"; // I want the date to be in Json format
  request.send(); // I send my request

  //Once I receive a response, this function must be executed.
  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let storeResponse = request.response; // Store a response
        console.log(storeResponse);
        document.querySelector("#temperature").textContent = storeResponse; // To output US dollar data on the webpage
      } else {
        alert("An error occured! Come back later!");
      }
    }
  };
}
