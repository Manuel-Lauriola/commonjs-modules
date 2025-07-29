//dichiaro la funzione
function peopleAreObjects (firstName, secondName) {
 return {
    firstName,
    secondName
  }
}

// console.log(peopleAreObjects(`manuel`, `lauriola`))
//esporto la funzione
module.exports = peopleAreObjects