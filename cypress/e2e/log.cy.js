// describe('Conditional Logging Example', () => {
//     it('should log messages based on a condition', () => {
//         const userLogin = true; // Change this to false to see the else case

//         if (userLogin) {
//             cy.log('User  is logged in.');
//             // You can add more actions here if needed
//         } else {
//             cy.log('User  is not logged in. Redirecting to login page...');
//             // You can add actions to handle the else case, like visiting the login page
//             cy.visit('/login');
//         }
//     })



//     it.only('should set a cookie', () => {
//         cy.setCookie('session_id', '1234567890');

//         // Verify that the cookie has been set
//         cy.getCookie('session_id').should('have.property', 'value', '1234567890');
//     });

describe('Session Management Example', () => {
    beforeEach(() => {
        // Use cy.session to manage user login session
        cy.session('userSession', () => {
            // This function will run to set up the session
            cy.visit('https://practicetestautomation.com/practice-test-login/');
            cy.get('input[name=username]').type('student');
            cy.get('input[name=password]').type('Password123');
            cy.get('[class="btn"]').click();
        });
    });

    it('should access the dashboard without logging in again', () => {
        // The session is restored, so the user is already logged in
        cy.visit('https://practicetestautomation.com/practice-test-login/');
        cy.wait(5000);
        cy.url().should('include', '/practicetestautomation/');


    });

    it('should access the profile page without logging in again', () => {
        // The session is restored, so the user is already logged in
        cy.visit('/profile');
        cy.url().should('include', '/profile');
        cy.contains('User  Profile'); // Check for a profile message
    });
});