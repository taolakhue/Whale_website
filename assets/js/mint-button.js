var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function decrementClick(){
    updateDisplay(--counterVal);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}