let n=3 , minn = 65 , maxx = 74 ;//33 to 126
const player1Grid = buildRandomGrid(n) ;
const player2Grid = buildRandomGrid(n) ;
let currentSymbol ;

// Render the grids on the page
renderGrid(player1Grid, 'player1-grid', 'player1');
renderGrid(player2Grid, 'player2-grid', 'player2');

let p1ResponseCount = 0 , p2ResponseCount = 0 ;
var responseP1 = false , responseP2 = false ;

let turn = 'player1' ;

// Show pattern numbers one by one
function start(){
    responseP1 = false ;
    responseP2 = false ;
    currentSymbol = randomValue(minn,maxx);
    console.log(currentSymbol)
    showNextPatternNumber(currentSymbol);

    // displayTurn('player');
    // displayTurn('player2');
    
    // * here we check winner just after every pattern call
    if (winCheck('player1') && winCheck('player2')) {
        showNextPatternNumber('Bingo! Draw both Won!');
    }
    else if(winCheck('player1')){
        showNextPatternNumber('Bingo! Player1 Won the Game !!');
    }
    else if(winCheck('player2') ){
        showNextPatternNumber('Bingo! Player2 Won the Game !!');
    }

    // console.log(responseP1 , " ,  " , responseP2);
    // console.log(p1ResponseCount , " ,  " , p2ResponseCount);
}
start() ;



function randomValue(min, max){
    const r = Math.floor(Math.random() * (max - min +1) + min) ;
    let asciiChar = String.fromCharCode(r);
    return asciiChar;

}
    

//Function to Built a random array
function buildRandomGrid(n){
    let totalRandomValue =  n*n;
    let arr = new Array(totalRandomValue);
    for (let i = 0 ; i<totalRandomValue ; i++ ){
        let asciiChar = randomValue(minn ,maxx);
        arr[i] = asciiChar ;
    }
    return arrToGridConverter(arr , n) ;
}

//Function to Built a grid from array
function arrToGridConverter(arr , n) {
    let grid2D = [];
    for (let i = 0 ; i<n ; i++ ){
        let temp = new Array(n);
        for (let j = 0 ; j<n ; j++ ){
            temp[j] = arr[(i*n)+j] ;
        }
        grid2D.push(temp);
    }
    return grid2D ;
}

// Function to render the grid on the page
function renderGrid(grid, gridElementId, playerId) {
    const gridElement = document.getElementById(gridElementId);
    gridElement.innerHTML = ''; 

    grid.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('column');
            cellElement.textContent = cell;
            cellElement.id = `${playerId}-${rowIndex}-${colIndex}`; //player1-grid-0-0 -- for player 1 on 1st row 1st col
            cellElement.onclick = handleClick ;
            rowElement.appendChild(cellElement);
        });
        gridElement.appendChild(rowElement);
    });
}

function showNextPatternNumber(currentSymbol) {
    const nextSymbolElement = document.getElementById('next-symbol');
    nextSymbolElement.textContent = currentSymbol;
}

function handleClick(){
    console.log(this.id);
    if(isValidClick(this.id , currentSymbol)){
        document.getElementById(this.id).classList.add('crossed');
    }
    else{
        document.getElementById(this.id).classList.add('wrong');
        setTimeout(()=>{
            document.getElementById(this.id).classList.remove('wrong');
        },800);
    }

    if (winCheck('player1') && winCheck('player2')) {
        showNextPatternNumber('Bingo! Draw both Won!');
    }
    else if(winCheck('player1')){
        showNextPatternNumber('Bingo! Player1 Won the Game !!');
    }
    else if(winCheck('player2') ){
        showNextPatternNumber('Bingo! Player2 Won the Game !!');
    }
    // if(responseP1 && responseP2) {
    //     start() ;
    // }
}


function isValidClick(id , currentSymbol){   //player1-0-3
    // return true ;
    const idInfoArr = id.split("-");
    const row = idInfoArr[1] , col = idInfoArr[2] ;
    console.log(idInfoArr);
    let grid ;
    if(idInfoArr[0] == 'player1') {
        grid = player1Grid ;
        responseP1 =true
    }
    else if(idInfoArr[0] == 'player2') {
        grid = player2Grid ;
        responseP2 =true ;
    }

    //clicked symbol got matched or not
    if ( grid[row][col] === currentSymbol) {
        document.getElementById(id).classList.add('crossed');
        if(idInfoArr[0] == 'player1') p1ResponseCount++;
        else p2ResponseCount++ ;
        return true ;
    }

    return false ;
}



function winCheck(playerId){
    for (let rowIndex = 0 ; rowIndex<n ; rowIndex++){
        for(let colIndex =0  ; colIndex<n ; colIndex++){
            if(!(document.getElementById(`${playerId}-${rowIndex}-${colIndex}`).classList.contains('crossed'))){
                return false ;
            }
        }
    }
    return true ;
}


// Function to mark the grid with a red cross if the number matches
function markGrid(grid, number, playerId) {
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === number) {
                document.getElementById(`${playerId}-${rowIndex}-${colIndex}`).classList.add('crossed');
            }
        });
    });
}



function restart(){
    location.reload() ;
}
