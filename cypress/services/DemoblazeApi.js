const { createRequestId } = require('../utils/dataFactory');

class DemoblazeApi {
  get baseUrl() {
    return Cypress.env('apiUrl');
  }

  signup(user) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/signup`,
      body: user,
      failOnStatusCode: false,
    });
  }

  login(user) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/login`,
      body: user,
      failOnStatusCode: false,
    });
  }

  addToCart(cookie, productId) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/addtocart`,
      body: {
        id: createRequestId(),
        cookie,
        prod_id: productId,
        flag: true,
      },
      failOnStatusCode: false,
    });
  }

  viewCart(cookie) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/viewcart`,
      body: {
        cookie,
        flag: true,
      },
      failOnStatusCode: false,
    });
  }
}

module.exports = new DemoblazeApi();
