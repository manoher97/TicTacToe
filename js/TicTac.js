// js code 
let music = new Audio("./acets/music.mp3");
let turnAudio = new Audio("./acets/ting.mp3");
let gamenOver = new Audio("./acets/gameover.mp3");
let turn = "X";
let isgameOver = false;

// create cheang the turn
const changTurn = () => {
    return turn === "X" ? "O" : "X"
}
// function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName("textbox");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) &&
            (boxText[e[2]].innerText === boxText[e[1]].innerText) &&
            (boxText[e[0]].innerText !== "")) {
            document.querySelector(".Info").innerText = boxText[e[0]].innerText + " Won";

            isgameOver = true;

            document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "200px";

        }
    })
}

// game logic:
// music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.textbox');
    element.addEventListener("click", () => {
        if (boxtext.innerHTML === "") {
            boxtext.innerHTML = turn;
            turn = changTurn();
            turnAudio.play();
            checkWin();
            music.play();

            if (!isgameOver) {
                document.getElementsByClassName("Info")[0].innerHTML = "Turn for  " + turn;
            }

        }
    })
});
// reset button logic
document.getElementById("reset").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.textbox');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    });
    turn = 'X';
    isgameOver = false;

    document.querySelector('.Info').innerHTML = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "";

})
