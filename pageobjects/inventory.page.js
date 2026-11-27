const { $ } = require('@wdio/globals');

class InventoryPage {
    get pageTitle() { return $('[data-test="title"]'); }
    get shoppingCartLink() { return $('[data-test="shopping-cart-link"]'); }
    get cartBadge() { return $('[data-test="shopping-cart-badge"]'); }
    get inventoryItems() { return $$('.inventory_item'); }

    addBackpackToCartButton() {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addBackpackToCart() {
        await this.addBackpackToCartButton().click();
    }

    async openCart() {
        await this.shoppingCartLink.click();
    }

    async getCartCount() {
        return this.cartBadge.getText();
    }
}

module.exports = new InventoryPage();
