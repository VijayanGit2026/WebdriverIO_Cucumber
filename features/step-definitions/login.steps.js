const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");
const users = require("../../test-data/users");

Given("I am on the SauceDemo login page", async function () {
  await this.loginPage.open();
});

When("I log in as the {string} user", async function (userType) {
  const user = users[userType];

  if (!user) {
    throw new Error(`Unknown test user key: ${userType}`);
  }

  await this.loginPage.login(user.username, user.password);
});

When(
  "I log in with username {string} and password {string}",
  async function (username, password) {
    await this.loginPage.login(username, password);
  },
);

When(
  "I submit the login form with username {string} and password {string}",
  async function (username, password) {
    await this.loginPage.login(username, password);
  },
);

Then("the products page should be displayed", async function () {
  await expect(this.inventoryPage.pageTitle).toBeDisplayed();
  await expect(this.inventoryPage.pageTitle).toHaveText("Products");
});

Then("I should see the login error {string}", async function (expectedMessage) {
  const actualMessage = await this.loginPage.getErrorMessage();

  await expect(actualMessage).toContain(expectedMessage);
});
