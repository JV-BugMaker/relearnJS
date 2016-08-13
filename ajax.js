//js 使用源生的写法来实现ajax 异步请求
//Web的运作原理：一次HTTP请求对应一个页面
//AJAX请求是异步执行的，也就是说，要通过回调函数获得响应
//实现JavaScript XMLHttpRequest对象来实现

//请求成功之后的回调函数
function success(response){
    var textarea = document.getElementById('text-response');
    textarea.text = response;
}

function error(code){
    var errarea = document.getElementById('text-response');
    errarea.text = code;
}

//标准的写法
//注意，不要根据浏览器的navigator.userAgent来检测浏览器是否支持某个JavaScript特性，
//一是因为这个字符串本身可以伪造，二是通过IE版本判断JavaScript特性将非常复杂。
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    //IE下使用ActiveXObject
    request = new ActiveXObject('Microsoft.XMLHTTP');
}
//创建了XMLHttpRequest 对象
// var request = new XMLHttpRequest() | new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象
//var request = new XMLHttpRequest();


request.onreadystatechange = function(){
    //状态发生改变的时候 就会回调函数 状态有 2 3 4
    if(request.readyState === 4){
      if (request.status === 200) {
          // 成功，通过responseText拿到响应的文本:
          return success(request.responseText);
      } else {
          // 失败，根据响应码判断失败原因:
          return error(request.status);
      }
    } else {
        //可以根据不同状态做出不同的处理
        // HTTP请求还在继续...
    }
};

//开启异步请求 使用get方式的
request.open('GET','url');
//如果有数据的 以参数的影视传递过去
request.send();

//ajax处于安全考虑 数据请求都是在同源策略下 实现的
//但是这并不是说跨域不能实现
//通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器： nginx服务器来实现
'/proxy?url=http://www.target.com'
// JSONP通常以函数调用的形式返回，例如，返回JavaScript内容如下：


//H5新特性 CORS
//Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。
//Access-Control-Allow-Origin
//取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin，决定权始终在对方手中。
// POST的Content-Type类型
// 仅限application/x-www-form-urlencoded、multipart/form-data和text/plain


/* CSS */
@font-face {
  font-family: 'FontAwesome';
  src: url('http://cdn.com/fonts/fontawesome.ttf') format('truetype');
}
//引用第三方CDN引用 如果对方没设置 Access-Control-Allow-Origin 字体无法引用
//由于以POST、PUT方式传送JSON格式的数据在REST中很常见，
//所以要跨域正确处理POST和PUT请求，服务器端必须正确响应OPTIONS请求。
