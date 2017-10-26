// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");

const copySync = (src, dest, overwrite) => {
    if (overwrite && fs.existsSync(dest)) {
        fs.unlinkSync(dest);
    }
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
};

const createIfDoesntExist = dest => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
};

createIfDoesntExist("./build");
createIfDoesntExist("./build/public");
copySync("./src/favicon.ico", "./build/public/favicon.ico", true);

module.exports = {
    // Source maps support ('inline-source-map' also works)
    devtool: "source-map",

    // Entry point
    entry: {
        app: ["webpack-hot-middleware/client", "./src/index.tsx"]
    },

    // Output folder
    output: {
        filename: "js/[name].js",
        path: path.resolve("./build/public"),
        publicPath: "/public/",
        pathinfo: true
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: [path.resolve(__dirname), "node_modules", "JsPackages", "Containers", "Presenters"]
    },

    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.tsx|ts?$/,
                include: path.resolve("./src"),
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                include: path.resolve("./src"),
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            modules: true,
                            localIdentName: "[path][name]__[local]--[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [new CheckerPlugin(), new webpack.HotModuleReplacementPlugin()]
};
