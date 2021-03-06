"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classTest = function () {
    class Animal {
        move(distanceInMeters = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }
    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    // get和set
    let passcode = "secret passcode";
    class Employee {
        get fullName() {
            return this._fullName;
        }
        set fullName(newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
    //只读
    class Octopus {
        constructor(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
    //静态， 可以使用类名访问
    class Grid {
        constructor(scale) {
            this.scale = scale;
        }
        calculateDistanceFromOrigin(point) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    let grid1 = new Grid(1.0); // 1x scale
    let grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    // 抽象类
    class ElectricalAppliance {
        move() {
            console.log('roaming the earch...');
        }
    }
};
