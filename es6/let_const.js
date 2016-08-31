'use strict';

if(1){
  let a = 1;
  var x = 2;
}
console.log(x); //let 只在相应的作用域内起作用 a is not defined

var a = [];
//比较适合在for循环中使用这个块作用域  i只针对 本轮循环有效
for(let i = 0;i<=10;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6]();  //6
//在块外面是没办法使用的
for(var i = 0;i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); //10  理解透了 其实就是js作用域的问题


//let不会使得变量提升
// console.log(foo);  //js会认为foo已经声明 只是没有赋值而已 体现了变量提升的现象
// console.log(bar);  //但是let杜绝了 这种现象 必须先定义 才能使用
//
// var foo = 1;
// let bar = 2;


//绑定变量 使得变量不受外界影响
var tmp = 1;

if(1){
    tmp = 'abc'; //会报错 tmp已经被绑定 作用域了 凡是在声明之前就使用这些变量，就会报错。 只能在申明之后使用
    let tmp ;// 绑定变量使得tmp不能够被外界影响
}
// Users/JV/web/js/reLearn/es6/let_const.js:38
//     tmp = 'abc'; //会报错 tmp已经被绑定 作用域了
//         ^
//
// ReferenceError: tmp is not defined
//     at Object.<anonymous> (/Users/JV/web/js/reLearn/es6/let_const.js:38:9)
//     at Module._compile (module.js:413:34)
//     at Object.Module._extensions..js (module.js:422:10)
//     at Module.load (module.js:357:32)
//     at Function.Module._load (module.js:314:12)
//     at Function.Module.runMain (module.js:447:10)
//     at startup (node.js:139:18)
//     at node.js:999:3

//存在这么一个特性使得 万金油 typeof使用也会发生问题
typeof x ; //ReferenceError  相反 使用一个未定义的变量 没出错
let x; //这边形成了一个TDZ 使得在这之前使用该变量的都会出错

//隐藏死区  x=y  y尚未定义声明  无法使用
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错


//let不能重复声明一个变量
//
//块作用域中的函数声明
function f() { console.log('I am outside!'); }
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());

//在ES6中的 实际运行 效果
//因为块级作用域内声明的函数类似于let，对作用域之外没有影响，
function f() { console.log('I am outside!'); }
(function () {
  f();
}());
