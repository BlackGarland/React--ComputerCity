import 'whatwg-fetch'
// import 'es6-promise'

//导出get请求
export function fetchget(url) {
    var result = fetch(url, {
        /*
         fetch不管在同域还是在跨域的情况下，默认都不携带cookie的，所以那些需要权限验证的请求就无法正常获取到数据，这时候需要配置credentials项，有一下三个选项可添：
         	 omit： 默认值，忽略cookie的发送
       		 same-origin： 表示cookie只能同域发送，不能跨域发送
       		 include： 表示既可以同域发送，也可以跨域发送
        */
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    //有三种方式解析获取到的数据：
    //1 json数据      用reponse.json()来解析
    //2 xml格式文件     用response.text()来解析
    //3 图片文件      用response.blob()来解析
    return result.then(response => response.json());
}

// 发送 post 请求
export function fetchpost(url, paramsObj) {
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        //post请求发送的数据需要是这样的："name=zhangsan&content=宝宝不开心"
        body: obj2params(paramsObj)
    });
    return result.then(response => response.json());
}
// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}