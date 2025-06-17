export default class ShippingPage {


    getStreetAddressInput() {
        return 'input[name="street[0]"]';
    }

    getCityInput() {
        return 'input[name="city"]';
    }


    getStateInput() {
        return 'select[name="region_id"]';
    }

    getStateOption()
    {
        return 'option[data-title="Alabama"]';
    }

    getZipCodeInput() {
        return 'input[name="postcode"]';
    }

    getPhoneNoInput() {
        return 'input[name="telephone"]';
    }

    getShippingMethodBtn() {
        return 'input[type="radio"]';
    }

    getNextBtn() {
        return 'button[class="button action continue primary"]';
    }

      getCheckoutBtn() {
        return 'button[class="action primary checkout"]';
    }

     getPurchaseMessage()
     {
        return 'span[data-ui-id="page-title-wrapper"]'
     }


    
   addShippingDetailsAndPlaceOrder() {
    cy.log('Add shipping details and place order');
   
    cy.fixture('users').then((users) => {
        users.forEach((user) => {
            cy.log('Filling in the shipping details form');
            cy.customWait();
            cy.get(this.getStreetAddressInput()).type(user.streetaddress);
            cy.get(this.getCityInput()).type(user.city);
            cy.get(this.getStateInput()).select('Alabama');
            cy.get(this.getZipCodeInput()).type(user.zipcode);
            cy.get(this.getPhoneNoInput()).type(user.phoneno);
            cy.get(this.getShippingMethodBtn()).first().click();
            cy.get(this.getNextBtn()).click();
            cy.get(this.getCheckoutBtn()).click();
            cy.get(this.getPurchaseMessage())
                .should('be.visible')
                .and('contain.text', 'Thank you for your purchase!');

        });
    });
   }


   




}