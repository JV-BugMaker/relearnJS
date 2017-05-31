function fruits(){}

fruits.prototype = {
    color:'red',
    say:function(){
        console.log('i am '+this.color);
    }
}

banna = {
    color:'yellow'
}

var apple = new fruits;
apple.say();


apple.say.call(banna);
apple.say.apply(banna); //apply是参数不确定下使用 

