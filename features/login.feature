
@regression
Feature: SauceDemo login
  As a shopper
  I want to log in to SauceDemo
  So that I can view products and place an order

  Background:
    Given I am on the SauceDemo login page

  @smoke @positive
  Scenario: Login with valid credentials
    When I log in as the "standard" user
    Then the products page should be displayed

  @negative
  Scenario: Login with a locked-out account
    When I log in as the "lockedOut" user
    Then I should see the login error "Sorry, this user has been locked out."

  @negative
  Scenario: Login with an invalid password
    When I log in with username "standard_user" and password "wrong_password"
    Then I should see the login error "Username and password do not match any user in this service"

  @negative
  Scenario: Login without entering a username
    When I submit the login form with username "" and password "secret_sauce"
    Then I should see the login error "Username is required"
