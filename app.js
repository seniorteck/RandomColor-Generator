var container = document.querySelector("#container");

var zeros = "0000000";

var output = document.querySelector(".output")


container.addEventListener("click", changeColor, false);

function changeColor(e){
    var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

    console.log(color);

    var colorLength = color.length;

    if (colorLength < 7) {
        color += zeros.substring(0, zeros.length - colorLength);
    }

    container.style.backgroundColor = color;

    output.style["background-color"] = color

    output.textContent = `color ${color}`
}