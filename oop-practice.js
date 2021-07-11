//siple constructor

function Car(make, model, price, power){
    this.make = make
    this.model = model
    this.price = price
    this.power = power
}

var myCar = new Car('Toyota', 'Solaris', 24000, 700)
console.log(myCar);

function Dog(name, age){
    this.name = name
    this.age = age
    this.bark = ()=>{
        console.log(this.name + ' just barked');
    }

}

var myDog = new Dog ('Oopsy',4)

myDog.bark()


function Cat(){
    // Dog.call(this, name, age)
    // Dog.apply(this, [name, age])
    Dog.apply(this, arguments)
     this.bark =  ()=>{
    console.log(this.name + ' just said meow');
}


}

var myCat = new Cat('Tommy',4)

console.log(myCat);
myCat.bark()

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 

function Person(firstName,lastName,favoriteColor, favoriteNumber){
    this.firstName = firstName            
    this.lastName  = lastName
    this.favoriteColor = favoriteColor
    this.favoriteNumber = favoriteNumber
    
    this.multiplyFavoriteNumber = (num)=>{
        
        return num * this.favoriteNumber
    }
 }
 
 
 // Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.
 
 
 
 // PART 2
 
 // Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.
 
 function Parent(firstName, lastName, favoriteColor, favoriteFood){
     this.firstName = firstName;
     this.lastName = lastName;
     this.favoriteColor = favoriteColor;
     this.favoriteFood = favoriteFood;
 }
 
 function Child(firstName, lastName, favoriteColor, favoriteFood){
    Parent.apply(this, arguments)
 }