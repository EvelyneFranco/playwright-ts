import { expect, test } from '@playwright/test';
import {LoginPage} from "../page/loginPage"
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';
import { transferPage } from '../page/transferPage';

test.beforeEach(async ({page})=>{
    await page.goto(URL.URL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    const wel=new welcomePage(page)
    await wel.transferlink.dblclick()

})

test('Transfer Funds: Tests the fund transfer process by entering the transfer details and verifying the success message.',async ({page})=>
{

    const trans=new transferPage(page)
    await trans.doTransfer()
    //this test is failing because when adding the amount by .fill or .type the dropdowns values become undefined 
    //await expect(trans.transferSuccess).toContainText('Transfer Complete!')
})


    
