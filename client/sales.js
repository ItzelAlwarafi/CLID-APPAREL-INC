var counterValue = document.querySelectorAll("#counter-value");
var counterIncrement = document.querySelectorAll("#counter-increment");
var counterDecrement = document.querySelectorAll("#counter-decrement");
// let count = 0;

for (let i=0; i<counterIncrement.length; i++){
  counterIncrement[i].addEventListener('click', ()=>{
    count=counterValue[i].value
    count++
    counterValue[i].setAttribute("value", count)
  })
}

for (let i=0; i<counterDecrement.length; i++){
  counterDecrement[i].addEventListener('click', ()=>{
    count=counterValue[i].value
    if(count==0){
      return
    }
    count--
    counterValue[i].setAttribute("value", count)
  })
}

