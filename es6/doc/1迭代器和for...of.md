## 为什么产省迭代器和for...of



## 迭代器
所有的迭代器，其实就是一个具有Next()方法的对象，每次调用next()都会返回一个结果对象，改结果对象有两个属性，value表示当前值，done表示表里是否结束

es5实现的迭代器
~~~js
       function createIterator(items){
            var i = 0;
            return {
                next(){
                    var done = i>items.length;
                    var value = !done ? items[i++] :undefined; 

                    return {
                        value,
                        done
                    }
                }
            }
        }

        //  iterotor 就是一个迭代器
        let iterotor = createIterator([2,3,4,5,1]);
        console.log(iterotor.next());
        console.log(iterotor.next());
        console.log(iterotor.next());
        console.log(iterotor.next());
        console.log(iterotor.next());
~~~


## for...of

除了迭代器之外，我们还需要一个；遍历迭代器的方式，for...of



## 模拟实现for...of

## 内置迭代器

## babel是如何编译for...of的