const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
  mode: mode,
  devtool: (mode === "development") ? 'source-map' : false,
  entry: {
    main: './src/pages/main/index.js',
    game: './src/pages/game/js/game.js',
    gallery: './src/pages/gallery/js/gallery.js',
    results: './src/pages/results/results.js'
  },
  output: {
    filename: 'pages/[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "assets/[hash][ext][query]"
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 8080,
    open: ['/pages/main/index.html'],   
  },    
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,               
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|mp4)$/i,
        type: 'asset'
      },
    ]
  },
  plugins: [       
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'public',
        to: 'assets'            
      }]
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: './src/pages/main/index.html',
      filename: 'pages/main/index.html',
      chunks: ['main'] 
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: './src/pages/game/index.html',
      filename: 'pages/game/index.html',
      chunks: ['game'] 
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: './src/pages/gallery/index.html',
      filename: 'pages/gallery/index.html',
      chunks: ['gallery'] 
    }),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: './src/pages/results/index.html',
      filename: 'pages/results/index.html',
      chunks: ['results'] 
    }),
    new MiniCssExtractPlugin({ 
      filename: 'pages/[name]/[name].css'           
    }),     
  ],
};