// Example of a Closure in JavaScript
// ----------------------------------
// A closure is created when an inner function "remembers"
// variables from the scope in which it was defined,
// even after the outer function has finished executing.

function closureCounter(){
    // This variable belongs to closureCounter's scope.
    // Normally it would disappear once the function ends,
    // but because we return an inner function that uses it,
    // 'counter' is preserved inside a closure.
    let counter = 0;
    
    console.log(`Initial value is ${counter}`);

    // The returned function forms a closure over 'counter'.
    // Each call increases the same 'counter' variable,
    // demonstrating how closures maintain state across calls.
    return function(){
        counter++;
        document.writeln(`Run: ${counter} \n`);
        console.log(`Value increased to ${counter}`);
        return counter;
    }
}

// 'add' now holds the inner function, with its own private 'counter' state.
const add = closureCounter();

// Each call to add() increments and remembers the counter value.
// The closure ensures 'counter' persists between calls.
for (let i = 0; i < 3; i++) {
    add();
}