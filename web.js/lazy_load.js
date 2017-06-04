//惰性载入表示函数执行的分支仅会发生一次。

//第一种：在函数被调用时再处理函数。在第一次调用的过程中，该函数会被覆盖为另外一个按合适方式执行的函数。

function createXHR()
{
    if(typeof XMLHttpRequest != 'undefined'){
        createXHR = function(){
            return new XMLHttpRequest();
        };
    }else if(typeof ActiveXObject != 'undefined'){
        createXHR = function(){
            if(typeof arguments.callee.activeXString != 'string'){
                var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],i,len;
                for(i=0,len=version.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                    }catch(error){
                        
                    }

                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    }else{
        createXHR = function(){
            throw new Error("No XHR object avilable");
        };
    }

    return createXHR();
}

//使用闭包进行处理
var create = (function(){
    if(typeof XMLHttpRequest != 'undefined'){
        return function(){
            return new XMLHttpRequest();
        };
    }else if(typeof ActiveXObject != 'undefined'){
       return function(){
            if(typeof arguments.callee.activeXString != 'string'){
                var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'],i,len;
                for(i=0,len=version.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                    }catch(error){
                        
                    }

                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        };
    }else{
        return function(){
            throw new Error("No XHR object avilable");
        };
    }
})();


