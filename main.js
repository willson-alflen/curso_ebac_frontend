// Exercício Programação Orientada à Objetos

// 1. Crie uma classe de uma abstração
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`The ${this.brand} ${this.model}'s engine is started.`);
  }

  stopEngine() {
    console.log(`The ${this.brand} ${this.model}'s engine is stopped.`);
  }
}

// instâncias da classe Car
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.startEngine(); 
myCar.stopEngine(); 

const anotherCar = new Car('Ford', 'Mustang', 2023);
anotherCar.startEngine(); 
anotherCar.stopEngine(); 

// 2. Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente
class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`The ${this.brand} ${this.model} is charging.`);
  }
}

class SportsCar extends Car {
  constructor(brand, model, year, topSpeed) {
    super(brand, model, year);
    this.topSpeed = topSpeed;
  }

  accelerate() {
    console.log(`The ${this.brand} ${this.model} is accelerating to its top speed of ${this.topSpeed} mph.`);
  }
}

// 3. Crie pelo menos três instâncias de objetos
const myElectricCar = new ElectricCar('Tesla', 'Model S', 2023, '100 kWh');
myElectricCar.startEngine();
myElectricCar.stopEngine();
myElectricCar.charge();

const electricCar1 = new ElectricCar('Nissan', 'Leaf', 2023, '40 kWh');
electricCar1.startEngine();
electricCar1.stopEngine();
electricCar1.charge();

const electricCar2 = new ElectricCar('Chevrolet', 'Bolt', 2022, '66 kWh');
electricCar2.startEngine();
electricCar2.stopEngine();
electricCar2.charge();

const mySportsCar = new SportsCar('Ferrari', '458 Italia', 2022, 200);
mySportsCar.startEngine();
mySportsCar.stopEngine();
mySportsCar.accelerate();

const sportsCar1 = new SportsCar('Porsche', '911', 2023, 190);
sportsCar1.startEngine(); 
sportsCar1.stopEngine();
sportsCar1.accelerate();

const sportsCar2 = new SportsCar('Lamborghini', 'Aventador', 2022, 220);
sportsCar2.startEngine();
sportsCar2.stopEngine();
sportsCar2.accelerate();
