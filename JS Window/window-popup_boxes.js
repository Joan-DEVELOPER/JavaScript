// 📘 Example of a Window popup boxes in JavaScript
// ----------------------------------------------------

// We can show or get information from the user in a more visual way. In JavaScript, there are 3 types of popup boxes

//Alert Box is used when you want to display information to the user. 
/// It can show whether a text, a notification or whatever you desire
alert("This is an alert box!");

//Confirm Box is used when you want the user to verify or accept something. 
confirm("Are you having fun?");

//Prompt Box is used when you want the user to type a value before entering the page. 
prompt("Are you learning JavaScript?");

// Call useCase
useCase();

// ---- Common use example ----
function useCase(){
    alert("Welcome to this example, hope you like it.")
    let confirmMessage = confirm("Is this usefull?")

    if(confirmMessage === false){
        alert("🥺");
    }else{
        alert("Glad its helpfull!◝(ᵔᗜᵔ)◜");

        let promptMessage = prompt("What's your name?");

        if(promptMessage){
            alert(`Nice to meet you ${promptMessage}`);
        }else{
            alert("You didn't gaved me your name. ヾ(๑╹◡╹)ﾉ🔪");
        }
    }
}
