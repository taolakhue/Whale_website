var counterVal = 0;

function incrementClick() {
  if (counterVal >=0){
    updateDisplay(++counterVal);
    updateprice(counterVal*0.06)
  }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function decrementClick(){
  if (counterVal >=1){
    updateDisplay(--counterVal);
    updateprice(counterVal*0.06)
  }
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

function updateprice(val){
    document.getElementById("total-price").innerHTML = val;
}