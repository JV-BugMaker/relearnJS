//js中 Date中对象来表示时间和日期
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳
//一个非常非常坑爹的地方，就是JavaScript的月份范围用整数表示是0~11 在项目中还真碰到了  操蛋玩意
//还有一个地方需要注意的是 js的时间戳都是带毫秒  也就是说不是PHP中的正常时间戳 所以需要处理
