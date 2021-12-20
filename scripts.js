const canvasElem = document.querySelector("#canvas");
const colorPicker = document.querySelector("#colorInput");
const resetBtn = document.querySelector("#resetBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");

let colorMode = 1; // 1 for colorpicker, 2 for rainbow mode.
let currentColor = "black" 
rainbowBtn.addEventListener('click', () => colorMode == 1 ? colorMode = 2 : colorMode = 1);
colorPicker.addEventListener("input", changeColor);

function changeColor() {
    if (colorMode == 2)
        colorMode = 1;
    
    currentColor = colorPicker.value;
}

function randomColor() {
    let red = Math.floor(Math.random() * 257);
    let green = Math.floor(Math.random() * 257);
    let blue = Math.floor(Math.random() * 257);

    return rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

resetBtn.addEventListener("click", clearCanvas);

function clearCanvas() {
    let pixels = document.querySelectorAll(".canvasPixel");
    pixels.forEach((e) => e.style.backgroundColor = "white");
}


for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        let newDiv = document.createElement('div');
        newDiv.classList += "canvasPixel";
        newDiv.addEventListener('mouseover', paintPixel);
        canvasElem.appendChild(newDiv);
    }
}

function paintPixel(e) {
    if (colorMode === 2) {
        let color = randomColor();
        colorPicker.value = color;
        currentColor = color;
    }
    e.target.style.backgroundColor = currentColor;
}
