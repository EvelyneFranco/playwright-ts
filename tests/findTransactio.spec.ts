import { expect, test } from '@playwright/test';
import {LoginPage} from "../page/loginPage"
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';
import { findTransaction } from '../page/findTransaction';

test.beforeEach(async ({page})=>{
    await page.goto(URL.URL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    const wel=new welcomePage(page)
    await wel.findTransactions.click()

})

test('Account Statement: Generates an account statement by selecting the account and days, then validates the presence of the statement table.',async ({page})=>{
    const ft=new findTransaction(page);
    await ft.selectDate()
    await expect(ft.table).toBeTruthy()
})

