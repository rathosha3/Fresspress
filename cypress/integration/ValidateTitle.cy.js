describe('Test Suites',function()
{
    it('Check correct Title for Staging Page ',function()
    {
        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                cy.visit(envUrl.stagingUrl);
            })
        
        cy.title().should('eq','Invoice and Accounting Software for Small Businesses - FreshPress Website - Staging')
        
    })
})