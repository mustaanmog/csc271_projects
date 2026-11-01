// Mustaan Mogaji-Oleolo
// Date: 10/4/2026
// MatchWatch Form Script: Handles the form submission and displays the results.

//Initially, I wanted the page to store the inputted data upon hitting the submit button
//But it looks like it requires a function and an "onSubmit" event handler, which we would learn about later.
//However, I found another way to retrieve the form data using URLSearchParams.
// This approach allows me  to access the form data directly from the URL query string and update the page content
//via a simple page refresh upon hitting the submit button.

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
const params = new URLSearchParams(window.location.search);

var budget = params.get("Budget");
var outingType = params.get("OutingType");
var color = params.get("color");

var marketPrice = budget * 50;

//Updating my text content
document.getElementById("budgetDisplay").textContent =
    "Your budget is $" + budget;

document.getElementById("priceDisplay").textContent =
    "Market Price: $" + marketPrice;

document.getElementById("messageDisplay").textContent =
    "Recommended for " + outingType + " with a " + color + " watch.";


