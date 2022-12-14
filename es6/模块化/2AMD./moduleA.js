/**
 * define()
 * 作用定义模块，默认文件名就是模块名
 * 回参：require()函数，作用可以导入其他模块
 */
define(function(require) {
    var m = require('moduleB');
    setTimeout(() => console.log(m), 1000);
    return {
        msg:'moduleA 导出的内容'
    }
});