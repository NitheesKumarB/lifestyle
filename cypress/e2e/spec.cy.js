describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('#nav-search').type("phone less than 15000").click()
    cy.get("#nav-search-submit-button").click()


    cy.get('[id="brandsRefinements"]').contains('OnePlus').click({force:true})
    cy.get('[id="brandsRefinements"]').contains('Apple').click({force:true})

    cy.get('[id="p_36/range-slider_slider-item_lower-bound-slider"]')
    .invoke('val', 50)
    
  cy.get('[id="p_36/range-slider_slider-item_lower-bound-slider"]')
    .invoke('val',150)

    
    
    

  })
})

