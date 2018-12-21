const path = require('path')

module.exports = {
    //项目的入口文件:可以是对象、数组、字符串
    //entry:'./app.js',
    entry: {
        index: './app.js'
        //page2:['aaa.js','bbb.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        //字符串是name=main,对象的时候name=对象的key
        filename: '[name].bundle.js'
    },
    module:{
        //匹配模块创建的规则
        rules:[

        ]
    }
}