const { $ } = require('@wdio/globals');

class CheckoutOverviewPage {
    get pageTitle() { return $('[data-test="title"]'); }
    get itemNames() { return $$('.inventory_item_name'); }
    get finishButton() { return $('[data-test="finish"]'); }
    get cancelButton() { return $('[data-test="cancel"]'); }
    get summarySubtotal() { return $('[data-test="subtotal-label"]'); }
    get summaryTax() { return $('[data-test="tax-label"]'); }
    get summaryTotal() { return $('[data-test="total-label"]'); }

    async finishOrder() {
        await this.finishButton.click();
    }
}

module.exports = new CheckoutOverviewPage();
