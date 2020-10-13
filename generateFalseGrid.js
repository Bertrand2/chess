"use strict";

const gameBox = document.getElementById("gameBox");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const setup = [
    "bRook","bKnight","bBishop","bKing","bQueen","bBishop","bKnight","bRook",
    "bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn",
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,
    "wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn",
    "wRook","wKnight","wBishop","wKing","wQueen","wBishop","wKnight","wRook"
];

for(let i=0 ; i<64 ; i++){
    let newCell = document.createElement("div");

    if( (i + Math.floor(i/8))%2 === 0){
        newCell.setAttribute("class" , "cell wCell");
    }else{
        newCell.setAttribute("class" , "cell bCell");
    }
    newCell.id = `${alphabet[i%8]}${8-Math.floor(i/8)}`;
    newCell.innerHTML = `<p class="cellIndex">${newCell.id}</p>`;

    gameBox.appendChild(newCell);
}

let cells = document.getElementsByClassName("cell");
for (let i=0; i<64 ; i++) {
    if(setup[i] !== 0){
        let piece = document.createElement("img");
        piece.src = `assets/${setup[i]}.png`;
        piece.setAttribute("class","piece");
        piece.id = cells[i].id;
        
        gameBox.appendChild(piece);
    }
}