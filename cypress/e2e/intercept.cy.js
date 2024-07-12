// cypress/e2e/register_spec.js
describe('Register Page', () => {
    it('should register a user successfully', () => {
      cy.intercept('POST', 'http://localhost:3001/users/register', {
        statusCode: 200,
        body: {
          message: 'User registered successfully'
        }
      }).as('registerRequest');
  
      cy.visit('/register');
  
      cy.get('input[name="name"]').type('pradeepnaik');
      cy.get('input[name="email"]').type('pradeep@gmail.com');
      cy.get('input[name="password"]').type('12345');
  
      cy.get('button[type="submit"]').click({ multiple: true });
  
      cy.wait('@registerRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body.message).to.equal('User registered successfully');
      });
  
      cy.contains('User Registered Successfully !').should('be.visible');
    });
  });
  