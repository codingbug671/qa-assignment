export default class RegisterPage {


    getCreateAccountBtn() {
        return 'ul.header.links li:nth-child(3)';
    }

    getFirstNameInput() {
        return 'input[id="firstname"]';
    }


    getLastNameInput() {
        return 'input[id="lastname"]';
    }

    getEmailIDInput()
    {
        return 'input[id="email_address"]';
    }

    getPasswordInput() {
        return 'input[id="password"]';
    }

    getConfirmPasswordInput() {
        return 'input[id="password-confirmation"]';
    }

    getCreateAccBtn() {
        return 'button[class="action submit primary"]';
    }

    getGreetingLabel() {
        return 'li[class="greet welcome"] span';
    }


    visitLunaStore() {
        cy.visit("https://magento.softwaretestingboard.com/");
    
    }

    getCustomerMenuDropdown()
    {
        return 'button[class="action switch"]';
    }

    getSignOutBtn()
    {
        return 'ul[class="header links"] li[class="authorization-link"]';
    }



    registerNewUser() {
    cy.log('Create a new user');
    cy.get(this.getCreateAccountBtn()).first().click();

    cy.fixture('users').then((users) => {
        users.forEach((user) => {
            cy.log('Filling in the registration form');
            const fullName = `${user.firstname} ${user.lastname}`;

            cy.get(this.getFirstNameInput()).type(user.firstname);
            cy.get(this.getLastNameInput()).type(user.lastname);
            cy.get(this.getEmailIDInput()).type(user.email);
            cy.get(this.getPasswordInput()).type(user.password);
            cy.get(this.getConfirmPasswordInput()).type(user.password);
            cy.get(this.getCreateAccBtn()).click();

            cy.get(this.getGreetingLabel()).first().should('have.text', `Welcome, ${fullName}!`).then(() => {
                cy.log('User successfully logged in after registration');
             
            });
        });
    });

   
}


    
    signOutUser()
    {
        cy.log('Signout User');
        cy.get(this.getCustomerMenuDropdown()).first().click();
        cy.get(this.getSignOutBtn()).first().click();


    }
   




}