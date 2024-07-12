describe('Open Home Page', () => {
    it('Open Home Page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('Welcome');
    });
  });
  