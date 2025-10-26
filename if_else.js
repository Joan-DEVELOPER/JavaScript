// If else conditional example
// ---------------------------

// The if...else statement lets your program make decisions — it runs certain code only if a condition is true

// <--- Simple example --->
// We set a userRole by default. Feel free to change it and see what happens.
let userRole = "editor";

if (userRole === "admin") {
  document.writeln("Welcome, Admin! You have full access.");
} else if (userRole === "editor") {
  document.writeln("Hello, Editor! You can modify content.");
} else if (userRole === "viewer") {
  document.writeln("Hi, Viewer! You can read only.");
} else {
  document.writeln("Unknown role. Please log in again.");
}

// document.writeln, writes a line inside the html document.

// You can also use console.log() instead of document.writeln() 
// if you're running this code outside an HTML page (like in Node.js or your browser console).
