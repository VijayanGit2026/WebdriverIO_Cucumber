
@regression
Feature: SauceDemo shopping and checkout
  As a logged-in shopper
  I want to add a product to my cart and complete checkout
  So that I can place an order and generate an order PDF

  Background:
    Given I am logged in as the "standard" user

  @smoke @e2e
  Scenario: Purchase the Sauce Labs Backpack
    When I add the Sauce Labs Backpack to the cart
    And I open the shopping cart
    Then the cart should contain 1 item
    And the cart should contain the Sauce Labs Backpack
    When I proceed to checkout
    And I enter checkout details "Charu" "QA" "560001"
    And I continue to the order overview
    Then the order overview should show the Sauce Labs Backpack
    When I finish the order
    Then I should see the order confirmation "Thank you for your order!"

  @regression @pdf
  Scenario: Generate PDF order after successful checkout
    When I add the Sauce Labs Backpack to the cart
    And I open the shopping cart
    And I proceed to checkout
    And I enter checkout details "Vijayan" "QA" "602002"
    And I continue to the order overview
    When I finish the order
    Then I should see the order confirmation "Thank you for your order!"
    And the Generate PDF order button should be displayed
    When I click the Generate PDF order button
    Then the order PDF should be downloaded successfully

  @regression
  Scenario: Remove a product from the shopping cart
    When I add the Sauce Labs Backpack to the cart
    And I open the shopping cart
    Then the cart should contain 1 item
    When I remove the Sauce Labs Backpack from the cart
    Then the cart should be empty
