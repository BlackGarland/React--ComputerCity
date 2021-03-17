const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
const expressSession = require('express-session');

//使用express-session 中间件
app.use(expressSession({
	//cookie的名字
    name : "mazg", 
    //cookie签名的信息
    secret : 'secret',
    //cookie的有效时间 3分钟
    cookie : {
        maxAge : 1000 * 60 * 3, 
    },
    //即使session的信息没有变化，也会重新保存session
    resave : false,
    //如果saveUninitialized为true，他会将没有初始化的session的数据保存到storage中
    saveUninitialized: false,
    //主要作用：每次请求都重置cookie过期时间
    rolling: true,
    //指定session数据存储的地方(数据库),默认情况下session会话数据是保存在服务器的内存中
    store:null
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',router);



app.all('/apii/*',(req,res,next)=>{
	//设置允许跨域响应报文头
	//设置跨域
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","*");
	res.setHeader('Content-Type','application/json;charset=utf-8');
	next();
});

//2.0 设置路由规则
const alipay = require('./router/alipay.js');
app.use('/',alipay)
app.listen(3001, function () {
  console.log('~~~~~~~~~~~~~app is running at port 3001.~~~~~~~~~~~~~')
})
