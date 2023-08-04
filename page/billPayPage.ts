const {expect}= require('@playwright/test')
import {personalData,addressInformation} from "../data/generateData"
import { Page,Locator } from "@playwright/test";


export class billPay{
    page: Page;
    name: Locator;
    address: Locator;
    city: Locator;
    state: Locator;
    zipcode: Locator;
    phone: Locator;
    account: Locator;
    verifyAccount: Locator;
    amount: Locator;
    sendButton: Locator;
    billPayConfirm: Locator;
    
    constructor(page: Page){
        this.page=page;
        this.name=page.locator('[name="payee.name"]');
        this.address=page.locator('[name="payee.address.street"]');
        this.city=page.locator('[name="payee.address.city"]');
        this.state=page.locator('[name="payee.address.state"]');
        this.zipcode=page.locator('[name="payee.address.zipCode"]');
        this.phone=page.locator('[name="payee.phoneNumber"]');
        this.account=page.locator('[name="payee.accountNumber"]');
        this.verifyAccount=page.locator('[name="verifyAccount"]');
        this.amount=page.locator('[name="amount"]');
        this.sendButton=page.locator('[value="Send Payment"]')
        this.billPayConfirm=page.getByRole('heading', { name: 'Bill Payment Complete' })
    }

    async fillBillPayment(){
        await this.name.fill(personalData.fname);
        await this.address.fill(addressInformation.address);
        await this.city.fill(addressInformation.city);
        await this.state.fill(addressInformation.state);
        await this.zipcode.fill(addressInformation.zp)
        await this.phone.fill(personalData.phone.toString());
        await this.account.fill('34343');
        await this.verifyAccount.fill('34343');
        await this.amount.fill('100');
        await this.sendButton.click()


    }
}