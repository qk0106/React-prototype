// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const distDirPath = "./dist";
const appDirPath = "./Components/DesktopApp/";
const getAppFilePath = fileName => appDirPath + fileName;

module.exports = {
    // Source maps support ('inline-source-map' also works)
    devtool: "source-map",

    // Entry point
    entry: {
        app: [
            "react-hot-loader/patch",
            "webpack-hot-middleware/client",
            getAppFilePath("index.tsx")
        ]
    },

    // Output folder
    output: {
        filename: "js/[name].js",
        path: path.resolve(distDirPath),
        publicPath: "/",
        pathinfo: true
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: [path.resolve(__dirname), "node_modules", "JsPackages", "Components"]
    },

    // Add the loader for .ts files.
    module: {
        rules: [
            // {
            //   enforce: 'pre',
            //   test: /\.tsx?$/,
            //   use: 'tslint-loader'
            // },
            {
                test: /\.tsx|ts?$/,
                include: [path.resolve("./JsPackages"), path.resolve("./Components")],
                use: [
                    {
                        loader: "react-hot-loader/webpack"
                    },
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: getAppFilePath("tsconfig.json")
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                include: [path.resolve("./JsPackages"), path.resolve("./Components")],
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
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                            name: "assets/[hash].[ext]"
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
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

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

createIfDoesntExist("./dist");
copySync(getAppFilePath("favicon.ico"), "./dist/favicon.ico", true);
