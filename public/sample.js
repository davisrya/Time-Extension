const bodyElement = document.getElementById("body");
const imageUrls = [
 "images/beach.jpg",
 "images/dragon.jpg",
 "images/fantasy.jpg",
 "images/forest.jpg",
 "images/game.jpg",
 "images/garden.jpg",
 "images/island.jpg",
 "images/mountain.jpg",
 "images/rock.jpg",
 "images/snowy.jpg",
 "images/sunset/jpg",
 "images/turtle.jpg",
 "images/water.jpg",
 "images/beach.jpg"
];

function changeBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  bodyElement.style.backgroundImage = `url(${imageUrls[randomIndex]})`;
}

// Initial background image
changeBackgroundImage();

// Change image every 5 seconds (adjust as needed)
setInterval(changeBackgroundImage, 300000);