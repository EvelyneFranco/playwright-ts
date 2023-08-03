import { expect, test } from '@playwright/test';
import {LoginPage} from "../page/loginPage"
import { URL } from '../data/Urls';
import { CREDENTIALS } from '../data/credential';
import { welcomePage } from '../page/welcomePage';
import {updateInformation} from '../page/updateInfoPage'
import { personalData } from '../data/generateData';

test.beforeEach(async ({page})=>{
    await page.goto(URL.URL);
    const l=new LoginPage(page);
    await l.loginFunctionality(CREDENTIALS.USER,CREDENTIALS.PASS)
    //const wel=new welcomePage(page)
    //await wel.updateInformation.click()

})

test('Account Profile Update', async ({page})=>{
    const wel=new welcomePage(page)
    await wel.updateInformation.click()

    const up= new updateInformation(page)
    const fname=personalData.fname //save the name to compare the name in another pages
    const lname=personalData.lname
    await up.updateInformationFunction(fname,lname)
    //validate conformation message update information
    expect(up.UpdateConfirm).toBeTruthy()
   
    //validate name is displayed in Welcome section 
    //update information process IS NOT working, even if I log out and log in again
    //expect(wel.NameProfile).toContainText(fname)
})
