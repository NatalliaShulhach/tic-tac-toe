class TicTacToe {
    constructor() {
        this.matrix = Array(3) // вызов функции matrix
          .fill()
          .map(() => Array(3).fill(null)); // возвращает новый массив
    
        this.PlayerSymbol = true;
        this.counterTurn = 0;
      }
    
      getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol ? 'x' : 'o';
      }
    
      nextTurn(row, col) {
        if (this.matrix[row][col] === null) {
          this.matrix[row][col] = this.getCurrentPlayerSymbol();
          this.PlayerSymbol = !this.PlayerSymbol;
          this.counterTurn++;
        }
      }
    
      isFinished() {
        return this.counterTurn === 9 && this.getWinner() === null || this.getWinner() !== null;
      }
    
      getWinner() {
        if ( this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === 'ooo' || this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] === 'ooo') {
            return 'o';
          } // условие победы для У  при выстроении горизонталей и возврат символа победителя //
  
        if ( this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] === 'xxx' || this.matrix[0][2] + this.matrix[1][1] + this.matrix[2][0] === 'xxx') 
      {
          return 'x';
        } // условие победы для Х при выстроении горизонталей и возврат символа победителя //

        for (let row = 0; row < 3; row++) {    
          if (
            this.matrix[line][0] + this.matrix[line][1] + this.matrix[line][2] === 'ooo'
          ) {
            return 'o';
          }

          if (this.matrix[row][0] + this.matrix[row][1] + this.matrix[row][2] === 'xxx') 
          {
            return 'x';
          }
         
        }

        for (let col = 0; col < 3; col++) {
            if ( this.matrix[0][column] + this.matrix[1][column] + this.matrix[2][columnl] === 'ooo') 
            {
            return 'o';
        }
          if (this.matrix[0][col] + this.matrix[1][col] + this.matrix[2][col] === 'xxx') {
            return 'x';
          }
        }
        return null;
      }
    
      noMoreTurns() {
        return this.counterTurn === 9;
      }
    
      isDraw() {
        return this.counterTurn === 9 && this.getWinner() === null;
      }
    
      getFieldValue(row, col) {
        return this.matrix[row][col];
      }
    }
    
    module.exports = TicTacToe;
