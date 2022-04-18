//La configuracion de webpack consta de 5 puntos: entry / output / mode / mdule / plugins

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),  //usar path de node que indica la ruta de nuestro proyecto, y que lo guarde en la caroeta dist, si no existe la crea
        filename: "[name].[contenthash].js", //generara un hash distnto cada vez que empaquetemos
        publicPath: ""  //si se deja vacio significa que esta en la misma carpeta donde tenemos el output
    },
    mode: "production",
    module: {   //aqui indicamos los loaders que queremos usar, deben estar instalados en nuestro proyecto
        rules: [
            {
                use: "babel-loader",
                test: /.(js|jsx)$/, //expresion regular de que archvos queremos que afecte
                exclude: /node_modules/
            }
        ]
    },
    resolve: {  //para que webpack identifique los tipos de archivo siguientes y los importe sin problemas
        extensions: [".js", ".jsx", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",    //el código indes.html final se generara a partir de este template
        })
    ]
};