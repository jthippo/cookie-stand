const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10m",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// Specify the table from the HTML is where we're referring to
const table = document.getElementById("locationSales");

// Generates random number between parameters
// Math.floor rounds down to whole number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Constructor that outputs Location objects
function Location(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
}

// Prototype ensures all Locations will have function, we only need to write it once here
// Prototype to calculate sales for this location
Location.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCustomers, this.maxCustomers);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCustomer));
    this.totalCookiesSold += this.cookiesPerHour[i]; //Take the total cookies and add it to itself for each loop through
  }
};

// Prototype to render information as table
Location.prototype.render = function () {
  this.calculateSales(); // Calculate sales first
  const tr = document.createElement("tr"); // Create table row

  const th = document.createElement("th");
  th.textContent = this.location; //make location th (display bold!)
  tr.appendChild(th); //add th to tr

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  // Add total to end of row
  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookiesSold;
  tr.appendChild(totalTd);

  // Add full row to table
  table.appendChild(tr);
};

// Create Location objects
const seattle = new Location("Seattle", 23, 65, 6.3);
const tokyo = new Location("Tokyo", 3, 24, 1.2);
const dubai = new Location("Dubai", 11, 38, 3.7);
const paris = new Location("Paris", 20, 38, 2.3);
const lima = new Location("Lima", 2, 16, 4.6);

// Render header row
// Create blank cell
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

// Add each time to the header row
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// Add a total head
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// Add header row to table
table.appendChild(headerRow);

// Render each store to page (includes calculating sales because we put it into the render prototype)
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// TAKE FORM INPUT AND ADD IT TO THE BOTTOM OF THE TABLE
// Grab the form from DOM node
const form = document.querySelector("form");

// Add event listener
form.addEventListener("submit", function (event) {
  // Parse in event object to function
  event.preventDefault(); // Prevent default behaviour of submit (refresh, add info to url)

  // Collect info from event object to get user input
  const newLocation = event.target.location.value;
  const newMin = event.target.minCustomers.value;
  const newMax = event.target.maxCustomers.value;
  const newAvg = event.target.avgCookiesPerCustomer.value;

  // Pump input into Location constructor
  const formLocation = new Location(newLocation, newMin, newMax, newAvg);

  // Use render prototype (which includes calculateSales prototype) to add row to table
  formLocation.render();
});

// TIM'S TOTAL ROW SOLUTION
// 1. Put all locations into an array:
//
// const = [locationsArray]
//
// 2. Remove all individual store render functions
// 3. Do a for loop:
//
// for (let i = p; i < locationsArray; i++) {
//   locationsArray[i].render();
// }
//
// 4. Create the TOTAL row:
//
// function renderTotalRow() {
//  const tr = document.createElement("tr");
//  const totalTh = document.createElement("th")
//  totalTh.textContent = "Hourly Total";
//
// Loop round locationsArray and get only that hour's data:
//
//  for (let i = 0; i < hours.length; i++) {
//    let hourlyTotal = 0;
//    for (let k = 0; k < locationsArray.length; k++); {
//    hourlyTotal = hourlyTotal + locationsArray[k].cookiesPerHour[i]
// }
//
// 5. Add the hourly total td to the row:
//
//  const td = document.createElement("td")
//  td.textContent = hourlyTotal;
//  tr.appendChild(td);
//
// 6. Add the row to the table:
//
//   table.appendChild(tr)
//  }
// 7. Render it!
//
//  renderTotalRow();
//
//
//
