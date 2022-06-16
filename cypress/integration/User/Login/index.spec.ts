const loginPageTestIds = {
  flashToast: 'flash-toast',
};

describe('Login page', () => {
  it('displays login form', () => {
    cy.visit('/user/login/');

    cy.findByLabelText('Email').should('be.visible');
    cy.findByLabelText('Password').should('be.visible');
    cy.findByRole('button', { name: /Sign in/ }).should('be.visible');
  });

  describe('given a valid user credentail', () => {
    it('does NOT show the error message box', () => {
      cy.visit('/user/login/');

      cy.findByLabelText('Email').type('dev@nimblehq.co');
      cy.findByLabelText('Password').type('1234567890');
      cy.findByRole('button', { name: /Sign in/ }).click();

      cy.findByTestId(loginPageTestIds.flashToast).should('not.exist');
    });
  });
});
