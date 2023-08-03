import { Page, expect, test } from '@playwright/test';
import {LoginPage} from "../page/loginPage"
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';
import {billPay} from '../page/billPayPage'


test.beforeEach(async ({page})=>{
    await page.goto(URL.URL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    const wel=new welcomePage(page)
    await wel.billPayment.click()

})
test.afterEach(async ({page})=>{
    const wel=new welcomePage(page)
    await wel.logOut.click()
})

test('Bill Payment: Performs a bill payment by entering the payment details and confirming the success message.',async ({page})=>{
    const bp=new billPay(page);
    await bp.fillBillPayment()
    await expect(bp.billPayConfirm).toContainText('Bill Payment Complete')
})

