/* *Definition
 A promise is a JavaScript object, that represents a value that
 can be available now, later or never. It hasn't finished yet, but you'll be notified when it does*/

/* Example */
    
const pizzaPromise = new Promise((resolve, reject)=>{
    let pizzaReady = false;

    setTimeout(() =>{
        if(pizzaReady === true){
            resolve("You got your pizza");
        }else{
            reject("We lost your pizza");
        }
    }, 1); // Waits 1 second

});

/* Shows the value acording to the result */
// Will only execute when pizzaPromise value equals to resolve
pizzaPromise.then(output => document.writeln(output))

// Will only execute when pizzaPromise value equals to reject
pizzaPromise.catch(error => document.writeln(error))