# Closures in JavaScript
### 1. Definition
A closure is a function that remembers the variables from the scope where it was created, even after that scope has finished executing.

### 2. Example code
`function closureCounter() {
  let counter = 0;

  return function() {
    counter++;
    console.log(`Counter is now: ${counter}`);
    return counter;
  };
}

const add = closureCounter();
add(); // 1
add(); // 2
add(); // 3
`

### 3. Example explanation
closureCounter creates a local variable counter.

It returns an inner function that uses counter.

Even though closureCounter has finished running, the inner function still has access to counter.

That preserved environment is the closure.

