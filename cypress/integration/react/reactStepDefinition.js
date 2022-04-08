//import { Given, When, Then } from 'cypress_bdd_cucumber_pom-master/'
import BasePage from  '../../pageObjects/BasePage'
import ReactPage from '../../pageObjects/ReactPage'

const basePage = new BasePage()
const reactPage = new ReactPage()

Given('que Yeison quiere ingresar a la pagina de React', (datatable) => {
    basePage.launchApplication(datatable)
});

When('el escribes sus credenciales', (datatable) => {
    reactPage.login(datatable)
});

Then('el debria ver el mensaje {string}', (content) => {
    reactPage.validateResults(content)
});