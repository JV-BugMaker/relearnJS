function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};


function PrimaryStudent(props)
{
    Student.call(this,props);
    this.grade = props.grade || 1;
}
//调用了Student构造函数不等于继承了Student，PrimaryStudent创建的对象的原型是：
//new PrimaryStudent --->PrimaryStudent.prototype --->Object.prototype --->null
//需要修改原型链为
//new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
//我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向Student.prototype。
//为了实现这一点，参考道爷（就是发明JSON的那个道格拉斯）的代码，
//中间对象可以用一个空函数F来实现


// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;
// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();
// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;
// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

//封装一下这个函数 隐藏F函数
function inherits(Child, Parent) {
    var F = function () {};
    //F函数就是一个桥接的作用 避免直接粗暴的在“父类”上面修改原型等操作
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    //子类需要将构造函数指向自己本身 
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// JavaScript的原型继承实现方式就是：
//
// 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
//
// 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
//
// 继续在新的构造函数的原型上定义新方法。
