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

// Generates random number between parameters
// Math.floor rounds down to whole number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(
        Math.floor(randNum * this.avgCookiesPerCustomer)
      );
      this.totalCookiesSold += this.cookiesPerHour[i]; //Take the total cookies and add it to itself for each loop through
    }
  },
};

seattle.calculateSales();

// Specify which HTML element we're dealing with
const locationSales = document.getElementById("locationSales");

// Add title for the location & add to page
const seattleTitle = document.createElement("h2");
seattleTitle.textContent = seattle.location;
locationSales.appendChild(seattleTitle);

// Create list to show cookies sold at each hour
const seattleList = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]}`;
  seattleList.appendChild(li);
}

const seattleTotal = document.createElement("li");
seattleTotal.textContent = `Total: ${seattle.totalCookiesSold}`;
seattleList.appendChild(seattleTotal);

locationSales.appendChild(seattleList);

const tokyo = {
  location: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(
        Math.floor(randNum * this.avgCookiesPerCustomer)
      );
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

tokyo.calculateSales();

const tokyoTitle = document.createElement("h2");
tokyoTitle.textContent = tokyo.location;
locationSales.appendChild(tokyoTitle);

const tokyoList = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]}`;
  tokyoList.appendChild(li);
}

const tokyoTotal = document.createElement("li");
tokyoTotal.textContent = `Total: ${tokyo.totalCookiesSold}`;
tokyoList.appendChild(tokyoTotal);

locationSales.appendChild(tokyoList);

const dubai = {
  location: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(
        Math.floor(randNum * this.avgCookiesPerCustomer)
      );
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

dubai.calculateSales();

const dubaiTitle = document.createElement("h2");
dubaiTitle.textContent = dubai.location;
locationSales.appendChild(dubaiTitle);

const dubaiList = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]}`;
  dubaiList.appendChild(li);
}

const dubaiTotal = document.createElement("li");
dubaiTotal.textContent = `Total: ${dubai.totalCookiesSold}`;
dubaiList.appendChild(dubaiTotal);

locationSales.appendChild(dubaiList);

const paris = {
  location: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(
        Math.floor(randNum * this.avgCookiesPerCustomer)
      );
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

paris.calculateSales();

const parisTitle = document.createElement("h2");
parisTitle.textContent = paris.location;
locationSales.appendChild(parisTitle);

const parisList = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]}`;
  parisList.appendChild(li);
}

const parisTotal = document.createElement("li");
parisTotal.textContent = `Total: ${paris.totalCookiesSold}`;
parisList.appendChild(parisTotal);

locationSales.appendChild(parisList);

const lima = {
  location: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCustomers, this.maxCustomers);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(
        Math.floor(randNum * this.avgCookiesPerCustomer)
      );
      this.totalCookiesSold += this.cookiesPerHour[i];
    }
  },
};

lima.calculateSales();

const limaTitle = document.createElement("h2");
limaTitle.textContent = lima.location;
locationSales.appendChild(limaTitle);

const limaList = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]}`;
  limaList.appendChild(li);
}

const limaTotal = document.createElement("li");
limaTotal.textContent = `Total: ${lima.totalCookiesSold}`;
limaList.appendChild(limaTotal);

locationSales.appendChild(limaList);
