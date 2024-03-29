class Pharmacy {

    constructor(name) {
        this.name = name
        this.customers = []
    }

    addCustomer(customer) {
        this.customers.push(customer)
    }


    processCustomerInAscendendingOrder() {

        if (this.customers.length === 0) {
            console.log(`You process all customers`);
            return;
        }
        console.log(`You are processing this customer : ${this.customers[0].queueOrder}`);
        this.customers.shift()

        return this.customers
    }

    processCustomerInDescendendingOrder() {
        if (this.customers.length === 0) {
            console.log(`You process all customers`);
            return;
        }

       let currentCustomer = this.customers.pop()
        console.log(`You are processing this customer : ${currentCustomer.queueOrder}`);
        return currentCustomer
    }


}


class Customer {

    constructor(queueOrder, name, age, prescription) {
        this.queueOrder = queueOrder
        this.name = name;
        this.age = age;
        this.prescription = prescription
    }
}

let customer1 = new Customer(1, 'Ivan Ivanov', 26, 'Analgin: 10 amp , Vit "C": amp x10')
let customer2 = new Customer(2, 'Dragan Petkov', 31, 'Paracetamol: 1 , Vit "D": susp x1')
let customer3 = new Customer(3, 'Petkan Petrov', 22, 'Nurofen Stop Cold: 50mg x1')
let customer4 = new Customer(4, 'Maria Ivanova', 50, 'Magnesium: 1 tab , Vit "C": amp x10')


let pharmacy = new Pharmacy('Pharmacy X')
pharmacy.addCustomer(customer1)
pharmacy.addCustomer(customer2)
pharmacy.addCustomer(customer3)
pharmacy.addCustomer(customer4)
// pharmacy.processCustomerInAscendendingOrder()
// pharmacy.processCustomerInAscendendingOrder()
// pharmacy.processCustomerInAscendendingOrder()
// pharmacy.processCustomerInAscendendingOrder()
// pharmacy.processCustomerInAscendendingOrder()
pharmacy.processCustomerInDescendendingOrder()
pharmacy.processCustomerInDescendendingOrder()
pharmacy.processCustomerInDescendendingOrder()
pharmacy.processCustomerInDescendendingOrder()
pharmacy.processCustomerInDescendendingOrder()

