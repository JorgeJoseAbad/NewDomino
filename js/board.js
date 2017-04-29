'esversion: 6';


    function Board(options) {

      this.rows           = options.rows;
      this.columns        = options.columns;
      this.domino         = options.dominoPlayed;


    }

    var gameBoard = new Board({
      rows: 30,
      columns: 30,
      dominoPlayed: []
    });

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

    Board.prototype.insertPushDomino=function(domino){
      var snake;
      snake=this.domino.push(domino);
      console.log(snake);
    };

    Board.prototype.insertUnshiftDomino=function(domino){
      var snake;
      snake=this.domino.unshift(domino);
      console.log(snake);
    };
