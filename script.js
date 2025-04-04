console.log("File begin");

let firstName = "Johnny";
let birthYear = 1987;
let currentYear = 2025;

// button to fill in blanks
const button1 = document.querySelector("#btn1");
button1.addEventListener("click", fillInBlanks);

// button to display the age with an alert
const button2 = document.querySelector("#btn2");
button2.addEventListener("click", computeAge);

// button to change the above variables
const button3 = document.querySelector("#btn3");
button3.addEventListener("click", changeGlobals);

function fillInBlanks() {
    console.log("fillInBlanks begin");

    const nameSpan = document.querySelector("#span1");
    nameSpan.textContent = firstName;

    const yearSpan = document.querySelector("#span2");
    yearSpan.textContent = birthYear;

    console.log("fillInBlanks end");
}

// Made name computeAge to match the 'verbNoun' naming scheme of the other
// functions
function computeAge() {
    console.log("computeAge begin");

    const years = currentYear - birthYear;
    alert("Your age is " + years);

    console.log("computeAge end")
}

function changeGlobals() {
    console.log("changeGlobals begin");

    firstName = "Todd";
    birthYear = "2000";
    currentYear = "2030";

    console.log("changeGlobals end");
}

console.log("File end");