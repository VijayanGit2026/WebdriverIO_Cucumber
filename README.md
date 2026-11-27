SauceDemo UI Automation – WebdriverIO 10 + JavaScript + Cucumber

1. Project Information
   GitHub Repository:
   https://github.com/VijayanGit2026/WebdriverIO_Cucumber

Default branch: main
WebdriverIO: 10.2.0

Technology stack:

- WebdriverIO 10.2.0
- JavaScript (CommonJS)
- Cucumber BDD / Gherkin
- Page Object Model (POM)
- Node.js and npm
- Google Chrome
- Allure Reporting
- Git and GitHub

2. Prerequisites
   Install the following software:
   Software Purpose
   Node.js 20+ JavaScript runtime
   npm Package management
   NVM for Windows Node.js version management (optional)
   Git Version control
   Google Chrome Browser automation
   Visual Studio Code Code editor

Previously verified environment: Node.js 26.13.0 and npm 11.20.0. Use a Node.js version supported by your organization's environment.
Verify installations
Open PowerShell:
node --version
npm --version
git --version
Optional: Install Node.js using NVM
nvm install 22
nvm use 22
node -v
npm -v 3. VS Code Extensions
Recommended extensions:
Extension Purpose
Cucumber (Gherkin) Full Support Gherkin highlighting and navigation
Prettier JavaScript formatting
ESLint JavaScript code quality

To install:

1. Open Visual Studio Code.
2. Select Extensions.
3. Search for each extension.
4. Select Install.
5. Restart VS Code if necessary.
   These are editor extensions, not npm dependencies.
6. First-Time Project Setup – Fresh Git Clone
   Open PowerShell and navigate to the folder where you want to keep the project. For example:
   cd "$HOME\Documents"
   Clone the repository:
   git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git
   cd WebdriverIO_Cucumber
   Switch to the main branch and update it:
   git switch main
   git pull origin main
   Verify the branch and working-tree status:
   git branch
   git status
   git log -3 --oneline
   The active branch should be main.
7. Install Project Dependencies
   After a fresh clone, install the exact dependency versions recorded in package-lock.json:
   npm ci
   Do not run the tests before dependency installation is complete.
   Verify WebdriverIO
   npx wdio --version
   Expected version:
   10.2.0
   Verify WDIO dependencies
   npm ls @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter @wdio/allure-reporter @wdio/globals
   Verify security audit
   npm audit
   The previously verified installation reported zero vulnerabilities.

Dependency note: The project uses a targeted readdir-glob@4.0.0 override under Archiver to address a minimatch security advisory. This override is outside Archiver 8's declared dependency range. The current test flows were verified, but compatibility should be retested after dependency updates.
Driver installation-script warnings
The current project is configured for Chrome. Warnings about EdgeDriver or GeckoDriver installation scripts do not necessarily prevent Chrome tests from running. Do not approve optional install scripts unless the corresponding browser is required and the scripts have been reviewed. 6. Optional Environment Configuration
If environment-specific configuration is required, create a local .env file from the example:
Copy-Item .env.example .env
Update the required values locally.

Never commit private credentials, access tokens, or sensitive environment variables to GitHub. 7. Test Scenarios and Execution
The project covers 6 primary test scenarios across the login and checkout features.

# Test scenario Tags

1 Valid login @smoke @positive
2 Locked-out account @negative
3 Invalid password @negative
4 Blank username @negative
5 Add backpack and complete checkout, including order PDF validation @smoke @e2e
6 Remove backpack from cart @regression

The PDF download and %PDF- header check are part of the checkout workflow, not a separate test scenario.
Run the predefined test commands
Run all scenarios:
npm test
Run login scenarios:
npm run test:login
Run checkout scenarios:
npm run test:checkout
Run smoke scenarios:
npm run test:smoke
Run regression scenarios:
npm run test:regression
Run tests by individual Cucumber tag
Positive login:
npx wdio run wdio.conf.js --cucumberOpts.tags="@positive"
Negative login scenarios:
npx wdio run wdio.conf.js --cucumberOpts.tags="@negative"
End-to-end checkout:
npx wdio run wdio.conf.js --cucumberOpts.tags="@e2e"
Regression scenarios:
npx wdio run wdio.conf.js --cucumberOpts.tags="@regression"
Tag behaviour: A scenario carrying multiple tags can be selected by any one of those tag filters. Check the placement of tags in the feature files: a tag placed above Feature applies to all scenarios in that feature. If @regression is placed at feature level, the regression command selects every scenario in that feature.
Execute headless tests – Windows PowerShell
Enable headless mode:
$env:HEADLESS="true"
npm test
Disable headless mode:
Remove-Item Env:HEADLESS 8. PDF Order Download and Verification
The checkout workflow downloads an order PDF into the project-local folder:
pdf_download/
Example filename:
order_2026-11-27_23-25-48.pdf
The framework:

- Configures Chrome downloads to the project-local PDF folder.
- Waits for the download to complete.
- Verifies the PDF file header (%PDF-).
- Renames the downloaded file with a timestamp.
- Reports the filename, path, and file size.
  Run the checkout feature:
  npm run test:checkout
  List downloaded PDFs:
  Get-ChildItem ".\pdf_download" -Filter "\*.pdf"
  Generated PDFs and temporary .crdownload files are excluded from Git. The folder is retained using .gitkeep.

9. Allure Reporting
   After test execution, generate the Allure report:
   npm run report:allure
   Open the report:
   npm run report:open
   The report includes:

- Passed and failed scenarios.
- Test execution details and duration.
- Cucumber step information.
- Screenshots and failure attachments, where captured.

10. qTest Integration – Test Management
    The project contains example qTest test-case mapping documentation:
    docs/qtest-test-case-mapping.md
    It explains how automation scenarios can be mapped to qTest test cases for test management and execution tracking.

Current limitation: Direct qTest API integration and automatic test-result uploads are not implemented. 11. JFrog Integration – Package Management
Refer to:
docs/jfrog-npm-setup.md
This document explains npm package management and JFrog Artifactory configuration guidance.

Current limitation: The sample project does not contain an active private JFrog registry integration or credentials.

Never commit private registry credentials or access tokens to GitHub. 12. Project Structure
WebdriverIO_Cucumber/
│
├── .github/
│ └── workflows/
│
├── docs/
│ ├── learning-path.md
│ ├── jfrog-npm-setup.md
│ └── qtest-test-case-mapping.md
│
├── features/
│ ├── login.feature
│ ├── checkout.feature
│ └── step-definitions/
│ ├── login.steps.js
│ └── checkout.steps.js
│
├── pageobjects/
├── pdf_download/
├── support/
│ └── hooks.js
├── test-data/
│
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── wdio.conf.js 13. Subsequent Project Sessions – Reopen Existing Clone
If the repository is already cloned, do not clone it again.

Open PowerShell and navigate to the project directory. For example:
cd "$HOME\Documents\WebdriverIO_Cucumber"
Switch to main and pull the latest changes:
git switch main
git pull origin main
If dependencies have changed, reinstall them:
npm ci
Open the project in VS Code:
code .
Execute tests:
npm run test:login
npm run test:checkout
npm test 14. Git Commands
Check working-tree status:
git status
Check the current branch:
git branch
View recent commits:
git log --oneline -5
Stage changes:
git add .
Review staged changes:
git status
Commit changes:
git commit -m "Describe your changes"
Push changes to main:
git push origin main 15. Complete Fresh Clone – All-in-One Command Sequence
Use this sequence when setting up the project on a new machine:

# Navigate to the folder where you want the project

cd "$HOME\Documents"

# Clone the repository

git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

# Enter the project folder

cd WebdriverIO_Cucumber

# Switch to main and get the latest changes

git switch main
git pull origin main

# Install exact dependencies

npm ci

# Verify WebdriverIO version

npx wdio --version

# Check dependency security

npm audit

# Execute login tests

npm run test:login

# Execute checkout tests

npm run test:checkout

# Execute all tests

npm test

# Generate and open the Allure report

npm run report:allure
npm run report:open

# Open the project in VS Code

code . 16. Previously Verified Execution Results
The following results were recorded during project verification:
Verification Recorded result
WebdriverIO version 10.2.0
npm audit 0 vulnerabilities
Login feature 12 passing
Checkout feature 28 passing
Complete test run 2 of 2 spec files passed
PDF download Successful
PDF validation Valid %PDF- header
Allure report Generated and opened successfully

These are previously recorded results, not a guarantee that every future run will produce identical results. Re-run the commands after changing code or dependencies.

Chrome may display graphics warnings or occasional stale-element warnings during execution. Investigate them if they are accompanied by test failures; the warnings did not prevent the previously recorded runs from passing. 17. Project Disclaimer
This is an independent QA automation training project using the publicly available SauceDemo demo application.

It does not contain employer source code, banking data, confidential information, internal URLs, or company credentials. It is intended for learning and practice only and must not be used for testing production banking applications.
Project Maintainer
Vijayan

GitHub: https://github.com/VijayanGit2026

Repository: WebdriverIO_Cucumber

Technology: WebdriverIO 10 | JavaScript | Cucumber BDD | POM | Allure Reporting

Purpose: Practical QA Automation Framework Learning and Implementation.
