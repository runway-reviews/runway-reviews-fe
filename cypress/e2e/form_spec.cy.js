describe('Runway Reviews', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/airports', {
      statusCode: 200,
      fixture: 'airportNamesData.json'
    })
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/users', {
      statusCode: 200,
      fixture: 'userData.json'
    })
    cy.intercept('GET', 'https://vast-fortress-94917-3cbbdce45a90.herokuapp.com/api/v1/reviews', {
      statusCode: 200,
      fixture: 'reviewsData.json'
    })
    cy.visit('http://127.0.0.1:5173/')
  })

  it('should display login button, app title and list of airports in dropdown menu', () => {
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains('Login')

    cy.get('select').get('option').first('Lowell Field').get('option').last('Northern Lite Airport')
  })
  it('should visit an airport details page when clicked', () => {
    cy.get('select').select('Flying O Airport')
    cy.get('h1').contains('Flying O Airport')
    cy.get('button[class="link add-review"]').contains('Add Review')
    cy.get('button').contains('Home')
    cy.get('button').contains('Add Review').click()
    cy.contains('div', 'You must be logged in to add a review!').should('be.visible')
  })
  // it('should post a message when user tries to add review when they are not logged in', () => {
  //   cy.get('select').select('Flying O Airport')
  //   cy.get('h1').contains('Flying O Airport')
  //   cy.get('button[class="link add-review"]').contains('Add Review')
  //   cy.get('button[class="home-button-details-page link"]').contains('Home')
  //   cy.get('select')
  //     .get('option')
  //     .first('Security')
  //     .get('option[value="Accessibility"]')
  //     .last('Accessibility')

  //   cy.get('button').contains('Add Review').click()
  //   cy.contains('div', 'You must be logged in to add a review!').should('be.visible')
  // })
  // it('should navigate back to the home page', () => {
  //   cy.visit('http://127.0.0.1:5173/runway-reviews-fe/airport/Flying%20O%20Airport?id=24')
  //   cy.get('button[class="home-button-details-page link"]').click()
  //   cy.get('header').contains('Runway Reviews')
  //   cy.get('button[class="login-button"]').contains('Login')
  //   cy.get('header').contains('Runway Reviews')
  //   cy.get('button[class="login-button"]').contains('Login')
  //   cy.get('select').get('option').first('Lowell Field').get('option').last('Northern Lite Airport')
  // })
  // it('should navigate to the login form when the login button is clicked on the home page', () => {
  //   cy.get('button').contains('Login').click()

  //   cy.get('label').contains('Username')
  //   cy.get('input[placeholder="username"]').should('exist')
  //   cy.get('label').contains('Password')
  //   cy.get('input[name="password"]').should('exist')
  //   cy.get('button[class="login-on-page"]').should('exist')
  // })
  // it('it should log a user in', () => {
  //   cy.get('button').contains('Login').click()
  //   cy.get('input[name="username"]').type('Isadore Bell')
  //   cy.get('input[name="username"]').should('have.value', 'Isadore Bell')
  //   cy.get('input[name="password"]').type('$2a$12$DjWVbNbpMte4HnxMvvOVGOuR3qnYNb48MT8tnmbSSERUYvSg6JVLi')
  //   cy.get('input[name="password"]').should('have.value', '$2a$12$DjWVbNbpMte4HnxMvvOVGOuR3qnYNb48MT8tnmbSSERUYvSg6JVLi')
  //   cy.get('button').contains('Log In').click()

  //   cy.contains('div', 'Successfully logged in!').should('be.visible')
  //   cy.get('button').contains('✖️').click()

  //   cy.get('select').select('Slater Field')
  //   cy.get('h1').contains('Slater Field')
  //   cy.get('button[class="link add-review"]').contains('Add Review')
  //   cy.get('button[class="home-button-details-page link"]').contains('Home')
  //   cy.get('p').contains('Current User: Isadore Bell')
  //    cy.get('select').get('option').first('Security').get('option').last('Accessibility')
  // })
})
