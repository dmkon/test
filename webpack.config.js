var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.less/,
                use: [
                    {
                        loader: "style-loader"

                    },
                    {
                        loader: "css-loader"
                        // options:{
                        //     modules: true
                        // }
                    },
                    {
                        loader: "less-loader"
                        // options:{
                        //     modules: true
                        // }
                    }
                ]
            }
        ]
    }
};
