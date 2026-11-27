# JFrog and npm - integration notes

JFrog Artifactory is an artifact/package repository. npm is the package manager used by this JavaScript project. They can work together: npm can download approved packages from an Artifactory npm virtual/remote repository, and a pipeline can publish approved internal packages to an Artifactory local repository.

This sample intentionally contains **no JFrog URL, token, username, password, or `.npmrc` credentials**. Charu must use the repository URL and authentication method supplied by her project team.

Typical team-approved setup:

1. Obtain the approved npm registry URL from the JFrog administrator.
2. Configure npm to use that registry, following the organization's instructions.
3. Authenticate using the organization's approved token/identity method.
4. Run `npm ci` to install from `package-lock.json`.
5. Never commit `.npmrc` files containing credentials, access tokens, or passwords.
6. Confirm whether the project is expected to consume dependencies from JFrog or publish artifacts to it. Those are different operations.

Do not use this public training repository's settings to access an employer's private JFrog instance.
