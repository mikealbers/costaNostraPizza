//Back-end
//Pizza constructor
Pizza.prototype.addToppings = $('.chk:checked').each(function() {
  this.toppings.push($('.chk:checked').val());
  });

Order.prototype.addPizza = function() {
  this.pizzas.push(Pizza);
};

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

function Order(){
  this.pizzas = [];
  this.total = 0;
}



//User
$(document).ready(function() {
  var newOrder = new Order();
  console.log(newOrder);
  $('#pizzaForm').submit(function(event) {
    event.preventDefault();
    var newPizza = new Pizza($('input[name=size]:checked', '#pizzaForm').val());
    // newPizza.addToppings();
    newOrder.addPizza();
    console.log(newOrder);
    console.log(newPizza);
  });
  $('#pizzaForm').submit(function(event) {

  });
});
