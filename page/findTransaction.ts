const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";

export class findTransaction{
    page: Page;
    date: Locator;
    findButton: Locator;
    table: Locator;

    constructor(page: Page){
        this.page=page;
        this.date=page.locator('[id="criteria\\.onDate"]');
        this.findButton=page.getByRole('button', { name: 'Find Transactions' }).nth(1);
        this.table=page.locator('#transactionTable')
    }

    async selectDate(){
        await this.date.fill('08-01-2023');
        await this.findButton.click()

    }
}