// 鼠标事件
//
// click: 鼠标单击时触发；
// dblclick：鼠标双击时触发；
// mouseenter：鼠标进入时触发；
// mouseleave：鼠标移出时触发；
// mousemove：鼠标在DOM内部移动时触发；
// hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。
//

// 键盘事件
//
// 键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。
//
// keydown：键盘按下时触发；
// keyup：键盘松开时触发；
// keypress：按一次键后触发。

// 其他事件
//
// focus：当DOM获得焦点时触发；
// blur：当DOM失去焦点时触发；
// change：当<input>、<select>或<textarea>的内容改变时触发；
// submit：当<form>提交时触发；
// ready：当页面被载入并且DOM树完成初始化后触发。

// 一个已被绑定的事件可以解除绑定，通过off('click', function)实现：

// 绑定事件:
a.click(function () {
    alert('hello!');
});

// 解除绑定:
a.off('click', function () {
    alert('hello!');
});
// 这是因为两个匿名函数虽然长得一模一样，但是它们是两个不同的函数对象，off('click', function () {...})无法移除已绑定的第一个匿名函数。

// 为了实现移除效果，可以使用off('click')一次性移除已绑定的click事件的所有处理函数。
