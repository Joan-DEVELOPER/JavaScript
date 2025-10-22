// Array example in JavaScript
// ---------------------------
// Arrays are objects that store a list of items

const nameList = ["Mike", "Jonathan", "Loraine", "Erika"];

// Add a new item
let newName = "Roger";

// Use the push() method to add the name to the array
nameList.push(newName);

// Get the index of "Jonathan" (its position in the array)
const index = nameList.indexOf("Jonathan");

// Delete one item using splice()
nameList.splice(index,1);

// Access an array element
let selectedName = nameList[1];

// Overriding an array item by index
nameList[1] = "Nathan";

// Prints the array on the page
document.writeln(nameList);