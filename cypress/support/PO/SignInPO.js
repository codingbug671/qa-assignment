export default class SignInPage {


    getSignInBtn() {
        return 'ul.header.links li:nth-child(2)';
    }

    getEmailIDInput()
    {
        return 'input[id="email"]';
    }

    getPasswordInput() {
        return 'input[id="pass"]';
    }

    getConfirmPasswordInput() {
        return 'input[id="password-confirmation"]';
    }

    getSigninBtn() {
        return 'button[id="send2"]';
    }

    getGreetingLabel() {
        return 'li[class="greet welcome"] span';
    }


    signInUser() {
    cy.log('Sign In User');
    cy.get(this.getSignInBtn()).first().click();

    cy.fixture('users').then((users) => {
        users.forEach((user) => {
            const fullName = `${user.firstname} ${user.lastname}`;
            cy.get(this.getEmailIDInput()).type(user.email);
            cy.get(this.getPasswordInput()).first().type(user.password);
            cy.get(this.getSigninBtn()).first().click();

            // Assertion for greeting message
             cy.get(this.getGreetingLabel()).first().should('have.text', `Welcome, ${fullName}!`).then(() => {
                cy.log('User successfully signed in');
              //  cy.screenshot('signin-success');

            });
        });
    });


}


    
   
   




}