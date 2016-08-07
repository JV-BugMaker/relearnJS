//JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象。
//当我们用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，
//如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，
//最后，如果还没有找到，就只能返回undefined。其实这就是原型链  就是不停往上查找

var arr = [1,2,3];
//这个数组模型的原型其实就是
//arr ---> Array.prototype ---> object.prototype  ---> null(原型链到头了)
//因此 原型链上有的方法 我们都能直接调用

function foo()
{
    return false;
}

//foo ---> Function.prototype --->object.prototype ---> null

//构造函数

function Student(name)
{
    this.name = name;
    this.age = 19;
    this.say = function(){
        return "hello "+this.name;
    };
}

//可以这么理解  function是个函数  但是通过 new强制转换成了对象 因此这个函数可以叫构造函数
var jv = new Student('jv');
//jv --->Student.prototype ---> function.prototype--->object.prototype-->null
// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
//jv--->某个对象的constructor（指向Student对象，Student.prototype指向它）--->某个对象（object.prototype指向他）--->null


function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {

  //高级函数中的单列模式 嘻嘻
    return new Student(props || {});
}
