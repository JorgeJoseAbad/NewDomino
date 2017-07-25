'esversion: 6';


    function DominoBox(options) {

      this.body = [
          { numberOne:0,
            numberTwo:0,
            numberOneOpen:true,
            numberTwoOpen:true,
            numberOnePos:{
              row:100,
              column:100,},
            numberTwoPos:{
              row:100,
              column:100,}
          },
          {numberOne:0,numberTwo:1,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:0,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:1,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:1,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:2,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:2,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:3,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:3,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:4,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:4,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:5,numberTwo:5,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:5,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          {numberOne:6,numberTwo:6,numberOneOpen:true,numberTwoOpen:true,
          numberOnePos:{row:100,column:100,},numberTwoPos:{row:100,column:100,}},
          ];


    }


    DominoBox.prototype.print = function() {
      var pieces = [];
      for (var i = 0; i < this.body.length; i++) {
        var piece = this.body[i];
        pieces.push(piece.numberOne + " | " + piece.numberTwo);
      }
      console.log(pieces.join("   -   "));
    };



    DominoBox.prototype.shuffle = function () {
      this.body.sort(function(a, b){
        return 0.5 - Math.random();
      });
    };

    DominoBox.prototype.getDomino= function(){
      return this.body.shift();
    };

    var dominoBox = new DominoBox();


    //functions not yet implemented




    DominoBox.prototype.letDomino = function () {
      this.body.push(item);
    };
