//函数绑定
function bind(fn,context)
{
    return function(){
        return fn.apply(context,arguments);
    }
}
//一个简单的bind()函数接受一个函数和一个环境，并返回一个在给定环境中调用给定函数的函数，并且将所有参数原封不动

