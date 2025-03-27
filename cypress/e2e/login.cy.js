describe('flipkart phn search', () => {
    it.skip('checking price', () => {
        cy.visit('https://www.flipkart.com/')


        cy.get('[class="Pke_EE"]').type('phone less than 15k with 5G {enter}')




    })
    it('checking price', () => {
        cy.visit('https://www.flipkart.com/')

        cy.get('[class="Pke_EE"]').type('phone less than 15k with 5G {enter}')

        cy.get('[title="SAMSUNG"]').contains("SAMSUNG").click({ force: true })

        cy.get('[title="Apple"] > .QCKZip > .tJjCVx > .XqNaEv').click()
    })

    it.only('temp spec', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="Pke_EE"]').type('phone less than 15k with 5G {enter}')
        cy.get('[class="iToJ4v Kaqq1s"]').trigger('mousedown').trigger('mousemove', { clientX: 90 }).trigger('mouseup')
        cy.get('[class="iToJ4v D0puJn"]').trigger('mousedown').trigger('mousemove', { clientX: 200 }).trigger('mouseup')
    })


    