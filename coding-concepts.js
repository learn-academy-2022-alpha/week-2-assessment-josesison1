// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(""))

// a) Your answer: [A, l, p, h, a, , 2, 0, 2, 2]
// b) Verify and explain: the log called onto the variable that included a string and used the .split() method, which turned the string into an array and seperated each character including the space in between.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: it will print "undefined"
// b) Verify and explain: a function is declared which needs a return statement in order for it to have an output. Without a return keyword, the function will log undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: this is a function that takes in an array of numbers, using the .map() method to iterate through the numbers of array, it is multiplying each value by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: this is a function that takes in an array of numbers, using the .filter() method to iterate through the array, which contains a condition, if the value modulo 2 not equals to 0, essentially saying if a value is divisible by 2 but does not have a remainder of zero, which pertains to odd numbers, then return those values. In this case, it returned the values that did not have a remainder of 0, which are 11, 13, 15.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: this is an object that contains 4 different keys. The console log called onto the object name and used dot notation that referred to the key "languages" and referred to it's index[0] which is "Javascript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: George, cohort: Alpha, year: 2022
// b) Verify and explain: this is a class named Learn which is a blueprint for objects. It includes a constructor and takes in a parameter of "name", which could take an argument. Unlike the "cohort" and "year" property which are fixed. Line 69 is creating a new object, you can also identiy it by the keyword "new" which is included on the declaration. It now has access to the class Learn. It has been passed the argument "George" and the console log is calling onto the new object created and would output the students name along with the other properties "cohort" and "year" that is assigned to the existing class.
