
    function Board(options) {

      this.rows           = options.rows;
      this.columns        = options.columns;
      this.domino         = options.dominoPlayed;


    }


//Function to check graphically correct movement
Board.prototype.graphicOk=function(boardPlace,newDom,snakeDom){


  thisdataRow=parseInt($(boardPlace).attr('data-row'));
  thisdataCol=parseInt($(boardPlace).attr('data-col'));
  console.log($('div[data-row="'+(thisdataRow)+'"][data-col="'+thisdataCol+'"]').html());


  //verify begin mov to begin
  if (
    ((parseInt($('div[data-row="'+(thisdataRow-1)+'"][data-col="'+thisdataCol+'"]').html())===newDom.numberOne||
      parseInt($('div[data-row="'+thisdataRow+'"][data-col="'+(thisdataCol-1)+'"]').html())===newDom.numberOne||
      parseInt($('div[data-row="'+thisdataRow+'"][data-col="'+(thisdataCol+1)+'"]').html())===newDom.numberOne)&&
          (newDom.numberOne===snakeDom.numberOne&&snakeDom.numberOneOpen||
            newDom.numberOne===snakeDom.numberTwo&&snakeDom.numberTwoOpen))||
      ((parseInt($('div[data-row="'+(thisdataRow+1)+'"][data-col="'+(thisdataCol-1)+'"]').html())===newDom.numberTwo||
        parseInt($('div[data-row="'+(thisdataRow+1)+'"][data-col="'+(thisdataCol+1)+'"]').html())===newDom.numberTwo||
        parseInt($('div[data-row="'+(thisdataRow+2)+'"][data-col="'+thisdataCol+'"]').html())===newDom.numberTwo)&&
          (newDom.numberTwo===snakeDom.numberOne&&snakeDom.numberOneOpen||
            newDom.numberTwo===snakeDom.numberTwo&&snakeDom.numberTwoOpen))
        )
      {

     return true;
   } else {

     return false;
   }
};


// Move domino to begin of array in board
  Board.prototype.movToBegin=function(selectedDomino){


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

                return false;
              }
            }
            return true;
};


//Move domino to end of array in board
Board.prototype.movToEnd=function(selectedDomino){

    var last;
    last=this.domino.length-1;

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

      
    };

  var gameBoard = new Board({
    rows: 20,
    columns: 30,
    dominoPlayed: []
  });
