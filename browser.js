//浏览器dom
//window对象即表示全局变量 又表示浏览器窗口

// window对象有innerHeight和innerWidth属性，可以获取浏览器窗口的内部宽度和高度。
// 内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽和高
//兼容性 ie<=8  不支持

window.innerWidth
window.innerHeight

//对应的还有outerHeight和outerWidth 整个浏览器的高宽

window.outerWidth
window.outerHeight

//navigator 对象 表示浏览器的信息 最常用的属性
navigator.appName //浏览器名字
navigator.appVersion //浏览器版本
navigator.language //浏览器设置的语言
navigator.platform //浏览器支持的平台
navigator.userAgent //浏览器设定的user-agent字符串


var width = window.innerWidth || document.body.clientWidth; //考虑浏览器的兼容性的写法

//screen对象表示屏幕信息 常用的属性有
screen.width  //屏幕宽度 以像素为单位
screen.height  //屏幕高度 以像素为单位
screen.colorDepth //返回屏幕色位数 如 8 16 24

//location 对象表示当前页面的URL信息
location.href //
location.protocol //获得协议
location.host //获得主机
location.port //获得端口
location.pathname //获得路径
location.search //参数值
location.hash //锚点  #

location.assign(); //加载一个新的页面
location.reload() ;//重新加载本页面


//document 对象表示文档
//document表示整个dom树的root 根节点

document.getElementById()  //按照id区获取dom树种的对象
document.getElementByTagName()  //按照标签名来获取dom对象

//cookie操作
document.cookie;
//服务器在设置Cookie时可以使用httpOnly
//设定了httpOnly的Cookie将不能被JavaScript读取。
//这个行为由浏览器实现，主流浏览器均支持httpOnly选项，IE从IE6 SP1开始支持。


//history 对象保存了浏览器的浏览记录
//JavaScript可以调用history对象的back()或forward ()，
//相当于用户点击了浏览器的“后退”或“前进”按钮。
// 基于现在的web 不在推荐使用history了
