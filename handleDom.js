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
