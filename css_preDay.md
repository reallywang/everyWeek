##css
 1. css开发技巧
 
    - ：not()给导航条加横线
    - 给body增加line-height,其他元素都会继承此属性，不需要给每个子元素设置。
    - 任意元素垂直居中
2. SVG 图标

>SVG是一种图形图像矢量格式。Scalable Vector Graphics(可缩放矢量图形)

SVG的优势：文件小，压缩良好。任意缩放，且不失真。retina屏幕显示良好。设计控制交互和筛选。

SVG的使用：
    - <img>标签使用 
    <img src="/path/to/img.svg" alt="test svg">
    - 背景图片
     background:url();
    - inline svg
    在页面中直接插入svg代码
    <body><!--paste in SVG code，img will show--></body>
    - svg as an <object> 
    <object type="image/svg+xml" data="img.svg" class="logo">
        logo
    </object>

