'esversion: 6';



    function Player(options) {
      this.MAX_DOMINOES=8;
      this.body =  [];
      this.turn= false;
      this.name=options.name;



    }


    var playerOne = new Player({
      name: "playerOne",
    });

    var playerTwo= new Player({
      name: "playerTwo",
    });

    //funcion que retorna si existe una ficha del array del jugador, si se pasa sin numero a buscar
    // retorna la primera ficha del array
    Player.prototype.playerPickDomino=function(num1=10,num2=10){

    if (num1===10&&num2===10) return this.body.splice(0,1)[0];
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


    //funcion que MUESTRA VISUALMENTE las fichas de un jugador, su mano
    Player.prototype.showPlayerDominoes=function(){

    var columnsPlayerindex;

    if (this.name==='playerOne'){
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
                $('.dominoplayerone[picknumber="'+i+'"]')[0].childNodes[1].innerHTML= this.body[i].numberTwo;

              }
        }

    if (this.name==='playerTwo'){
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
              $('.dominoplayertwo.filled[picknumber="'+j+'"]')[0].childNodes[1].innerHTML= this.body[j].numberTwo;

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
