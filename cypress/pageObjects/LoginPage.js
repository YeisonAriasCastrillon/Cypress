class LoginPage {

    login(datatable) {

        //locators with Aliases
        cy.get('input[placeholder="Username"]').as("user")
        cy.get('input[placeholder="Password"]').as("pass")
        cy.get('.btn').contains('Sign in').as("signIn")


        //Actions
        datatable.hashes().forEach(element => {
        cy.get('@user').type(element.username)
        cy.get('@pass').type(element.password)
        cy.get('@signIn').click()
        })

    }

    validateResults(content){
        cy.contains(content, { timeout: 10000 }).should('be.visible')
    }

}
export default LoginPage
