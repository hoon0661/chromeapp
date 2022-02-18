const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const randomImage = images[Math.floor(Math.random() * images.length)];
const body = document.body;
body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("img/${randomImage}")`;
