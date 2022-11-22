

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



function check() {
    var row = Math.ceil(parseInt(savedSquare.id) / 9);
    for (let i = (9*row - 9); i<9*row; i++) {
        if (savedSquare.id != grid[i].id) {
            if (savedSquare.innerHTML == grid[i].innerHTML) {
            var j = 0;
            while (j < grid.length) {
                // 
                if (grid[j].style.backgroundColor == "rgb(255, 160, 122)" || grid[j].style.color == "rgb(255, 0, 0)")  {
                    if (grid[j].className == "square") {
                        grid[j].style.backgroundColor = "white";
                        grid[j].style.color = "black";
                    } else {
                        grid[j].style.backgroundColor = "lightgrey";
                        grid[j].style.color = "black";
                    }
                }
                j++;
            }
            savedSquare.style.color = "red";
            grid[i].style.backgroundColor = "#FFA07A"; 
            } 
        } 
    
    }
    var column = (savedSquare.id % 9)-1;
    if (column == "0") {
        column = "8";
    }
    for (i = column; i < grid.length; i+=9) {
        console.log(grid[i])
        if (savedSquare.id != grid[i].id) {
            if (savedSquare.innerHTML == grid[i].innerHTML) {
            var j = 0;
            while (j < grid.length) {
                // 
                if (grid[j].style.backgroundColor == "rgb(255, 160, 122)" || grid[j].style.color == "rgb(255, 0, 0)")  {
                    if (grid[j].className == "square") {
                        grid[j].style.backgroundColor = "white";
                        grid[j].style.color = "black";
                    } else {
                        grid[j].style.backgroundColor = "lightgrey";
                        grid[j].style.color = "black";
                    }
                }
                j++;
            }
            savedSquare.style.color = "red";
            grid[i].style.backgroundColor = "#FFA07A"; 
            } 
        } 
    }



    // console.log("Column: " + column);

    
}


document.addEventListener("keypress", saveKeyPress)
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "Enter"]
var keyPress = 0;
function saveKeyPress(event) {
    // console.log(event.key);
    var savedKey = event.key;
    if  (numberList.includes(event.key)) {
        if (savedKey === "Enter") {
            savedSquare.innerHTML = "";
        } else {
            savedSquare.innerHTML = savedKey;
            check()
        }
    // console.log(event.key)
    }
}

var set = []
var solutionSet = []


var mode = "";
document.getElementById("easy").addEventListener("click", setEasyBoard)
function setEasyBoard() {

    mode = "easy";
    var set =  ["", "", "4",      "", "5", "",      "", "", "",
            "9", "", "",      "7", "3", "4",      "6", "", "",
            "", "", "3",      "", "2", "1",      "", "4", "9",

            "", "3", "5",      "", "9", "",      "4", "8", "",
            "", "9", "",      "", "", "",      "", "3", "",
            "", "7", "6",      "", "1", "",      "9", "2", "",

            "3", "1", "",      "9", "7", "",      "2", "", "",
            "", "", "9",      "1", "8", "2",      "", "", "3",
            "", "", "",      "", "6", "",      "1", "", "",
]
    solutionSet = [ "2", "6", "4",      "8", "5", "9",      "3", "1", "7",
                        "9", "8", "1",      "7", "3", "4",      "6", "5", "2",
                        "7", "5", "3",      "6", "2", "1",      "8", "4", "9",

                        "1", "3", "5",      "2", "9", "7",      "4", "8", "6",
                        "8", "9", "2",      "5", "4", "6",      "7", "3", "1",
                        "4", "7", "6",      "3", "1", "8",      "9", "2", "5",

                        "3", "1", "8",      "9", "7", "5",      "2", "6", "4",
                        "6", "4", "9",      "1", "8", "2",      "5", "7", "3",
                        "5", "2", "7",      "4", "6", "3",      "1", "9", "8",
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



