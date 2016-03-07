# URL相关

### 什么是ＵＲＬ

> url(uniform resourse locator)统一资源定位符 既是你欲访问某个网站时在浏览器地址栏输入的地址

### URL的构成（http/https）

协议/方案 `://` 主机  （:端口号） `/` 路径 `?` 查询字符串

>scheme://host:port/path?query

主机：主机名识别拥有资源的主机

路径：识别主机中web客户机要访问的特定资源

查询字符串：通常是一串名称和值对。

> `?` 保留字，标识着查询字符串的开始；`&` 查询字符串的分隔符 


### js解析url

    function urlPara(){
        var objPara = {},
            urlSearchStr = location.search;
        if(urlSearchStr){
            var arrPara = urlSearchStr.slice(1).split('&'),
                arrParaLen = arrPara.length;
            if(arrParaLen){
               for(var i = 0;i < arrParaLen;arrParaLen ++){
                if(arrPara[i] && -1 != arrPara[i].indexOf('=')){
                    var keyValue = arrPara[i].split('=');
                    objPara[keyValue[0]] = keyValue[1];
                }
               }
            }
        }
        return objPara;
    }

### js查找cookie

    function theCookieValue(cookieKey){
        var cookies = document.cookie,
            name,start;
        if(name= cookieKey + '=',start=cookies.indexOf(name),start < 0){
            return null;
        }
        start += name.length;
        var cookieValue = cookies.indexOf(';',start);
        return cookieValue = ((-1 == cookieValue ? cookies.length: cookieValue ),cookies.substring(start,cookieValue));
    }
        

