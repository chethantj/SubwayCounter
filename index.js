

let count = document.getElementById("count-el").innerText;

console.log(count)


// function increment() {
//     console.log("Button clicked")
// }

function increment() {
    //console.log("The button was clicked")
    count++
    document.getElementById("count-el").textContent = count;
}

let prevEntries="";

function save(){
    console.log("The count is :"+count)
    prevEntries = document.getElementById("count-save").textContent
    prevEntries += count + " - "
    document.getElementById("count-save").textContent = prevEntries
    document.getElementById("count-el").textContent = 0
    count=0
    // prevEntries = prevEntries + " - "

}

