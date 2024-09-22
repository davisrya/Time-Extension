const timeElement = document.getElementById('time');
const formattedDate = document.getElementById('date');
const greet = document.getElementById('greet');
const bodyImage = document.getElementById("body");

//getting time 
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const period = hours < 12 ? 'am' : 'pm';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    return `${formattedHours}:${minutes} ${period}`;
}

setInterval(function() {
    timeElement.textContent = getCurrentTime();
}, 1000);
//getting date
function getFormattedDate() {
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[today.getDay()];
    const day = today.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    return `${dayOfWeek} ${day} ${month} ${year}`;
  }
formattedDate.textContent = getFormattedDate();

//getting greet
const hour = new Date().getHours();
const greetTypes = ['Good Morning', 'Good AfterNoon', 'Good Evening', 'Good Night'];

let greetText = '';

if(hour < 12) {
    greetText = greetTypes[0];
} else if(hour < 14) {
    greetText = greetTypes[1];
} else if(hour < 18){
    greetText = greetTypes[2];
} else{
    greetText = greetTypes[3];
}

greet.textContent = greetText;

//background image dynamically
const imageUrls = [
 "images/beach.jpg",
 "images/dragon.jpg",
 "images/fantasy.jpg",
 "images/forest.jpg",
 "images/game.jpg",
 "images/garden.jpg",
 "images/goku.jpg",
 "images/island.jpg",
 "images/rock.jpg",
 "images/snowy.jpg",
 "images/sunset.jpg",
 "images/turtle.jpg",
 "images/water.jpg",
 "images/beach.jpg"
];

function changeBackgroundImage() {
  const randomImage = Math.floor(Math.random() * imageUrls.length);
  bodyImage.style.backgroundImage = `url(${imageUrls[randomImage]})`;
}

// Initial background image
changeBackgroundImage();

// Change image based in time seted
setInterval(changeBackgroundImage,300000);