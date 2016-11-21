function coolModule()
{
    var another = [1,2,3];
    function doSomething()
    {
        console.log(something);
    }
    function doAnother()
    {
        console.log(another.join("!"));
    }

    return {
        doSomething:doSomething,
        doAnother:doAnother
    };

}

var foo  = coolModule();
foo.doAnother(); //
foo.doSomething();//



var MyModules = (function Manager(){
    var modules = [];
    function define(name,deps,impl)
    {   
        for(let i = 0;i<deps.length;i++){
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl,deps);
    }
    function get(name)
    {
        return modules[name];
    }
    return {
        define:define,
        get:get
    };
})();


var obj = {
    count:0,
    cool:function coolFn(){
        if(this.count){
            setTimeout(()=>{
                this.count++;
                console.log('awesome');
            },100);

        }
    }
};


//通过绑定this来在闭包函数中正确使用this
var obj = {
    count:0,
    cool:function coolFn(){
        if(this.count){
            setTimeout(function timer(){
                this.count++;
                console.log('awesome');
            }.bind(this),100);

        }
    }
};