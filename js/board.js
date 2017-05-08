'esversion: 6';


    function Board(options) {

      this.rows           = options.rows;
      this.columns        = options.columns;
      this.domino         = options.dominoPlayed;


    }




  Board.prototype.movToBegin=function(selectedDomino){
    console.log("en movToBegin");
    console.log(selectedDomino);

      //debugger;
      switch  (this.domino[0].numberOneOpen||this.domino[0].numberTwoOpen)


            {

              case this.domino[0].numberOneOpen&&(this.domino[0].numberOne===selectedDomino.numberOne):
                    this.domino[0].numberOneOpen=false;
                    selectedDomino.numberOneOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberOneOpen&&(this.domino[0].numberOne===selectedDomino.numberTwo):
                    this.domino[0].numberOneOpen=false;
                    selectedDomino.numberTwoOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberTwoOpen&&(this.domino[0].numberTwo===selectedDomino.numberOne):
                    this.domino[0].numberTwoOpen=false;
                    selectedDomino.numberOneOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              case this.domino[0].numberTwoOpen&&(this.domino[0].numberTwo===selectedDomino.numberTwo):
                    this.domino[0].numberTwoOpen=false;
                    selectedDomino.numberTwoOpen=false;
                    this.domino.unshift(selectedDomino);
                break;
              default: {
                //debugger;
                console.log("movimiento erroneo por alante");
                return false;
              }

            }
            return true;
};



Board.prototype.movToEnd=function(selectedDomino){
    console.log(this.domino);
    var last;
    last=this.domino.length-1;
    console.log("last: "+last);
    console.log(this.domino[last]);

    switch (
            this.domino[last].numberOneOpen||this.domino[last].numberTwoOpen //se puede insertar otra ficha
            )
          {
            case this.domino[last].numberOneOpen&&(this.domino[last].numberOne===selectedDomino.numberOne):
              this.domino[last].numberOneOpen=false;
              selectedDomino.numberOneOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberOneOpen&&(this.domino[last].numberOne===selectedDomino.numberTwo):
              this.domino[last].numberOneOpen=false;
              selectedDomino.numberTwoOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberTwoOpen&&(this.domino[last].numberTwo===selectedDomino.numberOne):
              this.domino[last].numberTwoOpen=false;
              selectedDomino.numberOneOpen=false;
              this.domino.push(selectedDomino);
            break;
            case this.domino[last].numberTwoOpen&&(this.domino[last].numberTwo===selectedDomino.numberTwo):
              this.domino[last].numberTwoOpen=false;
              selectedDomino.numberTwoOpen=false;
              this.domino.push(selectedDomino);
            break;
            default:{
              console.log("movimiento erroneo por alante");
              return false;
            }
          }
          return true;
};



    Board.prototype.drawBoard=function(){

      for (var rowIndex = 0; rowIndex < this.rows; rowIndex++){
        for (var columnIndex = 0; columnIndex < this.columns; columnIndex++){
          $('.boardtable').append($('<div>')
            .addClass('cell-board')
            .attr('data-row', rowIndex)
            .attr('data-col', columnIndex)
          );
        }
      }
    };

//funcions for test
    Board.prototype.insertPushDomino=function(domino){

        this.domino.push(domino);
        console.log(this.domino);
        return true;
      /*var snake;
      snake=this.domino.push(domino);
      console.log('snake');
      console.log(snake);
      console.log('snake2');*/
    };

//function for test
    Board.prototype.insertUnshiftDomino=function(domino){
      var snake;
      snake=this.domino.unshift(domino);
      console.log('snake');
      console.log(snake);
    };

  var gameBoard = new Board({
    rows: 30,
    columns: 30,
    dominoPlayed: []
  });
