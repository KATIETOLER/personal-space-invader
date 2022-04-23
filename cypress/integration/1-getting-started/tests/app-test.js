describe('App', () => {
	beforeEach(() => {
		cy.visit('localhost:3000')
	})

	it('displays a welcome screen on load', () => {
		cy.get('.App').get('h1').contains('Welcome')
		cy.get('#invader-space').should(
			'have.text',
			'to your personal space invader'
		)
	})
	it('should have a button to take the user to the main page', () => {
		cy.get('.App').get('button').contains('Select a friend')
		cy.get('.friend-select').click()
	})
})
