'esversion: 6';

$(document).ready(function(){

    function DominoGame(options){
      this.playerOne=options.playerOne;
      this.playerTwo=options.playerTwo;

      this.dominoBox=options.dominoBox;
      this.gameBoard=options.gameBoard;


    }



    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,

      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });


    dominoGame.dominoBox.print();
    dominoGame.dominoBox.shuffle();
    dominoGame.dominoBox.print();


    //start buttton to begin the game...
    $("button.startgame").click(function(){

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
     dominoGame.gameBoard.drawBoard();

    });

    console.log(" he leido primero esto");

    $(".dominoplayerone.filled").click(function(){
      console.log("you clicked one");
    });

    $('.dominoplayertwo.filled').click(function(){
      console.log("you clicked two");
    });


    console.log("he leido esto");



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
});
