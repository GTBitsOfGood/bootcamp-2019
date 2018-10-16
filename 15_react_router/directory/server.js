const express           = require('express');
const path              = require('path');
const compress          = require('compression');

const webpack               = require('webpack');
const webpackDevMiddleware  = require("webpack-dev-middleware");
const webpackHotMiddleware  = require('webpack-hot-middleware');
const config                = require('./webpack.config');

const app               = express();
const server            = require('http').Server(app);

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  hot: true,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

// Default routes
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use(compress());

app.use('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
