const cells = document.getElementsByClassName("cell");
const board = document.getElementById("board");
const btn = document.getElementById("btn");

const winnerCells = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

btn.addEventListener("click", () => {
    window.location.reload();
})
function s() {
    if (!board.classList.contains("x") && !board.classList.contains("circle")) {
        board.classList.add("x");
    }

}
for (var i = 0; i < cells.length; i++) {
    s();
    cells[i].addEventListener("click", function (e) {
        startGame(e);
    });
}

function startGame(e) {
    if (board.classList.contains("x")) {
        e.target.classList.add("x");
    }
    else if (board.classList.contains("circle")) {
        e.target.classList.add("circle");
    }
    reverse(e);
    winner();
    draw();
}

function reverse(e) {
    if (board.classList.contains("x")) {
        board.classList.remove("x");
        board.classList.add("circle");
    }
    else if (board.classList.contains("circle")) {
        board.classList.remove("circle");
        board.classList.add("x");
    }
}

function winner() {
    for (var i = 0; i < winnerCells.length; i++) {
        var temp1 = document.querySelector(`[data-cell="${winnerCells[i][0]}"]`);
        var temp2 = document.querySelector(`[data-cell="${winnerCells[i][1]}"]`);
        var temp3 = document.querySelector(`[data-cell="${winnerCells[i][2]}"]`);
        if (temp1.classList.contains("x") && temp2.classList.contains("x") && temp3.classList.contains("x")) {
            console.log(temp1.classList, "l");
            document.getElementById("winner").innerHTML = "X Wins!"
            document.getElementById("message-page").style.display = "flex"
        }
        else if (temp1.classList.contains("circle") && temp2.classList.contains("circle") && temp3.classList.contains("circle")) {
            console.log(temp1.classList, "l");
            document.getElementById("winner").innerHTML = "O Wins!"
            document.getElementById("message-page").style.display = "flex"
        }
    }
}
function draw() {
    var cnt = 0;console.log("hi");
    for (var i = 0; i < cells.length; i++) {
        // console.log(i);
        if (cells[i].classList.contains("x"))
            {
                cnt=cnt+1;
                console.log("i am x");
            }
        if(cells[i].classList.contains("circle"))
        {
            cnt=cnt+1;
            console.log("i am circle");
        }
    }
    console.log(cnt);
    if (cnt == cells.length) {
        document.getElementById("winner").innerHTML = "Draw !"
        document.getElementById("message-page").style.display = "flex"
    }
}