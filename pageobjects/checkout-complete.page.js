const { $ } = require('@wdio/globals');

class CheckoutCompletePage {
    get confirmationHeader() {
        return $('[data-test="complete-header"]');
    }

    get confirmationText() {
        return $('[data-test="complete-text"]');
    }

    // Text selector supports the visible button shown on the completion page.
    get generatePdfButton() {
        return $('button*=Generate PDF order');
    }

    async clickGeneratePdf() {
        await this.generatePdfButton.waitForClickable();
        await this.generatePdfButton.click();
    }
}

module.exports = new CheckoutCompletePage();
