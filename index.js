// code your solution here

// FIRST ATTEMPT - BASIC
// const result1 = record.find(superbowlWin)

// function superbowlWin(date) {
//   return date.result === 'W'
// }

// console.log(result1)


// SECOND ATTEMPT - INCLUDING IF ELSE
// const result1 = record.find(superbowlWin)

// function superbowlWin(date) {
//     let date1 = [];
//     date1.push(date)
//     if (record.result ==='W') {
//       return date1
//     }
//     else {
//       return undefined
//     }
    
// }

// THIRD ATTEMPT - BASIC ONCE AGAIN

function superbowlWin(record) {
    let checkYear = record.find((record =>
        record.result === 'W'));
      if (checkYear) {
        return checkYear.year
      }
      else return undefined
  }
