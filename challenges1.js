// 1.	Create a program that stores what you eat today for ‘breakfast:’, ‘lunch:’ and ‘dinner:’.
// Return the string. Eg (“breakfast:pancakes, lunch:blt, dinner:steakandchips”). Don’t forget the colons.

// Challenge 1 

let food = ["Breakfast: Toast", "Lunch: Cheese Toastie", "Dinner: Pie"]
for (let i = 0; i < food.length; i++){ 
console.log("I had", food[i])}

// Challenge 2

function fizzBuzz(num) {
    if (num <= 0) {
      return 'needs to be a positive number';
    } else if (num % 3 && num % 5) {
      return 'fizz buzz';
    } else if (num % 3) {
      return 'fizz';
    } else if (num % 5) {
      return 'buzz';
    } else {
      return num;
    }
  }
console.log(fizzBuzz(-100));

// challenge 3 

function myNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Please make sure you enter 2 numbers.';
    }
  
    let sum = num1 + num2;
  
    // Check if the sum is even
    if (sum % 2 === 0) {
    // i dont really understand why we need to use the === 0 
      return 'The sum is even: ' + sum;
    } else {
      return 'The sum is odd, multiplying the numbers gives: ' + (num1 * num2);
    }
  }
  console.log(myNumbers(2, 2));

// challenge 4 
for (let i = 0; i < 6; i++) {
  const randomNumber = Math.floor(Math.random() * 50) + 1;
  console.log(randomNumber);
  }

  // challenge 5
  for (let i = 9; i >= 1; i--){
    console.log(i);
}