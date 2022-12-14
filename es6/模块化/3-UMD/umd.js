(function (self, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        // 当前环境是 CommonJS 规范环境
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // 当前环境是 AMD 规范环境
        define(factory)
    } else {
        // 什么环境都不是，直接挂在全局对象上
        self.umdModule = factory();
    }
}(this, function () {
    // factory 就是一个独立的模块
    // 换句话，这个函数就是导出的模块
    return function () {
        return Math.random();
    }
}
))
/**
 * UMD 通过判断运行环境 挂在不同的内容
 */