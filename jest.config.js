module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html", "text"],
    coverageDirectory: "./outputs/coverage",
    verbose: true,
    testResultsProcessor: "./node_modules/jest-html-reporter",
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx", "less"],
    moduleDirectories: ["node_modules", "JsPackages", "Containers", "Presenters"],
    moduleNameMapper: {
        // "^config$": "<rootDir>/Containers/DesktopApp/webpack.config.dev.js",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
};
