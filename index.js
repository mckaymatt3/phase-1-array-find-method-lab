// code your solution here

function superbowlWin(record) {
    let checkYear = record.find((record =>
        record.result === 'W'));
      if (checkYear) {
        return checkYear.year
      }
      else return undefined
}
