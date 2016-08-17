//给jQuery对象绑定一个新方法是通过扩展$.fn对象实现的。

$.fn.highlight = function () {
    // this已绑定为当前jQuery对象:
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this;
    //return this 是保持了jquery链式写法风格统一了  因此我们在编写 都要不把jquery对象 返回
};

//带参数的扩展函数
$.fn.highlight = function (options) {
    // 要考虑到各种情况:
    // options为undefined
    // options只有部分key
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
};


//另一种方法是使用jQuery提供的辅助方法$.extend(target, obj1, obj2, ...)，
//它把多个object对象的属性合并到第一个target对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高：

// 把默认值和用户传入的options合并到对象{}中并返回:
var opts = $.extend({}, {
    backgroundColor: '#00a8e6',
    color: '#ffffff'
}, options);


$.fn.highlight = function (options) {
    // 合并默认值和用户设定值: 使用了extend方法
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
};

// 设定默认值:  只需要在开始的时候设定一下默认值  或者在配置文件中指定
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
};

// 1.给$.fn绑定函数，实现插件的代码逻辑；
// 2.插件函数最后要return this;以支持链式调用；
// 3.插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
// 4.用户在调用时可传入设定值以便覆盖默认值。


$.fn.external = function () {
    // return返回的each()返回结果，支持链式调用:
    return this.filter('a').each(function () {
        // 注意: each()内部的回调函数的this绑定为DOM本身!
        var a = $(this);
        var url = a.attr('href');
        if (url && (url.indexOf('http://')===0 || url.indexOf('https://')===0)) {
            a.attr('href', '#0')
             .removeAttr('target')
             .append(' <i class="uk-icon-external-link"></i>')
             .click(function () {
                if(confirm('你确定要前往' + url + '？')) {
                    window.open(url);
                }
            });
        }
    });
};
//编写的扩展方法能支持链式调用、具备默认值和过滤特定元素，使得扩展方法看上去和jQuery本身的方法没有什么区别。
