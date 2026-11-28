# WebdriverIO 10 + JavaScript + Cucumber – Learning Path

## 1. Understand the Framework Architecture

Before writing automation scripts, understand the purpose of each file and folder.

| File / Folder                    | Purpose                                                                                  |
|:---------------------------------|:-----------------------------------------------------------------------------------------|
| `wdio.conf.js`                   | Main configuration for WDIO runner, browser capabilities, Cucumber, hooks and reporters. |
| `features/*.feature`             | Contains business-readable test scenarios written in Gherkin syntax.                     |
| `features/step-definitions/*.js` | Connects Gherkin steps (Given, When, Then) to JavaScript automation code.                |
| `pageobjects/*.js`               | Contains page elements, selectors and reusable page interaction methods.                |
| `support/hooks.js`               | Contains Cucumber hooks for setup, teardown and failure screenshot attachments.         |
| `test-data/`                     | Stores test data, including public SauceDemo demo account details.                       |
| `pdf_download/`                  | Stores generated order PDF files after successful checkout.                              |
| `package.json`                   | Defines project dependencies, scripts and package configuration.                         |
| `package-lock.json`              | Locks dependency versions for consistent installations.                                  |
| `.env.example`                   | Provides a template for environment-specific configuration.                              |

## 2. Set Up and Run the Framework Locally

Follow these steps to configure and execute the project.

1. Install the Node.js version approved for your environment.
2. Use NVM for Windows if permitted by your workstation policy.
3. Install Visual Studio Code and Google Chrome.
4. Install Git.
5. Clone the GitHub repository.
6. Navigate to the project root directory.
7. Switch to the `upgrade/webdriverio-10` branch.
8. Copy `.env.example` to `.env` if environment-specific configuration is required.
9. Install dependencies using `npm ci`.
10. Verify the WebdriverIO installation.
11. Execute automation tests.
12. Review execution results and generated reports.

### GitHub Repository

https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

### Fresh Clone Commands

```powershell
cd "D:\Automation\Playwright"

git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

cd "WebdriverIO_Cucumber"

git fetch origin

git switch --track origin/upgrade/webdriverio-10
```

### Install Project Dependencies

```powershell
npm ci
```

### Verify WebdriverIO

```powershell
npx wdio --version
```

Expected version:

```text
10.2.0
```

### Useful Execution Commands

Check Node.js and npm versions:

```powershell
node -v
npm -v
```

Check security audit:

```powershell
npm audit
```

Run all test scenarios:

```powershell
npm test
```

Run login scenarios:

```powershell
npm run test:login
```

Run checkout scenarios:

```powershell
npm run test:checkout
```

Run smoke tests:

```powershell
npm run test:smoke
```

Run regression tests:

```powershell
npm run test:regression
```

Generate the Allure report:

```powershell
npm run report:allure
```

Open the Allure report:

```powershell
npm run report:open
```

## 3. Learn WebdriverIO and Cucumber in This Order

Follow this sequence to build your knowledge progressively.

### Phase 1: JavaScript and Environment Setup

1. Node.js fundamentals
2. npm and package management
3. NVM and Node.js version management
4. JavaScript fundamentals
5. Variables, functions, objects and arrays
6. Promises and async/await

### Install and Understand VS Code Extensions

Install and explore these extensions:

**1. Cucumber (Gherkin) Full Support**

- Provides syntax highlighting for `.feature` files.
- Helps identify Gherkin keywords such as Feature, Scenario, Given, When and Then.
- Helps navigate between feature steps and step definitions.

**2. Prettier**

- Formats JavaScript files.
- Keeps indentation and code formatting consistent.

**3. ESLint**

- Identifies potential JavaScript errors and coding issues.

**Practice exercise:**

- Open `login.feature`.
- Verify that Gherkin keywords are highlighted.
- Open `login.steps.js`.
- Navigate between a feature step and its corresponding step definition.
- Format the JavaScript file using Prettier.

**Learning outcome:** Understand how VS Code extensions improve the development and debugging experience.

### Phase 2: WebdriverIO Fundamentals

7. WebdriverIO 10 installation and project configuration
8. Understanding `wdio.conf.js`
9. Browser session and browser commands
10. Element selectors using `$()` and `$$()`
11. Element interactions:
    - `click()`
    - `setValue()`
    - `getText()`
    - `getAttribute()`
12. Wait commands:
    - `waitForDisplayed()`
    - `waitForClickable()`
    - `waitForExist()`
13. WebdriverIO assertions using `expect()`
14. Browser navigation and window handling

### Phase 3: Cucumber and BDD

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
21. Scenario context and Cucumber World (`this`)
22. Tags and selective scenario execution

### Phase 4: Framework Development

23. Page Object Model (POM)
24. Reusable page methods and element selectors
25. Test data management
26. Environment configuration
27. Handling positive and negative test scenarios
28. Framework debugging and exception handling
29. Parallel test execution
30. Test retries and execution control

### Phase 5: Reporting and Integration

31. Allure reporter configuration
32. Generating HTML execution reports
33. Capturing screenshots on test failures
34. Understanding test execution logs
35. Git and GitHub version control
36. Understanding npm package management and JFrog Artifactory
37. Understanding qTest test management and test-case mapping
38. CI/CD pipeline execution concepts

## 4. Understand the Automation Execution Flow

Learn how a test moves through the framework from the feature file to browser execution.

```text
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
```

### Example

A banking login scenario:

```gherkin
Feature: Banking Application Login

  Scenario: Login with valid credentials
    Given the customer opens the banking application
    When the customer enters a valid username
    And the customer enters a valid password
    And the customer clicks the login button
    Then the customer should see the account dashboard
```

The execution process:

1. Cucumber reads the feature file.
2. It identifies the corresponding step definitions.
3. Step definitions invoke reusable page-object methods.
4. WebdriverIO interacts with browser elements.
5. Assertions validate the expected results.
6. Cucumber hooks perform the configured teardown and screenshot handling.
7. Allure collects and displays the execution results.

## 5. Practical Exercises

Use the SauceDemo application to practise the following scenarios.

| Exercise | Functional Area                          |
|:--------:|:-----------------------------------------|
| 1        | Successful login                         |
| 2        | Invalid username and password            |
| 3        | Locked-out user validation               |
| 4        | Product selection                        |
| 5        | Add product to shopping cart             |
| 6        | Remove product from shopping cart        |
| 7        | Verify cart contents                     |
| 8        | Enter checkout information               |
| 9        | Verify checkout overview                 |
| 10       | Complete order and validate confirmation |
| 11       | Generate order PDF after checkout        |
| 12       | Verify downloaded PDF file               |

Try implementing each scenario independently using feature files, step definitions and page objects.

## 6. Important Learning Guidelines

- Understand the existing framework architecture before making changes.
- Follow consistent naming conventions for feature files, step definitions and page objects.
- Keep locators and reusable browser interactions inside page objects.
- Keep business-readable scenarios inside feature files.
- Avoid hardcoding sensitive credentials in automation scripts.
- Use appropriate assertions to validate actual and expected results.
- Reuse common methods instead of duplicating automation code.
- Review execution logs and screenshots when tests fail.
- Maintain dependencies using the approved package registry.
- Use `npm ci` for clean installations from the committed lockfile.
- Avoid unreviewed dependency overrides and forced dependency downgrades.
- Follow your organization's security policies when working in restricted environments.

## 7. Official Learning Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [WebdriverIO Getting Started](https://webdriver.io/docs/gettingstarted)
- [WebdriverIO Cucumber Integration](https://webdriver.io/docs/frameworks)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [Gherkin Reference](https://cucumber.io/docs/gherkin/)
- [JavaScript – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Allure Reporting](https://allurereport.org/)

---

## Learning Objective

Build a strong understanding of WebdriverIO 10, JavaScript, Cucumber BDD and Page Object Model by implementing and executing a complete UI automation framework.

The objective is to understand not only how to write automation scripts, but also how to maintain, debug, execute and report automated test cases in a real-world QA environment.

The learner should be able to independently clone the repository, install dependencies, execute individual test suites, run the complete framework, troubleshoot failures and review Allure reports.