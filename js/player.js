'esversion: 6';



    function Player(options) {
      this.MAX_DOMINOES=8;
      this.body =  [];
      this.turn= false;
      this.name=options.name;



    }



    //funcion que retorna si existe una ficha del array del jugador, buscando sus numeros.
    //si se pasa sin numero a buscar retorna la primera ficha del array
    // he retirado los valores por defecto num1=10 y num2=20 que no se aceptan en
    //ES5 y busco null, esta función no se usa realmente
    Player.prototype.playerPickDomino=function(num1,num2){

    if (num1===null&&num2===null) return this.body.splice(0,1)[0];
    else{
        for (i=0;i<this.body.length;i++){
              if (((this.body[i].numberOne===num1) && (this.body[i].numberTwo===num2)) ||
                    ((this.body[i].numberOne===num2) && (this.body[i].numberTwo===num1)))
                      return this.body.splice(i,1)[0];
                      //acaba y devuelve la ficha buscada ojo que
                      //splice devuelve un array
              }
            }

        return undefined; //no lo ha encontrado


    };


    Player.prototype.getDominoNumber=function(number){
      var numbersDomino=[];
       numbersDomino.push(this.body[number].numberOne);
       numbersDomino.push(this.body[number].numberTwo);
       return numbersDomino;
    };

//function to show dominoes draw in hand
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

    //funcion que MUESTRA VISUALMENTE las fichas de un jugador, su mano
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


    Player.prototype.startPlayer=function(dominoBox){

      for  (i=0 ;i<this.MAX_DOMINOES; i++){

        var shifted =dominoBox.body.shift();
        this.body.unshift(shifted);
      }
      return this.body;
    };


    Player.prototype.searchDomino = function(a,b){
      console.log("Buscamos para...: ");
      console.log(this.name);
      console.log("numero a en searchNumber: "+a);
      console.log("numero b en searchNumber: "+b);
      for (i=0;i<this.body.length;i++){
        if ((this.body[i].numberOne===a && this.body[i].numberTwo===b)||
         (this.body[i].numberOne===b && this.body[i].numberTwo===a)){
           console.log("ficha |"+a+"|"+b+"| encontrada");
          return true;
        }
      }
      return false;
    };

Player.prototype.removePlayerDominoes=function(){
  if (this.name===playerOne.name){
    console.log('intento quitar clases playerOne');
    $(".dominoplayerone.filled").remove();
  }
  if (this.name===playerTwo.name){
    console.log('intento quitar clases playerTwo');
    $(".dominoplayertwo.filled").remove();
  }
};

//recibe el jugador que tiene turno y lo cambia aun no probado
Player.prototype.changeTurn=function(){
  if (this.name===playerOne.name){
    this.turn=false;
    playerTwo.turn=true;
  } else if (this.name===playerTwo.name){
    this.turn=false;
    playerOne.turn=true;
  }
};

Player.prototype.hideDominoes=function(){
  if (this.name===playerOne.name){
    console.log("intento quitar visibilidad player one");
    $('#dominoesplayerone').addClass('hide');
  } else if (this.name===playerTwo.name){
    console.log("intento quitar visibilidad player Two");
    $('#dominoesplayertwo').addClass('hide');
  }
};

Player.prototype.showDominoes=function(){
  if (this.name===playerOne.name){
    console.log("intento dar visibilidad player one");
    $('#dominoesplayerone').removeClass('hide');
  } else if (this.name===playerTwo.name){
    console.log("intento dar visibilidad player two");
    $('#dominoesplayertwo').removeClass('hide');
  }
};

Player.prototype.addDomino=function(addedDomino){
  this.body.push(addedDomino);
};



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
// czmbio playerOne por Pablo
// cambio playerTwo por Pedro
// cambio 'playerOne' por playerOne.name and 'playerTwo.name'
// introduzco nombres mediante prompt;
