const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";
import { personalData,addressInformation } from "../data/generateData";

export class updateInformation{
    page: Page;
    fname: Locator;
    lname: Locator;
    updateButton: Locator;
    UpdateConfirm: Locator;
    address: Locator;
    city: Locator;
    state:Locator;
    zp:Locator;
    phone:Locator

    constructor(page: Page){
        this.page=page;
        this.fname=page.locator('[id="customer\\.firstName"]');
        this.lname=page.locator(('[id="customer\\.lastName"]'));
        this.address=page.locator('[id="customer\\.address\\.street"]')
        this.city=page.locator('[id="customer\\.address\\.city"]');
        this.state=page.locator('[id="customer\\.address\\.state"]')
        this.updateButton=page.locator('input[value="Update Profile"]');
        this.zp=page.locator('[id="customer\\.address\\.zipCode"]')
        this.phone=page.locator('[id="customer\\.phoneNumber"]')
        this.UpdateConfirm=page.getByRole('heading', { name: 'Profile Updated' })

    }

    async updateInformationFunction(fname,lname){
        await this.fname.fill(fname);
        await this.lname.fill(lname);
        await this.address.fill(addressInformation.address)
        await this.city.fill(addressInformation.city)
        await this.state.fill(addressInformation.state)
        await this.zp.fill(addressInformation.zp)
        await this.phone.fill(personalData.phone.toString())
        await this.updateButton.click();
    }
}