let btn = document.querySelectorAll(".box");
let winnerPlayer = document.querySelector(".winner");
let newGame = document.querySelector(".newGame");
let btnReset = document.querySelector(".reset");
let turnO = true;

let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

newGame.addEventListener("click" , ()=>{
    resetGame();
})

btnReset.addEventListener("click" , ()=>{
    resetGame();
})

btn.forEach(box => {
    box.addEventListener("click" , () => {
        handlePlayerMove(box);
    });
});

function resetGame() {
    btn.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerPlayer.innerText = "";
    turnO = true;
}

function handlePlayerMove(box) {
    if (box.innerText === "") {
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        checkWinner();
        checkDraw();
        box.disabled = true;
    }
}

function checkWinner() {
    for (let win of winner) {
        let p1 = btn[win[0]].innerText;
        let p2 = btn[win[1]].innerText;
        let p3 = btn[win[2]].innerText;
        if (p1 !== "" && p1 === p2 && p2 === p3) {
            displayWinner(p1);
            return;
        }
    }
}

function checkDraw() {
    for (let i of btn) {
        if (i.innerText === "") {
            return;
        }
    }
    displayWinner("Draw");
}

function displayWinner(winnerName) {
    winnerPlayer.innerText = `The winner is: ${winnerName}`;
    btn.forEach(box => {
        box.disabled = true;
    });
}
