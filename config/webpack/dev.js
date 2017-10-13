var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');
var ManifestPlugin = require('webpack-manifest-plugin');
var CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

var config = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },

  entry: {
    app: [
      './src/index.tsx'
    ]
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true
  },

  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   use: 'tslint-loader'
      // },
      {
        test: /\.tsx?$/,
        use:[
          // 'react-hot-loader',
          'awesome-typescript-loader'
        ] 
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]", // translates CSS into CommonJS
          "less-loader" // compiles Less to CSS
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve('./src'),
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]'},
          {loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: path.resolve('./src'),
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.eot(\?.*)?$/,
        use: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'url-loader?limit=1000&name=images/[hash].[ext]'
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        tslint: {
          failOnHint: true
        },
        postcss: function () {
          return [
            stylelint({
              files: '../../src/app/*.css'
            }),
            postcssNext(),
            postcssAssets({
              relative: true
            }),
          ];
        },
      }
    }),
    new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const copySync = (src, dest, overwrite) => {
  if (overwrite && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
  }
  const data = fs.readFileSync(src);
  fs.writeFileSync(dest, data);
}

const createIfDoesntExist = dest => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
}

createIfDoesntExist('./build');
createIfDoesntExist('./build/public');
copySync('./src/favicon.ico', './build/public/favicon.ico', true);

module.exports = config;
