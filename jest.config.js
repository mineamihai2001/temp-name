/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    modulePathIgnorePatterns: ["/dist/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts", "!src/**/index.ts"],
    reporters: [
        "default",
        [
            "jest-sonar",
            {
                outputDirectory: "reports/sonar",
            },
        ],
    ],
    coverageReporters: ["lcov", "text"],
    coverageDirectory: "reports/coverage",
    setupFiles: ["./jest.setup.js"],
    coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/port/public/"],
};
