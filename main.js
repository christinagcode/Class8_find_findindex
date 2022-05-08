// Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
let numbers = [];
do { i +=1; numbers.push(i)} while(i< 1000) 

console.log(numbers)

//Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

console.log(person)

//Create a function that logs out the keys of the object using Object.keys().

let objKeys = (obj) => {
    return Object.keys(obj)
}

console.log(objKeys(person))

//Create a function that logs out the keys and values of the object using Object.entries().

let keyValuePairs = (obj) => {
    return Object.entries(obj)
}

console.log(keyValuePairs(person))

//Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPowerPuffGirls = [
    {
        firstName: "Christina",
        lastName: "Bubbles",
        birthDate: "Dec 18, 2222",
        gender: "Female"
    },
    {
        firstName: "Kala",
        lastName: "Blossom",
        birthDate: "Jan 5, 3333",
        gender: "Female"
    },
    {
        firstName: "Liz",
        lastName: "Buttercup",
        birthDate: "April 5, 7777",
        gender: "Female"
    },
    {
        firstName: "Liz",
        lastName: "Buttercup",
        birthDate: "April 5, 7777",
        gender: "Female"
    },
    {
        firstName: "Matty",
        lastName: "Dr. Utonium",
        birthDate: "March 20, 9988",
        gender: "Male"
    }
]

console.log(arrayOfPowerPuffGirls)

//Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

let oddBD = []
for (let element of arrayOfPowerPuffGirls){
  let oddYear = element.birthDate.slice(-4)
  if(oddYear % 2 == 1){
    oddBD.push(element)
  }
}
console.log(oddBD)

//Use .map() to map over the arrayOfPersons and console.log() their information.

let newArrayPPGs = arrayOfPowerPuffGirls.map(function(element){
    return element
})

console.log(newArrayPPGs)

//Use .filter() to filter the persons array and console.log 0only males in the array.

let arrayMale = arrayOfPowerPuffGirls.filter(function(element) {
    return element.gender == "Male"
})

console.log(arrayMale)

//Create a function that returns true if the value of birthDate is before Jan 1, 1990.

let specificYear = (element) => {
    let birthYear = element.birthDate.slice(-4)
    if(birthYear < 1990) {
        return true
    }
}

console.log(specificYear(arrayOfPowerPuffGirls[0]))

//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let peopleYear = arrayOfPowerPuffGirls.filter(function(element) {
    return specificYear(element)
})

console.log(peopleYear)

//BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

let over21 = (element) => {
    let birthYear = element.birthdate.slice(-4);
    let today = new Date();
    let age = year - birthYear;
    let year = today.getFullYear();
    if(age > 21) {
        return true
    } else {
        return false
    }    
}

console.log(over21(arrayOfPowerPuffGirls[1]))

//BONUS - .filter() out the people in the array who are younger than 21.

let under21 = arrayOfPowerPuffGirls.filter(function(element){
    if(over21(element) == false){
        return element
    }
})

console.log(under21)