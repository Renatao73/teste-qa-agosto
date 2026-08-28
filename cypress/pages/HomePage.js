class HomePage {
  visit() {
    cy.visit('/');
  }

  openSignUp() {
    cy.get('#signin2').should('be.visible').click();
    cy.get('#signInModal').should('be.visible');
  }

  selectCategory(category) {
    cy.contains('#itemc', category).should('be.visible').click();
  }

  openProduct(productName) {
    cy.contains('.hrefch', productName, { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  goToCart() {
    cy.get('#cartur').should('be.visible').click();
    cy.location('pathname').should('include', 'cart.html');
  }
}

module.exports = new HomePage();
