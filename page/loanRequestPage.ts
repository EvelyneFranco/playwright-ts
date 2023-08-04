const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";

export class loanRequestPage{
    page:Page;
    amount: Locator;
    downPayment:Locator;
    applyButton:Locator;
    loanConfirm: Locator;

    constructor(page: Page){
        this.page=page;
        this.amount=page.locator('#amount');
        this.downPayment=page.locator('#downPayment');
        this.applyButton=page.getByRole('button', { name: 'Apply Now' })
        this.loanConfirm=page.getByRole('heading', { name: 'Loan Request Processed' })



    }

    async loanRequestFunction(){
        await this.amount.fill('10');
        await this.downPayment.fill('5');
        await this.applyButton.click();
    }
}