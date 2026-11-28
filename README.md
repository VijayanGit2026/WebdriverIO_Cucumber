# SauceDemo UI Automation – WebdriverIO 10 + JavaScript + Cucumber

## 1. Project Information

**GitHub Repository:**  
https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

**Local Project Path:**

`D:\Automation\Playwright\WebdriverIO_Cucumber`

**Active development branch:** `upgrade/webdriverio-10`

**Technology Stack:**
- WebdriverIO 10.2.0
- JavaScript
- Cucumber BDD / Gherkin
- Page Object Model (POM)
- Node.js and npm
- Chrome
- Allure Reporting
- Git and GitHub

---

## 2. Prerequisites

Install the following software:

| Software              | Purpose                              |
|:----------------------|:-------------------------------------|
| Node.js 20+           | JavaScript runtime                   |
| npm                   | Package management                   |
| NVM for Windows       | Node.js version management (optional)|
| Git                   | Version control                      |
| Google Chrome         | Browser automation                   |
| Visual Studio Code    | Code editor                          |

**Verified environment:** Node.js 26.13.0 and npm 11.20.0.

### Verify installations

Open PowerShell:

```powershell
node --version
npm --version
git --version
```

### Optional: Install Node.js using NVM

```powershell
nvm install 22
nvm use 22
```

Verify:

```powershell
node -v
npm -v
```

---

## 3. VS Code Extensions

Recommended extensions:

| Extension | Purpose |
|---|---|
| Cucumber (Gherkin) Full Support | Gherkin highlighting and navigation |
| Prettier | JavaScript formatting |
| ESLint | JavaScript code quality |

Installation:

1. Open Visual Studio Code.
2. Select Extensions.
3. Search for each extension.
4. Click Install.
5. Restart VS Code if necessary.

These are editor extensions, not npm dependencies.

---

## 4. First-Time Project Setup – Fresh Git Clone

### Step 1: Open PowerShell

Navigate to the parent directory:

```powershell
cd "D:\Automation\Playwright"
```

### Step 2: Clone the GitHub repository

```powershell
git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git
```

### Step 3: Navigate into the cloned project

```powershell
cd "WebdriverIO_Cucumber"
```

### Step 4: Fetch remote branches

```powershell
git fetch origin
```

### Step 5: Switch to the WebdriverIO 10 branch

```powershell
git switch --track origin/upgrade/webdriverio-10
```

### Step 6: Verify the branch

```powershell
git branch
git status
git log -3 --oneline
```

Expected active branch:

`upgrade/webdriverio-10`

---

## 5. Install Project Dependencies

**Important: After every fresh clone, install dependencies before executing tests.**

Run:

```powershell
npm ci
```

This installs the exact dependency versions recorded in `package-lock.json`.

Do not execute test commands before completing dependency installation.

### Verify WebdriverIO

```powershell
npx wdio --version
```

Expected:

```text
10.2.0
```

### Verify WDIO dependencies

```powershell
npm ls @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter @wdio/allure-reporter @wdio/globals
```

### Verify security audit

```powershell
npm audit
```

Expected:

```text
found 0 vulnerabilities
```

**Note:** The project uses a targeted `readdir-glob@4.0.0` override under Archiver to address the minimatch advisory. This is outside Archiver 8's declared dependency range, so compatibility should be retested after dependency updates.

### If npm reports unapproved driver installation scripts

The current project is configured for Chrome. Warnings about `edgedriver` and `geckodriver` install scripts do not necessarily prevent Chrome tests from running. Do not approve them unless those browsers are required and the scripts have been reviewed.

---

## 6. Optional Environment Configuration

If environment configuration is required, create a local `.env` file:

```powershell
Copy-Item .env.example .env
```

Update the required values locally.

Never commit private credentials, access tokens, or sensitive environment variables to GitHub.

---

## 7. Execute Automation Tests

### Run all test scenarios

```powershell
npm test
```

### Run login tests

```powershell
npm run test:login
```

### Run checkout tests

```powershell
npm run test:checkout
```

### Run smoke tests

```powershell
npm run test:smoke
```

### Run regression tests

```powershell
npm run test:regression
```

### Execute headless tests – Windows PowerShell

Enable headless mode:

```powershell
$env:HEADLESS="true"
npm test
```

Disable headless mode:

```powershell
Remove-Item Env:HEADLESS
```

---

## 8. PDF Order Download and Verification

The checkout feature generates order PDFs after successful order confirmation.

**Download folder:**

`pdf_download/`

Example generated file:

```text
pdf_download/order_2026-11-27_23-25-48.pdf
```

The framework:
- Configures Chrome downloads to the project-local PDF folder.
- Waits for the PDF download.
- Verifies the PDF file header (`%PDF-`).
- Renames the downloaded file with a timestamp.
- Reports the filename, path, and file size.

Execute the checkout feature:

```powershell
npm run test:checkout
```

Generated PDFs and temporary `.crdownload` files are excluded from Git. The folder is retained using `.gitkeep`.

---

## 9. Allure Reporting

After test execution, generate the Allure report:

```powershell
npm run report:allure
```

Open the report:

```powershell
npm run report:open
```

The report includes:
- Passed and failed scenarios.
- Test execution details.
- Execution duration.
- Cucumber step information.
- Screenshots and failure attachments, where captured.

---

## 10. qTest Integration – Test Management

The project contains example qTest test-case mapping documentation:

`docs/qtest-test-case-mapping.md`

It explains how automation scenarios can be mapped to qTest test cases for test management and execution tracking.

**Current limitation:** Direct qTest API integration and automatic test-result uploads are not implemented.

---

## 11. JFrog Integration – Package Management

Refer to:

`docs/jfrog-npm-setup.md`

This document explains npm package management and JFrog Artifactory configuration guidance.

**Current limitation:** The sample project does not contain an active private JFrog registry integration or credentials.

Never commit private registry credentials or access tokens to GitHub.

---

## 12. Project Structure

```text
WebdriverIO_Cucumber/
│
├── .github/
│   └── workflows/
│
├── docs/
│   ├── learning-path.md
│   ├── jfrog-npm-setup.md
│   └── qtest-test-case-mapping.md
│
├── features/
│   ├── login.feature
│   ├── checkout.feature
│   └── step-definitions/
│       ├── login.steps.js
│       └── checkout.steps.js
│
├── pageobjects/
│
├── pdf_download/
│
├── support/
│   └── hooks.js
│
├── test-data/
│
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── wdio.conf.js
```

---

## 13. Subsequent Project Sessions – Reopen Existing Clone

If the project is already cloned, do not clone it again.

Open PowerShell:

```powershell
cd "D:\Automation\Playwright\WebdriverIO_Cucumber"
```

Switch to the upgrade branch:

```powershell
git switch upgrade/webdriverio-10
```

Get the latest updates:

```powershell
git pull origin upgrade/webdriverio-10
```

If dependencies have changed:

```powershell
npm ci
```

Open the project in VS Code:

```powershell
code .
```

Execute tests:

```powershell
npm run test:login
npm run test:checkout
npm test
```

---

## 14. Git Commands

Check working-tree status:

```powershell
git status
```

Check the current branch:

```powershell
git branch
```

View recent commits:

```powershell
git log --oneline -5
```

Stage changes:

```powershell
git add .
```

Commit changes:

```powershell
git commit -m "Describe your changes"
```

Push changes:

```powershell
git push origin upgrade/webdriverio-10
```

---

## 15. Complete Fresh Clone – All-in-One Command Sequence

Use this sequence when setting up the project on a new machine or after deleting the local project.

```powershell
# Navigate to parent directory
cd "D:\Automation\Playwright"

# Clone repository
git clone https://github.com/VijayanGit2026/WebdriverIO_Cucumber.git

# Enter project folder
cd "WebdriverIO_Cucumber"

# Fetch remote branches
git fetch origin

# Switch to WDIO 10 branch
git switch --track origin/upgrade/webdriverio-10

# Install exact dependencies
npm ci

# Verify WebdriverIO version
npx wdio --version

# Verify dependency security
npm audit

# Execute login tests
npm run test:login

# Execute checkout tests
npm run test:checkout

# Execute complete test suite
npm test

# Generate Allure report
npm run report:allure

# Open Allure report
npm run report:open

# Open project in VS Code
code .
```

---

## 16. Verified Execution Results

The clean-clone installation and execution were verified on the current project branch.

| Verification | Result |
|---|---|
| npm ci | 395 packages installed |
| WebdriverIO version | 10.2.0 |
| npm audit | 0 vulnerabilities |
| Login feature | 12 passing |
| Checkout feature | 28 passing |
| Complete test run | 2 of 2 spec files passed |
| PDF download | Successful |
| PDF validation | Valid `%PDF-` header |

Chrome may display AMD graphics warnings or occasional stale-element warnings during execution. These did not prevent the verified test runs from passing.

---

## 17. Project Disclaimer

This is an independent QA automation training project using the publicly available SauceDemo demo application.

It does not contain employer source code, banking data, confidential information, internal URLs, or company credentials. It is intended for learning and practice only and must not be used for testing production banking applications.

## Project Maintainer

**Vijayan**

GitHub: https://github.com/VijayanGit2026

Repository: WebdriverIO_Cucumber

Technology: WebdriverIO 10 | JavaScript | Cucumber BDD | POM | Allure Reporting

Purpose: Practical QA Automation Framework Learning and Implementation.
