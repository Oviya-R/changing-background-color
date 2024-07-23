const colors = ["pink","skyblue","black","violet","red", "green", "blue", "yellow", "purple"];
const colorBox = document.getElementById("colors");
const changeColorBtn = document.getElementById("changecolor");
let colorIndex = 0;
function changeColor() {
   colorBox.style.backgroundColor = colors[colorIndex];
   colorIndex++;
   if (colorIndex === colors.length) {
        colorIndex = 0;
    }
}
changeColorBtn.addEventListener("click", changeColor);

