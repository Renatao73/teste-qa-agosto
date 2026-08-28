class ProductPage {
  addToCart() {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('productAlert');
    });

    cy.contains('a.btn.btn-success', 'Add to cart')
      .should('be.visible')
      .click();

    cy.get('@productAlert').should('have.been.calledWith', 'Product added');
  }
}

module.exports = new ProductPage();
