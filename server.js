const path = require("path");
const chalk = require("chalk");
const express = require("express");
const favicon = require("serve-favicon");
const webpack = require("webpack");
const compression = require("compression");
const serverConfig = require("./server.config");
const webpackConfig = require("./Containers/DesktopApp/webpack.config.dev");
const webpackCompiler = webpack(webpackConfig);

const app = express();

app.use(compression());

app.use(
    require("webpack-dev-middleware")(webpackCompiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true,
        hot: true,
        inline: true,
        lazy: false,
        historyApiFallback: true,
        quiet: true
    })
);

app.use(require("webpack-hot-middleware")(webpackCompiler)); // hot-mid uses dev-mid

app.use(favicon(path.join(__dirname, "/dist/favicon.ico")));

app.use("/public", express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
    req = req;
    res.status(200).sendFile(path.join(__dirname, "/dist", "/index.html"));
});

app.listen(serverConfig.port, serverConfig.host, err => {
    if (err) {
        console.error(chalk.bgRed(err));
    } else {
        console.info(
            chalk.black.bgGreen(`Listening at http://${serverConfig.host}:${serverConfig.port}\n`)
        );
    }
});
