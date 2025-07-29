// importo le funzioni
const peopleAreObjects = require(`./names.js`)
const peopleHobbies = require(`./hobbies.js`)

//dichiaro la funzione
function person () {
  //uso le funzioni importate
  const me = peopleAreObjects(`manuel`, `lauriola`)
  const myHobbiesArray = peopleHobbies(`anime`, `films`, `videogames`)
  //trasformo i risultati in variabili
  const {firstName, secondName} = me
  const myHobbies = myHobbiesArray.join(`, `)
  return {
    fullName : firstName+" "+secondName,
    hobbies : myHobbies
  }
}

console.log(person())