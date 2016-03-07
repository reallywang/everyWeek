### 事件

    1. 事件流三个阶段

    2. IE和W3C不同的解绑事件的方式

    3. 各种优缺点

**事件流**：从页面中接收事件的顺序或事件在页面中传播的顺序。


*事件冒泡* ：IE的事件流 event bubbling 事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的节点。

*事件捕获* : event caputering 在事件到达特定目标前捕获他。

**DOM事件流**：（DOM2级事件流 ）三个阶段：事件捕获---处于目标---事件冒泡。


**事件处理程序**：响应某个事件的函数。

    1. html事件处理程序

    使用一个与相应事件处理程序同名的ＨＴＭＬ特性来指定。

    `<input type = "button" value = "click me" onclick = "alert('clicked')"/>` 

 
    缺点：              

>> *时差* （用户在HTML元素一出现在页面上就触发事件，但当时的事件处理程序创建
尚不具备执行的条件）

>>* HTML代码和js紧密耦合，不利于维护 *

    2. DOM0级事件处理程序

    将一个函数赋值给一个事件处理程序属性。将一个元素的事件处理程序属性值赋值为函数。

    `var btn = document.getElementById("myBtn");`

    `btn.onclick = function(){
        alert('Clicked');
        }`

    解除绑定：`btn.onclick = null;`

    优点：简单；所有浏览器均支持；

    缺点: 处理事件程序不能重复添加，重复添加后面的事件方法会覆盖前面定义的事件

    3. DOM2级事件处理程序

    绑定：addEventListener(eventName,handlerFun,bool);
          事件名称，事件处理程序的函数，布尔值（true捕获阶段调用事件处理程序） 
    
    解除：removeEventListener(eventName,handlerFun,bool);

    优点：添加多个事件处理程序

    缺点：事件处理程序不能用匿名函数

    4.IE事件处理程序（<= IE8）冒泡

    绑定: attachEvent('事件处理程序名称'，'事件处理程序函数')

    解除：detachEvent(//同样参数);


> >**事件处理程序名称：on + 事件名称;attachEvent绑定多个事件逆序执行**

    5. 兼容浏览器的事件处理程序

    var EventUtil = {
        addHandler:function(element,type,handler){

            },
    };


    








### 事件代理和委托

    1. 原理

    2. 优缺点


### 函数闭包

    1. 什么情况下出现闭包

    2. 闭包的使用场景

    3. 如何释放被闭包的变量内存

    4. 闭包的优缺点

###前端性能优化


###Function.bind函数

    1. 作用

###跨域

    1. 场景

    2. 类别

    3. 优缺点


###JSONP

    1. 原理

    2. 使用

###设计模式

##CSS

###垂直居中

### 自适应布局


