/**
 * @type {createApplication}
 */

const express = require('express')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const request = require('request')
let router = express.Router();
const AlipaySdk = require('alipay-sdk').default; // 引入 SDK
const AlipayFormData = require('alipay-sdk/lib/form').default;

/**--------------------------------------------------------------------- */

router.get('/apii/test/', async (req, res) => {
    let price = req.query.price;
    console.log(price,"jiage")
    // console.log(req.query.jiage);
    const alipaySdk = new AlipaySdk({
        appId: '2021000117623507', // 沙箱中的 appId
        privateKey: fs.readFileSync(path.join(__dirname, '../alipay_key/app_private_key.pem'), 'ascii'), // 应用私钥字符串
        signType: 'RSA', // 签名算法,默认 RSA2
        alipayPublicKey: fs.readFileSync(path.join(__dirname, '../alipay_key/alipay_public_key.pem'), 'ascii'), // 支付宝公钥，需要对结果验签时候必填
        gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝网关地址 ，沙箱环境下使用时需要修改
        timeout: 5000,
        camelcase: true
    });

    const formData = new AlipayFormData();
    formData.setMethod('get');
    formData.addField('appId', '2021000117623507'); //沙箱环境appID
    formData.addField('charset', 'utf-8');
    formData.addField('signType', 'RSA'); //沙箱中的密钥设置为RSA
    formData.addField('timestamp', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
    formData.addField('bizContent', {
        outTradeNo: Date.now() + '2088621955349974', //【必选】商户订单号：64个字符内，包含数字，字母，下划线；需要保证在商户端不重复
        productCode: 'FAST_INSTANT_TRADE_PAY', //【必选】销售产品码，目前仅支持FAST_INSTANT_TRADE_PAY
        totalAmount: req.query.price, // req.query.jiage,//【必选】订单总金额，精确到小数点后两位,这里是从前台支付时获取的
        subject: '药品',
        body: '药品详情',
        timestamp: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    });
    // 支付成功之后返回的界面
    formData.addField('returnUrl', 'https://www.taobao.com/');
    const result = await alipaySdk.exec('alipay.trade.page.pay', {}, {
        formData: formData
    });

    console.log(result, "ppppppppppp") //  result为可以跳转到支付连接的url
    return res.json(result)
});

module.exports = router


router.get('/apii/trade/:price', async (req, res) => {
    let outTradeNo = req.params.price;
    if (!outTradeNo) {
        return res.json({
            status: -1,
            info: "支付查询需要订单号"
        })
    }
    const alipaySdk = new AlipaySdk({
        appId: '2021000117623507', // 开放平台上创建应用时生成的 appId
        privateKey: fs.readFileSync(path.join(__dirname, '../alipay_key/app_private_key.pem'), 'ascii'), // 应用私钥字符串
        signType: 'RSA', // 签名算法,默认 RSA2
        alipayPublicKey: fs.readFileSync(path.join(__dirname, '../alipay_key/app_public_key.pem'), 'ascii'), // 支付宝公钥，需要对结果验签时候必填
        gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝网关地址 ，沙箱环境下使用时需要修改
        timeout: 5000,
        camelcase: true
    });

    //返回支付状态的（PC 支付接口）
    const formData = new AlipayFormData();
    formData.setMethod('get');
    formData.addField('appId', '2021000117614772');
    formData.addField('charset', 'utf-8');
    formData.addField('signType', 'RSA');
    formData.addField('timestamp', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
    formData.addField('bizContent', {
        outTradeNo: outTradeNo,
    });
    await alipaySdk.exec('alipay.trade.query', {}, {
        formData: formData
    }).then((result) => {
        if (result) {
            request(result, function (error, response, body) {
                let obj = JSON.parse(body);
                let msg = getResponseMsg(obj);
                console.log('[alipay.trade.query--msg]===>', msg);
                console.log('[alipay.trade.query]===>', obj);
                if (!error && response.statusCode == 200) {
                    return res.json({
                        status: 200,
                        info: '支付查询成功'
                    })
                } else {
                    return res.json({
                        status: -1,
                        info: `支付查询失败_2:${error}`
                    })
                }
            })
        } else {
            return res.json({
                status: -1,
                info: `支付查询失败_1:${result}`
            })
        }
    }).catch(err => {
        return res.json({
            status: -1,
            info: `支付查询失败:${err}`
        })
    });
});

const getResponseMsg = function (queryObj) {
    let msg = '';
    if (queryObj instanceof Object && Object.keys(queryObj).length > 0) {
        let code = queryObj.alipay_trade_query_response.code;
        switch (code) {
            case '10000':
                msg = '接口调用成功';
                break;
            case '20000':
                msg = '服务不可用';
                break;
            case '20001':
                msg = '授权权限不足';
                break;
            case '40001':
                msg = '缺少必选参数';
                break;
            case '40002':
                msg = '非法的参数';
                break;
            case '40004':
                msg = '业务处理失败';
                break;
            case '10006':
                msg = '权限不足';
                break;
        }
    }
    return msg;
}