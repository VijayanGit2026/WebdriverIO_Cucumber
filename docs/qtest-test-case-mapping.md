# qTest test-case mapping guide

This training repository executes scenarios with Cucumber. qTest is a separate test-management system; this sample does not call the qTest API or upload results automatically.

## Suggested mapping

| qTest field | Example for this project |
|---|---|
| Test Case Name | Login with valid credentials |
| Requirement / User Story | Shopper can log in to SauceDemo |
| Preconditions | SauceDemo is reachable; user account is active |
| Test Steps | Open login page; enter username; enter password; click Login |
| Expected Result | Products page is displayed |
| Test Type | Positive / Functional |
| Automation Status | Automated |
| Automation Reference | `features/login.feature` → `Login with valid credentials` |
| Priority | High |

## Suggested test cases

1. Valid login (`@smoke @positive`)
2. Locked-out account (`@negative`)
3. Invalid password (`@negative`)
4. Blank username (`@negative`)
5. Add backpack and complete checkout (`@smoke @e2e`)
6. Remove backpack from cart (`@regression`)

Use the team's existing qTest template, naming conventions, requirement links, and status values. Do not upload company or customer information to this public training repository.
