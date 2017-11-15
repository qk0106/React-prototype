module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html", "text"],
    coverageDirectory: "./outputs/coverage",
    verbose: true,
    testResultsProcessor: "./node_modules/jest-html-reporter",
    setupFiles: ["<rootDir>/__mocks__/shim.js", "<rootDir>/__mocks__/setup.js"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "JsPackages", "Containers", "Presenters"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    }
};
