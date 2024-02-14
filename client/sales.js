var counterValue = document.querySelectorAll("#counter-value");
var counterIncrement = document.querySelectorAll("#counter-increment");
var counterDecrement = document.querySelectorAll("#counter-decrement");
var count = 0;

for (let counter of counterIncrement ){
  counter.addEventListener('click', () => {
    this.count++
    this.counterValue.setAttribute("value", count);
})
}

// this.counterIncrement.addEventListener('click', () => {
//   this.count++
//   this.counterValue.setAttribute("value", count);
// });

this.counterDecrement.addEventListener('click', () => {
  this.count--
  this.counterValue.setAttribute("value", count);
});
