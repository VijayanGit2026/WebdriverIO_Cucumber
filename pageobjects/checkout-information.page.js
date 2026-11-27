const { $ } = require('@wdio/globals');

class CheckoutInformationPage {
    get pageTitle() { return $('[data-test="title"]'); }
    get firstNameInput() { return $('[data-test="firstName"]'); }
    get lastNameInput() { return $('[data-test="lastName"]'); }
    get postalCodeInput() { return $('[data-test="postalCode"]'); }
    get continueButton() { return $('[data-test="continue"]'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async enterCustomerInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}

module.exports = new CheckoutInformationPage();
