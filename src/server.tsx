const appConfig = require('../config/main');

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

const express = require('express');
const path = require('path');
const compression = require('compression');
const Chalk = require('chalk');
const favicon = require('serve-favicon');

const app = express();

app.use(compression());

const webpack = require('webpack');
const webpackConfig = require('../config/webpack/dev');
const webpackCompiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  quiet: true,
}));

app.use(require('webpack-hot-middleware')(webpackCompiler));

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    req = req;
    res.status(200).send(renderHTML());
});

app.listen(appConfig.port, appConfig.host, (err) => {
  if (err) {
    console.error(Chalk.bgRed(err));
  } else {
    console.info(Chalk.black.bgGreen(
      `Listening at http://${appConfig.host}:${appConfig.port}\n`,
    ));
  }
});

class Html extends React.Component<any, {}> {
  public render() {
    return (
      <html>
        <head>
          head tag
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body>
          <div id="app">loading app</div>
        </body>
        <script src="/public/js/app.js"></script>        
      </html>
    );
  }
}

function renderHTML() {
  const html = ReactDOMServer.renderToString(
    <Html/>,
  );
  return `<!doctype html> ${html}`;
}