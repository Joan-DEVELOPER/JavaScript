// 📘 Example of a Window screen object in JavaScript
// --------------------------------------------------

// By using the window.screen object we can work with user's screen

// Returns the Screen width
let userScreenWidth = screen.width;

// Returns the Screen height
let userScreenHeight = screen.height;

console.log(`User screen is ${userScreenWidth} long and ${userScreenHeight} tall`);

// Returns the usable screen width (minus interface features like the Windows Taskbar)
let usableWidth = screen.availWidth;

// Returns the usable screen height (minus interface features like the Windows Taskbar)
let usableHeight = screen.availHeight;

console.log(`You can use ${usableWidth} pixels long and ${usableHeight} pixels tall`);

// Return number of bits used to display a color
let colorDepth = screen.colorDepth;
console.log(`Screen have's ${colorDepth} color depth`);

// Return number of bits used to display a color
let pixelDepth = screen.pixelDepth;
console.log(`Screen have's ${pixelDepth} pixels depth`);