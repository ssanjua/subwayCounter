// document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function actualDate() {
    let now = new Date();
    let dateStr = now.toLocaleString();  // Converts the date and time to a string in local format
    document.getElementById("date-el").innerText = "Last log in the system: " + dateStr;
}

// INITIALIZE THE COUNT AS 0
let count = 0

// listen for clicks on the increment buttom
// increment the count variable when the buttom is clicked
function increment() {
    console.log("the buttom was clicked")
    count += 1
    countEl.innerText = count
    console.log(count)
    actualDate();
}

//decrement
function decrement() {
    console.log("rest one")
    count -= 1
    countEl.innerHTML = count
    console.log(count)
    actualDate();
}

// save function
function save() {
    console.log("the user wans to save at: ", count)
    let countStr = " " + count + " - "
    saveEl.innerText += countStr
    count = 0
    countEl.innerText = 0
    actualDate();
}

window.onload = function() {
    actualDate();
}







