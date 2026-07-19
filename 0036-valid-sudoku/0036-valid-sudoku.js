/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set= new Set();
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){

            let value = board[i][j];
            if(value==="."){
                continue;
            }

            let rowkey = `${value}R${i}`;
            let colkey =`${value}C${j}`
            let boxkey =`${value}B${Math.floor(i/3)}${Math.floor(j/3)}`

            if(set.has(rowkey) ||set.has(colkey) || set.has(boxkey)){
                return false
            }


            set.add(rowkey);
            set.add(colkey);
            set.add(boxkey)

        }
        
    }
    return true;

};