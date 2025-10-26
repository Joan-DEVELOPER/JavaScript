// for loop example
// ---------------------------

// The for loop lets your code execute a code until a condition is completed. 

// <--- Simple example --->
document.writeln("<h3>Resulting numbers</h3>")
for (let index = 0; index < 100; index++) {
    // We print every 10 numbers (10, 20, 30..)
    if(index%10 == 0){
        document.writeln(index);
    }
}

// document.writeln writes on the document, in html format.
document.writeln("<br> <h5>End of the loop</h5>"); 