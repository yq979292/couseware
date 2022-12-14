// 
/***
 * require() 导入模块
 * 参一：依赖集合，
 * 参二：回调函数
 *   回参与数组导入内容一一对应
 * 
 */
require(['moduleA', 'moduleB'], function(moduleA, moduleB) {
    console.log(moduleB);
    console.log(moduleA);
});