describe('Runway Reviews', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5174/')
  })

  it('Visits the Runway Reviews page', () => {
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains("Login")

    cy.get('select')
    .get('option[value="John F. Kennedy International Airport"]').contains("John F. Kennedy International Airport")
    .get('option[value="Denver International Airport"]').contains("Denver International Airport")
    .get('option[value="Dallas Fort Worth International Airport"]').contains("Dallas Fort Worth International Airport")
    .get('option[value="Cancun International Airport"]').contains("Cancun International Airport")
    .get('option[value="Los Angeles International Airport"]').contains("Los Angeles International Airport")
  })
})
