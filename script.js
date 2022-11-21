

var clicked_square = "";
var grid = document.getElementsByClassName("square");





var i = 0;
while (i < grid.length) {
    grid[i].addEventListener("click", selectSquare);
    i++;
}




var savedKey = "";
var savedSquare = "";




function selectSquare () {
    savedSquare = document.getElementById(this.id)
    // document.getElementById(this.id).style.backgroundColor = "red";
}




document.addEventListener("keypress", saveKeyPress)
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"]
var keyPress = 0;
function saveKeyPress(event) {
    console.log(event.key);
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




var mode = "";
document.getElementById("easy").addEventListener("click", setEasyBoard)
function setEasyBoard() {
    mode = "easy";
    set =  ["", "", "4",      "", "5", "",      "", "", "",
            "9", "", "",      "7", "3", "4",      "6", "", "",
            "", "", "3",      "", "2", "1",      "", "4", "9",

            "", "3", "5",      "", "9", "",      "4", "8", "",
            "", "9", "",      "", "", "",      "", "3", "",
            "", "7", "6",      "", "1", "",      "9", "2", "",

            "3", "1", "",      "9", "7", "",      "2", "", "",
            "", "", "9",      "1", "8", "2",      "", "", "3",
            "", "", "",      "", "6", "",      "1", "", "",
]

    var i = 0;
    while (i < grid.length) {
        grid[i].innerHTML = set[i];
        i++;
    }


}

document.getElementById("reset").addEventListener("click", redirect)

function redirect() {
    if (mode === "easy") {
        console.log(mode)
        setEasyBoard()
    } else if (mode === "medium") {
        console.log(mode)
        // setMediumBoard()
    } else {
        console.log(mode)

        // setHardBoard()
    }

}



