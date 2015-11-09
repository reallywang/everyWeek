##css
 1. css开发技巧
 
    - ：not()给导航条加横线
    - 给body增加line-height,其他元素都会继承此属性，不需要给每个子元素设置。
    - 任意元素垂直居中
 2. SVG 图标

>SVG是一种图形图像矢量格式。Scalable Vector Graphics(可缩放矢量图形)

 SVG的优势：文件小，压缩良好。任意缩放，且不失真。retina屏幕显示良好。设计控制交互和筛选。

 SVG的使用：

 - `<img>`标签使用 
   > <img src="/path/to/img.svg" alt="test svg">
 - 背景图片
     background:url();
 - inline svg
    - 在页面中直接插入svg代码
    <body><!--paste in SVG code，img will show--></body>
    - svg as an <object> 
    <object type="image/svg+xml" data="img.svg" class="logo">
        logo
    </object>
 3. 移动端多屏适应
    
   - 各种像素
    物理像素：显示器上最小的物理显示单元。
    设备独立像素：计算机坐标系统中的一个点，与设备无关。就是css像素。布局像素。
    设备像素比：物理像素和设备独立像素的比。dpr;device pixel ratio;
    js：dpr=window.devicePixelRatio
    位图像素：一个位图像素是栅栏图像最小的数据单元。包含着自身的一些显示信息。
  - retina 1px border
    css设置的border:1px。由于retina的dpr的不同，1px在不同的尺寸的屏幕上的最终呈现也不相同。
  - rem单位的使用
    针对不同屏幕的尺寸和dpr，动态的改变html的font-size。
    rem=document.documentElement.clientWidth*dpr/10;
    dpr=window.devicePixelRatio;
  - 元素的rem
     rem=px/基准值；


