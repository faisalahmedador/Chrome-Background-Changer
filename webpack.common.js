const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        popup: "./app/popup.js",
        background: "./app/background.js"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'public'),
                to: path.resolve(__dirname, 'dist')}]
        }),
        new HtmlWebPackPlugin({
            template: "./app/popup.html",
            filename: "popup.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             name: "male.[hash].[ext]",
            //             outputPath: 'assets'
            //         }
            //     }
            // }
        ]
    }
}