
(function(){
    var a = b = 5;
    //范围陷阱 a是局部变量没问题 问题就是b
    //问题在于 是否在严格模式下 严格模式下 书写
    // 'use strict'
    // var a = window.b = 5;
})();
//是否是立即执行也有关系
console.log(b);


String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str;
};

//源生写法 但是需要增加String.prototype.repeatify兼容写法

function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//变量和函数声明都提升了  问题是变量声明提升和函数申明提升 

function test() {
   var a;
   console.log(a);
   function foo(){
       return 2;
   }
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}