const arr = [
    [4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,7,1,4,3,6,2,8],
    [5,1,9,6,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9],
]


function removeDuplicated(element){
    // Remove duplicated numbers
    let resultSet = new Set(element);
    // [5,1,9,2,6,8,7,4]
    if (element.length !== resultSet.size) {
        // Find duplicate numbers
        let duplicates = element.filter(item => {
            if (resultSet.has(item)) {
                resultSet.delete(item);
            } else {
                return item;
            }
        });
        // Replace the repeated numbers of the received array with 0
        element.map((item,index) => {
            if (duplicates.includes(item)) {
                element[index] = 0;
            }
        });
    }  

    return element;
}

let removeDuplicatedHorizental = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        //Method for replacing repeated numbers with 0
        element = removeDuplicated(element); 
        //Replacing the new array has become
        arr[i] = element;
    }
}


let removeDuplicatedVertical = (arr) => {
    for (let j = 0; j < 9; j++) {
        let arrVertical = [];
        for (let i = 0; i < 9; i++) {
        // Convert any column from original arr to row 
            arrVertical.push(arr[i][j])
        }
        //Method for replacing repeated numbers with 0
        arrVertical = removeDuplicated(arrVertical)
        for (let i = 0; i < 9; i++) {
            //Replace column instead of row
            arr[i][j] = arrVertical[i];
        }
    }
}


//These two methods of search results in stack overflow
//Validate each item
function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

//Solve Sudoku Table
function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = 0;
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

removeDuplicatedHorizental(arr)
removeDuplicatedVertical(arr)
sodokoSolver(arr)
console.log(arr)


