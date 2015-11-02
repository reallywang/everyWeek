##边学习markdown语法 
###1. 词法结构
>用来描述如何使用这门语言来编写程序

**字符集**:js程序是使用unicode字符集编码的

>unicode（统一码，万国码，单一码）是一种在**计算机上使用的字符编码**，他为解决传统的字符编码的局限而产生的，为每种语言中的每个字符设定了统一且唯一的二进制编码，已满足跨语言，跨平台进行文本转换和处理的要求。


>UTF UCS Transformation Format *Unicode 字符集转换格式，即怎样将unicode定义的数字转换成程序数据*


*utf-8,utf-16,utf-32都是将数字转换到程序数据的编码方案*

>utf-8编码是以字节为单位对unicode进行编码。
>
>[unicode说明](http://baike.baidu.com/link?url=4W9_8ACrdRYPz7sdJ19nH5bopn42NfmT6DJg73aS3ysBK71bqPdGe5JxbFH8F8jSP5bCkb7KM--PqoQTt_oVAK "unicode简介")

  |类别|最长字符数|说明|编码方式|
  |---|---|---|
  |UNICODE|0-0x10FFFF|所有字符的编码|现在统一使用的是UCS-2,16位编码空间，每个字符占用2个字节,U+16进制
  |UTF-8||八进制的UNICODE转换编码格式，针对UNICODE的可变长度的字元编码|采八位用至少六个字节为字符编码,八位为单位进行编码
    |ASCII|128个字符|英文字符和二进制的对应|只规定了英文字符与，标点之间的关系|


>In utf-8,前128个字符存储在单一的字节中，使用字符串而不规定他的编码是没有任何意义的。设置如下格式告诉用户代理使用的编码格式：Content-Type=text/plain;charset="UTF-8"
 
**js区分大小写**

**注释**

//单行注释；
/**/跨行文本

**标识符**

标识符就是一个名字，用来对变量和函数进行命名，js中的标示符必须以字母，下划线_或者美元符$开始。


**保留字**

语言中定义过的字，开发者不能再用作变量名和函数名的字。
******
###2. 类型，值和变量
>数据类型：*能够表示并操作的值类型*


编程语言两个特性：1. 能够支持多种数据类型；2. 变量的工作机制；
*变量的工作机制：当程序需要将数据保存起来以备将来使用时，便将其赋值给一个变量。变量是一个值的符号名称，可以通过名称来获得对值的引用。*

js中的变量是无类型的，可以被赋予任何类型的值，同一个变量也可以被赋予不同类型的值。


**js的数据类型**

原始类型和对象类型

原始类型：数字，字符串，布尔,null,undefined

对象类型: 对象（函数，数组）


js是面向对象的编程，不严格的讲，我们不需要全局的定义函数来操作不同类型的值。数据类型本身可以定义方法来使用值。

**数字**

整数和浮点数

- 基本运算

	运算符：+ - * / %（取余）

- 复杂运算

 	通过作为Math对象的属性定义的函数和常量来实现。

	Math.pow(2,35); //幂运算

	Math.round(.6);//四舍五入

	.ceil(x)//向上取整 .floor(x) //向下取整

	.abs(x)取绝对值
	.max() .min();

	.random()生成0~1之间的伪随机数。

	Math.PI // 圆周率 Math.E //e自然对数的底数

	sqrt,sin,log,exp....

- 容错
	
	- 情形

	     |overflow|当数字运算结果超出了js所能表示的数字上限；*js返回Infinity无穷*|
		 |---|----|
		|underflow|当运算结果无限接近于0,并比js所能表示的最小值还小；*此种情况下会返回0*|
	|被零整除|js并不报错，只是简单的返回无穷大；但是0/0=NaN;|
	二进制浮点数并不能精确的表示类似.1这样的实数

	- 处理
	
	|overflow|返回无穷大|
	|---|----|
	|underflow|返回0
	|被0整除|返回无穷大|
	|返回NaN的情况|0/0；Infinity/Infinity,任一负数做开方；算术运算符与不是数字或者无法转换成数字的操作数一起使用时；
			

  NaN与任何值均不相等，包括自身；0===-0；else作为除数的结果

**日期和时间**

Date()构造函数用来创建表示时间和日期的对象。

这些对象提供了内置API来：date=new Date();

|Date方法|功能说明|
|---|----|
|date.getYear()|	返回年份
|date.getTime()|	返回自1970年1月1日0:0:0至今的毫秒值
|date.valueOf()|	返回1970年1月1日0:0:0至今的毫秒值|
|date.toString()|	返回日期时间的字符串
|date.toDateString()|	返回日期的字符串
|date.toTimeString()|	返回时间的字符串
|date.toLocaleString()|	返回日期时间的本地字符串
|date.toLocaleDateString()|	返回日期的本地字符串
|date.toLocaleTimeString()|	返回时间的本地字符串
|date.toDMTString()|	返回日期时间的UTC字符串
|date.toUTCString()|	返回日期时间的UTC字符串
|date.getVarDate()|	返回支持COM组件的日期值
|date.getTimezoneOffset()|	返回当前时区
|date.getFullYear()|	返回4位数年份值
|date.getMonth()|	返回月份值
|date.getDate()|	返回日期值（1~31）
|date.getDay()|	返回星期值（0~6）
|date.getHours()|	返回小时值
|date.getMinutes()|返回分钟值
		date.getSeconds()	返回秒值
		date.getMilliseconds()	返回毫秒值
		date.getUTCFullYear()	返回UTC4位数年份值
		date.getUTCMonth()	返回UTC月份值
		date.getUTCDate()	返回UTC（世界标准时间）日期值
		date.getUTCDay()	返回UTC星期值
		date.getUTCHours()	返回UTC小时值
		date.getUTCMinutes()	返回UTC分钟值
		date.getUTCSeconds()	返回UTC秒值
		date.getUTCMilliseconds()	返回UTC毫秒
		设置：
		date.setYear(v)	设置年份
		date.setTime(v)	设置时间
		date.setFullYear(v)	设置4位数年份值
		date.setMonth(v)	设置月份值
		date.setDate(v)	设置日期值（1~31）
		date.setDay(v)	设置星期值（0~6）
		date.setHours(v)	设置小时值
		date.setMinutes(v)	设置分钟值
		date.setSeconds(v)	设置秒值
		date.setMilliseconds(v)	设置毫秒值
		date.setUTCFullYear(v)	设置UTC4位数年份值
		date.setUTCMonth(v)	设置UTC月份值
		date.setUTCDate(v)	设置UTC（世界标准时间）日期值
		date.setUTCDay(v)	设置UTC星期值
		date.setUTCHours(v)	设置UTC小时值
		date.setUTCMinutes(v)	设置UTC分钟值
		date.setUTCSeconds(v)	设置UTC秒值
		date.setUTCMilliseconds(v)	设置UTC毫秒值


**文本字符串**

字符串（string）是一组由16位值组成的不可变的有序序列。每个字符通常来自于Unicode字符集；js通过字符串类型来表示文本。字符串的长度是其所含16位值的个数。js中并没有表示单个字符的字符型

- 字符串直接量
	
		由单引号或双引号阔起来的字符序列；

	当单引号界定字符串时，需要格外小心英文中的缩写和所有格写法。注意使用\转义

	js代码和HTML混合时，最好两个有各自独立的代码风格。

- 转义字符
	
	用‘\’改变原有字面意思

-	字符串的方法

			'+'：拼接字符串
			length:返回字符串的长度
			charAt():取出一个字符串中指定位置的字符；参数长度大于字符串的长度，返回空字符串“”	；
			charCodeAt():返回字符串中指定位置的字符的编码；参数长度大一字符串的长度，返回NaN；
			concat():将一个或多个值连接成一个字符串；不改变原始的字符串
			indexOf(substring,startIndex):在指定字符串中寻找一个字符或子串；返回一个整数值，指出首次出现子字符的位置，如若没有找到则返回-1；如果startIndex<0,startIndex被当做0；
			lastIndexOf:同上。从右向左查找
			localeCompare()函数用于比较两个字符串，并返回以数字形式表示的比较结果，该比较基于本地区域设置的字符顺序。stringObject.localeCompare(str):str指定用于比较的字符串。返回值为Number类型：-1 ，0， 1；如何当前字符串排在排在str之后，则返回1；相等则返回0；该比较基于本地区域设置的字符顺序。
			slice():返回字符串的一个切片或子串；string.slice(strPos,endPos);若Pos<0:Pos=Pos+length;范围无效，则返回空；
			split(separator [,limit ]):将字符串分割成数组；separator：指定的正则表达式或字符串；limit：限制返回的数组中的元素个数的最大值。Limite<0；limite将被忽略；
			substr(startIndex [,length]):提取字符串的一个子串；startIndex：字符串指定部分的开头的索引。length返回的子字符串片段中包含的字符数。
			substring(startIndex,endIndex):返回字符串的一个子串。startIndex：字符串指定部分的开头的索引。endIndex指向字符串指定部分的结尾的索引（不包含此索引）；starInde=endI返回空字符串。index为负数或NaN，index=0；
			toLowerCase():小写； toUpperCase():大写
			trim():去前后空格

- 模式匹配

	模式匹配：RegExp()对象构造函数对象来表示文本匹配模式的对象。正则表达式。对象和字符串都可以表示。

	- 正则表达式的创建：
		

			对象：var pattern=new RegExp("s$");

			直接量：var pattern=/s$/;直接量会在执行到时，转换成一个RegExp对象。

	- 正则表达式的模式规则：
	
		>模式规则是有字符串序列组成的，包括所有的字母,数字；正则表达式中的所有的字母和数字都是按照字面的含义进行匹配的。非字母的匹配，需要加\进行转义、可以在每个标点前都加上反斜线进行转义；
		

		各种字符和元字符的相关介绍：
		

		1 :直接量字符：包括数字和字母，t,r,f,n,v
			字母和数字字符         自身 

				\o                    NUL字符（\u0000）
				\t                      制表符
				\n	                    换行符
			       \v                   垂直制表符
				\f                      换页符
				\r                      回车符
				\xnn                    由十六进制数nn指定的拉丁字符
				\uxxxx                  由十六进制数xxxx指定的unicode字符
				\cX                      控制字符^X
      
        2:字符类：
		将直接量字符单独放在[]内，就组成了字符类;

		一个字符类，可以匹配他所包含的任意字符。
			

			字符                  匹配      
			[...]                括号内的任意字符

			[^...]               不在括号内的字符
			.                    除换行符和其他Unicode行终止符之外的任意字符

             \w                  任何ASCII字符组成的单词，[a-zA-Z0-9]
		
			 \W                  任何不是ASCII字符组成的单词。[^a-zA-Z0-9]
 
			 \s                  任何Unicode空白符
             \S				     任何非unicode空白符的字符
          	 \d                  任何ASCII数字[0-9]
			 \D                  任何非ASCII数字[^0-9]

        3:重复字符语法

			字符                    含义

			{n,m}            匹配前一项至少n次，至多m次
			{n,}             匹配前一项n次或更多次
			{n}              匹配前一项n次
			?                匹配前一项0次或者1次{0,1}
			+                匹配前一项1次或者多次{1，}
			*                匹配前一项0次或者多次
			* 或者?可以匹配0次前一项 ；表中列出的是贪婪匹配，尽可能多的匹配重复字符。非贪婪的重复只需在要匹配的字符后加？即可。
			
     ====
         4：选择，分组，引用

			|  用于分割供选择的字符

			（）的作用：1.把单独的项组合成一个子表达式。  2.在完整的模式中定义子模式
			
			
5：正则表达式中的锚字符
>指定匹配的位置
	     
|符号|含义|
|---|----|
|`^`|开头匹配开头字符|
|`$`|匹配字符的结尾|
|`\b`|匹配一个单词的边界，就是位于`\w`和`\W`之间的字符，或位于字符`\w`和文本开头或结尾的位置|
|`\B`|匹配非单词边界的位置|
6:指定匹配规则 

|字符|含义|
|----|----|
|`g`|全局匹配|
|`i`|不区分大小写的匹配|
|`m`|执行多行的匹配|

7：用于模式匹配的字符串的方法

|方法|参数|返回值|描述|
|----|---|---|---|
|search（）|正则表达式|第一个与之匹配的子串的位置，若没找到则返回-1||
|replace（）|参数1：正则；参数2：要进行替换的字符串|根据正则表达式进行文字替换后的字符串的复制|
|match()|正则表达式|由匹配结果返回的数组|设置匹配规则返回的则是所有结果组成的数组如果传入的正则表达式是非全局的匹配,返回的数组中带有index和input属性|
|split（）|分割符，或正正则表达式|数组|


** 布尔值**

>判断真假，是否，开关； 只有两个值：true false;任何值都可以被转化成布尔值


**undefined和null**

######均表示值的空缺，typeof undefined=undefined;;typeof null=object;

######undefined\==object return false ;undefined===null return false;
######将他们赋值给变量或者属性，或将他们传入函数作为参数，做好使用的是null

**全局对象**

|分类|值|
|---|---|
|值属性的全局对象|Infinity,NaN,undefined|
|函数属性的全局对象|eval(x),isFinite(number),isNaN(number),parseFloat(string),parseInt(string,radix)|
|URI处理函数|encode(string,unescapedSet),decode(string,reservedSet),decodeURI(encodeURI),decodeURIComponent(encodeURIComponent),encodeURI(uri),encodeURIComponent(uriCompent)|
|构造函数属性的全局函数|Array(),|
