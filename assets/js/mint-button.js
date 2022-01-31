  var counterVal = 0;

function incrementClick() {
  if (counterVal >=0){
    updateDisplay(++counterVal);
  }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function decrementClick(){
  if (counterVal >=1){
    updateDisplay(--counterVal);
  }
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}