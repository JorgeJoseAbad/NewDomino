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
      this.pickNewDomino();
      //this.selecDominoPlayerOne();
      //this.selecDominoPlayerTwo();
      //this.placeDominoInBoard();


    }

    //function to pick a player a new domino.
DominoGame.prototype.pickNewDomino=function(){
    var newDomino;

    $("button.picknewdomino").click(function(){
      console.log('prueba');
      newDomino=dominoBox.getDomino();
      console.log(newDomino);
      if (dominoGame.playerOne.turn===true) {
        console.log('turno en player1');
        dominoGame.playerOne.body.push(newDomino);

        dominoGame.playerOne.removePlayerDominoes();
        dominoGame.playerOne.showPlayerDominoes();


      } else if (dominoGame.playerTwo.turn===true){
        console.log('turno en player2');
        dominoGame.playerTwo.body.push(newDomino);
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();


      }

  });
};


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
        dominoGame.selecDominoPlayerOne();
      } else if (dominoGame.playerTwo.searchDomino(6,6)){
              dominoGame.playerTwo.turn=true;
              dominoGame.playerTwo.showPlayerDominoes();
              dominoGame.selecDominoPlayerTwo();
              } else {
                  console.log("no hay seis doble");
                  dominoGame.playerOne.turn=true;
                  dominoGame.playerOne.showPlayerDominoes();
                  dominoGame.selecDominoPlayerOne();
                  }
     dominoGame.gameBoard.drawBoard();

   });
   console.log("startGame expecting you cliked the button");
};




DominoGame.prototype.selecDominoPlayerOne=function(){

  console.log("entraos en selecDominoPlayerOne");

    $('#dominoesplayerone').on('click', ".dominoplayerone.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      console.log("------------------------");
      console.log(selectedDomino);
      selectedDomino=dominoGame.playerOne.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      //console.log(selectedDomino);
      dominoGame.playerOne.removePlayerDominoes();
      dominoGame.playerOne.showPlayerDominoes();

      dominoGame.placeDominoInBoard(selectedDomino,dominoGame.playerOne.name);


    });
  console.log("estamos esperando click en selecDominoPlayerOne");
};

DominoGame.prototype.movDominoPlayerOneValid=function(){
        console.log("entramos en movDominoPlayerOneValid");

        $('.boardtable').off("click",'.cell-board');
        dominoGame.playerOne.changeTurn();
        dominoGame.playerOne.hideDominoes();
        dominoGame.playerTwo.showDominoes();
        dominoGame.playerTwo.removePlayerDominoes();
        dominoGame.playerTwo.showPlayerDominoes();
        dominoGame.selecDominoPlayerTwo();
};

DominoGame.prototype.repeatPlayerOneMov=function(){
  $('.boardtable').off("click",'.cell-board');
  dominoGame.playerOne.removePlayerDominoes();
  dominoGame.playerOne.showPlayerDominoes();
  dominoGame.selecDominoPlayerOne();
};


DominoGame.prototype.selecDominoPlayerTwo=function(){

  console.log("entramos en selecDominoPlayerTwo");
    $('#dominoesplayertwo').on('click', ".dominoplayertwo.filled", function() {
      var selectedDomino;
      var numberSelectedDomino;
      numberSelectedDomino=$(this).attr('picknumber');
      console.log(numberSelectedDomino);
      console.log("------------------------");
      console.log(selectedDomino);
      selectedDomino=dominoGame.playerTwo.body.splice(numberSelectedDomino,1)[0];
      console.log(selectedDomino);
      //console.log(selectedDomino);
      dominoGame.playerTwo.removePlayerDominoes();
      dominoGame.playerTwo.showPlayerDominoes();

      dominoGame.placeDominoInBoard(selectedDomino,dominoGame.playerTwo.name);


    });
    console.log("estamos esperando click en selecDominoPlayerTwo");

  }; //selectedDomino function


  DominoGame.prototype.movDominoPlayerTwoValid=function(){
    console.log("entramos en movDominoPlayerTwoValid");
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



DominoGame.prototype.placeDominoInBoard=function(domSelected,name){
  console.log("entramos en placeDominoInBoard");
  console.log(domSelected);
  console.log(name);
  var dataRow;
  var dataCol;

    $('.boardtable').on('click','.cell-board',function(){
      console.log("a ver si hago push con");
      console.log(domSelected);
      console.log(dominoGame.gameBoard.domino[0]);
      if (dominoGame.gameBoard.domino[0]===undefined) {
          dominoGame.gameBoard.insertPushDomino(domSelected); //para el primer movimento
          console.log(this); //this is the cell-board where i clicked
          dataRow=parseInt($(this).attr('data-row'));
          dataCol=parseInt($(this).attr('data-col'));
          console.log(dataRow,dataCol);
          console.log(dataRow+1,dataCol+1);
          $(this).addClass('filled');
          $(this).html(domSelected.numberOne);
          $('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]').addClass('filled');
          $('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]').html(domSelected.numberTwo);
          if (name==='playerOne') {
              console.log("playerOne");
              dominoGame.movDominoPlayerOneValid();
              $('#dominoesplayerone').off();
            } else if (name==='playerTwo'){
              console.log('playerTwo');
              dominoGame.movDominoPlayerTwoValid();
              $('#dominoesplayertwo').off();
          }


        } else if ((dominoGame.gameBoard.domino[0]!==undefined)&&
                    dominoGame.gameBoard.graphicOk(this,domSelected)&&
                    (dominoGame.gameBoard.movToEnd(domSelected)||
                    dominoGame.gameBoard.movToBegin(domSelected))
                    ) {
            console.log(this); //this is the cell-board where i clicked

            dataRow=parseInt($(this).attr('data-row'));
            dataCol=parseInt($(this).attr('data-col'));
            console.log(dataRow,dataCol);
            console.log(dataRow+1,dataCol+1);
            $(this).addClass('filled');
            $(this).html(domSelected.numberOne);
            //prueba
            //dominoGame.gameBoard.graphicOk(this,domSelected);
            //prueba
            $('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]').addClass('filled');
            $('div[data-row="'+(dataRow+1)+'"][data-col="'+dataCol+'"]').html(domSelected.numberTwo);
            if (name==='playerOne') {
                console.log("playerOne");
                dominoGame.movDominoPlayerOneValid();
                $('#dominoesplayerone').off();
              } else if (name==='playerTwo'){
                console.log('playerTwo');
                dominoGame.movDominoPlayerTwoValid();
                $('#dominoesplayertwo').off();
              }
            } else {
                    console.log("MOVIMIENTO ILEGAL");
                    if (name==='playerOne'){
                      console.log(name);
                      dominoGame.playerOne.addDomino(domSelected);
                      $('#dominoesplayerone').off();
                      dominoGame.repeatPlayerOneMov();

                    } else if (name==='playerTwo'){
                      console.log(name);
                      dominoGame.playerTwo.addDomino(domSelected);
                      $('#dominoesplayertwo').off();
                      dominoGame.repeatPlayerTwoMov();

                    }
                  }
                  console.log(dominoGame.gameBoard.domino);
            }); //onclic event
            console.log("estamos esperando click en placeDominoInBoard");
    }; //function placeDominoInBoard









    var dominoGame = new DominoGame({
      playerOne:playerOne,
      playerTwo:playerTwo,
      dominoBox:dominoBox,
      gameBoard:gameBoard,
    });
