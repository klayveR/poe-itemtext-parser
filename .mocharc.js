module.exports = {
    spec: ["src/**/*.spec.ts"],
    require: [
        "ts-node/register/transpile-only",
        "tsconfig-paths/register",
        "./src/spec/mocha-fixtures.ts",
    ],
    recursive: true,
};
