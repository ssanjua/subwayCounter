// document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
console.log(countEl)

// INITIALIZE THE COUNT AS 0
let count = 0

// listen for clicks on the increment buttom
// increment the count variable when the buttom is clicked
function increment() {
    console.log("the buttom was clicked")
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

// save function
function save() {
    console.log(count)
}






