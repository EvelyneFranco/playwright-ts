import { expect, test } from '@playwright/test';
import { URL } from '../data/Urls';
import { registerPage } from '../page/registerPage';

test('User Registration: Validates the registration process by filling out the registration form and verifying the success message.',async ({page})=>{
    await page.goto(URL.REGISTER_URL);
    const r= new registerPage(page)
    await r.registerFunction();
    //validate welcome message is displayed.
    await expect(r.welcome).toContainText('Welcome');
})

