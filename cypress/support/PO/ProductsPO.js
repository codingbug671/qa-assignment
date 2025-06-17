export default class ProductsPage {


    getProductSearchBar() {
        return 'input[id="search"]';
    }

    getAddToCartBtn() {
        return 'button[title="Add to Cart"]';
    }

    getWishlistItemToCartBtn() {
        return 'button[title="Add All to Cart"]';
    }
 
    getWishListBtn()
    {
        return 'a[class="action towishlist"]';
    }


    getItemInCart() {
        return 'span[class="counter-number"]';
    }

    getProductItems() {
        return 'ol[class="products list items product-items"]';
    }

    getProductItemsList() {
        return 'li[class="item product product-item"]';
    }

    getCheckoutBtn()
    {
        return 'button[id="top-cart-btn-checkout"]';
    }

    getCartItemPrices() {
        return 'div[class="product-item-pricing"] span[class="price"]';
    }

    getCartTotalPrice() {
        return 'div[class="amount price-container"] span[class="price"]';
    }

    getCreateAccBtn() {
        return 'button[class="action submit primary"]';
    }

    getGreetingLabel() {
        return 'li[class="greet welcome"] span';
    }

    getLogoBtn()
    {
        return 'a[class="logo"]';
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
        return 'li[class="authorization-link"]';
    }

    getSearchResults()
    {
        return 'li[class="item product product-item"] a[class="product-item-link"]';
    }



    
    searchProduct(productname)
    {
        cy.log('Search a Product');
        cy.get(this.getProductSearchBar()).type(productname+"{enter}");
        cy.customWait();

    }
   

    addMultipleProductsToCart()
    {
        cy.log('add Multiple Products to Cart');
        for (let i = 0; i < 3; i++) {
         cy.get(this.getAddToCartBtn()).eq(i).trigger('mouseover', { force: true });
         cy.get(this.getAddToCartBtn()).eq(i).click({ force: true });
         cy.customWait();
        }

        cy.customWait();


    }



    proceedToCheckout()
    {
        cy.log('Go to checkout');
        cy.get(this.getCheckoutBtn()).click({ force: true });
        cy.customWait();
    }


    parsePriceToCents(priceStr) {
    return Math.round(parseFloat(priceStr.replace('$', '')) * 100);
    }

    verifyCartTotal() {
   
    let sumCents = 0;

    cy.get(this.getItemInCart()).click();
    cy.get(this.getCartItemPrices())
      .each(($el) => {
        const priceText = $el.text().trim();
        sumCents += this.parsePriceToCents(priceText);
      })
      .then(() => {
        cy.get(this.getCartTotalPrice()).invoke('text').then(totalText => {
          const totalCents = this.parsePriceToCents(totalText.trim());
          expect(sumCents).to.equal(totalCents);
        });
      });
  }

    addItemToWishlistAndCheckout()
    {
        cy.log('add Items to wishlist and proceed to checkout');
        cy.get(this.getWishListBtn()).eq(0).trigger('mouseover', { force: true });
        cy.get(this.getWishListBtn()).eq(0).click({ force: true });
        cy.customWait();
        cy.get(this.getWishlistItemToCartBtn()).click();
        cy.get(this.getItemInCart()).click();
        cy.customWait();
        this.proceedToCheckout();
        
    }

    searchProductAndValidateResults() {
    cy.get(this.getLogoBtn()).click();
    cy.fixture('searchTerm').then((data) => {
      cy.get(this.getProductSearchBar()).type(`${data.searchTerm}{enter}`);
      cy.get(this.getProductItems()).should('exist');
      cy.get(this.getProductItemsList()).its('length').should('be.gt', 0);
      cy.get(this.getSearchResults()).each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
          expect(text.toLowerCase()).to.include(data.searchTerm.toLowerCase());
        });
      });
    });
  }

    



   




}