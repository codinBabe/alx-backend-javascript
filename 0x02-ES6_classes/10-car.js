// Implement a class named Car:

// Constructor attributes:
// brand (String)
// motor (String)
// color (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Add a method named cloneCar. This method should return a new object of the class.
// Hint: Symbols in ES6

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
