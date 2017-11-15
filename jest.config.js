module.exports = {
    collectCoverage: true,
    coverageReporters: ["json", "html", "text"],
    coverageDirectory: "./outputs/coverage",
    verbose: true,
    testResultsProcessor: "./node_modules/jest-html-reporter",
    setupFiles: [
        "<rootDir>/JsPackages/JestHelper/shim.js",
        "<rootDir>/JsPackages/JestHelper/setup.js"
    ],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "JsPackages", "Components"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/JsPackages/JestHelper/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    }
};
