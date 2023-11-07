class bank {

    constructor(BankID,Name,Location) {
        this.BankID = BankID;
        this.Name = Name;
        this.Location = Location;
    }
    getName() {
        return this.Name;
    }

    getLocation() {
        return this.Location;
    }
}

const B1 = new bank ('B-01', "B.O.C",'Colombo' );

console.log(B1.getName());
