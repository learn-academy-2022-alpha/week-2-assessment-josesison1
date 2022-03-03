// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multiply", () => {
  it("returns an array multiplied by 3", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(multiply(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(multiply(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

//TEST: GOOD FAILURE.

// b) Create the function that makes the test pass.

//****************************** PSEUDO CODE *******************************//
//create a function named multiply
//takes in an array as a parameter
//uses .map() method to iterate through the array
//take each value inside the array and multiply it by 3
//return value
//**************************************************************************//

const multiply = (array) => {
  return array.map(value => {
    return value * 3
  })
}

//PASSED THE TEST.




// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


describe("divisibleBy3", () => {
  it("takes a number and decides if the number is evenly divisible by three or not", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"
    expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

//TEST: GOOD FAILURE.

// b) Create the function that makes the test pass.

//****************************** PSEUDO CODE *******************************//
//create a function
//must take in a number as a parameter
//set a conditional statement, in this case an IF STATEMENT
//determine if the number is divisible by 3 or not
//if it is, return "number is divisible by 3"
//else "number is not divisible by 3"
//**************************************************************************//

const divisibleBy3 = (number) => {
  if (number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

//PASSED THE TEST.




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capitalized", () => {
  it("takes an array of words and returns an array with the first letter capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

//TEST: GOOD FAILURE.

// b) Create the function that makes the test pass.

//****************************** PSEUDO CODE *******************************//
//create a function
//must take in an array as a parameter
//use .map() method to iterate through the array
//declare a new variable to store new array
//refer to the value at the index 0 which is the first letter of every word
//and use the .toUpperCase() method to turn only the first letter to upper case
//add the rest of the value which will give you the whole words in lower case, now use .split() method at index 1 to remove the first lower case letter
//return the new variable containing the new values
//**************************************************************************//

const capitalize = (array) => {
  var firstLetter = array.map(value => {
    return value[0].toUpperCase() + value.slice(1)
  })
  return firstLetter
}

//PASSED THE TEST.




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  it("takes a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

//TEST: GOOD FAILURE.

// b) Create the function that makes the test pass.

//****************************** PSEUDO CODE *******************************//
//create a function
//must take in a string as a parameter
//declare a new variable
//use the .split method to seperate each letter of the word and make it into an array
//use the .filter method to iterate through each index of the array
//use the new created variable to store the array once splitted
//if the value of the index contains either a letter "a", "e", "i", "o", or "u"
//return the index of the new variable
//**************************************************************************//

const firstVowel = (string) => {
  var letter = string.split("").filter(value => {
    return value === "a" || value === "e" || value === "i" || value === "o" || value === "u"
  })
  return string.indexOf(letter[0])
}

//PASSED THE TEST.
