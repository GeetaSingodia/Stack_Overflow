// part 1 of the assignment
//=========================================

// Declare a counter variable
let counter = 0;

// create function that increments the counter and call itself recursively
function incrementCall() {
    counter++ ;
    incrementCall();
}

// surround the initial function call in a try/catch block
try {
    incrementCall();
} catch (error) {
//Within the catch, log the error and the value of the counter variable.

console.error('Error caught :' , error);
console.log('Counter value:', counter);

}