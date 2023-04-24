class Employee {
    id !: number;
    employeeName !: string;
    address!: string;

    constructor(id: number, employeeName: string, address: string) {
        this.id = id;
        this.employeeName = employeeName;
        this.address = address;
    }
}

let rajat = new Employee(101, 'Rajat', 'Moradabad');

// rajat.id = 101;
// rajat.employeeName = "Rajat Pawan";
// rajat.address = 'Moradabad';

console.log(rajat);