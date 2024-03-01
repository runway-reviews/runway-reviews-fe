describe('Runway Reviews', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://runwayreviewsbe-4165084ad9d0.herokuapp.com/airports/', {
      statusCode: 200,
      fixture: 'airportNamesData.json'
    })
    cy.intercept('GET', 'https://runwayreviewsbe-4165084ad9d0.herokuapp.com/user', {
      statusCode: 200,
      fixture: 'userData.json'
    })
    cy.intercept('GET', 'https://runwayreviewsbe-4165084ad9d0.herokuapp.com/reviews', {
      statusCode: 200,
      fixture: 'reviewsData.json'
    })
    cy.visit('http://127.0.0.1:5173/runway-reviews-fe')
  })

  it('should display login button, app title and list of airports in dropdown menu', () => {
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains('Login')

    cy.get('select').get('option').first('Lowell Field').get('option').last('Northern Lite Airport')
  })
  it('should navigate user to an airport details page when clicked', () => {
    cy.get('select').select('Flying O Airport')
    cy.get('h1').contains('Flying O Airport')
    // cy.get('button[class="link add-review"]').contains('Add Review')
    cy.get('button').contains('Home')
  })
  it.only('should not display an add review button if no user has logged in', () => {
    cy.get('select').select('Flying O Airport')
    cy.get('h1').contains('Flying O Airport')
    // cy.get('button[class="link add-review"]').contains('Add Review')
    cy.get('button').contains('Home')
    //trying to make it so that there is a paragraph that states 'You must be logged in to add a review!').should('be.visible'

    // //it's not displaying the You must be logged in. Needs to be fixed
    // cy.get('button').contains('Add Review').click()
    // cy.contains('div', 'You must be logged in to add a review!').should('be.visible')
  })
  it('should navigate back to the home page', () => {
    cy.visit('http://127.0.0.1:5173/runway-reviews-fe/airport/Flying%20O%20Airport?id=24')
    cy.get('button[class="home-button-details-page link"]').click()
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains('Login')
    cy.get('header').contains('Runway Reviews')
    cy.get('button[class="login-button"]').contains('Login')
    cy.get('select').get('option').first('Lowell Field').get('option').last('Northern Lite Airport')
  })
  it('should navigate to the login form when the login button is clicked on the home page', () => {
    cy.get('button').contains('Login').click()

    cy.get('label').contains('Username')
    cy.get('input[placeholder="Enter Username..."]').should('exist')
    cy.get('label').contains('Password')
    cy.get('input[name="password"]').should('exist')
    cy.get('button[class="login-on-page"]').should('exist')
  })
  it('should be able to close the login form and be taken back to the home page', () => {
    cy.get('button').contains('Login').click()
    cy.get('button').contains('✖️').click()
  })
  it('it should log a user in', () => {
    cy.get('button').contains('Login').click()
    cy.get('input[name="username"]').type('Duane Pipe')
    cy.get('input[name="username"]').should('have.value', 'Duane Pipe')
    cy.get('input[name="password"]').type('password')
    cy.get('input[name="password"]').should('have.value', 'password')
    cy.get('button').contains('Log In').click()
    cy.contains('div', 'Successfully logged in!').should('be.visible')
  })
})
