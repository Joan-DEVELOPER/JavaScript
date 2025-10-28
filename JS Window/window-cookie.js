// 📘 Example of a Window Cookie object in JavaScript
// ----------------------------------------------------

// Cookie are data in small text files that store user information in web pages

let cookieSet = false;

// Stores today's date as a cookie
function setCookie(){
    if(cookieSet === false){
        const date = new Date();
        const formatDate = date.toLocaleDateString();

        let cookieMessage = document.cookie = `last login = ${formatDate}`;
        console.info(cookieMessage);
        document.writeln(`<h2>${cookieMessage}</h2>`);
        cookieSet = true;
    }else{
        console.error("Cookie already set");
        document.writeln(`<p>"Cookie already set"</p>`);
    }
    
}
