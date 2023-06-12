// Create Header
const h1 = document.querySelector("h1");
h1.innerText = "Joe's PixelArtMaker";

// Create a grid container, pixels, and combine and append them
const grid = document.querySelector(".grid");
function createGrid() {
  for (let i = 0; i < 2500; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.classList.add(`${i}`);
    grid.appendChild(pixel);
  }
}
createGrid();

//create colors to use in the next createPalette function
const colorArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "#28A1B3",
  "white",
  "black",
];

// Create color palette container and brushcolor containers, give them an eventlistener
// to select a color on click, and add them to the page
const palette = document.querySelector(".color-palette");
// Set default color to start with
let currentColor = "white";
function createPalette() {
  for (let i = 0; i < 10; i++) {
    let paletteDot = document.createElement("div");
    paletteDot.classList.add("paletteDot");
    paletteDot.style.backgroundColor = colorArray[i];
    paletteDot.addEventListener("click", (e) => {
      //console.log("e: ", e);
      //console.log("target background color: ", e.target.style.backgroundColor);
      currentColor = e.target.style.backgroundColor;
      //console.log("currentColor: ", currentColor);
    });
    palette.appendChild(paletteDot);
  }
}
createPalette();

// Adding event listeners to all of the pixels to detect a mousebutton press
// (which changes the currentColor of that pixel), and if the mousebutton1 is pressed when
// the mouse enters the next pixel, it will change that pixel color as well.
const allPixels = document.querySelectorAll(".pixel");
for (let i = 0; i < allPixels.length; i++) {
  // allPixels[i].addEventListener("dragstart", (e) => {
  //   e.target.style.backgroundColor = currentColor;
  //   console.log(currentColor);
  // });
  allPixels[i].addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = currentColor;
    console.log(currentColor);
  });
  allPixels[i].addEventListener("mouseenter", (e) => {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = currentColor;
    }
  });
}

// NOT A GREAT METHOD for the drag coloring, but it was my first way to get it to work:
// let mouseDown = 0;
// document.querySelector(".grid").onmousedown = function () {
//   ++mouseDown;
//   console.log(mouseDown);
// };
// document.querySelector(".grid").onmouseup = function () {
//   --mouseDown;
//   console.log(mouseDown);
// };
// for (let i = 0; i < allPixels.length; i++) {
//   allPixels[i].addEventListener("mouseover", (e) => {
//     if (mouseDown > 0) {
//       e.target.style.backgroundColor = currentColor;
//       console.log(currentColor);
//     }
//   });
// }
