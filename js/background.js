const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `/img/${randomImage}`;
bgImage.alt = "background image";
document.body.appendChild(bgImage);
