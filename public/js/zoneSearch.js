
console.log('JS working');

// Search items
let searchZone = document.querySelector("#search-zone");
let searchBtn = document.querySelector("#btn");

// Zone information Section
let zoneInfo = document.querySelector("#zone-info")
let zoneResult = document.querySelector('#zone-result')

// List of input zones
let searchZones = [];

// Function to get zone from search
let getZone = function() {
  if(!searchZone) {
    window.alert("You must enter a valid zip code to get your zone.");
    return;
  }
  let zone = searchZone.value.trim();
  getZoneInfo(zone);
};

// Function to get zone information
let getZoneInfo = function(zone) {
  const response = await fetch('/apiCall/zone/'+zone,  {
    method: 'get',
    headers: { 'Content-Type': 'application/json'}
  });

  // check the response status
   if (response.ok) {
    response.json().then(function(result) {
      zoneResult.textContent = result.hardiness_zone;
    })
  } else {
    alert(response.statusText);
  }
};



searchBtn.addEventListener("click", getZone);











// // var buttonClickHandler = function (event) {
// //   getUserZone();
// // };

// // var getUserZone = function (zone) {
// //   console.log(zone);
// //   const options = {
// //     method: "GET",
// //     headers: {
// //       "X-RapidAPI-Key": "92d5a261cbmsh2670c43e09e3d07p15f894jsn89c9d2e082a5",
// //       "X-RapidAPI-Host": "plant-hardiness-zone.p.rapidapi.com",
// //     },
// //   };
// //   let apiUrl = "https://plant-hardiness-zone.p.rapidapi.com/zipcodes/" + zone;

// //   fetch(apiUrl, options)
// //   fetch('https://plant-hardiness-zone.p.rapidapi.com/zipcodes', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));
// // };

// // var displayZone = function (zone) {
// //   zoneResultContainerEl.textContent = "Your garden zone is " + zone;
// // };

// // // // Add event listeners to form and button
// // searchBtnEl.addEventListener("click", function () {
// //   var zipcode = formInputEl.value.trim();

// //   if (zipcode) {
// //     getUserZone(zipcode);
// //   }
// // });

// // getUserZone();
// // // displayZone();
