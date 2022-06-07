/// <reference types="cypress" />

describe('Login page', () => {
  it('displays welcome message', () => {
    cy.visit('/user/login');

    cy.get('h1').contains('Welcome to login page!!');
  });
});
