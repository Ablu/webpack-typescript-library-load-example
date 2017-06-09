module.exports = {
    entry: "./test.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}