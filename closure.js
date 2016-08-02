//此文就来介绍一下闭包 一个高大上的东西 closure
'use strict';

//上文将高阶函数 作为参数  还可以作为返回值来进行

//实现的是一个数据的累加计算
function sum(arr)
{
    return arr.reduce(function(x,y){
        return x+y;
    });
}
console.log(sum([1,2,3,4,5]));

//如果我们不需要立即计算 而是等到后面我们需要用的时候在进行计算 返回值

function sum (arr)
{
    var last_sum = function(){
        return arr.reduce(function(x,y){
            return x+y;
        });
    };
    return last_sum;
}

//其实此时返回的是一个函数 并不是返回值
var f = sum([1,2,3,4]);  //如果这边不带参数 就会报错
console.log(f);  //function 此时并不是一个值 而是一个函数
console.log(f());
//当我们调用函数的时候 每次都会返回一个新的函数  即使参数是一致的
var f1 = sum([1,2,3,4,5]);
var f2 = sum([1,2,3,4,5]);
console.log(f1===f2);  //false 说明两个函数并不是一样的

//在此需要特别注意的一个点就是返回的函数并没有立即执行 需要的时候才执行


function count()
{
    var arr = [];
    for(var i = 0;i<3;i++ ){
        //这样一处理 其实就是讲i绑定到函数上 并且立即执行了函数  其实核心是创建了一个匿名函数 并且立即执行
        arr.push((function(n){
            return function (){
                return n * n;
            };
        })(i));
    }
    return arr;
}
console.log(count());  //[function,function,function]
//也就是说返回的的确是个数组 但是数组内的函数并没有执行 一函数体的形式保存在数组中
console.log(count()[0](),count()[1](),count()[2]());  //9 9 9  这边有涉及到js的异步问题
//因为在函数引用了i 但是它并非立即执行了函数  所以i等到最后一个值
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

//如果一定要引用循环变量怎么办？方法是再创建一个函数，
//用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变

//闭包还可以把多参数的函数变成单参数的函数。例如，要计算xy可以用Math.pow(x, y)函数，
//不过考虑到经常计算x2或x3，我们可以利用闭包创建新的函数pow2和pow3：

function make_pow(x)
{
    return function(n){
        return Math.pow(n,x);
    };
}
//也就说 函数一开始返回的就是一个函数 并不是一个值

var pow2 = make_pow(2); //返回的都是函数
var pow3 = make_pow(3);

console.log(pow2(5));  //25 5^2
console.log(pow3(5));  //125  5^3



// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    };
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    };
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        };
    };
}
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
    console.log('print 3 times');
}))();

// 给5传一个函数,会打印5次:
(five(function () {
    console.log('print 5 times');
}))();
