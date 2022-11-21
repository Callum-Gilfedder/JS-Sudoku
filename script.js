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

// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);

document.addEventListener("keypress", saveKeyPress)

var keyPress = 0;

function saveKeyPress(event) {
    var savedKey = event.key;
    // console.log(event.key)
    savedSquare.innerHTML = savedKey;
}



