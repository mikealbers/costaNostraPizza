//Back-end

Order.prototype.sumPizzas = function() {
  var pizzaPrice = 0;
  console.log(this.pizzas);
  for(i = 0; i < this.pizzas.length; i++) {
    var sizeString = this.pizzas[i].size
    var numToppings = this.pizzas[i].toppings
    if (sizeString === 'large') {
      pizzaPrice = pizzaPrice + 10 + numToppings.length;
    } else if (sizeString === 'medium') {
      console.log(this.pizzas[i].size);
      pizzaPrice = pizzaPrice + 7 + numToppings.length;
    } else {
      pizzaPrice = pizzaPrice + 5 + numToppings.length;
    }
  }
  this.total = pizzaPrice;
  console.log(this.total);
  $('#orderView').html('<h2>Order Total: $' + pizzaPrice + '.00</h2><h3>It will be ready in 30 minutes or less and at your door or it is free!</h3><br><h4>Your Deliverator will be:</h4><h3>Hiro Protagonist</h3><img src="img/hiro.png" class="deliverator">')
};

Pizza.prototype.addToppings = (function() {
  var toppingsChecked = [];
  $('.chk:checked').each(function() {
      toppingsChecked.push($(this).val());
    })
  this.toppings = toppingsChecked;
  });

Order.prototype.displayOrder = function(Pizza) {
  var sizePrice = '';
    if (Pizza.size === 'large') {
      sizePrice = " $10.00";
    } else if (Pizza.size === 'medium'){
      sizePrice = " $7.00";
    } else {
      sizePrice = " $5.00";
    }
    $('#orderView').append('<img src="img/box.png" class="pizzaBox"><h3>' + Pizza.size + ' pizza:' + sizePrice + '</h3><ul>');
    Pizza.toppings.forEach(function(topping) {
      $('#orderView').append('<li>'+ topping + ' : $1.00</li>');
    });
    $('#orderView').append('</ul>');
  }

Order.prototype.addPizza = function(Pizza) {
  this.pizzas.push(Pizza);
};

//Constructors
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
    newOrder.displayOrder(newPizza);
    console.log(newOrder);
    console.log(newPizza);
  });
  $('#submitOrder').click(function(event) {
    event.preventDefault();
    newOrder.sumPizzas();

  });
});
