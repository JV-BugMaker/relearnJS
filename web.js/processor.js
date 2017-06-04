//函数节流

var processor = {
    timeoutId:null,

    performProcessing:function(){
        //实际执行的代码,
    },

    process:function(){
        clearTimeout(this.timeoutId);

        var that = this;
        this.timeoutId =  setTimeout(function() {
            that.performProcessing
        }, 100);
    }
};