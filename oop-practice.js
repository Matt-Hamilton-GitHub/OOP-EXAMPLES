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