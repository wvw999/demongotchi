/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080')
    })
  
    it('clean button test', () => {
      cy.get('#feed').click
      cy.get('#potty').then(($span) => {
          const num1 = parseFloat($span)
          expect(num1).to.equal(0)
        cy.get('#nappy').click
        cy.get('#nappy').click
        cy.get('#potty').then(($span) => {
            const num2 = ($span)
            expect(num2).to.be.lessThan(num1)
        })
      })
    })
  })
  