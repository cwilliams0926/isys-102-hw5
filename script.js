console.log("File begin");

let firstName = "Johnny";
let birthYear = 1995;
let currentYear = 2025;



function fillInBlanks() {
    console.log("fillInBlanks begin");

    const nameSpan = document.querySelector(".span1");
    nameSpan.textContent = firstName;

    const yearSpan = document.querySelector(".span2");
    yearSpan.textContent = birthYear;

    console.log("fillInBlanks end");
}

// Made name computeAge to match the 'verbNoun' naming of the other
// functions
function computeAge() {
    console.log("computeAge begin");



    console.log("computeAge end")
}

function changeGlobals() {
    console.log("changeGlobals begin");



    console.log("changeGlobals end");
}

console.log("File end");