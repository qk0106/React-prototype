
module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html", "text"],
    coverageDirectory: "./outputs/coverage",
    verbose: true,
    testResultsProcessor: "./node_modules/jest-html-reporter"
};
