const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
        images: {
            test: /\.(jpg|png|svg|webm|ico)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                }
            },
        },
        fonts: {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
        },
        css: {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        cssIsomorph: {
            test:  /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                },
            ],
        },
    }

    if (env === 'production') {
        modules.css.use.splice(2, 0, { loader: "postcss-loader" })
        modules.cssIsomorph.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/Pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}