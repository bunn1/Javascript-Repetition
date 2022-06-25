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


// Morning - Afternoon - Night

let day = new Date();
let hr = day.getHours();
let hour = 18

if (0 && hr < 12) {
    document.getElementById("para").innerHTML = "Morning";
}
if (hr == 12 && hour < 18) {
    document.getElementById("para").innerHTML = "Afternoon";
} else {
    document.getElementById("para").innerHTML = "Night"
}
console.log(hr, hour)


// Sandwich Calculator 

const sandwichCalculator = (bread, cheese) => {
    if (bread / 2 > cheese) return cheese;
    return bread / 2;
}
sandwichCalculator(6, 4)

// Lunar Countdown

let array = ["cheese", "ham", "toast"];

if (array.indexOf("cheese"));
alert("Cheese")
if (array.indexOf("ham"));
alert("Ham")
if (array.indexOf("toast")) {
    alert("BlastOff")
}
console.log(array)

