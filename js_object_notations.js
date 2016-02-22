// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.

//Object Literal Notation
var snoopy = {
  species: "beagle",
  age: 10
};
// Uses colons and commons

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old

//Object Constructor Notation
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;
// Uses equal signs and semi colons

// here is bob again, with his usual properties
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// this time we have added a method, setAge
bob.setAge = function (newAge){
  bob.age = newAge;
};
// here we set bob's age to 40
bob.setAge(40);
// bob's feeling old.  Use our method to set bob's age to 20

bob.setAge(20);

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());

// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);

// make susan here, and first give her an age of 25
var susan = {
  age: 25,
  setAge: setAge
}

// here, update Susan's age to 35 using the method
susan.setAge(35)

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
  this.width = newWidth;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setWidth(8);
rectangle.setHeight(6);

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275

var george = new Person("George Washington", 275);

function Cat(age, color) {
  this.age = age;
  this.color = color;
};

// make a Dog constructor here
function Dog(breed, size, bark_volume) {
  this.breed = breed;
  this.size = size;
  this.bark_volume = bark_volume;
};
