//js 中的sort方法介绍
//php中的排序很人性化 就是用户可以根据自定义来进行设置
//但是基于js奇葩的个性  有的一说了

var demo1 = ['Google','Apple','Microsoft'].sort();
//Apple Google Miscrosoft
var demo2 = ['Google','apple','Microsoft'].sort();
//Google Microsoft apple 根据ASCII中 小写字母在大写字母后面

var demo3 = [10, 20, 1, 2].sort(); // [1, 10, 2, 20];
//这是因为sort方法在使用过程中先将每个数字都string成了字符串
//'10'的ASCII比2要小 所以在使用纯数字对sort进行排序的时候需要特别注意

var demo4 = [10,20,1,2];
demo4.sort(function(x,y){
    if(x>y){
        return 1;
    }else if (x==y) {
        return 0;
    }else{
        return -1;
    }
});
//忽略大小写排序  其实就是先将字母统一成一个规则下 然后在这个规则下进行排序算法 toUpperCase 变成大写  toLowercase 小写
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
//sort()方法会直接对Array进行修改，它返回的结果仍是当前Array：
