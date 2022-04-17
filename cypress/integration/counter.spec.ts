it('opens the site', () => {
  cy.visit('/');
  cy.get('h2').contains('Nuxt 3 Simple Boilerplate');
});

it('check counter input', () => {
  cy.get('.el-input-number__increase').click();
  cy.get('.el-input-number__increase').click();
  cy.get('input').type('aria-valuenow').should('have.value', 2);
  cy.get('.el-input-number__decrease').click();
  cy.get('input').type('aria-valuenow').should('have.value', 1);
  cy.get('.el-input-number__decrease').click();
  cy.get('.el-input-number__decrease').click();
  cy.get('.el-input-number__decrease').click();
  cy.get('input').type('aria-valuenow').should('have.value', 0);
});

it('check counter button', () => {
  cy.get('input').type('aria-valuenow').should('have.value', 0);
  cy.get('button').first().click();
  cy.get('button').last().click();
  cy.get('input').type('aria-valuenow').should('have.value', 2);
  cy.get('button').eq(2).click();
  cy.get('input').type('aria-valuenow').should('have.value', 3);
});
