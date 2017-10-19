
    function DominoGame(options){
      this.playerOne=options.playerOne;
      this.playerTwo=options.playerTwo;
      this.dominoBox=options.dominoBox;
      this.gameBoard=options.gameBoard;

      this.dominoBox.print();
      this.dominoBox.shuffle();
      this.dominoBox.print();

      this.startGame();
      this.pickNewDomino();
      //this.selecDominoPlayerOne();
      //this.selecDominoPlayerTwo();
      //this.placeDominoInBoard();


    }

//GameOver without winner (lack of dominoes)
DominoGame.prototype.endgame=function(){
  document.getElementById("gamestate").innerHTML='No more dominoes in box, END OF GAME';
};

// GameOver with winner.
DominoGame.prototype.gameOver=function(player){
  var winner;
  if (player.body.length===0){
    console.log(player.name+'is winner!!!!!!!!!');
    winner=player.name;
    document.getElementById("gamestate").innerHTML=winner +' is the winner; GAME OVER';
    }
  else {
    console.log('game again');
    }

};

//function to give a player a new domino from the box.
DominoGame.prototype.pickNewDomino=function(){
    var newDomino;

    $("button.picknewdomino").click(function(){

      newDomino=dominoBox.getDomino();
      if (newDomino===null) dominoGame.endgame();
      console.log(newDomino);
      if (dominoGame.playerOne.turn===true) {
        dominoGame.playerOne.body.push(newDomino);
        dominoGame.playerOne.removePlayerDominoes();
        dominoGame.playerOne.showPlayerDominoes();

      } else if (dominoGame.playerTwo.turn===true){
        dominoGame.playerTwo.body.push(newDomino);
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();

      }
  });
};

//Start Game
DominoGame.prototype.startGame=function(){

    //update players name
    document.getElementsByClassName("nameplayer")[0].innerHTML=this.playerOne.name;
    document.getElementsByClassName("nameplayer")[1].innerHTML=this.playerTwo.name;
    //start buttton to begin the game...
    $("button.startgame").click(function(){
      document.getElementById("gamestate").innerHTML='Game is running';
      dominoGame.playerOne.startPlayer(dominoGame.dominoBox);
      dominoGame.playerTwo.startPlayer(dominoGame.dominoBox);
      console.log(dominoGame.playerOne);
      if (dominoGame.playerOne.searchDomino(6,6)){
        dominoGame.playerOne.turn=true;
        dominoGame.playerOne.showPlayerDominoes();
        dominoGame.selecDominoPlayerOne();
      } else if (dominoGame.playerTwo.searchDomino(6,6)){
              dominoGame.playerTwo.turn=true;
              dominoGame.playerTwo.showPlayerDominoes();
              dominoGame.selecDominoPlayerTwo();
              } else {
                  dominoGame.playerOne.turn=true;
                  dominoGame.playerOne.showPlayerDominoes();
                  dominoGame.selecDominoPlayerOne();
                  }
     dominoGame.gameBoard.drawBoard();

   });

};



// Game select playerOne's domino
DominoGame.prototype.selecDominoPlayerOne=function(){

    $('#dominoesplayerone').on('click', ".dominoplayerone.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');

      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];
      dominoGame.playerOne.removePlayerDominoes();
      dominoGame.playerOne.showPlayerDominoes();
      dominoGame.placeDominoInBoard(selectedDomino,dominoGame.playerOne.name);

    });

};

// If playerOne move on board is valid...
DominoGame.prototype.movDominoPlayerOneValid=function(){

        $('.boardtable').off("click",'.cell-board');
        dominoGame.playerOne.changeTurn();
        dominoGame.playerOne.hideDominoes();
        dominoGame.playerTwo.showDominoes();
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();
        dominoGame.selecDominoPlayerTwo();
};

//If playerOne move on board is NOT valid
DominoGame.prototype.repeatPlayerOneMov=function(){
  $('.boardtable').off("click",'.cell-board');
  dominoGame.playerOne.removePlayerDominoes();
  dominoGame.playerOne.showPlayerDominoes();
  dominoGame.selecDominoPlayerOne();
};

// Game select playerTwo's domino
DominoGame.prototype.selecDominoPlayerTwo=function(){


    $('#dominoesplayertwo').on('click', ".dominoplayertwo.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');

      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      dominoGame.playerTwo.removePlayerDominoes();
      dominoGame.playerTwo.showPlayerDominoes();
      dominoGame.placeDominoInBoard(selectedDomino,dominoGame.playerTwo.name);

    }); //end onclick event

  }; // End selectedDomino function


  // If playerTwo move on board is valid...
  DominoGame.prototype.movDominoPlayerTwoValid=function(){

    $('.boardtable').off("click",'.cell-board');
    dominoGame.playerTwo.changeTurn();
    dominoGame.playerTwo.hideDominoes();
    dominoGame.playerOne.showDominoes();
    dominoGame.playerOne.removePlayerDominoes();
    dominoGame.playerOne.showPlayerDominoes();
    dominoGame.selecDominoPlayerOne();
  };

  DominoGame.prototype.repeatPlayerTwoMov=function(){
    $('.boardtable').off("click",'.cell-board');
    dominoGame.playerTwo.removePlayerDominoes();
    dominoGame.playerTwo.showPlayerDominoes();
    dominoGame.selecDominoPlayerTwo();
  };

//Draw dominoes in board
DominoGame.prototype.drawNumbersInBoard=function(position,number){
  $(position).addClass('filled');
  $(position).html(number);
  $(position).append("<img>");
  switch (number) {
    case 0:
      $(position).children("img").attr('src',"./img/CERO.png");
      break;
    case 1:
      $(position).children("img").attr('src',"./img/UNO.png");
      break;
    case 2:
      $(position).children("img").attr('src',"./img/DOS.png");
      break;
    case 3:
      $(position).children("img").attr('src',"./img/TRES.png");
      break;
    case 4:
      $(position).children("img").attr('src',"./img/CUATRO.png");
      break;
    case 5:
      $(position).children("img").attr('src',"./img/CINCO.png");
      break;
    case 6:
      $(position).children("img").attr('src',"./img/SEIS.png");
      break;
    default:

  }

};

DominoGame.prototype.placeDominoInBoard=function(domSelected,name){

  var dataRow;
  var dataCol;
  var end=dominoGame.gameBoard.domino.length-1; //index of last domino placed in board

    $('.boardtable').on('click','.cell-board',function(){

      console.log(dominoGame.gameBoard.domino[0]);
      if (dominoGame.gameBoard.domino[0]===undefined) {
          dominoGame.gameBoard.insertPushDomino(domSelected); //para el primer movimento
          console.log(this); //this is the cell-board where i clicked
          dataRow=parseInt($(this).attr('data-row'));
          dataCol=parseInt($(this).attr('data-col'));
          dominoGame.drawNumbersInBoard(this,domSelected.numberOne);
          dominoGame.drawNumbersInBoard('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]',domSelected.numberTwo);
          if (name===playerOne.name) {
              dominoGame.movDominoPlayerOneValid();
              $('#dominoesplayerone').off();
            } else if (name===playerTwo.name){
              dominoGame.movDominoPlayerTwoValid();
              $('#dominoesplayertwo').off();
          }

        } else if (
                    ((dominoGame.gameBoard.graphicOk(this,domSelected,dominoGame.gameBoard.domino[0]))&&
                    (dominoGame.gameBoard.movToBegin(domSelected)))||
                    ((dominoGame.gameBoard.graphicOk(this,domSelected,dominoGame.gameBoard.domino[end]))&&
                    (dominoGame.gameBoard.movToEnd(domSelected)))
                  ) {
            console.log(this); //this is the cell-board where i clicked
            dataRow=parseInt($(this).attr('data-row'));
            dataCol=parseInt($(this).attr('data-col'));
            dominoGame.drawNumbersInBoard(this,domSelected.numberOne);
            dominoGame.drawNumbersInBoard('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]',domSelected.numberTwo);
            if (name===playerOne.name) {
                dominoGame.movDominoPlayerOneValid();
                dominoGame.gameOver(playerOne);
                $('#dominoesplayerone').off();
              } else if (name===playerTwo.name){
                dominoGame.movDominoPlayerTwoValid();
                dominoGame.gameOver(playerTwo);
                $('#dominoesplayertwo').off();
              }
            } else {
                    if (name===playerOne.name){
                      dominoGame.playerOne.addDomino(domSelected);
                      $('#dominoesplayerone').off();
                      dominoGame.repeatPlayerOneMov();

                    } else if (name===playerTwo.name){
                      dominoGame.playerTwo.addDomino(domSelected);
                      $('#dominoesplayertwo').off();
                      dominoGame.repeatPlayerTwoMov();

                    }
                  }
                  console.log(dominoGame.gameBoard.domino);
            }); // end onclic event

    }; //end function placeDominoInBoard



    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });
