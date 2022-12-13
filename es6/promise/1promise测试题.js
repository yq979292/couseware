console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);

let p = new Promise((res,rej)=>{
    console.log(3);
    res()
})
console.log(4);;
p.then(()=>{
    console.log(5);
})

console.log(6);

// 请售出日志打印的内容是什么，为什么？
// 回答js程序执行的忒单，