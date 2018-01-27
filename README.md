# Costa Nostra Pizza

#### _Pizza Website, 01/26/18_

#### _**Michael Albers**_

## Description

_Friday code review for Week Four of Intro to Programming at Epicodus_

## Location

You can find this file at
https://github.com/mikealbers/costaNostraPizza

## Goals of Pizza project:

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

## Methodology

### _The following specs are included in the program:_

* Take input from the user to determine pizza size and toppings
  input: large, pepperoni
  output: Large pizza with pepperoni

* Store pizza properties when input.
  input: pizza A
  output: Size: Large Toppings: Pepperoni

* Keep track of pizza in an order total when added.
  input: add pizza A, add pizza B.
  output: Your order is 1 large pizza A and 1 small pizza B

* Add up total order based on pizza sizes and toppings.
  input: Large pepperoni, banana pepper pizza.
  output: Large pizza ($10) + 2 toppings ($0.50 * 2). Your total is: $11.00

* Display pizzas with individual prices and order total.
  input: pizza A, pizza B, pizza C
  output: Large Pizza: $10.00
            Pepperoni: $1.00
            Eggplant: $1.00

          Medium Pizza: $7.00
            Spinach: $1.00
            Mushroom: $1.00

          Small Pizza: $5.00
            Pepperoni: $1.00
            Mushroom: $1.00

* Add Pizza totals together
  input: Pizza A: Large $10 + Pepperoni $1 + Mushroom $1
  output: Pizza A = $12

* Display Order total after Submit
  input: Pizza A: $10 Pizza B: $12    
  output: Order Total: $22.00


## Setup/Installation Requirements

* Download the files from the repository into appropriately named directories.
* Open the files with the browser of your choice.

## Known Bugs

_There are no known issues at this time._

## Support and contact details

_You can contact me at:_

* albersmichael@tutanota.com

## Technologies Used

_Uses HTML, CSS, Bootstrap, javascript, and jQuery._

### License

*Distributed under the GPL*

Copyright (c) 2018 **_MichaelAlbers_**
