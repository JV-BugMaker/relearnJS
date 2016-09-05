//this 在JS中的具体使用

//函数调用 指执行一个函数的代码，比如说是parseInt('15')
//函数调用的上下文指this在函数体中的值
//函数的作用域指的是在函数体内可以使用的变量、对象以及函数的集合

[1,5].join(','); //不是一个函数调用，而是一个方法调用


var message = (function(name){
    return name;
})('hello world');




var numbers = {
   numberA: 5,
   numberB: 10,
   //sum是numbers内部 所以this是numbers
   sum: function() {
     console.log(this === numbers); // => true
     //但是caculate是函数调用 不是方法调用  所以他的this是window 或者严格模式下的undefined
     function calculate() {
       // this is window or undefined in strict mode
       console.log(this === numbers); // => false  因此无法正确调用calculate函数
       return this.numberA + this.numberB;
     }
     return calculate.call(this);
   }
};
numbers.sum();
