// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]").value
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = parseInt(document.querySelector("input[name=fuelLevel]").value);
      let cargoMass = parseInt(document.querySelector("input[name=cargoMass]").value);
      event.preventDefault();
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");
      } else if (typeof pilotName !== "string") {
         alert("Pilot Name must be a word."); 
      } else if (typeof copilotName !== "string") {
         alert("Co-Pilot name must be a word.");
      } else if (isNaN(fuelLevel) === true) {
         alert("Fuel Level must be a number.");
      } else if (isNaN(cargoMass) === true) {
         alert("Cargo Mass must be a number.")
      }
   });
});