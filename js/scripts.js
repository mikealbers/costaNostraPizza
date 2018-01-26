//Back-end

Order.prototype.sumPizzas = function() {
  var pizzaPrice = 0;
  console.log(this.pizzas);
  for(i = 0; i < this.pizzas.length; i++) {
    var sizeString = this.pizzas[i].size
    var numToppings = this.pizzas[i].toppings
    if (sizeString === "large") {
      pizzaPrice = pizzaPrice + 10 + numToppings.length;
    } else if (sizeString === "medium") {
      console.log(this.pizzas[i].size);
      pizzaPrice = pizzaPrice + 7 + numToppings.length;
    } else {
      pizzaPrice = pizzaPrice + 5 + numToppings.length;
    }
  }
  this.total = pizzaPrice;
  console.log(this.total);
};

Pizza.prototype.addToppings = (function() {
  var toppingsChecked = [];
  $('.chk:checked').each(function() {
      toppingsChecked.push($(this).val());
    })
  this.toppings = toppingsChecked;
  });

Order.prototype.addPizza = function(Pizza) {
  this.pizzas.push(Pizza);
};

//Pizza constructor
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

function Order(){
  this.pizzas = [];
  this.total = 0;
};



//User
$(document).ready(function() {
  var newOrder = new Order();
  console.log(newOrder);
  $('#addPizza').click(function(event) {
    event.preventDefault();
    var newPizza = new Pizza($('input[name=size]:checked', '#pizzaForm').val());
    newPizza.addToppings();
    newOrder.addPizza(newPizza);
    console.log(newOrder);
    console.log(newPizza);
  });
  $('#submitOrder').click(function(event) {
    event.preventDefault();
    newOrder.sumPizzas();

  });
});
