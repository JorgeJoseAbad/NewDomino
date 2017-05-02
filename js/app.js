'esversion: 6';

//$(document).ready(function(){

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



    var numberSelectedDomino;
    var selectedDomino;

    $(document).on('click', ".dominoplayerone.filled", function() {

      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      dominoGame.playerOne.removePlayerDominoes();
      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      dominoGame.playerOne.showPlayerDominoes();

    });

    $(document).on('click', ".dominoplayertwo.filled", function() {

      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      dominoGame.playerTwo.removePlayerDominoes();
      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      dominoGame.playerTwo.showPlayerDominoes();

    });

    $(document).on('click','.cell-board',function(){
      console.log("a ver si hago push");
      dominoGame.gameBoard.domino.push(selectedDomino);
      console.log(dominoGame.gameBoard.domino);
      console.log(this); //this is the cell-board where i clicked
      $(this).addClass('filled');
      $(this).html(selectedDomino.numberOne);
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
