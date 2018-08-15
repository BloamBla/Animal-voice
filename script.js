function Animal(name) {
	this.name = name;
}

Animal.prototype.getName = function() {
	return this.name;
}

function Dog(name) {
	Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.voice = function() {
	//Animal.prototype.getName.apply(this);
	console.log(this.name + ' tell: Bark');
}

var Dog = new Dog('Druzhok');
Dog.voice();
