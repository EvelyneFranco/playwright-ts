const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";

exports.transferPage= class transferPage{
    page: Page;
    amount:Locator;
    transferButton:Locator;
    transferSuccess:Locator;
    constructor(page: Page){
        this.page=page;
        this.amount=page.locator('#amount');
        this.transferButton=page.locator('[value="Transfer"]');
        this.transferSuccess=page.locator('.title');
    }

    async doTransfer(){
        //this.page.waitForLoadState('load')
        

        /*await this.page.evaluate(() => {
            const amountField = document.querySelector('#amount');
            amountField.value = '10';
          });*/
         //await this.page.keyboard.press('Enter')
        await this.amount.type('10');
        await this.transferButton.dblclick();

    }
}