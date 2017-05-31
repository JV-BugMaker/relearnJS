//使用闭包封装成一个模块
var module = (function(){
    var object = {};  //object
    var value1 = 10;// 变量不会污染环境,而且不会被GC回收

    object.a = value1;
    object.fn = function() {
        console.log(value1);
    };

    return object;
})();

console.log(module);
module.fn();
