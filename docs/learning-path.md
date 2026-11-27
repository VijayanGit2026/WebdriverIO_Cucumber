WebdriverIO 10 + JavaScript + Cucumber – Learning Path

1. Understand the Framework Architecture
   Before writing automation scripts, understand the purpose of each file and folder.
   File / Folder Purpose
   wdio.conf.js Main configuration for the WebdriverIO runner, browser capabilities, Cucumber integration, hooks and reporters
   features/_.feature Business-readable test scenarios written in Gherkin
   features/step-definitions/_.js Connects Gherkin steps (Given, When, Then) to JavaScript automation code
   pageobjects/\*.js Contains page elements, selectors and reusable page interaction methods
   support/hooks.js Contains Cucumber hooks for setup, teardown and failure screenshot attachments
   test-data/ Stores test data, including public SauceDemo demo account details
   pdf_download/ Stores generated order PDF files after successful checkout
   package.json Defines project dependencies, scripts and package configuration
   package-lock.json Locks dependency versions for consistent installations
   .env.example Provides a template for environment-specific configuration

2. Set Up and Run the Framework Locally
   Follow these steps to configure and execute the project.
3. Install a Node.js version supported by your environment.
4. Use NVM for Windows if permitted by your workstation policy.
5. Install Visual Studio Code and Google Chrome.
6. Install Git.
7. Clone the GitHub repository.
8. Navigate to the project root directory.
9. Switch to the main branch.
10. Copy .env.example to .env only if environment-specific configuration is required.
11. Install dependencies using npm ci.
12. Verify the WebdriverIO installation.
13. Execute automation tests.
14. Review execution results and generated reports.
    GitHub Repository
    https://github.com/VijayanGit2026/WebdriverIO_Cucumber
    Fresh Clone Commands
    Open PowerShell and choose a folder where you want to keep the project. For example:
    cd "$HOME\Documents"

git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

cd ".\WebdriverIO_Cucumber"

git switch main
git pull origin main
Verify the current branch and repository status:
git branch
git status
git log -3 --oneline
The active branch should be main.
Install Project Dependencies
npm ci
Verify WebdriverIO
npx wdio --version
Expected version:
10.2.0
Useful Execution Commands
Check Node.js and npm versions:
node -v
npm -v
Check dependency security:
npm audit
Run all test scenarios:
npm test
Run login scenarios:
npm run test:login
Run checkout scenarios:
npm run test:checkout
Run smoke tests:
npm run test:smoke
Run regression tests:
npm run test:regression
Generate the Allure report:
npm run report:allure
Open the Allure report:
npm run report:open 3. Learn WebdriverIO and Cucumber in This Order
Follow this sequence to build your knowledge progressively.
Phase 1: JavaScript and Environment Setup

1. Node.js fundamentals
2. npm and package management
3. NVM and Node.js version management
4. JavaScript fundamentals
5. Variables, functions, objects and arrays
6. Promises and async/await
   Install and Understand VS Code Extensions
   Install and explore these extensions:

7. Cucumber (Gherkin) Full Support

- Provides syntax highlighting for .feature files.
- Helps identify Gherkin keywords such as Feature, Scenario, Given, When and Then.
- Helps navigate between feature steps and step definitions.

2. Prettier

- Formats JavaScript files.
- Keeps indentation and code formatting consistent.

3. ESLint

- Identifies potential JavaScript errors and coding issues.
  Practice exercise:
- Open login.feature.
- Verify that Gherkin keywords are highlighted.
- Open login.steps.js.
- Navigate between a feature step and its corresponding step definition.
- Format the JavaScript file using Prettier.
  Learning outcome: Understand how VS Code extensions improve the development and debugging experience.
  Phase 2: WebdriverIO Fundamentals

7. WebdriverIO 10 installation and project configuration
8. Understanding wdio.conf.js
9. Browser sessions and browser commands
10. Element selectors using $() and $$()
11. Element interactions:
    - click()
    - setValue()
    - getText()
    - getAttribute()
12. Wait commands:
    - waitForDisplayed()
    - waitForClickable()
    - waitForExist()
13. WebdriverIO assertions using expect()
14. Browser navigation and window handling
    Phase 3: Cucumber and BDD
15. Understanding Behavior-Driven Development (BDD)
16. Gherkin syntax and keywords:
    - Feature
    - Scenario
    - Given
    - When
    - Then
    - And
    - Background
    - Scenario Outline
    - Examples
17. Creating Cucumber feature files
18. Writing JavaScript step definitions
19. Understanding step matching and parameters
20. Cucumber hooks:
    - Before
    - After
    - BeforeStep
    - AfterStep
21. Scenario context and Cucumber World (this)
22. Tags and selective scenario execution
    Phase 4: Framework Development
23. Page Object Model (POM)
24. Reusable page methods and element selectors
25. Test data management
26. Environment configuration
27. Handling positive and negative test scenarios
28. Framework debugging and exception handling
29. Parallel test execution
30. Test retries and execution control
    Phase 5: Reporting and Integration
31. Allure reporter configuration
32. Generating HTML execution reports
33. Capturing screenshots on test failures
34. Understanding test execution logs
35. Git and GitHub version control
36. Understanding npm package management and JFrog Artifactory
37. Understanding qTest test management and test-case mapping
38. CI/CD pipeline execution concepts
39. Understand the Automation Execution Flow
    Learn how a test moves through the framework from the feature file to browser execution.
    Feature File (.feature)
    |
    v
    Cucumber BDD Runner
    |
    v
    Step Definitions (.js)
    |
    v
    Page Object Classes
    |
    v
    WebdriverIO Commands
    |
    v
    Browser Application
    |
    v
    Assertions and Validation
    |
    v
    Cucumber Hooks and Reporting
    |
    v
    Allure Execution Report
    Example
    A banking login scenario:
    Feature: Banking Application Login

Scenario: Login with valid credentials
Given the customer opens the banking application
When the customer enters a valid username
And the customer enters a valid password
And the customer clicks the login button
Then the customer should see the account dashboard
The execution process:

1. Cucumber reads the feature file.
2. It identifies the corresponding step definitions.
3. Step definitions invoke reusable page-object methods.
4. WebdriverIO interacts with browser elements.
5. Assertions validate the expected results.
6. Cucumber hooks perform the configured teardown and screenshot handling.
7. Allure collects and displays the execution results.
8. Practical Exercises
   Use the SauceDemo application to practise the following functional areas.
   Exercise Functional area
   1 Successful login
   2 Invalid username and password
   3 Locked-out user validation
   4 Product selection
   5 Add product to shopping cart
   6 Remove product from shopping cart
   7 Verify cart contents
   8 Enter checkout information
   9 Verify checkout overview
   10 Complete order and validate confirmation
   11 Generate order PDF after checkout
   12 Verify the downloaded PDF file

The PDF download and file-header check are part of the checkout workflow; they are not separate Cucumber scenarios unless implemented as separate scenarios in the feature file.

Try implementing each exercise using feature files, step definitions and page objects. Compare your implementation with the existing framework. 6. Important Learning Guidelines

- Understand the existing framework architecture before making changes.
- Follow consistent naming conventions for feature files, step definitions and page objects.
- Keep locators and reusable browser interactions inside page objects.
- Keep business-readable scenarios inside feature files.
- Avoid hardcoding sensitive credentials in automation scripts.
- Use appropriate assertions to validate actual and expected results.
- Reuse common methods instead of duplicating automation code.
- Review execution logs and screenshots when tests fail.
- Maintain dependencies using the approved package registry.
- Use npm ci for clean installations from the committed lockfile.
- Review dependency changes and security advisories before updating packages.
- Follow your organization's security policies when working in restricted environments.

7. Official Learning Resources

- WebdriverIO Documentation
- WebdriverIO Getting Started
- WebdriverIO Frameworks
- Cucumber Documentation
- Gherkin Reference
- JavaScript – MDN
- Allure Reporting
  Learning Objective
  Build a strong understanding of WebdriverIO 10, JavaScript, Cucumber BDD and Page Object Model by implementing and executing a complete UI automation framework.

The objective is to understand not only how to write automation scripts, but also how to maintain, debug, execute and report automated test cases in a real-world QA environment.

The learner should be able to independently clone the repository, install dependencies, execute individual test suites, run the complete framework, troubleshoot failures and review Allure reports.
