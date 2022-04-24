describe('Care Page', () => {
	beforeEach(() => {
		cy.intercept('GET', 'https://app.pixelencounter.com/api/basic/monsters', {
			statusCode: 200,
			body: {
				'results': [
					{
						'id': 1,
						'svgContent': `${data}`,
					},
				],
			},
		})
		cy.visit('localhost:3000/care')
	})

	it('should show care instructions for a monster', () => {
		cy.get('.care').should('be.visible')
	})
	it('should show food care information', () => {
		cy.get('.care').get('.food').should('be.visible').contains('Food')
	})
	it('should show water care information', () => {
		cy.get('.care').get('.water').should('be.visible').contains('Water')
	})
	it('should show humidity related care information', () => {
		cy.get('.care').get('.humidity').should('be.visible').contains('Humidity')
	})
	it('should show temperature relate care information', () => {
		cy.get('.care').get('.temp').should('be.visible').contains('Temperature')
	})
})

const data =
	'<?xml version="1.0" encoding="utf-8"?>\n            <svg viewBox="0 0 120 120" id="PixelMon_1" class="pixel-monster" data-monster-id="1" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                <rect xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#00000000" />\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="0" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="0" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="10" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="10" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="10" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="10" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="10" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="10" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="10" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="10" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="10" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="100" y="20" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="30" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="30" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="30" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="30" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="30" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="30" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="10" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="100" y="40" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="60" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="70" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="70" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="70" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="70" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="70" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="70" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="70" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="70" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="10" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="20" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="90" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="100" y="80" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="90" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="90" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="90" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="90" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="90" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="90" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="40" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="50" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="60" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="70" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="100" width="10" height="10" fill="#000000"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="30" y="110" width="10" height="10" fill="#A8D281"/>\n<rect xmlns="http://www.w3.org/2000/svg" x="80" y="110" width="10" height="10" fill="#000000"/>\n</svg>\n'
