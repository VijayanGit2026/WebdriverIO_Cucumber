require('dotenv').config();

const fs = require('fs');
const path = require('path');

const isHeadless = process.env.HEADLESS === 'true';
const pdfDownloadDir = path.resolve(__dirname, 'pdf_download');

// Create the project-local PDF output directory before Chrome starts.
fs.mkdirSync(pdfDownloadDir, { recursive: true });

exports.config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    exclude: [],

    maxInstances: Number(process.env.MAX_INSTANCES || 2),

    capabilities: [
        {
            browserName: 'chrome',
            acceptInsecureCerts: false,
            'goog:chromeOptions': {
                args: [
                    ...(isHeadless ? ['--headless=new'] : []),
                    '--window-size=1440,1000',
                    '--disable-dev-shm-usage',
                    '--no-sandbox'
                ],
                prefs: {
                    'download.default_directory': pdfDownloadDir,
                    'download.prompt_for_download': false,
                    'download.directory_upgrade': true,
                    'plugins.always_open_pdf_externally': true,
                    'safebrowsing.enabled': true
                }
            }
        }
    ],

    logLevel: 'warn',
    bail: 0,
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 2,

    services: [],

    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            useCucumberStepReporter: true,
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/**/*.js', './support/**/*.js'],
        backtrace: false,
        requireModule: [],
        failFast: false,
        timeout: 60000,
        retry: 0,
        tagExpression: process.env.CUCUMBER_TAGS || '',
        ignoreUndefinedDefinitions: false
    },

    before: async function () {
        await browser.setWindowSize(1440, 1000);
    },

    after: async function () {
        // Allure reporter collects WebdriverIO command and screenshot attachments.
    }
};
