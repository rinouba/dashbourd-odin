// Hide Side bar
function myFunction() {
  var x = document.querySelector(".sidebar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//  GET /trips >> https://v6.db.transport.rest/trips?query=Bus%205
//  GET /locations >> https://v6.db.transport.rest/locations?query=halle&results=3
// GET /stations >> https://v6.db.transport.rest/stations?query=dammt

// fetch api trips

const projects = document.querySelector(".projects");

async function trips() {
  fetch("https://v6.db.transport.rest/trips?query=Bus%205")
    .then((res) => res.json())
    .then((body) => {
      let trips = body.trips;
      trips.slice(0, 6).map((trip) => {
        projects.innerHTML += `
          <div class="card-projects">
          <h2 class="namecity">${trip.origin.name}</h2>
           <h6>
            Bus :  ${trip.origin.products.bus}
           </h6>
           <h6>
           Subway : ${trip.origin.products.subway}
           </h6>
           <h6>
          Taxi :  ${trip.origin.products.taxi}
         </h6>
          <div>
          <span class="mdi list-card mdi-star-plus"></span>
          <span class="mdi list-card mdi-eye-plus"></span>
          <span class="mdi list-card mdi-share-variant-outline"></span>
          </div>
       </div>        
          `;
      });
    });
}

trips();

// fetch api locations

const container_announcements = document.querySelector(
  ".container-announcements"
);

async function locations() {
  fetch("https://v6.db.transport.rest/locations?query=halle&results=3")
    .then((res) => res.json())
    .then((body) => {
      let location = body;

      location.map((loc) => {
        container_announcements.innerHTML += `
        <h3>Id : ${loc.location.id} <br/> Name : ${loc.name}</h3>
        
        <div style="font-weight: 700;">
            Bus : ${loc.products.bus} <br/>
            Taxi : ${loc.products.taxi} <br/>
            Subway : ${loc.products.subway}
        </div>
        <hr />
        `;
        console.log(loc);
      });
    });
}

locations();

// fetch api stations

const trending_trend = document.querySelector(".trending-trend");
const array = [
  "Friday :",
  "Holiday : ",
  "Monday : ",
  "Saturday :",
  "Sunday :",
  "Thursday :",
  "Tuesday :",
  "Wednesday :",
];

async function stations() {
  fetch("https://v6.db.transport.rest/stations?query=dammt")
    .then((res) => res.json())
    .then((body) => {
      let trends = body[8002548];
      trending_trend.innerHTML += `
        
        <div class="trends">
        <div>
          <div class="trends-text">Type : ${trends.name}</div>
          <span> <b>
          Address : <br/>  
          City : ${trends.address.city} <br/>
          ZipCode : ${trends.address.zipcode} <br/>
          Street : ${trends.address.street} </b>
          </span>
        </div>
      </div>
      
      
      `;
    });
}

stations();
