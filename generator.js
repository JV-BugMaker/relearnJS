//ES6中的生成器 generator
//ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次
//generator 跟函数 很想

function* gen(x)
{
    yield x+1 ;
    yield x +2 ;
    return x+3;
}


//generator由function*定义（注意多出的*号），
//并且，除了return语句，还可以用yield返回多次。

//比较容易理解这个其实就是主播的 斐波那契数列
//fib(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function* fib(max)
{
    var t,
        a = 0,
        b = 1,
        n = 1;
    while(n<max){
        yield a ;
        t = a + b;
        a = b ;
        b = t;
        n ++ ;
    }
    return a;
}
var f = fib(10);
//[]  其实就是一个生成器的对象 需要不停的next去让他往下执行
for (var i = 0; i < 10; i++) {
    console.log(f.next());
}
// 这种方法不需要我们增加判断是否done
for (var x of fib(5)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3
}
//next()方法会执行generator的代码，然后，每次遇到yield x;
//就返回一个对象{value: x, done: true/false}，然后“暂停”。
//返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。

//当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了。
