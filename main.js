const Gameboard = function (){
    let board = []

        //let boardPiece = document.createElement('div')
        //let boardContainer = document.getElementById("gameboardContainer");
        //boardContainer.appendChild(boardPiece);

};

const boardPiece = document.querySelectorAll('.boardPiece')
boardPiece.forEach((n) =>  {
    n.addEventListener('click', () => {
        console.log ("click")
        n.innerHTML = 'X';
    }); 
});

