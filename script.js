// --- Part 1: Variable Declarations and Conditionals ---

// Variables
let userName = "Alice";
let userAge = 25;
let isMember = true;

// Conditional example
if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

if (isMember) {
  console.log(`${userName} has a membership.`);
} else {
  console.log(`${userName} does not have a membership.`);
}

// --- Part 2: Custom Functions ---

/**
 * Returns a greeting message
 * @param {string} name
 * @returns {string}
 */
function greetUser(name) {
  return `Hello, ${name}! Welcome to our site.`;
}

/**
 * Calculates the square of a number
 * @param {number} num
 * @returns {number}
 */
function squareNumber(num) {
  return num * num;
}

// --- Part 3: Loop Examples ---

// Loop 1: For loop to generate a list of squares for numbers 1 to 5
let squaresList = "";
for (let i = 1; i <= 5; i++) {
  squaresList += `${i}² = ${squareNumber(i)}\n`;
}

// Loop 2: While loop that counts down from 5 to 1
let countdown = 5;
let countdownOutput = "Countdown: ";
while (countdown > 0) {
  countdownOutput += countdown + " ";
  countdown--;
}

// --- Part 4: DOM Interactions ---

// 1. Display greeting message in the #greeting paragraph
const greetingElement = document.getElementById("greeting");
greetingElement.textContent = greetUser(userName);

// 2. Display age related message in the #age-message paragraph
const ageMessageElement = document.getElementById("age-message");
if (userAge >= 18) {
  ageMessageElement.textContent = `${userName} is an adult.`;
} else {
  ageMessageElement.textContent = `${userName} is a minor.`;
}

// 3. Display the squares and countdown outputs in #loop-output
const loopOutputElement = document.getElementById("loop-output");
loopOutputElement.textContent = squaresList + "\n" + countdownOutput;

// 4. Add event listener to button for an interaction
const actionButton = document.getElementById("action-btn");
const functionOutputElement = document.getElementById("function-output");

actionButton.addEventListener("click", () => {
  // On click, calculate square of a random number 1-10 and display it
  const randomNum = Math.floor(Math.random() * 10) + 1;
  const squared = squareNumber(randomNum);
  functionOutputElement.textContent = `Square of ${randomNum} is ${squared}`;
});
