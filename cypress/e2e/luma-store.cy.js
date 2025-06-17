/// <reference types="cypress" />

import RegisterPage from "../support/PO/RegisterPO";
import SignInPage from "../support/PO/SignInPO";
import ProductsPage from "../support/PO/ProductsPO";
import ShippingPage from "../support/PO/ShippingPO";

const registerPage = new RegisterPage();
const signInPage = new SignInPage();
const productPage = new ProductsPage();
const shippingPage = new ShippingPage();

describe('Luma Store - Test Cases', () => {

  before(() => {
    cy.viewport('macbook-15');

  });

  it('Register and Login', () => {
    const email = registerPage.generateRandomEmail();
    registerPage.visitLunaStore();
    registerPage.registerNewUser(email);
    registerPage.signOutUser();
    signInPage.signInUser(email);
  });

  it('Add Multiple Products and Place Order', () => {
    productPage.searchProduct("watch");
    productPage.addMultipleProductsToCart();
    productPage.verifyCartTotal();
    productPage.proceedToCheckout();
    shippingPage.addShippingDetailsAndPlaceOrder();
  });

  it('Add Item to Wishlist and Checkout from Wishlist', () => {
    productPage.searchProduct("watch");
    productPage.addItemToWishlistAndCheckout();
  });

  it('Search a Product and Validate Results', () => {
    productPage.searchProductAndValidateResults();
    registerPage.signOutUser();
  });

});
