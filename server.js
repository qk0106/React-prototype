const path = require("path");
const express = require("express");
const compression = require("compression");
const Chalk = require("chalk");
const favicon = require("serve-favicon");
const webpack = require("webpack");
const serverConfig = require("./config/server.config");
const webpackConfig = require("./config/webpack/dev.config");
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

app.use(favicon(path.join(__dirname, "/build/favicon.ico")));

app.use("/public", express.static(path.join(__dirname, "/build")));

app.get("*", (req, res) => {
    req = req;
    res.status(200).sendFile(path.join(__dirname, "/build", "/index.html"));
});

app.listen(serverConfig.port, serverConfig.host, err => {
    if (err) {
        console.error(Chalk.bgRed(err));
    } else {
        console.info(
            Chalk.black.bgGreen(`Listening at http://${serverConfig.host}:${serverConfig.port}\n`)
        );
    }
});
