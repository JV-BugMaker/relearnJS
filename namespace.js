var MYAPP = MYAPP || {};

//创建子命名空间
MYAPP.event = {};
MYAPP.commonMethod = {
  regExForName:"",
  regExForPhone:"",
  validateName:function(name){

  },
  validatePhone:function(phone){

  }
}
//对象和方法一起声明

MYAPP.event = {
  addListener:function(el,type,callback){

  },
  removeListerner:function(el,type,callback){

  },
  getEvent:function(el,type,callback){

  }
}

MYAPP.event.addListener("jv","shuaige",callback);

function Person(firstName){
  this.firstName = firstName;
}

  Person.prototype.walk = function(){
    console.log("i am walking");
  }

  Person.prototype.sayHello = function(){
    console.log(" i say hello"+this.firstName);
  }

function Student(firstName,subject)
{
  //调用父类构造器，确保（使用Function#call）this在调用过程中设置正确
  Person.call(this, subject);
  this.subject = subject
}
