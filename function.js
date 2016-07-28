
//arguments 函数中比较重要的概念
//JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
//arguments类似Array但它不是一个Array：对所有传入函数的参数都有，及时此函数形参没定义


function  foo(x)
{
    console.log(x); //10
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);  //10,20,30
    }
}

foo(10,20,30);

// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}
//ES6 中引入了rest参数 就是 arguments中排除 函数本身需要的参数之外的额外参数
//rest 只能写在最后
//nodejs 中需要使用es6的环境来实验 node --harmony function.js
function fooRest(a,b,...rest)
{
    console.log('a='+a);
    console.log('b='+b);

    console.log(rest);

}


fooRest(1,2,3,4,5);
fooRest(1);

//注意return 换行问题
function foo() {
    return
        { name: 'foo' };
        //如同 return ;
        //{name:'foo'}
}

foo(); // undefined
