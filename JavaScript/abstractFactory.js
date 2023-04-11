class AbstractFactory {
    createObject(factory) {
        switch(factory) {
            case 'VehicleFactory':
                return new VehicleFactory();
            case 'DocumentFactory':
                return new DocumentFactory();
        }
    }
}

class VehicleFactory extends AbstractFactory {
    createVehicle(type) {
        switch(type) {
            case 'Car':
                return new Car();
            case 'Bike':
                return new Bike();
        }
    }
}

class DocumentFactory extends AbstractFactory {
    createDocument(type) {
        switch(type) {
            case 'PDF':
                return new PDFDocument();
            case 'Word':
                return new WordDocument();
        }
    }
}   

class Car {
    constructor() {}
}

class Bike {
    constructor() {}
}

class PDFDocument {
    constructor() {}
}

class WordDocument {
    constructor() {}
}

const factory = new AbstractFactory();
const documentFactory = new factory.createDocument('DocumentFactory');
const vehicleFactory = new factory.createDocument('VehicleFactory')
const car = new vehicleFactory.createVehicle('Car');
const bike = new vehicleFactory.createVehicle('Bike');

