console.log('modelb------------');
const test = 'model B'
// 导出一个默认的模块。
export default {
    test,
}

// 导出多个模块，变量即为模块名
export const b= '123';
export const foo = ()=>{
    console.log('model b foo run');
}