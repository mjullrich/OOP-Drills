
                                   //OOP Drills

//Object Literals

let friend = {
    name: {
        first: 'Tyler',
    },
    sayHello: function () {
        alert(`Hi! I'm ${this.name.first}.`);
    }
};
console.log(friend.name.first);
friend.sayHello();


let friend2 = {
    name: {
        first: 'John',
    },
    sayHello: function () {
        alert(`Hi! I'm ${this.name.first}.`);
    }
};
console.log(friend2.name.first);
friend2.sayHello();


let friend3 = {
    name: {
        first: 'Ronnie',
    },
    sayHello: function () {
        alert(`Hi! I'm ${this.name.first}.`);
    }
};
console.log(friend3.name.first);
friend3.sayHello();


let friend4 = {
    name: {
        first: 'Clayon',
    },
    sayHello: function () {
        alert(`Hi! I'm ${this.name.first}.`);
    }
};
console.log(friend4.name.first);
friend4.sayHello();


let friend5 = {
    name: {
        first: 'Skyler',
    },
    sayHello: function () {
        alert(`Hi! I'm ${this.name.first}.`);
    }
};
console.log(friend5.name.first);
friend5.sayHello();


// Constructors

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    helloo() {
        alert(`Hello my name is
    ${this.name}! I am ${this.age} years old.`);
    }
}
let p1 = new People('John', 25);
p1.helloo();


// pseudo class

function Friends(name, age) {
    this.name = name;
    this.age = age;
}
Friends.prototype.hello = function () {
    alert('Hello my name is ' +
        this.name + '! I am ' + this.age +
        ' years old.');
}
let friend6 = new Friends('Tyler', 27);
friend6.hello();


// Inheritance

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }

    aboutVehicle() {
        console.log("This is a " + this.constructor.name +
            " and it is a " + this.manufacturer + ", and it has " + this.wheels + " wheels.");
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, truckBed, doors) {
        super(manufacturer, wheels);
        this.truckBed = truckBed;
        this.doors = doors;
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, wheels, size, mpg) {
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheels, handleBars, noDoors) {
        super(manufacturer, wheels);
        this.handleBars = handleBars;
        this.noDoors - noDoors;
    }
}

const truck = new Truck('Ford', 4, true, 2);
truck.aboutVehicle();

const sedan = new Sedan('Mazda', 4, 'medium', 32);
sedan.aboutVehicle();


const motorcycle = new Motorcycle('Honda', 2, 'Beach Bar');
motorcycle.aboutVehicle();











