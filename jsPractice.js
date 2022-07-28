let counter = document.getElementById("count");
// let increment = document.getElementById("increment");
// let decrement = document.getElementById("decrement");

function Increment() {
    let count = Number(counter.innerText);
    count = count + 10;
    if (count > 100) {
        return false;
    }
    counter.innerText = count;
}

function Decrement() {
    let count = Number(counter.innerText);
    count = count - 10;
    if (count < 0) {
        return false;
    }
    counter.innerText = count;
}

function Reset() {
    counter.innerText = 0;
}