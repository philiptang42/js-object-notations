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

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39)
var holden = new Person("Holden Caulfield", 16)
console.log("sally's species is " + sally.species + " and she is " + sally.age + " years old." );
console.log("holden's species is " + holden.species + " and he is " + holden.age + " years old.");

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function() {
      return (this.height * 2) + (this.width * 2);
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(perimeter)

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
rabbit1.describeMyself;
var rabbit2 = new Rabbit("happy");
rabbit2.describeMyself;
var rabbit3 = new Rabbit("sleepy");
rabbit3.describeMyself;

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);


// Our Person constructor
function Person(name, age) {
  this.name = name
  this.age = age
};

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for (var i = 0; i < 4; i++) {
  console.log(family[i].name)
};

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);
console.log(diff);
