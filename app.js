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
} // ^^^Why do those last 3 not require parameters? Is it because they're not information we're inputting to begin with so they don't need to be defined?

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

// TO DO TOTAL ROW AT THE BOTTOM, LOOP WITHIN LOOP AND CITIES WITHIN ARRAY

// Render each store to page (includes calculating sales because we put it into the render prototype)
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
