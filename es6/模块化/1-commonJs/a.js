console.log('a.js run');

const a = 'a.js'
const aa= 'aa'
// 导出: 导出内容可以被其他js文件  通过require导入并访问；
// 导出的内容可以是什么？
// js任意类型，通常是对象或者函数
module.exports = {
    a,
}

// Bug
// 注意：禁止两个脚本之间香相互导入。例如 index 导入 a a导入index
// const moduleIndex= require('./index.js');
// console.log(moduleIndex);
