1. 用js检测离线/在线状态

`navigator`对象

|API|desp|using|
|---|----|----|
|`navigator.onLine`|布尔值，判断用户是否连接互联网|`if(navigator.onLine){//do something}`|
|事件|`online`or`offline`|`function setColor(){} //根据网络状态更新颜色window.addEventListener('offline',setColor);window.addEventListener('online',setColor);`|

>note:当用户工作断网，WEB应用检测到相应的状态，利用本地Web Storage保存用户状态


2. 使用 Mock.js进行独立于后端的前端开发

Mock.js实现的功能

 - 基于数据模板生成数据
 - 基于HTML模板生成数据
 - 拦截并模拟Ajax请求


Mock的语法规范

 - 数据模板定义Temaplate DTD
数据模板中的每个属性：属性名，生成规则，属性值；
`'name|rule' :value`
rule可选，七种格式：
`'name|min-max':value`;`'name|count':value`
 
 - 数据占位符定义Placeholder DPD 
 占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。
 占位符格式：@占位符 @标示其后的字符串是占位符。

 Mock接口

 Mock.mock(rurl?,rtype?,templete|function(options))

 |Mock.mock(templete)|根据数据模板生成模拟数据|
 |Mock.mock(rurl,templete)|记录数据模板，当拦截到匹配rurl的Ajax请求时，将根据数据模板templete生成模拟数据，并作为响应数据返回|
 |Mock.mock(rurl,function(options))||

3. apply()和call()都是在特定的作用域中调用函数。等同于设置函数体内this对象的值。apply(函数运行的上下文可以是任何对象，数组)
4. 