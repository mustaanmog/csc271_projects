var sign = "Sagittarius";
var birthMonth = "November";
var birthDay = 24;
var luckyNumber = 13.2;
var horoscopeMessage = "You will find great success in your endeavors today. Embrace the opportunities that come your way and trust your instincts.";
var belief = false;
var myMood = 8;
var devinMood = 8;
var adrianMood = 8;
var averageMood = (myMood + devinMood + adrianMood) / 3;
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var horoscopes = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
"Don't let fear hold you back. Take a leap of faith and trust in your abilities.",
"Communication is key today. Express yourself clearly and listen to others.",
"Trust your intuition. It will guide you in making the right decisions.",
"Your creativity shines today. Use it to inspire and lead others.",
"Pay attention to the details. Your meticulous work will pay off.",
"Balance is essential. Find harmony in all aspects of your life.",
"Embrace transformation. Let go of what no longer serves you.",
"Adventure awaits. Explore new horizons and expand your horizons.",
"Hard work leads to success. Keep pushing toward your goals.",
"Your unique perspective is an asset. Share your ideas with others.",
"Trust your emotions. They will guide you in making the right choices."]

document.getElementById("sign").textContent = sign;

var birthdaySuffix = "th";

document.querySelector(".birthday").textContent += birthMonth + " " + birthDay + birthdaySuffix;

document.querySelector(".luckyNum").textContent += luckyNumber;

var paragraphs = document.querySelectorAll("p");

paragraphs[0].textContent = horoscopeMessage;
paragraphs[1].innerHTML += belief;
paragraphs[2].innerHTML = `Today's mood rating for ${sign}: ${myMood} out of 10. The average mood rating of ${sign}, ${sign}, and ${sign} is: ${averageMood}`;

var mySign = signs[11];
var partnerSign = signs[11];
var partnerSign2 = signs[11];

var paragraphs = document.querySelectorAll("p");
paragraphs[3].textContent = `My sign is ${mySign}, Devin's sign is ${partnerSign}, and Adrian's sign is ${partnerSign2}.`;

var newMessage = horoscopes[2];
var partnerMessage = horoscopes[3];
var partnerMessage2 = horoscopes[4];
paragraphs[4].textContent = `${mySign} horoscope: ${newMessage}. ${mySign} horoscope: ${partnerMessage}. ${mySign} horoscope: ${partnerMessage2}.`;

