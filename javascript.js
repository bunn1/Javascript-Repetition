// Weeks in a lifeTime

// const daysInYear = 365;
// const daysInWeek = 7;
// const yearsInLifetime = 80;

// const weeksInALifetime = daysInYear / daysInWeek * yearsInLifetime

// let greeting = 'hello'
// let name = 'world'
// alert('Hello world')

// const myInt = parseInt("123");
// const myFloat = parseFloat("123.456");
// console.log(myFloat);


// Morning - Afternoon - Night --------------------------

let day1 = new Date();
let hr = day1.getHours();
let hour1 = 18

if (0 && hr < 12) {
    document.getElementById("para").innerHTML = "Morning";
}
if (hr == 12 && hour1 < 18) {
    document.getElementById("para").innerHTML = "Afternoon";
} else {
    document.getElementById("para").innerHTML = "Night"
}
console.log(hr, hour1)


// Sandwich Calculator ----------------------------------

const sandwichCalculator = (bread, cheese) => {
    if (bread / 2 > cheese) return cheese;
    return bread / 2;
}
sandwichCalculator(6, 4)

// Lunar Countdown --------------------------------------

// let array = ["cheese", "ham", "toast"];

// if (array.indexOf("cheese"));
// alert("Cheese")
// if (array.indexOf("ham"));
// alert("Ham")
// if (array.indexOf("toast")) {
//     alert("BlastOff")
// }
// console.log(array)


// Function instead of for loop ------------------------

const arr = ['cats', 'dogs', 'spanners', 'Lemons', 'candy']

const list = arr.reduce((sum, current) => sum + current, 0);

arr.map(i => i * 2).reduce((sum, current) => sum + current);

console.log(arr)


// Pizza Excercise

function makePizza() {

    let arr1 = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];

    document.getElementById("pizza").innerHTML = arr1.join(" " + "A" + " " + "Tasty" + " " + "Pizza" + " " + "With" + " ");
}
makePizza();

// Harder Excercise - Capitalise every element - Array Map function and String#uppercase function


let vehicleParts = ['Wheel', 'Tire', 'Engine', 'Pistons', 'Diesel'];

let upper = vehicleParts.map(element => {

    return element.toUpperCase();
})
document.getElementById("vehicle").innerHTML = upper;

// Excercise calculate todays date / Today is: / Current time is:

let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

document.getElementById("datum").innerHTML = today;

console.log("Today is:", dayList[day]);
console.log("Current Time is:", hour, minute, second);

