//js世界中一切皆是对象
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'   特别奇怪是null是个对象 需要特别注意的一点
typeof []; // 'object'
typeof {}; // 'object'


var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型
//上面的值都是经过new进行包装了  但是此时他们的值都是变成了object
//严格意义上来说与原值是不一样的  === 比较的时候 都是false
//但是如果我们不用new进行包装的话 情况是 Number Boolean 以及String都是正常的函数
//n,b,s与原来的值比较就是一个true 不发生类型的改变
//也就是说new是强调了对象
// 不要使用new Number()、new Boolean()、new String()创建包装对象； 不要改变数据的类型
//
// 用parseInt()或parseFloat()来转换任意类型到number； Number
//
// 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；  注意的是 null和undefined是没有tostring方法
//
// 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
//
// typeof操作符可以判断出number、boolean、string、function和undefined；
//
// 判断Array要使用Array.isArray(arr)；
//
// 判断null请使用myVar === null；
//
// 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
//
// 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。


//number对象转换成string的时候需要注意的是
123..toString(); //注意是两个点
(123).toString(); //或者就是用括号括起来
