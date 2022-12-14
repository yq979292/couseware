/***
 * import
 * 1：导入模块
 * 2：声明变量 A 
 * 3：给 A 变量赋值  moduleA.js 中由 export.default 导出内容
 * 4: 同步加载模块，先停止当前index.js的解析，执行子模块中代码，当子模块中同步代码执行完毕，在继续解析index.js
 * 5: import 默认会提升到当前模块作用域的做顶端 （import 写在脚本的最上方）
 * 
 * from  
 * 根据路径查找 js文件，
 * 找到后的js脚本会执行
 */

// console.log(A,'=======');// import 提升
// import A from './moduleA.js'
// import B from './moduleB.js'
/**
 * 导入多个值
 * 导入由 export 导出模块
 * 注意 导入名 与 export 导出变量保持一致
 */
// import { b,foo } from './moduleB.js'

// import B,{b,foo} from './moduleB.js'
// // console.log('index run');
// // console.log(A);
// console.log(B);

// console.log(b);
// foo()

// 1: 模块与模块之间不会产生变量污染


// -------------别名-------------
/**
 * as 别名
 * 给 导入 export 变量 重新起名，为了防止变量冲突等内容
 */
import { b,foo as bar  } from './moduleB.js'

let foo = 123; 
console.log(b);
bar()