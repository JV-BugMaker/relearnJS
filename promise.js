//promise
//js中所有的代码都是单线程的
//单线程的操作  导致js中涉及到网络资源的请求的时候 回调函数

// function callback(ret){
//     console.log(ret);
// }
// //单线程  使用回调函数
// setTimeout(callback,1000);
// console.log("show promise");


//Promise有各种开源实现，在ES6中被统一规范，由浏览器直接支持
new Promise(function(resolve, reject) {
    //执行成功就调用 resolve函数  执行失败就调用reject函数
    console.log("promise start");
    //random() 方法可返回介于 0 ~ 1 之间的一个随机数。  * n  就是返回 0~n的随机数
    var timeout = Math.random() * 2;
    console.log("set timeout " +timeout+ "seconds");
    setTimeout(function(){
      if (timeout < 1) {
          console.log('call resolve()...');
          resolve('200 OK');
      }
      else {
          console.log('call reject()...');
          reject('timeout in ' +timeout  + ' seconds.');
      }
    },timeout*1000);


}).then(function(){
    console.log("Done");
}).catch(function(reason){
    console.log("error "+reason);
});
// //Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了：
// //只管触发代码  不去关心结果   不影响后面的代码的执行 效率比较高
console.log("exec there");

//因此在不关心结果的js代码中  我们可以使用串行的方式来使代码按照逻辑执行
// job1.then(job2).then(job3).catch(handleError);

function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        // 即实现了 对传入参数的计算之后 进行返回
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        //第三个参数是作为回调函数的参数 obj传入
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
});

p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    log('Got value: ' + result);
});



//promise 实现并行计划


var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    //setTimeout(resolve, 500, 'P2');
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:  但是这样会存在一个 如果发生网络异常 一个promise丢失的话
// 那这个体验就不是很好 或者说 有个处理非常耗时 所以p1或者p2中只要有一个完成就先完成
// 参数一 是传入的一个数组参数 返回的也是一个数组 结果数组
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});

//模拟的时候 可以让p1和p2 有时间差
//
Promise.race([p1, p2]).then(function (result) {
    //race 参数和all 第一个都是一个promise对象组成的需要并行处理的数组
    //但是这边就是返回 就是先处理之后的结果
    console.log(result); // 'P1'
});
