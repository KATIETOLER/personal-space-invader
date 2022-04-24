describe('Nav bar', () => {
	beforeEach(() => {
		cy.visit('localhost:3000')
	})

	it('displays a nav bar with a rocketship and links to the other pages', () => {
		cy.get('.App').get('#nav').get('.imgs').get('#rocket').should('be.visible')
		cy.get('.App').get('#nav').get('#myMonster').should('be.visible')
		cy.get('.App').get('#nav').get('#choose').should('be.visible')
		cy.get('.App').get('#nav').get('#care').should('be.visible')
	})
	it('should be able to click the rocket ship to return to the welcome page', () => {
		cy.get('#nav').get('#rocket').click()
	})
	it('should take you to the choose a monster page url if the choose button is clicked', () => {
		cy.get('#nav').get('#choose').click()
		cy.url().should('include', '/home')
	})
})
