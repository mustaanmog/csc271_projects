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

var marketPrice = budget * 5;

//Updating my text content
document.getElementById("budgetDisplay").textContent =
    "Your budget is $" + budget;

document.getElementById("priceDisplay").textContent =
    "Market Price: $" + marketPrice;

document.getElementById("messageDisplay").textContent =
    "Recommended for " + outingType + " with a " + color + " watch.";

var recommendation = "";

if (budget >= 200 && outingType === "Formal") {
    recommendation =
        "Luxury Pick: Rolex Datejust - Perfect for formal occasions.";
}
else if (budget >= 100 && color === "White") {
    recommendation =
        "Professional Pick: Omega Seamaster - Stylish and versatile.";
}
else if (budget < 100 || outingType === "Casual") {
    recommendation =
        "Budget Pick: Seiko 5 - Great value for everyday wear.";
}
else {
    recommendation =
        "Balanced Pick: Tissot PRX - A great watch for any occasion.";
}

document.getElementById("recommendationResult").textContent = recommendation;


// FOR LOOP
// Displays watch features
// A FOR loop is useful because we know
// exactly how many features we need to show.

var features = [
    "Personalized Recommendations",
    "Budget Matching",
    "Color Coordination",
    "Market Price Estimates",
];

var featureOutput = "";

for (var i = 0; i < features.length; i++) {
    featureOutput += "<li>" + features[i] + "</li>";
}

document.getElementById("featureList").innerHTML = featureOutput;


// WHILE LOOP
// Displays budget tiers up to the user's
// estimated market price.
// A WHILE loop works well because it
// continues until a condition is met.

var currentTier = 50;
var tierOutput = "";

while (currentTier <= marketPrice) {
    tierOutput += "$" + currentTier + "<br>";
    currentTier += currentTier * 2;
}

document.getElementById("tierDisplay").innerHTML =
    tierOutput;
