describe('Runway Reviews', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/airports', {
    statusCode: 200,
    fixture: "airportNamesData.json"
    })
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/users', {
      statusCode: 200,
      fixture: "userData.json"
    })
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/reviews', {
      statusCode: 200,
      fixture: "reviewsData.json"
    })
    cy.visit('http://127.0.0.1:5173/')
  })

  it('should display login button, app title and list of airports in dropdown menu', () => {
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains("Login")

    cy.get('select')
    .get('option').first("Lowell Field")
    .get('option').last("Northern Lite Airport")
  })
  it('should visit an airport details page when clicked', () => {

    cy.get('select').select('Flying O Airport')

    cy.get('h1').contains("Flying O Airport")

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
  // it('should navigate back to the home page', () => {
  //   cy.visit('http://127.0.0.1:5174/airport/Cancun%20International%20Airport')
  //   cy.get('button[class="home-button-details-page link"]').click()

  //   cy.get('header').contains('Runway Reviews')
  //   cy.get('button[class="login-button"]').contains("Login")

  //  cy.get('select')
  //   .get('option[value="John F. Kennedy International Airport"]').contains("John F. Kennedy International Airport")
  //   .get('option[value="Denver International Airport"]').contains("Denver International Airport")
  //   .get('option[value="Dallas Fort Worth International Airport"]').contains("Dallas Fort Worth International Airport")
  //   .get('option[value="Cancun International Airport"]').contains("Cancun International Airport")
  //   .get('option[value="Los Angeles International Airport"]').contains("Los Angeles International Airport")
  // })
  // it('should show Add Review form when that button is clicked', () => {
  //   cy.visit('http://127.0.0.1:5174/airport/Cancun%20International%20Airport')
  //   cy.get('button[class="link add-review"]').click()
  //   cy.get('h1[class="airport-name"]').contains('Cancun International Airport')
  //   cy.get('label').contains('Select a category')

  //   cy.get('select')
  //   .get('option').contains('Security')
  //   .get('option').contains('Restaurants')
  //   .get('option').contains("Arrivals/Departures")
  //   .get('option').contains("Amenities")
  //   .get('option').contains("Accessibility")

  //   cy.get('label').contains('Write your review here:')
  //   cy.get('input[class="review-input"]').should('exist')
  //   cy.get('button').contains('Submit')
  // })
  // it('should take user back to the airport details page when x button is clicked', () => {
  //   cy.visit('http://127.0.0.1:5174/airport/Cancun%20International%20Airport')

  //   cy.get('button').contains('Add Review').click()
  //   cy.get('button').contains('✖️').click()

  //   cy.get('h1').contains('Cancun International Airport')
  //   cy.get('button').contains('Add Review')
  //   cy.get('button').contains('Home')

  //   cy.get('select')
  //   .get('option[value="Security"]').contains('Security')
  //   .get('option[value="Restaurants"]').contains('Restaurants')
  //   .get('option[value="General"]').contains("General")
  //   .get('option[value="Arrivals/Departures"]').contains("Arrivals/Departures")
  //   .get('option[value="Ammenities"]').contains("Ammenities")
  //   .get('option[value="Accessibility"]').contains("Accessibility")
  // })
  // it('should take user back to the home page after the submit button on the Add Review form is clicked', () => {

  //   cy.visit('http://127.0.0.1:5174/airport/Cancun%20International%20Airport')

  //   cy.get('button').contains('Add Review').click()

  //   cy.get('button').contains('Submit').click()

  //   cy.get('header').contains('Runway Reviews')
  //   cy.get('button[class="login-button"]').contains("Login")

  //   cy.get('select')
  //   .get('option[value="John F. Kennedy International Airport"]').contains("John F. Kennedy International Airport")
  //   .get('option[value="Denver International Airport"]').contains("Denver International Airport")
  //   .get('option[value="Dallas Fort Worth International Airport"]').contains("Dallas Fort Worth International Airport")
  //   .get('option[value="Cancun International Airport"]').contains("Cancun International Airport")
  //   .get('option[value="Los Angeles International Airport"]').contains("Los Angeles International Airport")
  // })

  // it('should navigate to the login form when the login button is clicked on the home page', () => {
  //   cy.get('button').contains('Login').click()

  //   cy.get('label').contains('Username')
  //   cy.get('input[placeholder="username"]').should('exist')
  //   cy.get('label').contains('Password')
  //   cy.get('input[name="password"]').should('exist')
  //   cy.get('button[class="login-on-page"]').should('exist')
  // })
  // it('should give a message when the login is clicked without entering a username or password', () => {

  //    cy.get('button').contains('Login').click()

  //    cy.get('button').contains('Log In').click()

  //     cy.get('div').contains('Both inputs must be filled out')

  // })
})

