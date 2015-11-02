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



