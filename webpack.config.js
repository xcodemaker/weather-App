var path=require('path');

module.exports={
    entry:{
        Promise:"./playground/promise.js"
    } ,
    output:{
        path: path.resolve(__dirname,"./temp/scripts"),
        filename: "[name].js"
    },
    module:{
        loaders:[
            {
                loaders:'babel-loader',
                query:{
                    presets:['es2015']
                },
                test:/\.js$/,
                exclude:/node_modules/
            }
        ]
    }
}