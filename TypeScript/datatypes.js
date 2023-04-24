"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let rajat = new Employee(101, 'Rajat', 'Moradabad');
// rajat.id = 101;
// rajat.name = "Rajat Pawan";
// rajat.address = 'Moradabad';
console.log(rajat);
