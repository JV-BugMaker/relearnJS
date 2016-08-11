//dom操作
//处理的核心操作基本上都是增 删 改 查
//对DOM树处理也是相同的

//对dom操作的时候需要首先去找到该节点

document.getElementById();
//根据ID查找就是 唯一的 DOM节点
document.getElementsByTagName();
document.getElementsByClassName();
//Elements返回的总是一个数组
// 要精确地选择DOM，可以先定位父节点，再从父节点开始选择，以缩小范围。

// 返回ID为'test'的节点：
var test = document.getElementById('test');

// 先定位ID为'test-table'的节点，再返回其内部所有tr节点：
var trs = document.getElementById('test-table').getElementsByTagName('tr');

// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;

//还可以使用querySelector  或者 querySelectorAll() 方法来筛选
//
// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p');


//注意 浏览器兼容性 是 IE8 +


// update node
// 直接对节点文本操作的方法 属性是 innerHtml

var p = document.getElementById('test');
//设置文本
p.innerHtml = "JV";
//设置内部html
p.innerHtml = "<p>哈哈哈哈</p>";

//注意如果dom内部节点是从网络资源过来的就需要注意XSS攻击

//第二种就是修改innerText 和  textContent属性 这样就可以自动对字符串进行过滤

p.innerText = "<script>alert('Hi')</script>";
// HTML被自动编码，无法设置一个<script>节点:
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
// 两者的区别在于 innerText不反悔隐藏元素的文本 但是textContent返回所有文本 并且IE<9不支持


//DOM节点的style属性对应所有的CSS css一些特殊属性 比如 font-size 在js中用驼峰命名法代替
//fontSize
p.style.color = "black";
p.style.fontSize = "14px";


//插入DOM操作
//插入到父节点最后的操作
//parentNode.appendChild
// <!-- HTML结构 -->
// <p id="js">JavaScript</p>
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
// </div>

var js = document.getElementById("js"),
    list = document.getElementById("list");
    list.appendChild(js);
//     <!-- HTML结构 -->
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
//     <p id="js">JavaScript</p>
// </div>
// 创建style
var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);
//插入到子指定的子节点位置

parentElement.insertBefore(newElement,referenceElement);
//子节点就会插入到referenceElement之前

// <!-- HTML结构 -->
// <div id="list">
//     <p id="java">Java</p>
//     <p id="python">Python</p>
//     <p id="scheme">Scheme</p>
// </div>

var list = document.getElementById("list");
var refer = document.getElementById("python");

var js = document.createElement("p");
js.setAttribute("id","js");
js.innerHtml = "javascript";

list.insertBefore(js,refer);

//很多时候，需要循环一个父节点的所有子节点，可以通过迭代children属性实现：
var i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}

//删除DOM
// 要删除一个节点，首先要获得该节点本身以及它的父节点，
// 然后，调用父节点的removeChild把自己删掉：

// 拿到待删除节点:  定位自己
var self = document.getElementById('to-be-removed');
// 拿到父节点:  根据自己的位置 查找父节点
var parent = self.parentElement;
// 删除:  调用父节点方法  
var removed = parent.removeChild(self);
console.log(removed === self);
