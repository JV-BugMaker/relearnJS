//js中变量作用域问题
'use strict';
function foo(){
    var a = "hello," + y;
    console.log(a);
    //hello,undefined  说明y声明了 但是并没有赋值 变量提升
    var y = "jv";
}
foo();
//第四行 并不报错的原因 其实是 js中
//JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：
//由于JavaScript的这一怪异的“特性”，我们在函数内部定义变量时，请严格遵守“在函数内部首先申明所有变量”这一规则。
//最常见的做法是用一个var申明函数内部用到的所有变量：  将变量声明 放在函数最前面
//
//
//名字空降
//全局变量会绑定到window上，
//不同的JavaScript文件如果使用了相同的全局变量，
//或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
var MyAPP = {};
MyAPP.name = "JV";
MyAPP.version = "1.0";

MyAPP.foo = function(){
    console.log(MyAPP.name);
}
//将所有这部分的都归结到MyAPP的命名空间下
//

//局部作用域
//由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的：
function foo1(){
    for (var i =   0; i < 100; i++) {

    }
    console.log(i++);
    //100 i变量并没有消失 块级作用域
}
foo1();

//为了解决块级作用域问题  ES6 引入关键字 let 来替代var
//使用node执行 ES6新的特性我们需要在代码中最前面 进行 使用严格模式 'user strict';并且node 运行带 harmony参数执行
function foo3(){
    var sum = 0;
    for(let i = 0;i<100;i++){
        sum+=i;
    }
    console.log(i,sum); //i 就会报错 块级作用 强调了 let强调了i在for变量 不能提升变量的作用域
}

foo3();
//在ES6之前我们用var来定义常量的方式是
//var PI = 3.14;  //常量名字是大写  表示此变量是常量 不要修改它

//ES6中引入了const 来定义常量

const PI = 3.14;
PI = 3 ;
console.log(PI);
