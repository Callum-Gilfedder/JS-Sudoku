

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
        // console.log(grid[i])
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
    var grid1 = ["1","2", "3", "10", "11", "12", "19", "20", "21"]
    var grid2 = ["4", "5", "6", "13", "14", "15", "22", "23", "24"]
    var grid3 = ["7", "8", "9", "16", "17", "18", "25", "26", "27"]
    var grid4 = ["28", "29", "30", "37", "38", "39", "46", "47", "48"]
    var grid5 = ["31", "32", "33", "40", "41", "42", "49", "50", "51"]
    var grid6 = ["34", "35", "36", "43", "44", "45", "52", "53", "54"]
    var grid7 = ["55", "56", "57", "64", "65", "66", "73", "74", "75"]
    var grid8 = ["58", "59", "60", "67", "68", "69", "76", "77", "78"]
    var grid9 = ["61", "62", "63", "70", "71", "72", "79", "80", "81"]
    var inGrid= "";

    if (grid1.includes(savedSquare.id)) {
        inGrid = grid1; 
        console.log(inGrid)
    } else if (grid2.includes(savedSquare.id)) {
        inGrid = grid2;
        console.log(inGrid);
        
    } else if (grid3.includes(savedSquare.id)) {
        inGrid = grid3;
        console.log(inGrid);
    } else if (grid4.includes(savedSquare.id)) {
        inGrid = grid4;
        console.log(inGrid);
    } else if (grid5.includes(savedSquare.id)) {
        inGrid = grid5;
        console.log(inGrid);
    } else if (grid6.includes(savedSquare.id)) {
        inGrid = grid6;
        console.log(inGrid);
    } else if (grid7.includes(savedSquare.id)) {
        inGrid = grid7;
        console.log(inGrid);
    } else if (grid8.includes(savedSquare.id)) {
        inGrid = grid8;
        console.log(inGrid);
    } else if (grid9.includes(savedSquare.id)) {
        inGrid = grid9;
        console.log(inGrid);
    }

    for (elements of inGrid) {
        // console.log(elements)
        console.log(grid[parseInt(elements)])
        if (savedSquare.id != elements-1) {
            if (savedSquare.innerHTML == grid[parseInt(elements-1)].innerHTML) {
                // console.log("Elements" + grid[parseInt(elements)].innerHTML)
                // console.log("Saved square: "+ savedSquare.innerHTML)
                // var j = 0;
                // while (j < grid.length) {
                //     // 
                //     if (grid[j].style.backgroundColor == "rgb(255, 160, 122)" || grid[j].style.color == "rgb(255, 0, 0)")  {
                //         if (grid[j].className == "square") {
                //             grid[j].style.backgroundColor = "white";
                //             grid[j].style.color = "black";
                //         } else {
                //             grid[j].style.backgroundColor = "lightgrey";
                //             grid[j].style.color = "black";
                //         }
                //     }
                //     j++; 
                // }
                // savedSquare.style.color = "red";
                if (grid[parseInt(elements-1)].id != savedSquare.id) {
                grid[parseInt(elements-1)].style.backgroundColor = "#FFA07A"; 
                }

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
        if (grid[i].className == "square") {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        } else {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        }
        i++;
    }


}

document.getElementById("medium").addEventListener("click", setMediumBoard)
function setMediumBoard() {

    mode = "medium";
    var set =  ["2", "", "",      "", "", "",      "6", "9", "",
            "", "5", "",      "", "", "3",      "", "", "",
            "1", "7", "",      "", "", "9",      "4", "", "5",

            "", "", "3",      "", "2", "5",      "", "1", "8",
            "", "", "",      "", "4", "",      "", "", "",
            "7", "2", "",      "3", "8", "",      "5", "", "",

            "5", "", "2",      "6", "", "",      "", "4", "1",
            "", "", "",      "5", "", "",      "", "7", "",
            "", "6", "7",      "", "", "",      "", "", "3",
]
    solutionSet = ["2", "3", "4",      "1", "5", "8",      "6", "9", "7",
    "9", "5", "6",      "4", "7", "3",      "1", "8", "2",
    "1", "7", "8",      "2", "6", "9",      "4", "3", "5",

    "6", "4", "3",      "9", "2", "5",      "7", "1", "8",
    "8", "1", "5",      "7", "4", "6",      "3", "2", "9",
    "7", "2", "9",      "3", "8", "1",      "5", "6", "4",

    "5", "9", "2",      "6", "3", "7",      "8", "4", "1",
    "3", "8", "1",      "5", "9", "4",      "2", "7", "6",
    "4", "6", "7",      "8", "1", "2",      "9", "5", "3",
]




    var i = 0;
    while (i < grid.length) {
        grid[i].innerHTML = set[i];
        if (grid[i].className == "square") {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        } else {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        }
        i++;
    }


}

document.getElementById("hard").addEventListener("click", setHardBoard)
function setHardBoard() {

    mode = "hard";
    var set =  ["", "7", "",      "", "", "",      "", "", "4",
            "", "5", "",      "", "7", "",      "8", "", "",
            "", "8", "",      "9", "5", "",      "", "", "",

            "", "9", "",      "2", "", "",      "5", "", "1",
            "", "", "1",      "", "", "",      "4", "", "",
            "7", "", "5",      "", "", "1",      "", "3", "",

            "", "", "",      "", "1", "6",      "", "8", "",
            "", "", "2",      "", "3", "",      "", "4", "",
            "4", "", "",      "", "", "",      "", "6", "",
]
    solutionSet = [ "2", "7", "9",      "1", "6", "8",      "3", "5", "4",
                    "6", "5", "4",      "3", "7", "2",      "8", "1", "9",
                    "1", "8", "3",      "9", "5", "4",      "6", "2", "7",

                    "8", "9", "6",      "2", "4", "3",      "5", "7", "1",
                    "3", "2", "1",      "7", "8", "5",      "4", "9", "6",
                    "7", "4", "5",      "6", "9", "1",      "2", "3", "8",

                    "5", "3", "7",      "4", "1", "6",      "9", "8", "2",
                    "9", "6", "2",      "8", "3", "7",      "1", "4", "5",
                    "4", "1", "8",      "5", "2", "9",      "7", "6", "3",
]

    var i = 0;
    while (i < grid.length) {
        grid[i].innerHTML = set[i];
        if (grid[i].className == "square") {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        } else {
            grid[i].style.backgroundColor = "";
            grid[i].style.color = "";
        }
        i++;
    }


}




document.getElementById("reset").addEventListener("click", redirect)
function redirect() {
    if (mode == "easy") {
        setEasyBoard()
    } else if (mode == "medium") {
        setMediumBoard()
        // setMediumBoard()
    } else {
        setHardBoard()

        // setHardBoard()
    }

}



document.getElementById("check").addEventListener("click", checkSolution)
var checkStatus = "Un-checked";

function checkSolution () {
    var k = 0;

    if (checkStatus == "Un-checked") {
        checkStatus = "Checked";
        document.getElementById("check").innerHTML = "Un-check";
        while (k < grid.length) {
            console.log(grid[k].innerHTML)
            if (grid[k].innerHTML == solutionSet[k]) {
                grid[k].style.color = "#00A550";
            } else {
                grid[k].style.color = "red";
            }
            k++;
        }
        
    } else if (checkStatus == "Checked") {
        checkStatus = "Un-checked";
        document.getElementById("check").innerHTML = "Check";
        while (k < grid.length) {
            console.log(grid[k].innerHTML)
            grid[k].style.color = "black";
            k++;
        }

    }


}



