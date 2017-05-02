'esversion: 6';

//$(document).ready(function(){

    function DominoGame(options){
      this.playerOne=options.playerOne;
      this.playerTwo=options.playerTwo;
      this.dominoBox=options.dominoBox;
      this.gameBoard=options.gameBoard;

      this.dominoBox.print();
      this.dominoBox.shuffle();
      this.dominoBox.print();

      this.startGame();
      this.selecDominoPlayerOne();
      this.selecDominoPlayerTwo();
      this.placeDominoInBoard();


    }






    //dominoGame.dominoBox.print();
    //dominoGame.dominoBox.shuffle();
    //dominoGame.dominoBox.print();

DominoGame.prototype.startGame=function(){
    //start buttton to begin the game...
    $("button.startgame").click(function(){

      console.log("You clicked the button!");
      dominoGame.playerOne.startPlayer(dominoGame.dominoBox);
      dominoGame.playerTwo.startPlayer(dominoGame.dominoBox);
      console.log(dominoGame.playerOne);
      if (dominoGame.playerOne.searchDomino(6,6)){
        dominoGame.playerOne.turn=true;
        dominoGame.playerOne.showPlayerDominoes();
        //selecDominoPlayerOne();
      } else if (dominoGame.playerTwo.searchDomino(6,6)){
              dominoGame.playerTwo.turn=true;
              dominoGame.playerTwo.showPlayerDominoes();
              //dominoGame.playerTwo.selecDominoPlayerTwo();
              } else {
                  console.log("no hay seis doble");
                  dominoGame.playerOne.turn=true;
                  dominoGame.playerOne.showPlayerDominoes();
                  //dominoGame.playerOne.selecDominoPlayerOne();
                  }
     dominoGame.gameBoard.drawBoard();

   });
   console.log("startGame expecting you cliked the button");
};


var numberSelectedDomino;
var selectedDomino;
DominoGame.prototype.selecDominoPlayerOne=function(){


    $(document).on('click', ".dominoplayerone.filled", function() {

      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      dominoGame.playerOne.removePlayerDominoes();
      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      dominoGame.playerOne.showPlayerDominoes();
      dominoGame.playerOne.changeTurn();
      dominoGame.playerOne.hideDominoes();
      dominoGame.playerTwo.showDominoes();
      dominoGame.playerTwo.removePlayerDominoes();
      dominoGame.playerTwo.showPlayerDominoes();


    });
};

DominoGame.prototype.selecDominoPlayerTwo=function(){
    $(document).on('click', ".dominoplayertwo.filled", function() {

      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      dominoGame.playerTwo.removePlayerDominoes();
      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      dominoGame.playerTwo.showPlayerDominoes();
      dominoGame.playerTwo.changeTurn();
      dominoGame.playerTwo.hideDominoes();
      dominoGame.playerOne.showDominoes();
      dominoGame.playerOne.removePlayerDominoes();
      dominoGame.playerOne.showPlayerDominoes();


    });

  }; //selectedDomino function

DominoGame.prototype.placeDominoInBoard=function(){
    $(document).on('click','.cell-board',function(){
      console.log("a ver si hago push con");
      console.log(selectedDomino);
      console.log(dominoGame.gameBoard.domino[0]);
      if (dominoGame.gameBoard.domino[0]===undefined) {
          dominoGame.gameBoard.insertPushDomino(selectedDomino); //para el primer movimento
          console.log(this); //this is the cell-board where i clicked
          $(this).addClass('filled');
          $(this).html(selectedDomino.numberOne);

        } else {
          //dominoGame.gameBoard.movToEnd(selectedDomino); //tengo que buscar la forma de emplar
          dominoGame.gameBoard.movToBegin(selectedDomino); //una u otra
          console.log(this); //this is the cell-board where i clicked
          $(this).addClass('filled');
          $(this).html(selectedDomino.numberOne);

          }

      console.log(dominoGame.gameBoard.domino);

    });
};


    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
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
//});
