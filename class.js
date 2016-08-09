//ES6中使用class来实现继承 使用class能够让定义更简单

//使用函数来实现的方式

function Student(name){
    this.name = name;
}
Student.prototype.hello = function(){
    console.log(this.name+'hello');
};

//使用ES6中的class 来实现

class Student {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("hello "+ tihs.name);
    }
}

//class继承  使用class的最大好处其实就是继承方便
//直接使用extend实现

class PrimaryStudent extends Student{
    constructor(name,grade){
        super(name); //super方法是调用父类的重罚
        this.grade = grade ;
    }
    myGrade(){
        console.log("i'm in "+this.grade);
    }
}
