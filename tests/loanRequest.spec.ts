import { expect, test } from '@playwright/test';
import {LoginPage} from "../page/loginPage"
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';
import { loanRequestPage } from '../page/loanRequestPage';

test.beforeEach(async ({page})=>{
    await page.goto(URL.URL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    const wel=new welcomePage(page)
    await wel.loanRequest.click()

})

test('Loan Application: This test scenario validates the loan application process by submitting a loan application form with valid details.',async ({page})=>{
    const lp=new loanRequestPage(page);
    await lp.loanRequestFunction();
    expect(lp.loanConfirm).toBeTruthy();
})

