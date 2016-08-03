//ES6中新增加一种函数 箭头函数 Arrow Function 箭头函数

x => x * x;
//相当于下面的

function (x){
    return x * x;
}
//箭头函数相当于匿名函数，简化了函数定义。
//x表示的就是匿名函数的参数
x => {
    if(x>0){
        return true;
    }else{
        reutrn false;
    }
}

//当存在多个参数的时候 参数需要用括号 包起来

(x,y) => {
    if(x>y){
        return -1;
    }else{
        return 1
    }
}

//存在可变参数的时候
(x,y,...rest)=>{
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

//如果匿名函数  需要返回一个对象
x => {foo:x}  //这样就会报错  函数体和对象{}会冲突

x => {{foo:x}} //在函数体中 将对象包括起来



var JV = {
    birth: 1993,
    getAge: function () {
        var b = this.birth; // 1993
        //使用新的箭头函数  完全避免this指向的问题  无参数的匿名函数
        var fn = () => new Date.getFullYear - this.birth;
        var fn = function () {
            //hack写法就是  var that = this
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
