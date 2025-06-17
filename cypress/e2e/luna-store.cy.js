/// <reference types="cypress" />

import RegisterPage from "../support/PO/RegisterPO";
import SignInPage from "../support/PO/SignInPO";
import ProductsPage from "../support/PO/ProductsPO";
import ShippingPage from "../support/PO/ShippingPO";

const registerPage = new RegisterPage();
const signInPage = new SignInPage();
const productPage = new ProductsPage();
const shippingPage = new ShippingPage();

describe('Luna Store - Test Cases A to D', () => {

  before(() => {
    cy.viewport('macbook-15');
  });

  it('A: Register and Login', () => {
    registerPage.visitLunaStore();
    registerPage.registerNewUser();
    registerPage.signOutUser();
    signInPage.signInUser();
  });

  it('B: Add Multiple Products and Place Order', () => {
    productPage.searchProduct("watch");
    productPage.addMultipleProductsToCart();
    productPage.verifyCartTotal();
    productPage.proceedToCheckout();
    shippingPage.addShippingDetailsAndPlaceOrder();
  });

  it('C: Add to Wishlist and Checkout from Wishlist', () => {
    productPage.searchProduct("watch");
    productPage.addItemToWishlistAndCheckout();
  });

  it('D: Search and Validate Results', () => {
    productPage.searchProductAndValidateResults();
  });

});
