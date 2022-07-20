describe('Validate the Stanging Url',function()
{
    it('Validate Successfully Land on Staging by checking Title',function()
    {

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                cy.visit(envUrl.stagingUrl);
            })
        cy.title().should('eq','Invoice and Accounting Software for Small Businesses - FreshPress Website - Staging')
        //cy.get('.header__interaction-controls > .show-fbprospect').click()
        //cy.location('href')
        //cy.get('#user-edit a').click()
        //cy.url().should('include', '/signup') // => true
        //cy.url().should('eq', 'https://staging.web.freshenv.com/signup') // => true

    })
    it('Validate Try It Free Clikable and Url contains Singup',function()
    {

       
        cy.get('.header__interaction-controls > .show-fbprospect').click()
        cy.location('href')
        cy.url().should('include', '/signup') // => true
        

    })
    it('Validate the correct URL landing page of Try It Free of staging ',function()
    {

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                cy.url().should('eq', envUrl.stageSignupUrl) // => true
            })
        

    })
})  
