// Switch conditional example
// ---------------------------

// The switch statement lets your program make decisions but in a more extensive way. 
// It is commonly used when there are so many conditional states, providing a cleaner structure.

// <--- Simple example --->
//

let month = "March";

switch (month) {
    case "January":
        console.log("January it's the first month of the year");
        break;

    case "February":
        console.log("February it's the second month of the year");
        break;

    case "March":
        console.log("March it's the third month of the year");
        break;

    case "April":
        console.log("April it's the forth month of the year");
        break;

    case "May":
        console.log("May it's the fifth month of the year");
        break;

    case "June":
        console.log("June it's the sixth month of the year");
        break;

    case "July":
        console.log("July it's the seventh month of the year");
        break;

    case "August":
        console.log("August it's the eighth month of the year");
        break;

    case "September":
        console.log("September it's the ninth month of the year");
        break;

    case "October":
        console.log("October it's the tenth month of the year");
        break;

    case "November":
        console.log("November it's the eleventh month of the year");
        break;

    case "December":
        console.log("December it's the twelfth month of the year");
        break;

    // If none of the cases match, the execution cuts.
    default:
        console.log("Couldn't find a matching month.");
        break;
}