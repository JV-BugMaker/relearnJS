'use strict';
//ES6 数组的解构赋值  本质上属于“模式匹配” 只要等号两边的模式相同 左边的赋值于对应的变量
var arr[a,b,c] = [1,2,3];

let [foo,[[bar],baz]] = [1,[[2],3]];

let [,,third] = [1,2,3];
//third 3

let [head,...tail] = [1,2,3,4];
//head 1
//tail [2,3,4]


//如果解构失败 变量值就会变成undefined
var [foo] = [];
var [boo,foo] = [1];
//上述情况就是解构不成功 变量值 就会变成undefined

//还有一种情况是不完全解构 即等号左边的模式 只匹配一部分等号右边的数组  这种情况下解构依旧成功

let [a,b] = [1,2,3];
//a --1 b--2

let [a,b,c] = [1,[2,3],4];
// a --1 b --[2] c --4

//如果等号右边不是数组 严格上说 不是可遍历的结构 将会报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};


//对于set结构  也可以使用 数组解构的方式进行赋值

let [a,b,c] = new Set(["a","b","c"]);
//a -- "a"


//事实上 只要某种数据结构具有Iterator接口 都可以采用数组形式的解构赋值
//fibs具有迭代功能函数
function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5

//解构赋值允许 指定默认值
var [foo = true] = [];

let [x,y='b'] = ['a'];
//x -- 'a'  y -- 'b'

//如果一个数组成员不严格===等于undefined，默认值是不会生效的
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

var [x = 1] = [undefined];
x // 1

var [x = 1] = [null];
x // null
//惰性 求值  ---- 即只有在用到的时候才会求值

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError

//解构不仅可以用于数组 还可以用于对象

var {foo,bar} = {foo:"aaa",bar:"bbb"};
//foo -- aaa bar --- bbb

//数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
