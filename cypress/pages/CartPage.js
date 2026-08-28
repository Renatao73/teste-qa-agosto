class CartPage {
  assertProductExists(productName) {
    cy.contains('#tbodyid tr', productName, { timeout: 10000 })
      .should('be.visible');
  }

  removeProduct(productName) {
    cy.contains('#tbodyid tr', productName, { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.contains('a', 'Delete').click();
      });

    cy.contains('#tbodyid tr', productName).should('not.exist');
  }

  refresh() {
    cy.reload();
    cy.get('#tbodyid').should('be.visible');
  }

  assertProductDoesNotExist(productName) {
    cy.contains('#tbodyid tr', productName).should('not.exist');
  }

  assertOnlyProducts(expectedProducts) {
    expectedProducts.forEach((product) => this.assertProductExists(product));

    cy.get('#tbodyid tr').should('have.length', expectedProducts.length);
  }
}

module.exports = new CartPage();
