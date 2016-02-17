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
