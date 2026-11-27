const { Before, After } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');
const checkoutInformationPage = require('../pageobjects/checkout-information.page');
const checkoutOverviewPage = require('../pageobjects/checkout-overview.page');
const checkoutCompletePage = require('../pageobjects/checkout-complete.page');

Before(function () {
    // Scenario-scoped references keep step definitions readable.
    this.loginPage = loginPage;
    this.inventoryPage = inventoryPage;
    this.cartPage = cartPage;
    this.checkoutInformationPage = checkoutInformationPage;
    this.checkoutOverviewPage = checkoutOverviewPage;
    this.checkoutCompletePage = checkoutCompletePage;
});

After(async function (scenario) {
    if (scenario.result && scenario.result.status === 'FAILED') {
        const screenshot = await browser.takeScreenshot();
        await this.attach(Buffer.from(screenshot, 'base64'), 'image/png');
    }
});
