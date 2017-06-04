//函数科里化

//它用于创建已经设置好了一个或多个参数的函数

function add(num1,num2)
{
    return num1+num2;
}

function curriedAdd(num2)
{
    return add(5,num2);
}


function curry(fn)
{
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null,finalArgs);
    };
}