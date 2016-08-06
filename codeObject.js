//js是不区分类和实例的  是通过原型prototype来实现面向对象编程
//JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，
//所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。 原型链

var Student = {
    name: 'student',
    height: 1.9,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var jv = {
    name:'jv'
};

//其实是讲jv的原型指向了 student对象 即继承了student的方法和属性 如果没有在jv类中重写方法
//那就会按照student输出
//jv.__proto__ = Student;

//但是我们尽量不要在js代码中直接去修改对象的原型 这样会导致代码混乱
//可以使用  Object.create() 或者其他方法
function createStudent(name)
{
    var s = Object.create(Student);
    s.name = name;
    return s;
}
var jv = createStudent('jv');
//jv.__proto__ = Student;
console.log(jv.height);
console.log(jv.name);
console.log(jv.__proto__ === Student);  //其实原型还是student 但是换了一种方式
