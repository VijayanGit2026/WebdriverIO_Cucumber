const defaultPassword = process.env.SAUCE_PASSWORD || 'secret_sauce';

module.exports = {
    standard: {
        username: process.env.SAUCE_USERNAME || 'standard_user',
        password: defaultPassword
    },
    lockedOut: {
        username: 'locked_out_user',
        password: defaultPassword
    },
    problem: {
        username: 'problem_user',
        password: defaultPassword
    },
    performanceGlitch: {
        username: 'performance_glitch_user',
        password: defaultPassword
    }
};
