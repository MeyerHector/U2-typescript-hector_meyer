import { Car } from "./7-8-9";
class ElectricCar extends Car {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make), (this.batteryLife = batteryLife);
  }
  charge(): string {
    return `Battery charging, actual: ${this.batteryLife}`;
  }
}

const tesla = new ElectricCar("Tesla", 80);

console.log(tesla.charge());
