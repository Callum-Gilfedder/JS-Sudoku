var clicked_square = "";

var grid = document.getElementsByClassName("square");

var i = 0;
while (i < grid.length) {
    grid[i].addEventListener("click", selectSquare)
    i++
}

var savedKey = "";
var savedSquare = "";

function selectSquare () {
    savedSquare = document.getElementById(this.id)
}

document.addEventListener("keypress", saveKeyPress)

var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"]
var keyPress = 0;
function saveKeyPress(event) {
    console.log(event.key)
    var savedKey = event.key;
    if  (numberList.includes(event.key)) {
        if (savedKey === "Enter") {
            savedSquare.innerHTML = "";
        } else {
            savedSquare.innerHTML = savedKey;
        }
    // console.log(event.key)
    }
}



