//siple constructor

function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.isRunning = false

    // OR
    // this.turnOn = function(){
    //     this.isRunning = true
    // }

    // this.turnOff = function(){
    //     this.isRunning = false
    // }

    // this.honk = function(){
    //     if(this.isRunning)
    //     return 'Beep'
    // }
   
}

Car.prototype.turnOn = function(){
    this.isRunning = true
}

Car.prototype.turnOff = function(){
    this.isRunning = false
}

Car.prototype.honk = function(){
    if(this.isRunning)
    return 'Beep'
}


var myCar = new Car('Toyota', 'Solaris', 2021)
console.log(myCar);
myCar.turnOn()
console.log(myCar);
// myCar.turnOff()
console.log(myCar.honk());


function Dog(name, age){
    this.name = name
    this.age = age
    this.bark = ()=>{
        console.log(this.name + ' just barked');
    }

}

var myDog = new Dog ('Oopsy',4)

// myDog.bark()


function Cat(){
    // Dog.call(this, name, age)
    // Dog.apply(this, [name, age])
    Dog.apply(this, arguments)
     this.bark =  ()=>{
    console.log(this.name + ' just said meow');
}


}

var myCat = new Cat('Tommy',4)
// Cat.prototype.name = 'Martin'
// console.log(myCat);
// myCat.bark()

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




 //------ Prototypes ------

//  console.log(Parent.prototype);
//  console.log(myCat.__proto__ === Cat.prototype);


 var newData = []

 newData = new Array
//  console.dir(newData)
 

 //-----
 
 function User(name){
     this.name = name
 }

 User.prototype.sayHi  = function(){
     return 'Hi '+ this.name

 }

 var matt = new User('Matt')
//  console.log(matt.sayHi())


///----------------

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName 
    this.lastName = lastName 
    this.favoriteColor =  favoriteColor
    this.favoriteNumber = favoriteNumber
    this.family = []
}


Person.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.prototype.addToFamily = function(newMember){
    if(this.family.indexOf(newMember) === -1 && newMember instanceof Person){

        this.family.push(newMember)
    }
    
    
    return this.family.length
}



Array.prototype.map = function(callback){

    var newArray = []

    for(var i=0; i < this.length; i++ ){

        newArray.push(callback(this[i], i, this))
    }

    return newArray

}

String.prototype.reverse = function(){
    var newStr = ''

    for(var i = this.length -1; i >=0; i--){
        newStr+= this[i]
    }

    return newStr
}



//Inheritance

function Student(){
    return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
console.log(Student.prototype);
var matt = Student('Matt', 'Hamilton','blue',13)

console.log(Student.prototype);


//----NEXT EXERCISE

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    
}

Vehicle.prototype.start = function(){
    
    return 'VROOM!';
};


Vehicle.prototype.toString = function(){
    
    return "The make, model, and year are "+ this.make + ' ' + this.model + ' ' + this.year  ;
};


function Car(make, model, year){
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make, model, year){
    Vehicle.apply(this,arguments);
    this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;