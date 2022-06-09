describe('Login page', () => {
  it('displays login form', () => {
    cy.visit('/user/login/');

    cy.findByLabelText('Email').should('exist');
    cy.findByLabelText('Password').should('exist');
    cy.findByRole('button', { name: /Sign in/ }).should('exist');
  });

  describe('given a valid user credentail', () => {
    it('redirects to a new page', () => {
      cy.visit('/user/login/');

      cy.findByLabelText('Email').type('dev@nimblehq.co');
      cy.findByLabelText('Password').type('1234567890');
      cy.findByRole('button', { name: /Sign in/ }).click();

      cy.url().should('include', '/user/login/');
      cy.url().should('include', 'email=');
      cy.url().should('include', 'password=');
    });
  });

  describe('given an INVALID user credentail', () => {
    it('does NOT redirect to a new page', () => {
      cy.visit('/user/login/');

      cy.findByRole('button', { name: /Sign in/ }).click();

      cy.url().should('eq', `${Cypress.config().baseUrl}/user/login/`);
      cy.url().should('not.include', 'email=');
      cy.url().should('not.include', 'password=');
    });
  });
});
