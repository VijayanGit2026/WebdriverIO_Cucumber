const { $, $$ } = require('@wdio/globals');

class CartPage {
    get pageTitle() {
        return $('[data-test="title"]');
    }

    get cartItems() {
        return $$('.cart_item');
    }

    get backpackItem() {
        return $('[data-test="inventory-item-name"]');
    }

    get removeBackpackButton() {
        return $('[data-test="remove-sauce-labs-backpack"]');
    }

    get checkoutButton() {
        return $('[data-test="checkout"]');
    }

    async getItemCount() {
        return (await this.cartItems).length;
    }

    async removeBackpack() {
        await this.removeBackpackButton.waitForClickable();
        await this.removeBackpackButton.click();
    }

    async checkout() {
        await this.checkoutButton.waitForClickable();
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();
