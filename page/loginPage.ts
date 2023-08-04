const {expect}= require('@playwright/test')
import { Page,Locator } from "@playwright/test";


export class LoginPage{
    page: Page;
    registerLink: Locator;
    username: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page :Page){
        this.page=page
        this.registerLink=page.getByRole('link', { name: 'Register' });
        this.username=page.locator('[name="username"]');
        this.password=page.locator('[name="password"]');
        this.loginButton=page.locator('[value="Log In"]');
        this.errorMessage=page.locator('.error')
        
    }

    async clickRegister(){
        await this.registerLink.click()
    }

    async loginFunctionality(user: string,pass: string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
 }
