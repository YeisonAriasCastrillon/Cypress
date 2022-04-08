import BasePage from  '../../pageObjects/BasePage'
import LoginPage from '../../pageObjects/LoginPage'

const basePage = new BasePage()
const loginPage = new LoginPage()

Given('I open Colorlib page', () => {
    basePage.launchApplication()
});

When('I type in', (datatable) => {
    loginPage.login(datatable)
});

Then('{string} should be shown', (content) => {
    loginPage.validateResults(content)
});