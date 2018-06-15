function Pizza(selectedToppings, selectedSize) {
  this.size = {
    small: 9.00,
    medium: 13.00,
    large: 18.00,
    'extra large': 25,
  };
  this.toppings = {
    pepperoni: 0.50,
    chicken: 0.50,
    salami: 0.75,
    sausage: 0.75,
    'extra cheese': 1.00,
    spinach: 0.50,
    anchovies: 2.00,
    olives: 0.50,
    peppers: 0.50,
  };
  this.userToppings = selectedToppings;
  this.userSize = selectedSize;
  this.cost = (this.calculateToppingsCost() + this.calculateSizeCost())
}

Pizza.prototype.getToppings = function() {

  return this.userToppings;
}

Pizza.prototype.getCost = function() {

  return this.cost;
}

// Calculate cost of toppings
Pizza.prototype.calculateToppingsCost = function() {

  var i = 0;
  var cost = 0;
  for(i in this.toppings) {
    if(this.userToppings.includes(i)) {
      cost += this.toppings[i];
    }
  }

  return cost;
}

// Calculate cost of pizza size
Pizza.prototype.calculateSizeCost = function() {
  var i = 0;
  var cost = 0;
  for(i in this.size) {
    if(this.userSize === i) {
      cost += this.size[i];
    }
  }

  return cost;
}

function Order() {
  this.selections = []
  this.cost = 0;
}

Order.prototype.addPizza = function(pizza) {
  this.selections.push(pizza);
}

Order.prototype.removePizza = function(pizza) {
  var index = this.selections.indexOf(pizza);
  this.selections.splice(index, 1);
}

Order.prototype.getOrderTotal = function() {
  var total = 0;

  for(i = 0; i < this.selections.length; i++) {
    total += this.selections[i].getCost();
  }

  return total;
}

function getSelectedToppings() {
  var toppings = [];

  $("input[type=checkbox]").each(function() {
    if(this.checked) {
      toppings.push(this.value)
    }
  });

  return toppings;
}

function getSelectedCrust() {
  var crust = $("input[name='crust']:checked").val();
}

$(document).ready(function() {
  var pizza;
  var toppings = [];
  var crust;

  $("button#addPizza").click(function() {
    toppings = getSelectedToppings();
    crust = getSelectedCrust();
    pizza = new Pizza()
    $(".orderStatus").append("<col-sm>" +
                              "<h4>Pizza " +

  )
  });

});
