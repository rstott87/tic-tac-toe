
const playerTurnMessage = document.getElementById("playerTurn");
const boardContainer = document.querySelector("#gameboardContainer");
const winnerDeclared = document.getElementById("winnerDeclared")

//function that creates game board. uses a simple loop to create 9 divs in grid form as board pieces. 
const Gameboard = (function (){
    let board = []
        
    for (let i = 0; i<9; i++) {
        const boardPiece = document.createElement('div');
        boardContainer.appendChild(boardPiece)
        boardPiece.classList.add('boardPiece')
        boardPiece.setAttribute('id', i)
        board.push(boardPiece);
    ;}
    return {board}
})();

// each of these arrays hold the combination of board pieces that results in someone winning 

const winningArray1 = [];
const winningArray2 = [];
const winningArray3 = [];
const winningArray4 = [];
const winningArray5 = [];
const winningArray6 = [];
const winningArray7 = [];
const winningArray8 = [];

let winningArrays = [winningArray1, winningArray2, winningArray3, winningArray4, winningArray5, winningArray6, winningArray7, winningArray8]



const renderedBoardPiece = document.querySelectorAll('.boardPiece');


//creates the specific 'combinations' for winning arrays
const createWinningArrays = (() => {
    for (let i = 0; i < 9; i++) {
        if (i <= 2){
            winningArray1.push(renderedBoardPiece[i]);
        }if (i > 2 && i <= 5) {
            winningArray2.push(renderedBoardPiece[i]);
        }if (i > 5 && i <= 8) {
            winningArray3.push(renderedBoardPiece[i]);
        }if (i == 0 || i == 3 || i == 6){
            winningArray4.push(renderedBoardPiece[i]);
        }if (i == 1 || i == 4 || i == 7) {
            winningArray5.push(renderedBoardPiece[i]);
        }if (i == 2 || i == 5 || i == 8) {
            winningArray6.push(renderedBoardPiece[i]);
        }if (i == 0 || i == 4 || i == 8) {
            winningArray7.push(renderedBoardPiece[i]);
        }if (i == 2 || i == 4 || i == 6) {
            winningArray8.push(renderedBoardPiece[i]);
        };
    };
})();


let xTurn = true;

//adds event listeners to each piece 
renderedBoardPiece.forEach((n) =>  {
    n.addEventListener('click', () => {
        if (xTurn && n.innerHTML == ''){
            n.innerHTML = 'X'
            playerTurnMessage.innerHTML= "Player's Turn: O";
            xTurn = false;
            winningArrays.forEach(checkXForWinner);

        } else if (!xTurn && n.innerHTML == '') {
            n.innerHTML = 'O';
            playerTurnMessage.innerHTML= "Player's Turn: X";
            xTurn = true;
            winningArrays.forEach(checkOForWinner);
        }      
    }); 
}); 

//checks X for winner 
const checkXForWinner = (array) => {
    for (let i = 0; i < 3; i ++) {
        if (array[i].innerHTML == "X") {
            }
        else {
            return 0
            };
        };   
        playerTurnMessage.innerHTML= "X wins"
        
        array.forEach((n)=>{
            n.style.backgroundColor = "grey"
        })
    };

//checks O for winner     
const checkOForWinner = (array) => {
    for (let i = 0; i < 3; i ++) {
        if (array[i].innerHTML == "O") {
            }
        else {
            return 0
            };
        };   
        playerTurnMessage.innerHTML= "O wins"
        array.forEach((n)=>{
            n.style.backgroundColor = "grey"
        })    
    };

