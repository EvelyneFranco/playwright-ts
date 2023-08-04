const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";



export class welcomePage{
    page: Page;
    WelcomeMessage: Locator;
    transferlink: Locator;
    findTransactions: Locator;
    billPayment: Locator;
    loanRequest: Locator;
    updateInformation: Locator;
    NameProfile: Locator;
    logOut:Locator;
    
    constructor(page: Page){
        this.page=page
        this.WelcomeMessage=page.locator('#leftPanel > p > b');
        this.transferlink=page.locator('a:text("Transfer Funds")');
        this.findTransactions=page.locator('a:text("Find Transactions")');
        this.billPayment=page.locator('a:text("Bill Pay")');
        this.loanRequest=page.locator('a:text("Request Loan")');
        this.updateInformation=page.locator('a:text("Update Contact Info")')
        this.NameProfile=page.locator('//*[@id="leftPanel"]/p/text()')
        this.logOut=page.locator('a:text("Log Out")')

    }
}