'esversion: 6';

function DominoGame(options){
  this.playerOne=options.playerOne;
  this.playerTwo=options.playerTwo;
  //this.gameBoard=;
  this.dominoBox=options.dominoBox;

  //this.dominoBox.print();
  //this.dominoBox.shuffle();
  //this.dominoBox.print();

}



var dominoGame = new DominoGame({
  playerOne:playerOne,
  playerTwo:playerTwo,
  //gameBoard;
  dominoBox:dominoBox
});

dominoGame.dominoBox.print();
dominoGame.dominoBox.shuffle();
dominoGame.dominoBox.print();


console.log(dominoGame.playerOne);

console.log(dominoGame.playerOne.body);

console.log(dominoGame.playerTwo.body);


$("button").click(function(){

  console.log("You clicked the button!");
  dominoGame.playerOne.startPlayer(dominoGame.dominoBox);
  dominoGame.playerTwo.startPlayer(dominoGame.dominoBox);
  console.log(dominoGame.playerOne);
  if (dominoGame.playerOne.searchDomino(6,6)){
    dominoGame.playerOne.turn=true;
    dominoGame.playerOne.showPlayerDominoes();
  } else if (dominoGame.playerTwo.searchDomino(6,6)){
          dominoGame.playerTwo.turn=true;
          dominoGame.playerTwo.showPlayerDominoes();
          } else {
              console.log("no hay seis doble");
              dominoGame.playerOne.turn=true;
              dominoGame.playerOne.showPlayerDominoes();
              }


});






//code to give initial turn
/*
if (dominoGame.playerOne.searchDomino(6,6)){
  dominoGame.playerOne.turn=true;
} else if (dominoGame.playerTwo.searchDomino(6,6)){
        dominoGame.playerTwo.turn=true;
        } else {
            console.log("no hay seis doble");
            dominoGame.playerOne.turn=true;
            }
*/


//this code only for test purposes
/*
var sixSix;
if (dominoGame.playerOne.turn&&dominoGame.playerOne.searchDomino(6,6)) {
  sixSix=dominoGame.playerOne.playerPickDomino(6,6);
  console.log("playerOne: ");
  console.log(sixSix);
} else if (dominoGame.playerOne.turn&&!dominoGame.playerOne.searchDomino(6,6)){
  sixSix=dominoGame.playerOne.playerPickDomino();
  console.log("playerOne: ");
  console.log(sixSix);
} else if (dominoGame.playerTwo.turn){
  sixSix=dominoGame.playerTwo.playerPickDomino(6,6);
  console.log("playerTwo: ");
  console.log(sixSix);
}

var nextDomino;
nextDomino=dominoGame.playerTwo.playerPickDomino(6,0)||dominoGame.playerTwo.playerPickDomino(6,1);
console.log("nextDomino");
console.log(nextDomino);
*/
