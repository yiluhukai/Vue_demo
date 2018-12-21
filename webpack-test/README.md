#webpack

## 1.安装webpack

```shell
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```
当安装webpack4+的版本，还需要安装cli
```shell
npm install --save-dev webpack-cli
```
##2. 使用 
当我们在全局安装webpack和cli时,我们可以命令行打包文件
```shell
webpack [entery] -o [output]
```
我们也可以在根目录下配置webpack.config.js文件，然后再根目录下使用webpack命令.
```shell
webpack
```
上面的命令等价于
```shell
webpack --config webpack.config.js
```
当我们没有全局安装webpack,可以在package.json中配置script.

```shell
"bundle":"webpack --config webpack.config.js"
```

