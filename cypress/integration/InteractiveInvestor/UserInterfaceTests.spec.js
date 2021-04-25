/// <reference types = "Cypress"/>

import UserInterfacePage from '../PageObjects/UserInterfacePage'

describe('User login scenarios', () => {

    const test = new UserInterfacePage()

    beforeEach(()=>{

        cy.visit("https://www.ii.co.uk/")
        cy.title().should('eq', 'interactive investor – the UK’s number one flat-fee investment platform')
    })

    it('Validating Services dropdown menu and verifying -Trading Account- Page title', ()=>{
        test.ClickOnServices()

        //Asserting that 'Our Accounts' have the correct option list
        cy.get(test.AccountList)
        .should('contain.text', 'Trading Account')
        .should('contain.text', 'Stocks and Shares ISA')
        .should('contain.text', 'SIPP')
        .should('contain.text', 'Junior ISA')
        .should('contain.text', 'See all ii Account')
         
        //Asserting that 'Investing' have the correct option list
        cy.get(test.InvestingList)
        .should('contain.text', 'Our Charges')
        .should('contain.text', 'Investing with ii')
        .should('contain.text', 'Transferring to ii')
        .should('contain.text', 'International Investing')
        .should('contain.text', 'Regular Investing')
        .should('contain.text', 'Live Pricing')
        .should('contain.text', 'IPOs')
        .should('contain.text', 'Ethical Investing')
        .should('contain.text', 'Refer a friend')

        //Clicking on 'Trading Account' and validating page title
        cy.contains('Trading Account').click()
        cy.url().should('eq', test.TradingAccountURL)
        cy.title().should('eq', test.TradingAccountPageTitle)
        
        //Asserting the 'open an account' button
        cy.contains('open an account')
        .should('be.visible')
        .should('not.be.disabled')
        
    })

    it('Validating Pensions dropdown menu and verifying -ii SIPP- page title', ()=>{
        test.ClickOnPensions()

        //Validating 'Pensions' list
        cy.get(test.PensionList)
        .should('contain.text', 'ii SIPP')
        .should('contain.text', 'Open a SIPP')
        .should('contain.text', 'Transfer My Pension')
        .should('contain.text', 'Options at Retirement')
        .should('contain.text', 'SIPP Charge')
        .should('contain.text', 'SIPP FAQs')
        .should('contain.text', 'Old Pensions Comparison')
        .should('contain.text', 'Pensions & Retirement Hub')
        
        //Clicking on 'ii SIPP' and validating page title
        cy.contains('ii SIPP').click()
        cy.url().should('eq', test.SIPPURL)
        cy.title().should('eq', test.SIPPPageTitle)

        //Validating 'open a SIPP' button
        cy.contains('open a SIPP')
        .should('be.visible')
        .should('not.be.disabled')

    })

    it('Validating Research dropdown menu and verifying -Trading Account- Page title', ()=>{
       test.ClickOnResearch()

       //Asserting that 'Investment Type' have the correct option list
       cy.get(test.InvestmentTypeList)
       .should('contain.text', 'Shares')
       .should('contain.text', 'Funds')
       .should('contain.text', 'Investment trusts')
       .should('contain.text', 'ETFs')
       .should('contain.text', 'Advanced Investing')

       //Asserting that 'Ideas & Tools have the correct option list
       cy.get(test.IdeasAndToolsList)
       .should('contain.text', 'ii Super 60 Investments')
       .should('contain.text', 'Quick Start Funds')
       .should('contain.text', 'Model Portfolios')
       .should('contain.text', 'Trading Tips and Ideas')
       .should('contain.text', 'Pensions & Retirement Hub')
       .should('contain.text', 'Ethical Investing')
       .should('contain.text', 'ii ACE 40 Investments')
       .should('contain.text', 'Knowledge Centre')
       .should('contain.text', 'Virtual Portfolio')

       //Clicking on 'ii SIPP' and validating page title
       cy.get(test.Shares).click()
       cy.url().should('eq', test.ShareURL)
       cy.title().should('eq', test.SharesPageTitle)

       //Validating the 'open an account' button
       cy.contains('open an account')
       .should('be.visible')
       .should('not.be.disabled')


    })


        


})