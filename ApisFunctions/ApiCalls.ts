import { Request } from "@playwright/test";

export class ApiCalls{
    body:string
    constructor(){
        this.body='customer.firstName=ergrg&customer.lastName=rgerg&customer.address.street=ergreg&customer.address.city=ergerg&customer.address.state=ergerg&customer.address.zipCode=egerg&customer.phoneNumber=rgerg&customer.ssn=ergerg&customer.username=test.test&customer.password=Test12345&repeatedPassword=Test12345';
    }
}