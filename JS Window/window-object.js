// 📘 Example of a Window in JavaScript
// ---------------------------------

// Window is a JavaScript object that represents a browser window and is the global context in web pages.
window.document.getElementById("image"); // This gets an item from the html where the id is "image"

// Window size can be set, using two specific properties

// By using window.innerWidth, we set the window inner width
let width = window.innerWidth;

// By using window.innerHeight, we set the window inner height
let heigh = window.innerHeight;

// Window can also open/close by using the following sintax

// Open a window
window.open("https://www.google.es");

// Close a window
window.close();

// Move to a window (screen position)
window.moveTo();

// Resize a window (pass width and height in this order)
window.resizeTo(20, 20);

// ---- Common use example ----
// Here's a function that pops up a new youtube screen on the browser.
// To test it, create an html file and add <script src='<route_to_your_js>'. Then inside the body, write the following

/* <script>
        openYouTube();
    </script>
*/

function openYouTube(){
    let newTab = window.open();

    // We set a time out, so screen automatically closes after 2 seconds (2000 miliseconds)
    setTimeout(()=>{
        closeYouTube(newTab);
    },2000)
}

function closeYouTube(tab){
    tab.close();
}