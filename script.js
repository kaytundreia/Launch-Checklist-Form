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
      };

      if (fuelLevel <= 10000 && cargoMass < 10000) {
         let faultyItems = document.getElementById("faultyItems")
         faultyItems.style.visibility = "visible"
         faultyItems.innerHTML = `
         <ol>
            <li id="pilotStatus"> ${pilotName} is Ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotName} is Ready for launch</li>
            <li id="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "red"
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`
      } else if (fuelLevel <=10000 && cargoMass >= 10000) {
         let faultyItems = document.getElementById("faultyItems")
         faultyItems.style.visibility = "visible"
         faultyItems.innerHTML = `
         <ol>
            <li id="pilotStatus"> ${pilotName} is Ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotName} is Ready for launch</li>
            <li id="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus">Cargo mass too high for launch</li>
         </ol>`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "red"
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`
      } else if (fuelLevel > 10000 && cargoMass >= 10000) {
         let faultyItems = document.getElementById("faultyItems")
         faultyItems.style.visibility = "visible"
         faultyItems.innerHTML = `
         <ol>
            <li id="pilotStatus"> ${pilotName} is Ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotName} is Ready for launch</li>
            <li id="fuelStatus">Fuel level good for launch</li>
            <li id="cargoStatus">Cargo mass too high for launch</li>
         </ol>`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "red"
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`
      } else {
         let faultyItems = document.getElementById("faultyItems")
         faultyItems.style.visibility = "visible"
         faultyItems.innerHTML = `
         <ol>
            <li id="pilotStatus"> ${pilotName} is Ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotName} is Ready for launch</li>
            <li id="fuelStatus">Fuel level good for launch</li>
            <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>`
         let launchStatus = document.getElementById("launchStatus")
         launchStatus.style.color = "green"
         launchStatus.innerHTML = `Shuttle is ready for launch`
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json) {
            let missionDestination = document.getElementById("missionTarget")
            missionDestination.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `
            });
         });
      };
   });
});

