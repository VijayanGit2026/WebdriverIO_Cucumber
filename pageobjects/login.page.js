const { $ } = require('@wdio/globals');

class LoginPage {
    get usernameInput() { return $('[data-test="username"]'); }
    get passwordInput() { return $('[data-test="password"]'); }
    get loginButton() { return $('[data-test="login-button"]'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async open() {
        await browser.url('/');
    }

    async login(username, password) {
        if (username !== undefined) {
            await this.usernameInput.setValue(username);
        }
        if (password !== undefined) {
            await this.passwordInput.setValue(password);
        }
        await this.loginButton.click();
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed();
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
