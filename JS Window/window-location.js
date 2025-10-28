// 📘 Example of a Window Location object in JavaScript
// ----------------------------------------------------

// By using the window.location object we can work with current page address (URL) 
// and redirect the browser to a new page.

// Get the current page URL
let pageUrl = window.location.href;

// Get the current page hostname
let hostname = window.location.hostname;

// Get the current page pathname
let pathname = window.location.pathname;

// Get the current page protocol
let protocol = window.location.protocol;

// Get the current page used port
let port = window.location.port;

function retrieveLocationData(){
    document.writeln(`<p>Current page url is: <strong>${pageUrl}</strong></p>`);
    document.writeln(`<p>Page hostname is <strong>${hostname}</strong></p>`);
    document.writeln(`<p>Page pathname is <strong>${pathname}</strong></p>`);
    document.writeln(`<p>Page protocol is <strong>${protocol}</strong></p>`);
}

// After 10 seconds (10000 miliseconds) user is redirected to Facebook home page
setTimeout(()=>{
    document.writeln(`<p>Redirecting to google </p>`);

    // Loads a new document or page
    let assign = window.location.assign("https://www.facebook.com");
},10000);
