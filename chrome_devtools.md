##chrome  开发者工具的使用

1. 打开 ctrl+shift+I
2. 面板上的工具
- Elements（元素）
- Resources（资源）
- Network(网络)
- Sources(源文件)
- Timeline(时间轴)
- Profiles(配置)
- Audits(审计)
- console（控制台）
快速切换：Ctrl+'['/']';

3. 功能介绍
    Elements: 
      - 查看DOM元素和动态编辑样式及尝试不同的布局。
      - 利用console面板快速直达元素：`inspect();`, `Ctrl+Shift+c`,`直接点击图标`
      - 文档的DOM节点的快速浏览：方向键或双击鼠标。同时，相应的节点的样式也同样展示。底部同时会出现节点的面包屑导航条。
      - 可以拖动节点，移动其在DOM树中的位置。删除节点，选中元素后按键delete。ctrl+Z撤销操作。
      - 查看元素事件监听器
       在Event Listener面板中查看。
    
    Console:
        - 打印开发过程中的诊断信息
            console API:console.log(),console.profile();
        - 文档和开发者工具之间的shell命令接口
            直接使用command line API.$()：选择元素；console.profile()CPU分析。
        - 打开控制台
            Ctrl+shift+i
        - 清空控制台的历史
            ctrl+l
        - 控制台堆积相同的输出
        - console.log()打印元素以html片段的形式呈现；console.dir()打印元素以JSON格式的呈现；
        - css格式化控制台的输出
    
    Debugging javascript:

        - 添加断点 sources panel ,点击代码的line gutter
        - 移除断点，点击断点指示器的蓝色标记。
        - 设置条件断点。右击断点指示器，选择编辑断点，添加条件。
        - 与断点交互。F8,F10,f11,shift+f11;
        - 调用堆栈面板，显示导致代码暂停的完整的执行路径。
        - 控制台抽屉 esc键
        - 动态js的断点
        - DOM事件的上的断点
        - XHR断点
        - source map
            - 介绍：使你在devtools中，轻松调试已压缩的代码。
            - 配置:setting->general->Enable JavaScript source maps
            - 使用：
                    1. 待优化文件的底部添加注释
                    //# sourceMappingURL=/path/to/script.js.map
                    2. 在响应压缩js文件中发送X-SourceMap的Http头
                    X-SourceMap:/path/to/script.js.map
      
      Improving network performance:

      - 解决请求超长是页面优化的基本步骤。

      - network面板记录了每次网络操作。包括详细的时间数据，http请求和响应头,cookie,webSocket数据等。
      - 可以解答的问题：资源最慢时间的第一个字节？
                      哪个资源需要下载时间最长？
                      谁发起了一个特定的网络请求？
                      多少时间是花费在特定资源的不同网络请求中？
      - Resource Timing API
      console中执行：window.performance.getEntries()[0]
                    返回值：PerformanceResourceTiming{}:connectEnd,connectStart,domainLookupEnd,domainLookupStart,duration,entryType,fetchStart,initiatorType(启动类型)，name,redirectEnd,redirectStart,redirectEnd,responseEnd,responseStart,secureConnectionStart,startTime,workerStart

