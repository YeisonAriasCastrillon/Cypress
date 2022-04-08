

const USUARIO = 'input[type="email"]';
const PASSWORD = 'input[type="password"]';
const SIGNIN = '.btn';
const SIGNIN_TEXT = 'Sign in';

class ReactPage {

    login(datatable) {
        datatable.hashes().forEach(element => {
        cy.get(USUARIO).type(element.username)
        cy.get(PASSWORD).type(element.password)
        cy.get(SIGNIN).contains(SIGNIN_TEXT).click()
        })
    }

    validateResults(content){
        cy.contains(content, { timeout: 10000 }).should('be.visible')
    }

}
export default ReactPage
