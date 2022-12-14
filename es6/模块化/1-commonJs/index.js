console.log('index.js run');
// 如何在 index.js 中获取a.js中a 变量的赋值
/***
 * require()
 * 作用：1 在node.js平台中，导入模块（导入js脚本）
 *      2 执行被导入的脚本。当导入的脚本中所有同步代码执行完，并且require输出返回值
 *        意味着；require() 函数执行结束
 * 返回值：默认对象，或者  module.exports 的赋值
 * 注意：导入脚本时候，js 文件如果 不存在，会报错。
 */
const moduleA = require('./a.js');
// moduleA = require函数的返回值
// moduleA = a.js 中 module.exports 的赋值
// moduleA= {a:'a.js'}
console.log(moduleA);

module.exports = {
    test:'index.js'
}