
/////// Part 1 ////////

// var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
// 	this.name = name;
// 	this.calories = calories;
// 	this.vegan = vegan;
// 	this.glutenFree = glutenFree;
// 	this.citrusFree = citrusFree;
// }

// FoodItem.prototype.toString = function(){
// 	var string = "A delightful delicacy, " + this.name + " is known for its low calories (" + this.calories + "). Is it vegan? " + this.vegan + ". Is it gluten free? " + this.glutenFree + ". Is it citrus free? " + this.citrusFree + ".";
// 	return string;
// }

// var hummusFood = new FoodItem("hummus", 100, true, true, false);
// var sandwichFood = new FoodItem("sandwich", 700, false, false, true);
// var pastaFood = new FoodItem("hummus", 900, true, false, false)

// console.log(hummusFood.toString())


/////// Part 2 ///////

// Drinks

var Drink = function(name, description, price, ingredients){

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

}

Drink.prototype.toString = function(){

	var ingredientString = this.ingredients.join(', ')

	var string = 'Food Name: ' + this.name + 'Description: ' + this.description + 'Price: $' + this.price + 'Ingredients: ' + ingredientString;

	return string;
}

// Plates 

var Plate = function(name, description, price, ingredients){

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

}

Plate.prototype.toString = function(){

	var ingredientString = this.ingredients.join(', ')

	var string = 'Food Name: ' + this.name + 'Description: ' + this.description + 'Price: $' + this.price + 'Ingredients: ' + ingredientString;

	return string;
}

Plate.prototype.isVegan = function(){
	var count = 0;
	this.ingredients.forEach(function(element){
		if(element === 'meat'){
			count++;
		}
	})
	if(count > 0){
		return 'This plate is vegan.'
	}
	else{
		return 'This plate is not vegan.'
	}

}

Plate.prototype.isGlutenFree = function(){
	var count = 0;
	this.ingredients.forEach(function(element){
		if(element === 'flour'){
			count++;
		}
	})
	if(count > 0){
		return 'This plate is gluten-free.'
	}
	else{
		return 'This plate is not gluten-free.'
	}

}

Plate.prototype.isCitrusFree = function(){
	var count = 0;
	this.ingredients.forEach(function(element){
		if(element === 'citrus'){
			count++;
		}
	})
	if(count > 0){
		return 'This plate is citrus-free.'
	}
	else{
		return 'This plate is not citrus-free.'
	}

}

// Order

var Order = function(plates){

	this.plates = plates;

}

Order.prototype.toString = function(){

	var orderString = this.plates.join(', ');

	var string = 'Current order: ' + orderString;

	return string;

}



// Menu

var Menu = function(plates){

	this.plates = plates;

}

Menu.prototype.toString = function(){

	var menuString = this.plates.join(', ');

	var string = 'Current menu: ' + menuString;

	return string;

}

// Restaurants

var Restaurant = function(name, description, menu){

	this.name = name;
	this.description = description;
	this.menu = menu;
}

Restaurant.prototype.toString = function(){

	var menuString = this.menu.plates.join(', ')

	var string = 'Restaurant Name: ' + this.name + 'Description: ' + this.description + 'Menu: ' + menuString;

	return string;
}

// Customer

var Customer = function(dietaryPreference){

	this.dietaryPreference = dietaryPreference;

}

Customer.prototype.toString = function(){

	var string = 'This customer is: ' + this.dietaryPreference;
}

// 
var burritoPlate = new Plate('Black Bean Burrito', 'A vegan burrito that is scrumptious.', 5.99, ['flour', 'beans', 'lettuce', 'tomato', 'citrus'])
var guacamolePlate = new Plate('Guacamole', 'Creamy, smooth, and delicious homemade guacamole.', 6.99, ['avocado', 'onions', 'salt', 'tomato', 'citrus'])
var margaritaDrink = new Drink('Margarita', 'The perfect balance between salty and sweet.', 3.99, ['tequila', 'sugar', 'watermelon', 'watermelon juice', 'citrus'])

var tapasMenu = new Menu([burritoPlate, guacamolePlate, margaritaDrink]);

var laCasita = new Restaurant('La Casita', 'The neighborhood joint for pupusas, tacos, snacks, and tapas.', tapasMenu)

console.log(laCasita.toString())