//Back-end
//Pizza constructor

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

function Order(){
  this.pizzas = [];
  this.total = 0;
}

Pizza.prototype.addToppings = $('.chk:checked').each(function() {
  this.toppings.push($(this).val());
  });

//User
$(document).ready(function() {
  var newOrder = new Order();
  console.log(newOrder);
  debugger;
  $('#addPizza').submit(function(event) {
    event.preventDeafault();
    debugger;
    var newPizza = new Pizza($('input[name=radioName]:checked', '#pizzaForm').val())
    newPizza.addToppings();
    console.log(newPizza);
  })
  $('#pizzaForm').submit(function(event) {

  })
});
