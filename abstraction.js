class Animals{
    constructor() {
        
    }
    talk(){
       
        throw new Error ('You must implement talk method')
    }

    
}

class Cat extends Animals{

    talk(){
        console.log('Meow Meow');
    }
}
class Dog extends Animals{
    talks(){
        console.log("bark bark");
    }
    talk(){
        console.log("bark bark");
    }
}

const myCat = new Cat();
myCat.talk();

const myDog = new Dog();
myDog.talk();