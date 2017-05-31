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

// console.log(module);
module.fn();


//闭包中的this 问题

var a = {
	b: function() {
		(function() {
			console.log(this);// window
		})();
		console.log(this);// a对象
	}
};

a.b();
// 在匿名函数中，以及直接通过函数名调用的函数中，this始终是window，除非通过apply或者call改变过值
var name = "Im window";
var obj = {
	name:"Im obj",
	aaa: function () {

		console.log(this);// obj

		function werw() {
			// 这里的this始终指向window
			console.log(this.name);
		}

		werw();// Im window 直接通过函数名调用的函数
		return werw;
	}
};

obj.aaa()();// window
// 等同
(obj.aaa())();// window


console.log('=============================');

var a = {
	b: function() {
		var that = this;
		(function() {
			console.log(that);
		})();
        //有瑕疵
		console.log(this);
	}
};

a.b();

console.log('=============================');

var a = {
	b: function() {
		(function() {
            //this 向上查找   同名遮蔽
			console.log(this);
		})();
		console.log(this);
	}
};

(a.b = a.b)();


var name = "The Window";
var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
};
console.log(object.getNameFunc()());
//the window 


　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this; //object == this
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
console.log(object.getNameFunc()());
//object


//闭包的调用 必须要上下文  联系上下文 能对闭包中的this 理解通透