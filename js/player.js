
    function Player(options) {
      this.MAX_DOMINOES=8;
      this.body =  [];
      this.turn= false;
      this.name=options.name;

    }



    //Function that returns if there is a tab of the player's matrix, looking for their numbers.
    //If passed without number to search returns the first tab of the array
    // This function is not actually used.
    Player.prototype.playerPickDomino=function(num1,num2){

    if (num1===null&&num2===null) return this.body.splice(0,1)[0];
    else{
        for (i=0;i<this.body.length;i++){
              if (((this.body[i].numberOne===num1) && (this.body[i].numberTwo===num2)) ||
                    ((this.body[i].numberOne===num2) && (this.body[i].numberTwo===num1)))
                      return this.body.splice(i,1)[0];
                      //return domino

              }
            }

        return undefined; //no domino


    };

// Get a domino from hand of player.
    Player.prototype.getDominoNumber=function(number){
      var numbersDomino=[];
       numbersDomino.push(this.body[number].numberOne);
       numbersDomino.push(this.body[number].numberTwo);
       return numbersDomino;
    };

//function to show dominoes draw  *.png in hand, graphic.
Player.prototype.drawNumbersInHand=function(node,number){
  $(node).append("<img>");
  switch (number) {
    case 0:
      $(node).children("img").attr('src',"./img/CERO.png");
      break;
    case 1:
      $(node).children("img").attr('src',"./img/UNO.png");
      break;
    case 2:
      $(node).children("img").attr('src',"./img/DOS.png");
      break;
    case 3:
      $(node).children("img").attr('src',"./img/TRES.png");
      break;
    case 4:
      $(node).children("img").attr('src',"./img/CUATRO.png");
      break;
    case 5:
      $(node).children("img").attr('src',"./img/CINCO.png");
      break;
    case 6:
      $(node).children("img").attr('src',"./img/SEIS.png");
      break;
    default:

  }

};

    //Function that visually shows a player's dominoes, his hand,
    Player.prototype.showPlayerDominoes=function(){

    var columnsPlayerindex;

    if (this.name===playerOne.name){
          for (columnsPlayerindex=0; columnsPlayerindex<this.body.length;
                                              columnsPlayerindex++){
            $('#dominoesplayerone').append($('<div>')
              .addClass('dominoplayerone')
              .attr('picknumber',columnsPlayerindex)
              );
            }
            $('#dominoesplayerone .dominoplayerone').append($('<div>')
              .addClass('dominonumberclass')
              .attr('dominonumber',1)
            );
            $('#dominoesplayerone .dominoplayerone').append($('<div>')
              .addClass('dominonumberclass')
              .attr('dominonumber',2)
            );

          for (var i=0; i<this.body.length; i++){
              $('.dominoplayerone[picknumber='+i+']').addClass('filled');
              $('.dominoplayerone[picknumber="'+i+'"]')[0].childNodes[0].innerHTML= this.body[i].numberOne;
              playerOne.drawNumbersInHand($('.dominoplayerone.filled[picknumber="'+i+'"]')[0].childNodes[0],this.body[i].numberOne);
              $('.dominoplayerone[picknumber="'+i+'"]')[0].childNodes[1].innerHTML= this.body[i].numberTwo;
              playerOne.drawNumbersInHand($('.dominoplayerone.filled[picknumber="'+i+'"]')[0].childNodes[1],this.body[i].numberTwo);

            }
        }

    if (this.name===playerTwo.name){
          for (columnsPlayerindex=0; columnsPlayerindex<this.body.length;
                                              columnsPlayerindex++){

            $('#dominoesplayertwo').append($('<div>')
              .addClass('dominoplayertwo')
              .attr('picknumber',columnsPlayerindex)
              );
            }
            $('#dominoesplayertwo .dominoplayertwo').append($('<div>')
              .addClass('dominonumberclass')
              .attr('dominonumber',1)
            );
            $('#dominoesplayertwo .dominoplayertwo').append($('<div>')
              .addClass('dominonumberclass')
              .attr('dominonumber',2)
            );

          for (var j=0; j<this.body.length; j++){
              $('.dominoplayertwo[picknumber='+j+']').addClass('filled');
              $('.dominoplayertwo.filled[picknumber="'+j+'"]')[0].childNodes[0].innerHTML= this.body[j].numberOne;
              playerTwo.drawNumbersInHand($('.dominoplayertwo.filled[picknumber="'+j+'"]')[0].childNodes[0],this.body[j].numberOne);
              $('.dominoplayertwo.filled[picknumber="'+j+'"]')[0].childNodes[1].innerHTML= this.body[j].numberTwo;
              playerTwo.drawNumbersInHand($('.dominoplayertwo.filled[picknumber="'+j+'"]')[0].childNodes[1],this.body[j].numberTwo);

            }
        }
    };

//Give initially a hand of dominoes to player from dominobox.
    Player.prototype.startPlayer=function(dominoBox){

      for  (i=0 ;i<this.MAX_DOMINOES; i++){
        var shifted =dominoBox.body.shift();
        this.body.unshift(shifted);
      }
      return this.body;
    };

    // Search domino by its two numbers
    Player.prototype.searchDomino = function(a,b){

      console.log(this.name);

      for (i=0;i<this.body.length;i++){
        if ((this.body[i].numberOne===a && this.body[i].numberTwo===b)||
         (this.body[i].numberOne===b && this.body[i].numberTwo===a)){

          return true;
        }
      }
      return false;
    };

// Remove visually dominoes from player
Player.prototype.removePlayerDominoes=function(){
  if (this.name===playerOne.name){
    $(".dominoplayerone.filled").remove();
  }
  if (this.name===playerTwo.name){
    $(".dominoplayertwo.filled").remove();
  }
};

//Receives the player who has turn and changes it
Player.prototype.changeTurn=function(){
  if (this.name===playerOne.name){
    this.turn=false;
    playerTwo.turn=true;
  } else if (this.name===playerTwo.name){
    this.turn=false;
    playerOne.turn=true;
  }
};

// Remove visibility
Player.prototype.hideDominoes=function(){
  if (this.name===playerOne.name){
    $('#dominoesplayerone').addClass('hide');
  } else if (this.name===playerTwo.name){
    $('#dominoesplayertwo').addClass('hide');
  }
};

// Give visibility
Player.prototype.showDominoes=function(){
  if (this.name===playerOne.name){
    $('#dominoesplayerone').removeClass('hide');
  } else if (this.name===playerTwo.name){
    $('#dominoesplayertwo').removeClass('hide');
  }
};

// Add domino to player
Player.prototype.addDomino=function(addedDomino){
  this.body.push(addedDomino);
};


// playerOne and playerTwo names by prompt
var person1=function(){
  return prompt("Please enter your name, playerOne");
};

var person2=function() {
  return prompt("Please enter your name, playerTwo");
};

var playerOne = new Player({
  name: person1(),
});

var playerTwo= new Player({
  name: person2(),
});
