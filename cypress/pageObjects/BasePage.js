class BasePage {
    launchApplication(datatable){
        datatable.hashes().forEach(element => {
            return cy.visit (element.url)
            })
        //return cy.visit ("https://colorlib.com/polygon/metis/login.html")
    }
}
export default BasePage