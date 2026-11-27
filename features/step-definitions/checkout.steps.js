const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const fs = require('fs');
const path = require('path');
const users = require('../../test-data/users');

// Always resolve to the project root, regardless of the terminal's working directory.
const downloadDir = path.resolve(__dirname, '../../pdf_download');

function ensureDownloadDirectory() {
    fs.mkdirSync(downloadDir, { recursive: true });
}

function timestampForFilename(date = new Date()) {
    const datePart = [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');

    const timePart = [
        String(date.getHours()).padStart(2, '0'),
        String(date.getMinutes()).padStart(2, '0'),
        String(date.getSeconds()).padStart(2, '0')
    ].join('-');

    return `${datePart}_${timePart}`;
}

// Login
Given('I am logged in as the {string} user', async function (userType) {
    const user = users[userType];

    if (!user) {
        throw new Error(`Unknown test user key: ${userType}`);
    }

    await this.loginPage.open();
    await this.loginPage.login(user.username, user.password);
    await expect(this.inventoryPage.pageTitle).toHaveText('Products');
});

// Inventory
When('I add the Sauce Labs Backpack to the cart', async function () {
    await this.inventoryPage.addBackpackToCart();
});

When('I open the shopping cart', async function () {
    await this.inventoryPage.openCart();
});

// Shopping cart
Then('the cart should contain {int} item', async function (expectedCount) {
    await expect(this.cartPage.pageTitle).toHaveText('Your Cart');
    await expect(await this.cartPage.getItemCount()).toBe(expectedCount);
});

Then('the cart should contain the Sauce Labs Backpack', async function () {
    await expect(this.cartPage.backpackItem).toHaveText('Sauce Labs Backpack');
});

When('I remove the Sauce Labs Backpack from the cart', async function () {
    await this.cartPage.removeBackpack();
});

Then('the cart should be empty', async function () {
    await expect(this.cartPage.cartItems).toBeElementsArrayOfSize(0);
});

// Checkout information
When('I proceed to checkout', async function () {
    await this.cartPage.checkout();
    await expect(this.checkoutInformationPage.pageTitle)
        .toHaveText('Checkout: Your Information');
});

When(
    'I enter checkout details {string} {string} {string}',
    async function (firstName, lastName, postalCode) {
        await this.checkoutInformationPage.enterCustomerInformation(
            firstName,
            lastName,
            postalCode
        );
    }
);

// Order overview
When('I continue to the order overview', async function () {
    await this.checkoutInformationPage.continueCheckout();
    await expect(this.checkoutOverviewPage.pageTitle)
        .toHaveText('Checkout: Overview');
});

Then('the order overview should show the Sauce Labs Backpack', async function () {
    await expect(this.checkoutOverviewPage.itemNames).toBeElementsArrayOfSize(1);
    await expect(this.checkoutOverviewPage.itemNames[0])
        .toHaveText('Sauce Labs Backpack');
});

// Complete order
When('I finish the order', async function () {
    await this.checkoutOverviewPage.finishOrder();
});

Then('I should see the order confirmation {string}', async function (message) {
    await expect(this.checkoutCompletePage.confirmationHeader).toHaveText(message);
    await expect(this.checkoutCompletePage.confirmationText).toBeDisplayed();
});

// PDF generation
Then('the Generate PDF order button should be displayed', async function () {
    await expect(this.checkoutCompletePage.generatePdfButton).toBeDisplayed();
});

When('I click the Generate PDF order button', async function () {
    ensureDownloadDirectory();

    // Snapshot existing files so an older PDF cannot make this scenario pass.
    this.pdfFilesBeforeClick = new Set(fs.readdirSync(downloadDir));
    this.pdfDownloadStartedAt = Date.now();

    await this.checkoutCompletePage.clickGeneratePdf();
});

Then('the order PDF should be downloaded successfully', async function () {
    ensureDownloadDirectory();

    const timeoutMs = 30000;
    const pollIntervalMs = 500;
    const startedAt = Date.now();
    let downloadedPath;

    console.log(`\n[PDF] Waiting up to ${timeoutMs / 1000}s for a new PDF...`);
    console.log(`[PDF] Target folder: ${downloadDir}`);

    while (Date.now() - startedAt < timeoutMs) {
        const files = fs.readdirSync(downloadDir);

        // Chrome uses .crdownload while a file is still being written.
        const downloadInProgress = files.some(file => file.toLowerCase().endsWith('.crdownload'));

        const candidates = files
            .filter(file => file.toLowerCase().endsWith('.pdf'))
            .filter(file => !this.pdfFilesBeforeClick?.has(file))
            .map(file => ({
                file,
                fullPath: path.join(downloadDir, file),
                modifiedAt: fs.statSync(path.join(downloadDir, file)).mtimeMs
            }))
            .filter(item => item.modifiedAt >= (this.pdfDownloadStartedAt || startedAt))
            .sort((a, b) => b.modifiedAt - a.modifiedAt);

        if (candidates.length > 0 && !downloadInProgress) {
            // Require the file size to remain stable across polling intervals.
            const candidate = candidates[0];
            const firstSize = fs.statSync(candidate.fullPath).size;
            await new Promise(resolve => setTimeout(resolve, 700));

            if (fs.existsSync(candidate.fullPath)) {
                const secondSize = fs.statSync(candidate.fullPath).size;
                const stillDownloading = fs.readdirSync(downloadDir)
                    .some(file => file.toLowerCase().endsWith('.crdownload'));

                if (firstSize === secondSize && secondSize > 0 && !stillDownloading) {
                    downloadedPath = candidate.fullPath;
                    break;
                }
            }
        }

        await new Promise(resolve => setTimeout(resolve, pollIntervalMs));
    }

    if (!downloadedPath) {
        const currentFiles = fs.existsSync(downloadDir) ? fs.readdirSync(downloadDir) : [];
        throw new Error(
            `[PDF] Download failed. No new completed PDF appeared within ${timeoutMs / 1000}s.\n` +
            `Expected folder: ${downloadDir}\n` +
            `Folder contents: ${currentFiles.join(', ') || '(empty)'}\n` +
            'Check that the Generate PDF order button triggers a browser download and that Chrome download preferences are enabled.'
        );
    }

    const pdfBuffer = fs.readFileSync(downloadedPath);
    const hasPdfHeader = pdfBuffer.length >= 5 &&
        pdfBuffer.subarray(0, 5).toString('ascii') === '%PDF-';

    if (!hasPdfHeader) {
        throw new Error(`[PDF] Downloaded file does not have a valid PDF header: ${downloadedPath}`);
    }

    const newFileName = `order_${timestampForFilename()}.pdf`;
    let finalPath = path.join(downloadDir, newFileName);
    let suffix = 1;

    // Avoid overwriting a PDF generated in the same second.
    while (fs.existsSync(finalPath)) {
        finalPath = path.join(downloadDir, `order_${timestampForFilename()}_${suffix}.pdf`);
        suffix += 1;
    }

    fs.renameSync(downloadedPath, finalPath);

    const finalSize = fs.statSync(finalPath).size;

    console.log('\n========== PDF DOWNLOAD VERIFIED ==========');
    console.log(`Status    : SUCCESS`);
    console.log(`File name : ${path.basename(finalPath)}`);
    console.log(`Location  : ${finalPath}`);
    console.log(`File size : ${finalSize} bytes`);
    console.log('PDF check : Valid %PDF- header');
    console.log('============================================\n');
});
