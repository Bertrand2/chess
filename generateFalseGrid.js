"use strict";

const gameBox = document.getElementById("gameBox");
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for(let i=0 ; i<64 ; i++){
    let newCell = document.createElement("div");

    if(i%2 === 0){
        newCell.setAttribute("class" , "cell wcell");
    }else{
        newCell.setAttribute("class" , "cell bcell");
    }
    newCell.id = `${alphabet[i%8]}${8-Math.floor(i/8)}`;
    console.log(newCell.id);

    gameBox.appendChild(newCell);
}