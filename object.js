// 此文件中学习如何使用 object
'use strict';
//简单的对象定义

var JV = {
    name:"JV",
    age:"23"
};


var JV1 = {
    name:"JV",
    age:"23",
    say:function(){
        return this.name;
    }
};
//简单的绑定了say方法在JV1对象上
console.log(JV1.say());
//在一个方法内部，this是一个特殊变量，它始终指向当前对象，也就是JV这个变量。
//所以，this.name可以拿到JV的name属性。
//将上面代码拆分开写 就是


// function getName(){
//     //在ES6中严格模式下的 函数内的this指向的是undefined
//     //因此这样定义会报错
//     return this.name;
// }

var JV2 = {
    name:"JV",
    age:"23",
    say:function getName(){

        return this.name;
    }
};
//console.log(JV2.say());
// console.log(getName()); 会找不到的 this === window
//var fn = JV2.say;
//fn();  //严格模式下就会报错  //在ES6中严格模式下的 函数内的this指向的是undefined
//因此这样定义会报错

var JV3 = {
    name:"JV",
    age:"23",
    say:function(){
        //this在这边指向的的确是JV3对象 因此用变量来保存一下this
        var that = this;
        function getName(){
              //在严格模式下 this在这个函数内部指向的其实是undefined
              return that.name;
        }
        return getName();
    }
};
console.log(JV3.say());

//apply 要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，
//第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。

function getName(){
    return this.name;
}

var JV4 = {
    name:"JV",
    age:'23',
    say:getName
};
//console.log(JV4.say());

//直接将getName函数绑定到JV4对象上去
//由于函数并没有参数 所以参数为空
console.log(getName.apply(JV4, []));
//getName.call(JV4);
//另一个与apply()类似的方法是call()，唯一区别是：
//apply()把参数打包成Array再传入；
//call()把参数按顺序传入。
//


//装饰器
//JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。

var count = 0;

var oldParseInt = parseInt; //保存老的系统函数

window.parseInt = function(){
    //重写parseInt方法
    count++;
    //将原来的对象指向null
    return oldParseInt.apply(null,arguments); //调用原来的函数
};

parseInt(10);

parseInt(10);
parseInt(10);
parseInt(10);
console.log(count);
