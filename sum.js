// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Get the command line arguments


const getArguments = function () {
  const args = process.argv.slice(2);
  // Edge case: We need at least 2 arguments
  console.log('args', args);
  if (args.length < 2) {
    console.log('Please provide at least 2 numbers');
    process.exit();
  }

  return args;
}

// define arguments and function

// we need an accumulator (variable)



const sum = function(numbers) {
  
  let total = 0;
  
  // Loop through the numbers
  for (let nb of numbers) {
    const num = Number(nb);
    
    // Edge case: If any argument is not a whole number, skip it (remainder?)
    if (Number.isInteger(num)) {
      total += num;
    }
    
    // Edge case: If any argument is not a number, output an error message
    if (isNaN(num)) {
    console.log('Please do add only numbers');
    process.exit();
  }
  
  // if(num % 1 === 0) {
    // }
    
    console.log('nb:', nb, 'total:', total, 'type', typeof num);
  }
  
  return total;
  
}

const result = sum(getArguments());

console.log("Total:", result);