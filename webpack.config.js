const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{ loader: 'ts-loader' }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"]
                },
                exclude: [/node_modules/, /dist/]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]'
                }
            }
        ],
    },
    output: {
        path: __dirname + '/dist',
        filename: "index.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};