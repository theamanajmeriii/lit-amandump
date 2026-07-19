/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //for loop for row check
    for (let i = 0; i < board.length; i++) {
    let map = new Map();
    for (let j = 0; j < board[0].length; j++) {
        let value = board[i][j];

        if (value === ".") {
        continue;
        }

        if (map.has(value)) {
        return false;
        }  

        map.set(value, true);
    }
         
}
   

    //for loop for column check
    for (let i = 0; i < board[0].length; i++) {
    let map = new Map();
    for (let j = 0; j < board.length; j++) {

        let value = board[j][i];

        if (value === ".") {
        continue;
        }

        if (map.has(value)) {
        return false;
        }  

        map.set(value, true);

    }
}
 
 //now have to check all the sub boxes
 for(let row = 0; row < 9; row += 3){
    for(let col = 0; col < 9; col += 3){

        let map = new Map();

        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {

                let value = board[i][j];

                if (value === ".") {
                    continue;
                }

                if (map.has(value)) {
                    return false;
                }

                map.set(value, true);
 


    }
 }
}
}
return true;



};