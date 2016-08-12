//js 操作表单
//对于单选框和复选框，value属性返回的永远是HTML预设的值，
//而我们需要获得的实际是用户是否“勾上了”选项，所以应该用checked判断：

//H5新增许多大量的标准控件 常用的包括date datetime datetime-local color 都使用input
function checkForm() {
    var pwd = document.getElementById('password');
    // 把用户输入的明文变为MD5:
    pwd.value = toMD5(pwd.value);  //但是这样做会把 * 变成MD5加密后的32个*   此时可以使用hidden来处理一下
    // 继续下一步:
    // var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    return true;
}
