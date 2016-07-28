//es6 中 Map数据结构介绍
//Map是一组键值对 具有极快的查找速度

var m = new Map([['Michael',95],['JV',100]]);
//map 中存储的是对象
console.log(m.get('JV'));

var m = new Map();
m.set('Adams',22);
m.set('Adams',44);
m.set('jv',44);


m.has('Adams');

m.delete('jv');

//set 是一组key集合 但是不存储value 在set中key是不重复的


var s = new Set();
var s2 = new Set([1,2,3]);

//set 类型的具有add 和 delete方法 add不会重复插入相同的key

//遍历Map和set 方法可以使用iterable  是一种新的 for ... of

//var arr = [1,2,3];
var map = new Map([['jv',2],['jva',22],['jvss',222]]);
for (var i of map) {
    console.log(i);
}
//for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。
//一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
//然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array为例：
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element);
});
//Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    alert(element);
});
//Map的回调函数参数依次为value、key和map本身：
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});
