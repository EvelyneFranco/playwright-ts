import { expect, test } from '@playwright/test';
import {LoginPage} from '../page/loginPage'
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';

test.beforeEach(async({page})=>{
    return await page.goto(URL.URL);

})

test('Account Login: Verifies the login functionality by entering valid credentials and checking the welcome message.', async ({page})=>{
    //await page.goto(URL.baseURL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    const wel=new welcomePage(page)
    await expect(wel.WelcomeMessage).toBeTruthy()
    await expect(wel.WelcomeMessage).toContainText('Welcome')
})
//this is part of e2e challenge, I coouldnt' find a way to close an account
//but I got an account closed so I used that creentials to validate is not able to log in.

test('Validate that the login is no longer possible and the user is unable to access any account-related functionality.', async({page})=>{
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.CLOSE_ACC,CREDENTIALS.PASS)
    expect(l.errorMessage).toBeTruthy()
})
