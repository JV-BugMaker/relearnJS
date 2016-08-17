var div = $('#test-animates');
// 动画效果：slideDown - 暂停 - 放大 - 暂停 - 缩小
div.slideDown(2000)
   .delay(1000)
   .animate({
       width: '256px',
       height: '256px'
   }, 2000)
   .delay(1000)
   .animate({
       width: '128px',
       height: '128px'
   }, 2000);
//delay 函数表示暂停 多长时间之后继续执行

//需要注意的是在一些情况下动画是没效果的
//有的动画如slideUp()根本没有效果。这是因为jQuery动画的原理是逐渐改变CSS的值，如height从100px逐渐变为0。
//但是很多不是block性质的DOM元素，对它们设置height根本就不起作用，所以动画也就没有效果。

//此外，jQuery也没有实现对background-color的动画效果，用animate()设置background-color也没有效果。
//这种情况下可以使用CSS3的transition实现动画效果。
