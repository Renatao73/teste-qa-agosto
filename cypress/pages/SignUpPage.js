class SignUpPage {
  fillUsername(username) {
    cy.get('#sign-username').should('be.visible').clear().type(username);
  }

  fillPassword(password) {
    cy.get('#sign-password').should('be.visible').clear().type(password, {
      log: false,
    });
  }

  stubAlert(alias = 'signupAlert') {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as(alias);
    });
  }

  submit() {
    cy.get('#signInModal')
      .contains('button', 'Sign up')
      .should('be.enabled')
      .click();
  }

  assertAlert(message, alias = 'signupAlert') {
    cy.get(`@${alias}`).should('have.been.calledWith', message);
  }
}

module.exports = new SignUpPage();
