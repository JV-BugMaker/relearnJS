重新学习js--笔记
概览：

一、类型：

	Number（数字）
	String(字符串)
	Boolean（布尔型）
	Fcuntion（函数）
	Object（对象）--undefined、null、Array 都是特殊对象
	Symbol（第六版新加）符号
	Error---？

二、数字
	
	js采用IEEE 754 双精度64位格式 所有数字在js中均用浮点数值表示。
	eg:0.1+0.2 = 0.3000000000000004
	可以使用内置数学对象 Math
	Math.sin(3.5)
	内置parseInt("123",进制) -- 2013之前js不提供第二个参数会返回意外结果。
	parseFloat()只应用与解析十进制。
	NaN ---not a number 可以用isNaN函数来判断这个类型。
	js特殊值 Infinity（正无穷） 和 - Infinity（负无穷） isFinite() 来判断是否为正无穷或者负无穷
三、字符串

	字符串是一串Unicode字符序列。更准确地说，它们是一串UTF-16编码单元的序列，每一个编码单元由一个 16 位二进制数表示。每一个Unicode字符由一个或两个编码单元来表示。
	长度函数length “hello”.length 
	"hello".charAt(0); //h
	"hello".replace("el","le"); //hlelo
	"hello".toUpperCase(); //"HELLO"
	
四、其他类型

	JavaScript 中 null 和 undefined 是不同的，前者表示一个空值（non-value），必须使用null关键字才能访问，后者是“undefined（未定义）”类型的对象，表示一个未初始化的值，也就是还没有被分配的值。我们之后再具体讨论变量，但有一点可以先简单说明一下，JavaScript 允许声明变量但不对其赋值，一个未被赋值的变量就是 undefined 类型。还有一点需要说明的是，undefined 实际上是一个不允许修改的常量。
	JavaScript 包含布尔类型，这个类型的变量有两个可能的值，分别是 true 和 false（两者都是关键字）。根据具体需要，JavaScript 按照如下规则将变量转换成布尔类型：
	1.false、0、空字符串("")、NaN、null 和 undefined 被转换为 false。
	2.所有其他值被转换为 true
	
	学习到变量。	
	
	