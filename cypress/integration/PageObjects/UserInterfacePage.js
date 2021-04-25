/// <reference types = "cypress" />

class UserInterfacePage {

    //Test variables and elements
    AccountList = "div[aria-label='Our Accounts']"
    InvestingList ="div[aria-label='Investing']"
    TradingAccountURL = "https://www.ii.co.uk/ii-accounts/trading-account"
    TradingAccountPageTitle = "Open an Online Trading Account Today - interactive investor"

    PensionList = "div[class='css-187k5ja']"
    SIPPURL = "https://www.ii.co.uk/ii-accounts/sipp"
    SIPPPageTitle = "Open a SIPP Account | Self-Invested Personal Pension - interactive investor"

    InvestmentTypeList = "div[aria-label='Investment Type']"
    IdeasAndToolsList = "div[aria-label='Ideas & Tools']"
    Shares = "div[aria-label='Investment Type']>a:first-of-type>div"
    ShareURL = "https://www.ii.co.uk/shares"
    SharesPageTitle = "Stocks & Shares Prices | Today’s Live Markets - interactive investor"

    
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