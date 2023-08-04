const {expect}= require('@playwright/test')
import { personalData,addressInformation,pass } from "../data/generateData";
import { Page,Locator } from "@playwright/test";



export class registerPage{
    page: Page;
    firstName: Locator;
    lastName: Locator;
    address: Locator;
    city: Locator;
    state: Locator;
    zipCode: Locator;
    phone: Locator;
    SSN: Locator;
    username: Locator;
    password: Locator;
    confirmPass: Locator;
    registerButton: Locator;
    welcome:Locator;

    constructor(page: Page){
        this.page=page;
        this.firstName=page.locator('[id="customer\\.firstName"]');
        this.lastName=page.locator('[id="customer\\.lastName"]');
        this.address=page.locator('[id="customer\\.address\\.street"]');
        this.city=page.locator('[id="customer\\.address\\.city"]');
        this.state=page.locator('[id="customer\\.address\\.state"]');
        this.zipCode=page.locator('[id="customer\\.address\\.zipCode"]');
        this.phone=page.locator('[id="customer\\.phoneNumber"]');
        this.SSN=page.locator('[id="customer\\.ssn"]');
        this.username=page.locator('[id="customer\\.username"]');
        this.password=page.locator('[id="customer\\.password"]');
        this.confirmPass=page.locator('#repeatedPassword');
        this.registerButton=page.locator('input[value="Register"]');
        this.welcome=page.locator('.title')
        

    }

    async registerFunction(){
        var fname=personalData.fname
        var lname=personalData.lname
        var password=pass()
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.address.fill(addressInformation.address)
        await this.city.fill(addressInformation.city)
        await this.state.fill(addressInformation.state)
        await this.zipCode.fill(addressInformation.zp)
        await this.phone.fill(personalData.phone.toString())
        await this.SSN.fill(personalData.ssn.toString())
        await this.username.fill(fname+'.'+lname)
        await this.password.fill(password)
        await this.confirmPass.fill(password)
        await this.registerButton.click()
    }
}