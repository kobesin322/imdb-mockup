describe('IMDB Mockup e2e Testing', () => {
  it('Fetching a page of movies', () => {

    //XL Monoitor
    cy.viewport(2560, 1294)

    cy.visit('./index.html')
    
    cy.get(".gallery")
    .find('.movie-poster-wrap')
    .should("have.length", 20)

  })

  it('Toggle popout menu', () => {

    //Mobile
    cy.viewport(375, 906)

    cy.visit('./index.html')
    
    cy.get("#open-menu").click()

    cy.get('.popout-menu.active')
    .find('.breadcrumb_current')
    .contains('Home')

  })


})