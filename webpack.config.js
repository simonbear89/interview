module.exports = {
  entry: `${__dirname}/public/app.jsx`,
  target: 'web',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [{
      test: /\.jsx$|\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: { node: '10' }
            }],
            '@babel/preset-react'
          ]
        }
      }
    }],
  },
  output: {
    path: __dirname,
    filename: 'public/app.js',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'axios': 'axios'
  },
  watch: true
};
