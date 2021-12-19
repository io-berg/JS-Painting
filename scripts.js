const canvasElem = document.querySelector("#canvas");
const colorPicker = document.querySelector("#colorInput");
const resetBtn = document.querySelector("#resetBtn");
let currentColor;


colorPicker.addEventListener("input", changeColor);

function changeColor() {
    currentColor = colorPicker.value;
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
    e.target.style.backgroundColor = currentColor;
}