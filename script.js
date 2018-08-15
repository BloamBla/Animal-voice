function Animal() {
	this.name = name;
}

function Dog() {
	Animal.apply(this.arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.voice = function() {
	alert('Bark');
}

var Dog = new Dog('Druzhok');
Dog.voice();