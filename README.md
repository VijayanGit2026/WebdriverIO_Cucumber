# SauceDemo UI Automation – WebdriverIO + JavaScript + Cucumber

A practical UI automation framework developed using **WebdriverIO 9, JavaScript, Cucumber BDD, Page Object Model (POM), and Allure Reporting**.

> **Disclaimer:** This is an independent training project that uses the publicly available SauceDemo demo application. It does not contain employer source code, banking data, confidential information, internal URLs, or company credentials. It is intended for learning and practice only and must not be used for testing production banking applications.

## 1. Project Overview

This framework automates the complete shopping workflow of the SauceDemo application, including login, product selection, shopping cart management, checkout, and order confirmation.

### Test Scenarios Covered

- Login with valid credentials
- Login with a locked-out account
- Login with an invalid password
- Login without entering a username
- Add Sauce Labs Backpack to the shopping cart
- Verify shopping cart contents
- Enter checkout information
- Verify checkout overview
- Complete an order and verify confirmation
- Remove an item from the shopping cart
- Capture failure screenshots and generate Allure reports

## 2. Technology Stack

| Technology              | Purpose                               |
| ----------------------- | ------------------------------------- |
| Node.js                 | JavaScript runtime environment        |
| npm                     | Package and dependency management     |
| NVM                     | Node.js version management            |
| WebdriverIO 9           | Browser automation framework          |
| JavaScript              | Programming language                  |
| Cucumber / Gherkin      | Behavior-Driven Development (BDD)     |
| Page Object Model (POM) | Automation framework design pattern   |
| WebdriverIO Assertions  | Test validation and assertions        |
| Allure Reporting        | Test execution reporting              |
| Git                     | Version control                       |
| GitHub                  | Source code hosting and collaboration |

## 3. Prerequisites

Install the following software before executing the project:

- Node.js LTS (Node.js 20+ recommended for this sample)
- npm
- NVM for Windows (optional, for managing Node.js versions)
- Google Chrome
- Visual Studio Code
- Git

**Note:** Use company-approved software installations, package registries, and development tools when working in restricted enterprise environments.

## 4. GitHub Repository

**Repository URL:**

https://github.com/VijayanGit2026/WebdriverIO_Cucumber

### Clone the Repository

Open VS Code Terminal or Windows PowerShell and execute:

```powershell
git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git
```

Navigate to the project directory:

```powershell
cd SauceDemo_WebdriverIO_Cucumber
```

## VS Code Extensions

Install the following extensions in Visual Studio Code to make framework development easier.

| Extension                       | Purpose                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------- | --- |
| Cucumber (Gherkin) Full Support | Gherkin syntax highlighting, autocomplete and step navigation in `.feature` files |
| Prettier - Code formatter       | Formats JavaScript code consistently                                              |
| ESLint                          | Identifies JavaScript coding issues

### Installation

1. Open Visual Studio Code.
2. Select the Extensions icon in the left sidebar.
3. Search for each extension by its name.
4. Click **Install**.
5. Restart VS Code if necessary.

**Important:** These are recommended editor extensions. They are not npm dependencies and do not need to be installed using `npm install`.

## 5. Installation and Setup

### Step 1: Install and Select Node.js Version

If NVM is installed, execute:

```powershell
nvm install 22
nvm use 22
```

Verify the Node.js and npm installations:

```powershell
node -v
npm -v
```

### Step 2: Install Project Dependencies

Navigate to the project root directory and execute:

```powershell
npm install
```

Alternatively, if a valid `package-lock.json` is available in the repository, use:

```powershell
npm ci
```

This installs the dependencies specified in the project configuration.

### Step 3: Configure Environment Variables (Optional)

Create a local `.env` file using the provided example file.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**macOS / Linux:**

```bash
cp .env.example .env
```

Update environment-specific configuration values if required.

**Security:** Never commit private credentials, access tokens, or sensitive environment variables to GitHub.

## 6. Execute Automation Tests

### Run All Test Scenarios

```powershell
npm test
```

### Run Smoke Tests

```powershell
npm run test:smoke
```

### Run Regression Tests

```powershell
npm run test:regression
```

### Execute Individual Feature Files

**Login Feature:**

```powershell
npm run test:login
```

**Checkout Feature:**

```powershell
npm run test:checkout
```

### Execute Tests in Headless Mode

**Windows PowerShell:**

```powershell
$env:HEADLESS="true"
npm test
```

To disable headless execution:

```powershell
Remove-Item Env:HEADLESS
```

**macOS / Linux:**

```bash
HEADLESS=true npm test
```

## 7. Order PDF Downloads

The checkout PDF scenario saves generated order PDFs inside the project-local folder:

```text
pdf_download/
```

The Chrome download directory is configured in `wdio.conf.js` to use this folder. After the browser download completes, the test checks the PDF header and renames the file with a local timestamp, for example:

```text
pdf_download/order_2026-11-27_14-30-15.pdf
```

Generated PDFs and Chrome partial-download files (`.crdownload`) are excluded from Git by `.gitignore`. The folder itself is retained through `.gitkeep`.

Run the checkout feature:

```powershell
npm run test:checkout
```

The terminal prints the final PDF filename, full project-local path, and file size when verification succeeds. A failed download reports the expected folder and its contents.

## 8. Allure Reporting

The framework integrates Allure Reporting to generate detailed test execution reports.

After test execution, generate the report:

```powershell
npm run report:allure
```

Open the generated report:

```powershell
npm run report:open
```

### Report Features

- Passed and failed test scenarios
- Test execution details
- Execution duration
- Cucumber step information
- Screenshots and failure attachments, where captured
- Detailed test execution results

## 9. Project Structure

```text
SauceDemo_WebdriverIO_Cucumber/
│
├── .github/
│   └── workflows/                  # CI workflow examples
│
├── docs/                           # Project documentation
│   ├── charu-learning-path.md
│   ├── jfrog-npm-setup.md
│   └── qtest-test-case-mapping.md
│
├── features/
│   ├── login.feature               # Login test scenarios
│   ├── checkout.feature            # Checkout test scenarios
│   │
│   └── step-definitions/
│       ├── login.steps.js
│       └── checkout.steps.js
│
├── pageobjects/                    # Page Object Model classes
│
├── support/
│   └── hooks.js                    # Cucumber hooks
│
├── test-data/                      # Public demo test data
│
├── .env.example                    # Environment configuration template
├── .gitignore                      # Git ignored files
├── LICENSE
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file, if committed
├── README.md                       # Project documentation
└── wdio.conf.js                    # WebdriverIO configuration
```

## 10. qTest Integration – Test Management

The automation scenarios can be mapped to qTest test cases for test management, execution tracking, and test coverage.

Refer to:

`docs/qtest-test-case-mapping.md`

This project provides example test-case mapping documentation. It does not currently integrate directly with qTest APIs or automatically upload test execution results.

For actual project implementation, follow the organization's approved qTest configuration and integration procedures.

## 11. JFrog Integration – Package Management

Refer to:

`docs/jfrog-npm-setup.md`

This document explains the relationship between npm package management and JFrog Artifactory.

The sample project does not contain a private JFrog registry URL, credentials, or an active Artifactory integration.

Never commit JFrog access tokens or private registry credentials to GitHub.

## 12. Project Limitations

- The framework currently focuses on browser-based automation using WebdriverIO.
- Native mobile application automation using Appium and Perfecto is not included.
- Database validation using MySQL or PostgreSQL is not implemented.
- qTest API integration and automated test-result uploads are not implemented.
- JFrog Artifactory integration is documented but not configured.
- Google Chrome is required for the current browser configuration.
- WebdriverIO 9 supports automatic local browser-driver management in supported configurations. Restricted environments may require organization-approved browser and driver infrastructure.

## 13. Public SauceDemo Test Credentials

The project uses publicly available SauceDemo training accounts.

| Username          | Password       | Expected Behaviour |
| ----------------- | -------------- | ------------------ |
| `standard_user`   | `secret_sauce` | Successful login   |
| `locked_out_user` | `secret_sauce` | Login blocked      |

These are public demonstration credentials and must not be confused with real customer or banking credentials.

**Demo Application:**

https://www.saucedemo.com/

## 14. Learning Resources

The `docs` directory contains additional project-specific learning material.

Recommended learning sequence:

1. `docs/charu-learning-path.md` – WebdriverIO learning roadmap
2. `docs/qtest-test-case-mapping.md` – qTest test-case mapping examples
3. `docs/jfrog-npm-setup.md` – npm and JFrog configuration guidance

### Official Documentation

- [WebdriverIO Documentation](https://webdriver.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [JavaScript – MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Allure Reporting Documentation](https://allurereport.org/)

---

## Project Maintainer

**Vijayan**

**GitHub:** https://github.com/VijayanGit2026

**Repository:** SauceDemo_WebdriverIO_Cucumber

**Technology:** WebdriverIO 9 | JavaScript | Cucumber BDD | POM | Allure Reporting

**Purpose:** Practical QA Automation Framework Learning and Implementation.
