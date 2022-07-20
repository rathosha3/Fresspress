
describe('Validate Accounting SubMenu under Features',()=>{

    it('Validate click on a Accounting sub-menu item',()=>
    {
        

        cy.fixture('EnviornmentPath.json').then(envUrl =>
            {
                cy.visit(envUrl.stagingUrl);
            })

        cy.get('#header__menu-handler-image_open').click()
        
        cy.get('#menu-item-1302 > [tabindex="0"] > span').contains('Features').click()

        cy.get('#menu-item-1304 > a > span').click()

        cy.url().should('include', '/accounting')

    })   


})