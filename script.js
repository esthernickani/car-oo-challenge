class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep."
    }

    toString() {
        return `This vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle {
    constructor (make, model, year, numWheels = 4) {
        super(make, model, year);
        this.numWheels = numWheels;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year, numWheels = 2) {
        super(make, model, year);
        this.numWheels = numWheels;
    }

    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        }

        if (this.vehicles.length === 2) {
            return "Sorry, we're full."
        } 

        this.vehicles.push(newVehicle);
        return "Vehicle added!"
    }
}