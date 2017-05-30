//跨浏览器时间监听兼容方式



var EventUtil = {

    addHandler : function(element,type,handler){
        if(element.addEventListener){
            //第三个参数fanlse 表示冒泡阶段
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type] = handler;
        }
    },
    removeHandler : function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type] = null;
        }
    },
    //获取事件相关元素跨浏览器兼容性写法
    getRelatedTarget:function(event){
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    },  
    //获取按钮事件 跨浏览器
    getButton:function(event){
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;    
            }
        }
    },
    //获取滚轮事件 跨浏览器
    getWheelDalta:function(event){
        if(event.wheelDelta){
            return (client.engine.oprea && client.engine.oprea < 9.5 ? -event.wheelDelta : event.wheelDelta)
        }else{
            return -event.detail * 40;
        }
    },
    //key事件 
    getCharCode:function(event){
        if(typeof event.charCode == "number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    }

}