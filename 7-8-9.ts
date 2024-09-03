export class Car {
  private make: string;
  constructor(make: string) {
    this.make = make;
  }
  drive(): string {
    return `Driving a ${this.make}`;
  }
  getMake(): string {
    return this.make;
  }
}

const honda = new Car("Honda");

console.log(honda.drive());
console.log(honda.getMake());
