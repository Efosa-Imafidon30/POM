/// <reference types = "cypress" />

class UserInterfacePage {

    ClickOnServices(){
        const button = cy.get("span[aria-label='Services dropdown']")
        button.should('be.visible')
        button.click()
    }

    ClickOnPensions(){
        const button = cy.get("span[aria-label='Pensions dropdown']")
        button.should('be.visible')
        button.click()
    }

    ClickOnResearch(){
        const button = cy.get("span[aria-label='Research dropdown']")
        button.should('be.visible')
        button.click()
    }







    
}
export default UserInterfacePage