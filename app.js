// Rough file 

/*let arr = ["aman", "pranshu", "vamshii", "soumya" ]
let obj = {
    name:" Aman",
    age: 16,
    clg:"lpu",
    food: "poha"
}

for(ele of obj){
    console.log(ele)
}
*/


/// List down all the wining combinations 

let winningCombinations = [
    [1, 2, 3],  //vertical
    [4, 5, 6],  //vertical
    [7, 8, 9],  //vertical
    [1, 4, 7],  //horizontal
    [2, 5, 8],  //horizontal 
    [3, 6, 9],  //horizontal
    [1, 5, 9],  //diagonal
    [3, 5, 7]   //diagonal
]

var resultBox = document.getElementById("result");
var messageBox = document.getElementById("message");

let isWon = false; 

//Accessing all boxes

let boxElement = document.querySelectorAll(".box")
console.log(boxElement)

//providing event listener to all the boxes

for(elem of boxElement){
    elem.addEventListener("click", handleClick);
}

let click = 0;
let xAttempts = [];
let oAttempts = [];

function handleClick(event){
    console.log(event.target.id)
    let id = event.target.id;
    let ptag = document.createElement("p");
    ptag.style.color = "#FAB201"
    ptag.textContent = "X"
    boxElement[id-1].appendChild(ptag)
    console.log(typeof(id))
    console.log(id)

    if( click%2==0){
    ptag.textContent = "X"
    click++
    xAttempts.push(parseInt(id));
    console.log("X", xAttempts)
    result(xAttempts , "X");
    }

    else{
        ptag.textContent = "O"
        click++
        oAttempts.push(parseInt(id));
        console.log("O", oAttempts)
        result(oAttempts , "O");
    }

    if(click == 9 && !isWon){
        resultBox.style.visibility = "visible";
        messageBox.textContent = "It's a Draw";
    }
}

function result(playerArray, player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let check = true;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (!playerArray.includes(winningCombinations[i][j])) {
                check = false;
                break;
            }
        }
        if (check) {
            isWon = true;
            resultBox.style.visibility = "visible";
            messageBox.textContent = player + " won the match!";
        }
    }
}

function isBoxOccupied(id) {
    var ptag = boxElement[id - 1].querySelector("p");
    return ptag !== null;
}

var button = document.getElementById("button");
button.addEventListener("click", () => {
    location.reload();
});






