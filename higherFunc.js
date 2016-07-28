//此文件中着重介绍高阶函数
//并不是数学中的高阶函数 嘻嘻
//js中函数最终是指向一个变量 变量可以指向函数 函数的参数能接收变量 那么函数就可以接收函数作为参数

function add(x,y,f)
{
    return f(x)+f(y);
}
console.log(add(-5,6,Math.abs));
//编写高阶函数，就是让函数的参数能够接收别的函数。

//map介绍
//由于map()方法定义在JavaScript的Array中，我们调用Array的map()方法，
//传入我们自己的函数，就得到了一个新的Array作为结果：


function pow(x)
{
    return x * x;
}


var arr = [1,2,3,4,5,6,7,8];
//【1，4，9，16，25，36，49，64】
console.log(arr.map(pow));
//map传入的参数是pow，即函数本身对象
console.log(arr.map(String));

//reduce Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，
//这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算，
//[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

//数组求和
 function add(x,y)
 {
    return x + y;
 }

console.log(arr.reduce(add));

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y; //10*1+3   13*10+5
}); // 13579

//将字符串编程int 13579 使用map和reduce


var str = "13579";
var arr = str.split("");
//拆分数组
//注意不要使用parseInt函数  比较操蛋 会输出NaN Number --- String
console.log(arr.map(Number).reduce(function(x,y){
  return x * 10 + y;
}));
