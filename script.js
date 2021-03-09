const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const resetButton2 = document.querySelector("#reset-button2");
const grid16 = document.querySelector(".grid-16");
const grid32 = document.querySelector(".grid-32");
const blackColor = document.querySelector(".blackColor");
const whiteColor = document.querySelector(".whiteColor");
const ranColor = document.querySelector(".ranColor");

var colorIs = "ran";

blackColor.onclick = colorIsBlack;
whiteColor.onclick = colorIsWhite;
ranColor.onclick = colorIsRan;
function colorIsBlack(){
    colorIs = "black"; 
}
function colorIsWhite(){
    colorIs = "white";
}
function colorIsRan(){
    colorIs = "ran";
}

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", clearGrid);
resetButton2.addEventListener("click", clearGrid);

grid16.addEventListener("click", setDefaultGrid);
grid32.addEventListener("click", setGrid32)

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}
function setGrid32() {
    setGridSize(32);
    fillGrid(32);
  }

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor(e) {
  let randomR= Math.floor(Math.random() * 256);
  let randomG= Math.floor(Math.random() * 256);
  let randomB= Math.floor(Math.random() * 256);
  if (colorIs == "black") {
        randomR = 0;
        randomG = 0;
        randomB = 0;
 }  else if (colorIs == "white") {
        randomR = 255;
        randomG = 255;
        randomB = 255;
 } 
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}