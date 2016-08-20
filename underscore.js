//underscore 第三方类库  实现函数统一方式 能够让object也能实现map或者filter方法
//underscore则提供了一套完善的函数式编程的接口，让我们更方便地在JavaScript中实现函数式编程。

//underscore与其类似，会把自身绑定到唯一的全局变量_上
'use strict';
_.map([1,2,3,4],(x)=>x * x);// [1,4,9,16]
_.map({a:1,b:2},(v,k)=> k + "=" + v); //['a=1','b=2']

//underscore为集合类对象提供了一致的接口。集合类是指Array和Object，暂不支持Map和Set。

var jv = {
    name:'jv',
    age:'23',
    pro:'php',
    say:function(){
        return this.name;
    }
};
//_.map() 返回值都是数组形式 _.mapObject()返回的是对象
_.map(jv,function(v,k){
    return k+"="+v;
});

//every/some every是每个元素都要满足某个条件的时候才会返回true
//some是元素中只有有元素满足条件就会返回true
_.every([1,2,3,4,5,6],(x)=>x>0); //所有元素都>0?
_.some([1,2,3,4,5,6],(x)=>x>5); //一些元素>5
//当传入的是对象的时候 callback函数能够得到value和key
_.every(jv,function(v,k){
    //操作进行判断之后返回

});

//max/min 返回集合中最大值 最小值

_.max([1,2,3,4,5]); //5
_.min([1,2,3,4,5]);  //1
//如果传入的是对象  那max和min就会忽略k，就判断v

_.max({a:1,b:2,c:3}); //3
_.min({a:1,b:2,c:3}); //1

//groupBy 把集合元素按照key归类 key由传入函数返回  也就是说分组处理

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
// {
//   A: [81, 91, 88, 99],
//   B: [75, 77, 66, 72],
//   C: [20, 40, 59]
// }

//shuffle / sample 随机数组
_.shuffle([1,2,3,4,5]); //返回一个打乱的随机数组
// 随机选1个： 默认值是1
_.sample([1, 2, 3, 4, 5, 6]); // 2
// 随机选3个： 参数传入可以控制返回几个
_.sample([1, 2, 3, 4, 5, 6], 3); // [6, 1, 4]

//针对数组 underscore提供很对api 方便更快操作数组
//first/last 就是取数组 第一个元素和最后一个元素
var arr = [1,3,5,4,2,6,7,4];
_.first(arr); //1
_.last(arr);//4
//flatten  接收一个数组，无论这个数组中嵌套多少个数组，flatten最后都会按照一位数组进行返回
_.flatten([1, [2], [3, [[4], [5]]]]); // [1, 2, 3, 4, 5]
//zip 和 unzip 将两个或者多个数组的所有元素按索引对齐 然后按照索引合并成新数组

var names = ['JV','GJW','sb'];
var scores = [100,100,0];
_.zip(names,scores);
//[['jv',100],['gjw',100],['sb',0]]
var arr = [['jv',100],['gjw',100],['sb',0]];
_.unzip(arr);
//分离出两个数组
_.object(names,scores);  //object只是一个函数
//{'JV':100,'GJW':100,'sb':0}
//range
//range()让你快速生成一个序列，不再需要用for循环实现了：
_.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 从1开始小于11：
_.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 从0开始小于30，步长5:
_.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]

// 从0开始大于-10，步长-1:
_.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//实现bind 不能直接使用log是因为调用log传入的this指针是undefined
var log = console.log;
// 调用call并传入console对象作为this:
log.call(console, 'Hello, world!')；

var log =_.bind(console.log,console);
//这样log就可以直接使用了
//partial()就是为一个函数创建偏函数。偏函数是什么东东？看例子：
var pow2N = _.partial(Math.pow, 2);  //就是一个函数的替代品 有些函数写法 或者实现方式比较复杂
pow2N(3); // 8
pow2N(5); // 32
pow2N(10); // 1024
//如果我们不想固定第一个参数，想固定第二个参数怎么办？
//比如，希望创建一个偏函数cube(x)，计算x3，可以用_作占位符，固定住第二个参数：
var cube = _.partial(Math.pow, _, 3);
cube(3); // 27
cube(5); // 125
cube(10); // 1000

//memoize
//如果一个函数调用开销很大，我们就可能希望能把结果缓存下来，以便后续调用时直接获得结果。


//once 保证某个函数仅执行一次
var register = _.once(function () {
    console.log('Register ok!');
});

//delay让函数延时执行 如同setTimeout  简化
_.delay(function(){
    console.log('haha');
},200);


//object

//keys / allKeys
//keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的：
//allKeys()除了object自身的key，还包含从原型链继承下来的：
var jv = {
    name:'jv',
    age:23
};

_.keys(jv); //[name,jv]

// values  和keys()类似，values()返回object自身但不包含原型链继承的所有值：

//mapObject

// mapObject()就是针对object的map版本：


var obj = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
_.mapObject(obj, (v, k) => 100 + v); // { a: 101, b: 102, c: 103 }


// invert()把object的每个key-value来个交换，key变成value，value变成key：
var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};
_.invert(obj); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }

//extend / extendOwn
var a = {name: 'Bob', age: 20};
_.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
// 变量a的内容也改变了：
a; // {name: 'Bob', age: 88, city: 'Beijing'}
//extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性。

// clone 如果我们要复制一个object对象，就可以用clone()方法，它会把原有对象的所有属性都复制到新的对象中：
// clone是一种浅复制 ，就是引用的源对象是同一个
//
// isEqual()对两个object进行深度比较，如果内容完全相同，则返回true：

var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};

o1 === o2; // false
_.isEqual(o1, o2); // true

//underscore提供了把对象包装成能进行链式调用的方法，就是chain()函数：
_.chain([1, 4, 9, 16, 25])
 .map(Math.sqrt)
 .filter(x => x % 2 === 1)
 .value();
// [1, 3, 5]
