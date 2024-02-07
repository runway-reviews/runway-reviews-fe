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
  it('Visits an airport details page', () => {

    cy.get('select').select('Cancun International Airport');

    cy.get('h1[class="airport-name"]').contains("Cancun International Airport");

    cy.get('button[class="link add-review"]').contains('Add Review');

    cy.get('button[class="home-button-details-page link"]').contains('Home');

    cy.get('select')
    .get('option[value="Security"]').contains('Security')
    .get('option[value="Restaurants"]').contains('Restaurants')
    .get('option[value="General"]').contains("General")
    .get('option[value="Arrivals/Departures"]').contains("Arrivals/Departures")
    .get('option[value="Ammenities"]').contains("Ammenities")
    .get('option[value="Accessibility"]').contains("Accessibility")
  })
})
