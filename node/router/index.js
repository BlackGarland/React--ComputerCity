const { default: Password } = require('antd/lib/input/Password');
var express = require('express');
var router = express.Router();

router.get('/list', function (req, res) {
    console.log(req.session.user)
    res.json([
        'xiaoming',
        'xiaohong',
    ]);
});

router.get("/student/:id", function (req, res) {
    var id = req.params["id"];
    var reg = /^[\d]{6}$/; //正则验证
    if (reg.test(id)) {
        res.send(id);
    } else {
        res.send("请检查格式");
    }
});
var islogin = "1"
var user = [
    {
        name: "123456789123",
        pass: "1234567890"
    },
    {
        name: "111222333444555",
        pass: "1234567890"
    }
]
router.post('/login', function (req, res, next) {
    var name = req.body.name;
    var pass = req.body.password;
    console.log('name:' + name);
    console.log('pass:' + pass);


    var find = user.find(item => {
        if (item.name == name && item.pass == pass) {

            res.json([
                {
                    name: name,
                    static: "loginin"
                }

            ])
            islogin = name

        }
    })


});
router.get("/islogin", (req, res) => {



    res.json([

        {

            name: islogin,


        },




    ]);

})
router.post('/regist', function (req, res, next) {
    var name = req.body.name;
    var pass = req.body.password;
    console.log('name1:' + name);
    console.log('pass1:' + pass);
    var namepass = {
        name: name,
        pass: name
    }
    res.json([

        {
            name: req.body.name,
            pass: req.body.password



        },])

    user.splice(1, 0, namepass)
    console.log(user)


});
var number = 0
var shopping = [{
    count: "0",
    id: "",
}]
router.post('/number', function (req, res, next) {
    var number1 = req.body.number;
    shopping.count = req.body.number;
    shopping.id = parseInt(req.body.id)
    console.log(req.body.id, "这位是id")
    console.log('number:' + number);
    console.log("执行number购物车")

    number = parseInt(number1) + parseInt(number)
    res.json([

        {

            number: number,


        },




    ]);

    var id = shopping.id;
    var count = shopping.count
    // console.log(id,"id 列表")
    // console.log(count," count列表")
    var find = shoppinglist.find(item => {
        if (item.id == id) {
            item.count = parseInt(item.count) + parseInt(count)

            console.log(shoppinglist, "shopping列表")
        }
    })

});
router.get("/number2", (req, res) => {

    // console.log(number,"这是服务器")

    res.json([

        {

            number: number,


        },




    ]);

})
var gooddetaillist = ""
router.post('/gooddetaillist', function (req, res, next) {
    var list = req.body.list;
    gooddetaillist = JSON.parse(list)

    // console.log(list,"执行goodlistdetail")


    res.json([

        {

            gooddetaillist


        },




    ]);


});
router.get("/goodid", (req, res) => {
    console.log("连接")
    console.log(req.query)
    var id = req.query.id
    console.log(id, "123")
    var find = shoppinglist.find(item => {
        if (item.id == id) {
            gooddetaillist = item
        }
    })


})
var itemli3 = []
router.get("/search", (req, res) => {
    console.log("连接")
    console.log(req.query)
    var searchdata = req.query.searchdata
    var find = shoppinglist.find(item => {
        let n=item.name.includes(searchdata)
        if (n==true) {
            var itemdata = item
            itemli3.splice(-1, 0, itemdata)
            console.log(itemli3,"这是搜索结果")
        }
    })


})
router.get("/searchgoods", (req, res) => {
    console.log("searchgoods被请求了")
//    if(itemli3!=""){
       res.json(
        itemli3
       )
       itemli3=[]
     
//    }


})

router.get("/gooddetaillist1", (req, res) => {

    // console.log(number,"这是服务器")
    // gooddetaillist= gooddetaillist.split(',');
    res.json(



        gooddetaillist







    );

})



var orderlist1 = ""
var userinformation1 = ""
router.post("/order", function (req, res) {
    let userinformation = req.body.userinformation
    let orderlist = req.body.orderlist
    //   var obj = eval('(' + orderlist + ')');
    var obj2 = JSON.parse(orderlist)
    var userinformation2 = JSON.parse(userinformation)
    console.log(userinformation, "这是订单详情发过来的订单信息");
    //   console.log(obj2,"这是发过来的订单物品列表");
    orderlist1 = obj2;
    userinformation1 = userinformation2;

})
router.get('/pay', function (req, res) {

    console.log(orderlist1, "这是发过来的订单物品列表");
    // var userinformation=JSON.stringify(userinformation1)
    //  console.log(userinformation,"这是订单详情发过来的订单信息");


    if (orderlist1 !== "") {
        res.json(
            orderlist1,

        )

    }
});
router.get('/payinformation', function (req, res) {
    console.log(userinformation1, "这是user");


    console.log("jbjb")
    res.json(

        userinformation1

    )
    //  if(userinformation!==""){

    //      res.JSON({
    //         //  userinformation
    //         nasndksnd:"122122"
    //      }


    //      )
    //  }
});

router.get('/layout', function (req, res) {
    req.session.user = null;
    res.json("退出登录成功");
});

router.get('/goodlist', function (req, res) {
    // console.log()
    res.json([

        {
            id: 101,
            name: 'Alice',
            pic: 'https://p3.lefile.cn/fes/cms/2021/02/07/z49m6c93jv6llzu7ergduwojuvm7ce650095.jpg',
            introduce: 22,
        },
        {
            id: 102,
            name: 'Alice',
            pic: 'https://p3.lefile.cn/fes/cms/2021/02/09/iakebcd13bikdi1pjyj9z0040qy9ww193498.jpg ',
            introduce: 22,
        },
        {
            id: 103,
            name: 'Alice',
            pic: 'https://p1.lefile.cn/fes/cms/2021/02/07/ui4tpz77mgc0vmsc6nd9k8fmjrcut3456684.jpg',
            introduce: 22,
        },
        {
            id: 104,
            name: 'Alice',
            "pic": 'https://p3.lefile.cn/fes/cms/2021/02/07/jz1y4w16b72b6rc2snwnvmjtldb4rm781067.jpg',
            introduce: 22,
        },
        {
            id: 105,
            name: 'Alice',
            pic: 'https://p3.lefile.cn/fes/cms/2021/02/07/h5e7bfja3yq5n1gz0mrxfl7d4prulv394867.jpg ',
            introduce: 22,
        },


    ]);
});

router.get('/goodli', function (req, res) {
    res.json([{
        tabbox1: {
            tab1: {
                pic: "http://p4.lefile.cn/fes/cms/2021/01/26/9mvdwy3gmdvk7t52zm6iahoeozwcjl885821.png",
                id: 2105,
                name: 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色 ',
                description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                introduce: 22,
                berif: "   高色域全面屏",
                price: 4599,
                state: '爆款',
                model1: '白色',
                model2: '黑色',

            },
            tab2: {
                pic: "http://p4.lefile.cn/fes/cms/2021/02/22/9grjwwkqwuck9ltsd9e7tjqsv9qdoj507330.png",
                id: 2102,
                name: '天逸510S-07IMB 分体式台式机',
                description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                introduce: 22,
                berif: "   晒单送1年延保",
                price: 5899,
                state: '爆款',
                model1: '白色',
                model2: '黑色',
            },
            tab3: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/13/fucb72lemr89f3q4jsjqyexxc4q6wn215553.png",
                name: '联想GeekPro 2020 英特尔酷睿i7 分体式台式机 ',
                description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                introduce: 22,
                berif: "   RTX 2060 独显",
                price: 7499,
                state: '爆款',
                model1: '白色',
                model2: '黑色',
            },
            tab4: {
                pic: "http://p1.lefile.cn/fes/cms/2021/02/23/3su3c7s3fp1jc3w2ce53tz4zed5bw0082110.jpg"
            },
            tab5: {
                pic: "http://p2.lefile.cn/fes/cms/2020/12/14/q7zpn8jmn8f76sr4d4vcqbx169w6cd918431.jpg"
            },
            tab6: {
                pic: "http://p1.lefile.cn/fes/cms/2021/02/05/gefhhv7pvo4r7wcym05pyer00x8cnk209357.jpg"
            },
            tab7: {

            },
        },
        tabbox2: {
            tab1: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/18/6n2et3k716vyf9z19pvfqe8fnbqopq425250.png",
                name: "拯救者 Y7000P 2020款 英特尔酷睿i7 15.6英寸游戏笔记本 钛晶灰",
                berif: "  第十代英特尔®酷睿™i7-10875H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce RTX™ 2060 6G独显/钛晶灰",
                price: "8299"

            },
            tab2: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/13/fucb72lemr89f3q4jsjqyexxc4q6wn215553.png",
                name: "联想GeekPro 2020 英特尔酷睿i5 分体式台式机",
                berif: "  十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                price: "5499"
            },
            tab3: {
                pic: "http://p2.lefile.cn/fes/cms/2020/11/03/fvc1cktdsa4me5resdgacaaqe7vgb1391617.png",
                name: "YOGA 13s 2021款英特尔Evo平台 13.3英寸全面屏轻薄笔记本 深空灰",
                berif: "   第十一代英特尔酷睿i5-1135G7/Windows 10 家庭中文版/13.3英寸/16G/512G SSD/集成显卡/深空灰",
                price: "5699"
            },

            tab4: {
                pic: "http://p3.lefile.cn/fes/cms/2021/02/24/a4jtht3y6h72lt0e3y6tqbtmhayduh473412.jpg"
            },
            tab5: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/07/004os3itzs5xnrhqgwhl2zisqk94t4732547.jpg"
            },
            tab6: {
                pic: "http://p4.lefile.cn/fes/cms/2021/01/26/r5p27dzvrv4giq7ip3ghqu81wl5jfo788354.jpg"
            },
            tab7: {

            },
        }
    },]);
});

router.get('/goodshop', function (req, res) {
    res.json([

        {
            id: 101,
            name: 'Alice',
            pic: 'https://p3.lefile.cn/fes/cms/2021/02/23/dedefwunai4p8hm89l19lkul9sihkr632091.jpg',
            introduce: 22,
            berif: "   第十一代英特尔酷睿i5-1135G7/Windows 10 家庭中文版/13.3英寸/16G/512G SSD/集成显卡/深空灰",
        },
        {
            id: 102,
            name: 'Alice',
            pic: '//p4.lefile.cn/fes/cms/2021/02/25/z523a064lav9bb7jasqqwtv6qbnt5c165231.jpg ',
            introduce: 22,
            berif: "   第十一代英特尔酷睿i5-1135G7/Windows 10 家庭中文版/13.3英寸/16G/512G SSD/集成显卡/深空灰",
        },
        {
            id: 103,
            name: 'Alice',
            pic: '//p4.lefile.cn/fes/cms/2021/02/24/y29dw1l30fg8b85alrfhnyosmucu8y397465.jpg',
            introduce: 22,

        },
        {
            id: 104,
            name: 'Alice',
            "pic": '//p4.lefile.cn/fes/cms/2021/02/23/nj2bzvxsgihunt3bnqx3jtij29bd07511824.jpg',
            introduce: 22,
        },
        {
            id: 105,
            name: 'Alice',
            pic: '//p3.lefile.cn/fes/cms/2021/02/24/9jo00pxakehhl96892tl7hgn4wegar197546.jpg ',
            introduce: 22,
        },
        {
            id: 106,
            name: 'Alice',
            pic: '//p1.lefile.cn/fes/cms/2021/02/24/6zw12bto1cfzylkauyq9ogegonehvo449191.jpg ',
            introduce: 22,
        },
        {
            id: 105,
            name: 'Alice',
            pic: '//p1.lefile.cn/fes/cms/2021/02/24/owunbjtuc8lenfe32nsuszorzen15d234249.jpg ',
            introduce: 22,
        },


    ]);
});
router.get('/countdown', function (req, res) {
    res.json([

        {
            id: 101,
            name: '联想 HE05 颈挂式蓝牙耳机-黑色',
            pic: 'https://p4.lefile.cn/product/adminweb/2020/10/13/9Q1xV4JRbHAzyajsLgwA3g6x8-7950.jpg',
            description: "联想 HE05 颈挂式蓝牙耳机-黑色",
            introduce: 22,
            berif: "   联想 HE05 颈挂式蓝牙耳机-黑色",
            count: "7折",
            price: "33.9",
            price1: "49",
            model1: '白色',
            model2: '黑色',
        },
        {
            id: 102,
            name: '联想大红点M120 Pro无线鼠标',
            pic: 'https://p3.lefile.cn/product/adminweb/2018/08/17/a0lTvGo6vKxqPeAM0eprptrjy-2615.jpg ',
            description: "联想大红点M120 Pro无线鼠标",
            introduce: 22,
            berif: "   联想大红点M120 Pro无线鼠标",
            count: "7折",
            price: "29.9",
            price1: "49.9",
            model1: '白色',
            model2: '黑色',
        },
        {
            id: 103,
            name: '拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款',
            pic: 'https://p4.lefile.cn/product/adminweb/2020/05/15/k70eARSAz6rBDzYtODij54miV-3675.jpg',
            introduce: 22,
            berif: "   拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款",
            description: "拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款",
            count: "7折",
            price: "5888",
            price1: "6088",
            model1: '白色',
            model2: '黑色',
        },
        {
            id: 104,
            name: '联想闪存盘R120 32G',
            "pic": 'https://p2.lefile.cn/product/adminweb/2021/02/22/CRciT0reOMioXYvOrVwZog6b5-5107.jpg',
            introduce: 22,
            berif: "   联想闪存盘R120 32G",
            description: "联想闪存盘R120 32G",
            count: "7折",
            price: "55",
            price1: "79",
            model1: '白色',
            model2: '黑色',
        },

    ]);
});


router.get('/goodlis', function (req, res) {
    res.json([
        {
            tab1: [
                {
                    id: 1101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1103,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1104,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1105,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1106,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1107,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1108,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 1109,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    introduce: 22,
                },
            ],
            tab2: [
                {
                    id: 2101,
                    name: 'AIO 520C-24IWL 十代英特尔酷睿i3 23.8英寸一体台式机 黑色',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/05/jjYh0FahA6JC7Vz3IgiVp8tb7-2312.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2102,
                    name: '天逸510S-07IMB 分体式台式机',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/13/K3euPTYrFqj2Rb9SrelfWntVB-9916.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2103,
                    name: '拯救者 刃7000P-26AMR 专业版 分体式游戏主机',
                    pic: '//p4.lefile.cn/product/adminweb/2020/11/04/vzr4CMsrJvQZ37kMykEUmKs3a-3079.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2104,
                    name: 'AIO 520C-24IMB 酷睿版 十代英特尔酷睿i5 23.8英寸一体机 白色',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/05/3URLW9GuIQqGA8cTpvyZGkTDs-2738.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2105,
                    name: 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色 ',
                    pic: '//p4.lefile.cn/product/adminweb/2021/01/05/uiBi61fXr8EMcr6nHFqYx6Uqe-3628.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2106,
                    name: '天逸510S-07IMB 分体式台式机 银灰',
                    pic: '//p3.lefile.cn/product/adminweb/2020/08/20/ckk196GqiJ7o63rtfZGMtAYuB-6880.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2107,
                    name: '联想GeekPro 2020 英特尔酷睿i7 分体式台式机 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/06/05/fux9rwC9C2tkZwF3YMoCT7UxB-8356.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2108,
                    name: 'ideacentre AIO 520C-24IWL 23.8英寸一体台式机 黑色 ',
                    pic: '//p4.lefile.cn/product/adminweb/2021/01/05/SWtQAbdBtkL5W3Y2WFUBHnVKP-5768.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 2109,
                    name: 'Alice',
                    pic: '//p1.lefile.cn/fes/cms/2021/01/21/u4bot9x3r7px70k38unn8gq96uops1706341.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab3: [
                {
                    id: 3101,
                    name: 'ThinkPad X1 Nano',
                    pic: '//p3.lefile.cn/product/adminweb/2020/12/20/8RQvyeZbVkQxTOQwmG9dYKOxl-2668.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3102,
                    name: 'ThinkPad X13 锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2020/07/10/6XLKJoyAcvL2QoCg0BxzX1nfc-7306.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3103,
                    name: 'ThinkPad T14 锐龙版 笔记本电脑 20UD0004CD',
                    pic: '//p1.lefile.cn/product/adminweb/2020/07/13/pSlw0iTOapQM5cvcy1ePA7T4V-0328.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3104,
                    name: 'ThinkPad E14 锐龙版',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/26/tgyqoVyERNzJhO9GzU2RdY2DQ-9465.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3105,
                    name: 'ThinkPad X1 Carbon 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/05/18/hbaHG1DaZD239B21KwjK9ey17-4292.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3106,
                    name: '【王源同款】全新ThinkBook 14 酷睿版英特尔酷睿i5 锐智系创造本',
                    pic: '//p1.lefile.cn/product/adminweb/2020/11/12/HXsY4tFCION5FtIAOsYZDgdLl-4139.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3107,
                    name: '全新ThinkBook 15 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/30/kWK1ZniB9VixFCjFlhEGgu1S5-1791.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3108,
                    name: '【王源推荐】ThinkBook 15p 英特尔酷睿i5 视觉系创造本 01CD',
                    pic: '//p2.lefile.cn/product/adminweb/2020/11/06/vgRzgzSwfMIteVFIgyjELom6N-4294.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 3109,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/23/kkh0sgbjesgi051u7e4hnn61bw21oh126346.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab4: [
                {
                    id: 4101,
                    name: '摩托罗拉 motorola edge s 8GB+128GB 翡色琉光',
                    pic: '//p2.lefile.cn/product/adminweb/2021/01/26/nnMw7xVb8X9M3VawO54FqvPPM-3974.jpg',
                    description: "骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
                    introduce: 22,
                    berif: "   骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
                    price: "2399",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4102,
                    name: 'motorola 摩托罗拉 刀锋 5G 8GB+256GB 天选金',
                    pic: '//p3.lefile.cn/product/adminweb/2020/12/22/lYtJ6lTaoc8dvrKrCWwtSxIqm-1319.jpg ',
                    description: "5G刀锋折叠屏 | 双屏双视界 | 无缝无折痕 | 4800万像素超强自拍",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 9999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4103,
                    name: '联想乐檬K12 4GB+64GB 渐变蓝',
                    pic: '//p1.lefile.cn/product/adminweb/2020/12/15/vEGhF0zgXSp0DiybeSEVz5gIS-8564.jpg ',
                    description: "5000mAh充电宝级续航 | 4800万像素全场景AI双摄 | 6.5英寸炫彩全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4104,
                    name: '拯救者电竞手机 Pro 12GB+256GB 炽焰战甲',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/08/wraEKjH1Bpl4mSsklLaQzXekE-8946.jpg ',
                    description: "次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 3699,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4105,
                    name: '摩托罗拉 motorola edge s 8GB+128GB 雪霁初晴 ',
                    pic: '//p2.lefile.cn/product/adminweb/2021/01/26/1OfOkUDT5gGBy1qh1ZB99o9u3-8898.jpg',
                    description: "骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4106,
                    name: 'motorola 摩托罗拉 刀锋 5G 8GB+256GB 天选金',
                    pic: '//p1.lefile.cn/product/adminweb/2020/12/21/tqW8YYcid0gtLTeiJMgyXvn4r-5640.jpg ',
                    description: "5G刀锋折叠屏 | 双屏双视界 | 无缝无折痕 | 4800万像素超强自拍",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 9999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4107,
                    name: '联想乐檬K12 Pro 4GB+64GB 墨青 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/12/28/2W5tktXw6zB7DpMUcfAidz0bA-2065.jpg',
                    description: "6000mAh大电池，三天一充 | 6400万像素全场景AI三摄 | 6.8英寸微孔超大全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
                    introduce: 22,
                    berif: " 6000mAh大电池，三天一充 | 6400万像素全场景AI三摄 | 6.8英寸微孔超大全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
                    price: 899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4108,
                    name: '拯救者电竞手机 Pro 12GB+256GB 炫蓝冰刃 90W充电器版 ',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/08/yeXKvSPoyGJPwhxKsV5jY37Le-3427.jpg',
                    description: "次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
                    introduce: 22,
                    berif: "   次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
                    price: 3899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 4109,
                    name: 'Alice',
                    pic: '//p2.lefile.cn/fes/cms/2021/03/04/grnzuqka68eykisx89zwxu60fj7t9s600582.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab5: [
                {
                    id: 5101,
                    name: '联想平板小新Pad Pro 11.5英寸 影音娱乐办公学习平板电脑 深空灰',
                    pic: '//p1.lefile.cn/fes/cms/2020/12/29/lby6widd89p4df5ag27aftpfbxgqm3385410.jpg',
                    description: "Qualcomm® Snapdragon™ 730G/8核/Android系统/11.5英寸/6G/128G/WIFI版/深空灰",
                    introduce: 22,
                    berif: " Qualcomm® Snapdragon™ 730G/8核/Android系统/11.5英寸/6G/128G/WIFI版/深空灰",
                    price: "2499",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5102,
                    name: '联想平板小新Pad 11',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/19/NoeJczGGH8C9kSfEewgII6vcv-5920.jpg',
                    description: "2K分辨率LCD屏",
                    introduce: 22,
                    berif: " 2K分辨率LCD屏",
                    price: 1399,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5103,
                    name: '联想平板小新Pad 11英寸 学习娱乐平板电脑 深空灰',
                    pic: '//p4.lefile.cn/product/adminweb/2020/12/21/oSgL65ex0EpFr52u5gSMh8sth-3483.jpg ',
                    description: "Qualcomm® Snapdragon™ 662/8核/Android系统/11英寸/4G/64G/WIFI版/深空灰",
                    introduce: 22,
                    berif: " Qualcomm® Snapdragon™ 662/8核/Android系统/11英寸/4G/64G/WIFI版/深空灰",
                    price: 1299,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5104,
                    name: '联想M10 plus TB-X606F 2020新款 学习网课护眼平板电脑',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/08/sQDY7ni4PWIMQjHqj9ppiwSjl-9679.jpg',
                    description: "8核心/Android系统/10.3英寸/4G/64G/WIFI版",
                    introduce: 22,
                    berif: "8核心/Android系统/10.3英寸/4G/64G/WIFI版",
                    price: 1099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5105,
                    name: '联想YOGA tab5网课平板 4G+64G 10.1英寸8核 学生护眼平板 WIFI版 ',
                    pic: '//p3.lefile.cn/product/adminweb/2019/10/28/KlB15FKLS2Au5RrEwbyc6ByZT-7036.jpg',
                    description: "高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板",
                    introduce: 22,
                    berif: "   高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板",
                    price: 1399,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5106,
                    name: '联想平板M8 8英寸 4G+64G WiFi版 杜比全景声 网课平板',
                    pic: '//p2.lefile.cn/product/adminweb/2020/04/26/wCCKQbErs715ptpS7K2zvjvjX-9082.jpg ',
                    description: "MTK P22T/8核/Android  Pie 9/8英寸/4G/64G/管控模式/人脸验证/双频WIFI/银色",
                    introduce: 22,
                    berif: " MTK P22T/8核/Android  Pie 9/8英寸/4G/64G/管控模式/人脸验证/双频WIFI/银色 ",
                    price: 5899,
                    state: '999',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5107,
                    name: 'YOGA Tab3 Plus-X703F 10.1英寸平板电脑 WIFI版 黑色 ',
                    pic: '//p4.lefile.cn/product/adminweb/2016/10/24/P6uxmpuzPl4Y4BWHC5bNo1Vyz-4109.jpg',
                    description: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
                    introduce: 22,
                    berif: " 2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
                    price: 1499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5108,
                    name: 'YOGA Tab3 Plus-X703F 10.1英寸平板电脑 WIFI版 黑色',
                    pic: '//p4.lefile.cn/product/adminweb/2016/10/24/P6uxmpuzPl4Y4BWHC5bNo1Vyz-4109.jpg',
                    description: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
                    introduce: 22,
                    berif: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
                    price: 1999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 5109,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/01/21/h8yg36qtslacys0k9t23w3wmgjzfl4156463.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab6: [
                {
                    id: 6101,
                    name: '联想小新Air2双模鼠标-冰河银',
                    pic: '//p1.lefile.cn/product/adminweb/2018/08/24/U1OHDCmnoNi958Mps3I07yy5F-5552.jpg',
                    description: "【无线蓝光】 全金属表层 无线切割 便携办公 台式机笔记本鼠标",
                    introduce: 22,
                    berif: " 【无线蓝光】 全金属表层 无线切割 便携办公 台式机笔记本鼠标",
                    price: "89",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6102,
                    name: '联想大红点M120 Pro无线鼠标',
                    pic: '//p3.lefile.cn/product/adminweb/2018/08/17/K1pI8Tx6SCtoQjM1UAMksnqXr-8649.jpg ',
                    description: "轻巧便携，光学引擎，轻松办公，笔记本电脑通用",
                    introduce: 22,
                    berif: " 轻巧便携，光学引擎，轻松办公，笔记本电脑通用",
                    price: 29.9,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6103,
                    name: '联想笔记本5合1清洁套装J5',
                    pic: '//p2.lefile.cn/product/adminweb/2020/11/30/TJxVwXTugkmzqBUB0fWvMtbOy-2777.jpg',
                    description: "联想笔记本5合1清洁套装J5",
                    introduce: 22,
                    berif: " 联想笔记本5合1清洁套装J5",
                    price: 36.9,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6104,
                    name: '联想笔记本支架X06',
                    pic: '//p2.lefile.cn/product/adminweb/2020/11/30/5aZV0i0nG8HaX4pzC7VoXcLGy-0106.jpg ',
                    description: "小新笔记本支架 / 7档高度调节 / 铝合金材质 / 可折叠易收纳",
                    introduce: 22,
                    berif: " 小新笔记本支架 / 7档高度调节 / 铝合金材质 / 可折叠易收纳",
                    price: 59,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6105,
                    name: '联想蓝牙耳机H12 Pro（锖黑色） ',
                    pic: '//p4.lefile.cn/product/adminweb/2020/11/24/nqYu5EtEchqfmCS0nDFYyFMsx-0160.jpg',
                    description: "智能蓝牙5.0 / 低功耗强续航 / CVC双麦降噪 / AI语音交互 / 可同时连接两部耳机",
                    introduce: 22,
                    berif: " 智能蓝牙5.0 / 低功耗强续航 / CVC双麦降噪 / AI语音交互 / 可同时连接两部耳机",
                    price: 169,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6106,
                    name: '联想 USB3.0 移动硬盘F308 黑 2TB',
                    pic: '//p3.lefile.cn/product/adminweb/2018/05/04/zeudx78z6mJKXAxexKJRK0Q7h-2774.jpg',
                    description: "联想 移动硬盘 抗压抗震设计Windows/Mac多系统兼容小巧身材轻薄  稳定便携联想原装品质  值得信赖高速3.0高速传输",
                    introduce: 22,
                    berif: "联想 移动硬盘 抗压抗震设计Windows/Mac多系统兼容小巧身材轻薄  稳定便携联想原装品质  值得信赖高速3.0高速传输",
                    price: 429,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6107,
                    name: '联想小新X3C Pro双接口闪存盘(64GB)银 ',
                    pic: '//p1.lefile.cn/product/adminweb/2019/10/25/hifv6aw8PJL03izS3vzrtQWRP-0930.jpg',
                    description: "联想小新USB3.1双接口闪存盘，精耀于感，匠心制造，全金属旋转机身，双接口设计，文件轻松转移，原装存储芯片，高效稳定传输，智能app管理，5重防护，超强耐久",
                    introduce: 22,
                    berif: "联想小新USB3.1双接口闪存盘，精耀于感，匠心制造，全金属旋转机身，双接口设计，文件轻松转移，原装存储芯片，高效稳定传输，智能app管理，5重防护，超强耐久",
                    price: 53.9,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6108,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "联想拯救者电竞耳机 游戏耳麦 Star Y360 （黑色）",
                    introduce: 22,
                    berif: " 联想拯救者电竞耳机，7.1环绕声道，独立usb声卡",
                    price: 6999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 6109,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/01/14/m8p6xd83cfuma3we1snqkjslsenscq795810.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab7: [
                {
                    id: 7101,
                    name: 'Lenovo Care+整机延保1年（小新&ideapad&MIIX）',
                    pic: '//p4.lefile.cn/product/adminweb/2020/09/01/j5xkLAOQ3Z9sSiHNtt4LlrmjG-8399.jpg',
                    description: "原厂硬件 | 全国联保 | 免费换件",
                    introduce: 22,
                    berif: " 原厂硬件 | 全国联保 | 免费换件",
                    price: "349",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7102,
                    name: '联想无线静音鼠标N911 Pro 黑色（送电脑远程调修服务）',
                    pic: '//p2.lefile.cn/product/adminweb/2019/10/16/XcNkqN9Y3wiNTD4EMdg1niRrz-4160.jpg ',
                    description: "无线静音 | 舒适防滑 | 省电耐用",
                    introduce: 22,
                    berif: "  无线静音 | 舒适防滑 | 省电耐用",
                    price: 59,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7102,
                    name: '联想都市简约双肩包B1801 Pro 灰黑色（送电脑远程调修服务）',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/02/r3luJlgtYcZOf9Y2NWmVbSSDY-5488.jpg ',
                    description: "25升大容量 | 防泼溅面料 | 背部透气网格| 两侧防渗水侧边带",
                    introduce: 22,
                    berif: " 25升大容量 | 防泼溅面料 | 背部透气网格| 两侧防渗水侧边带",
                    price: 69,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7104,
                    name: '联想简约手提电脑包B12 奶油粉',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/22/6X7NRFRtS4NhPmOnf9y6SW3Be-9083.jpg ',
                    description: "气垫防震 | 轻简随行 | 防泼面料 | 柔软内里",
                    introduce: 22,
                    berif: "气垫防震 | 轻简随行 | 防泼面料 | 柔软内里",
                    price: 79,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7105,
                    name: '联想都市简约手提内胆包B11 灰黑色（送电脑远程调修服务） ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/02/kLkLGtWgti75nzh67iXqI8Zk8-1032.jpg',
                    description: "大容量、轻重量 | 隐藏式提手 | 内衬短毛绒布 | 防泼溅面料",
                    introduce: 22,
                    berif: " 大容量、轻重量 | 隐藏式提手 | 内衬短毛绒布 | 防泼溅面料",
                    price: 49,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7106,
                    name: '联想清洁套装C01',
                    pic: '//p2.lefile.cn/product/adminweb/2019/03/27/SYAHyvfWomlIOgBZjoceIEGeH-1463.jpg',
                    description: "强力去污 | 清洁彻底 | 无腐蚀性 | 多设备通用",
                    introduce: 22,
                    berif: "强力去污 | 清洁彻底 | 无腐蚀性 | 多设备通用",
                    price: 39,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7107,
                    name: '重装系统 ',
                    pic: '//p1.lefile.cn/fes/cms/2020/12/08/8yr8hwsdquq465pywg3k10o1zlv1gi040083.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "重装系统服务",
                    price: 108,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7108,
                    name: '联想一键服务机械键盘K310 黑色 青轴',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/09/zJl7odzy3hFBrDyhGNMOZQsgC-2683.jpg',
                    description: "108键全键无冲 | 磁吸上盖 | 白色背光 | PBT键帽 | 机械青轴",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 349,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 7109,
                    name: 'Alice',
                    pic: '//p1.lefile.cn/fes/cms/2021/03/03/ciac91e9uon0m3i92xf1own2g5e9zj185863.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab8: [
                {
                    id: 8101,
                    name: '联想蜂窝胎滑板车M2（黑色）',
                    pic: '//p4.lefile.cn/product/adminweb/2020/06/05/vzzTuni729QPIlf02ytzrqD0e-7995.jpg',
                    description: "【升级版，新品上市】三重刹车，三重减震，折叠车身，120KG承重，APP智能锁车，好玩不止一点",
                    introduce: 22,
                    berif: " 【升级版，新品上市】三重刹车，三重减震，折叠车身，120KG承重，APP智能锁车，好玩不止一点",
                    price: "1799",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8102,
                    name: '联想个人云存储A1 3TB',
                    pic: '//p4.lefile.cn/product/adminweb/2020/08/14/ql0k3QlYjnhhhqixVnre0k2Oa-8483.jpg ',
                    description: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
                    introduce: 22,
                    berif: " 【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
                    price: 1099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8103,
                    name: '联想E1指纹锁智能门锁',
                    pic: '//p3.lefile.cn/product/adminweb/2020/04/15/pd95CPjmqhgukoZpAi303Nz0a-7143.jpg',
                    description: "【顺丰包邮】密码防盗，活体指纹识别，防猫眼电子锁",
                    introduce: 22,
                    berif: "【顺丰包邮】密码防盗，活体指纹识别，防猫眼电子锁",
                    price: 899,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8104,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/04/14/F6HgOYJINsLJ3dD7MALMAi2eI-9593.jpg',
                    description: "联想智能扫地机器人Pro版银色+集尘宝",
                    introduce: 22,
                    berif: " 联想智能扫地机器人Pro版银色+集尘宝",
                    price: 3999,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8405,
                    name: '联想(Lenovo)T6S 手机投影仪家用 迷你便携式微型无线高清投影机 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/26/N5bKrSLE8azIHDoKmHyt2hTIB-1416.jpg',
                    description: "小巧便携/梯形校正/高清护眼/内置电池/无线同屏/杜比音效",
                    introduce: 22,
                    berif: " 小巧便携/梯形校正/高清护眼/内置电池/无线同屏/杜比音效",
                    price: 1499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8106,
                    name: '联想个人云存储A1 4TB 故宫文创联名款 饕餮',
                    pic: '//p4.lefile.cn/product/adminweb/2020/08/18/MSd7WtldnsxViZw7oRwYz53Rm-8346.jpg ',
                    description: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
                    introduce: 22,
                    berif: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据 ",
                    price: 1499,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8107,
                    name: '智能体脂秤Mini E2 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/05/25/hW99vuxZdEOOiIhy0cxi6ZULq-9911.jpg',
                    description: "全家使用 20项核心指标测量 不连手机也可读取体脂率，云存储同步 体重秤男女健康减肥 一年换新质保售后无忧",
                    introduce: 22,
                    berif: "全家使用 20项核心指标测量 不连手机也可读取体脂率，云存储同步 体重秤男女健康减肥 一年换新质保售后无忧",
                    price: 7499,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8108,
                    name: '联想智能机器人L-EDR002  蓝色',
                    pic: '//p3.lefile.cn/product/adminweb/2020/11/02/FZLHknivPfr0ktTtSvHmigVaF-6640.jpg',
                    description: " 智能陪伴，益智儿童教育机",
                    introduce: 22,
                    berif: " 智能陪伴，益智儿童教育机",
                    price: 109,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 8109,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2020/11/17/3rhfivd1bkxu9gtlips5cmm7xmdfgq901462.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab9: [
                {
                    id: 9101,
                    name: '联想27英寸2K故宫文创联名版显示器',
                    pic: '//p4.lefile.cn/product/adminweb/2020/06/23/ByEwokslSReX3Ke9duGT08Kwh-6166.jpg',
                    description: "27英寸 2K  75HZ刷新率",
                    introduce: 22,
                    berif: " 27英寸 2K  75HZ刷新率",
                    price: "1999",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9102,
                    name: ' 思匠27全面屏显示器P27h-20',
                    pic: '//p3.lefile.cn/product/adminweb/2020/08/07/mzkW6QO8c0ur6RPcNP6Vak2KT-8291.jpg',
                    description: "27英寸 2K 四边无边框",
                    introduce: 22,
                    berif: " 27英寸 2K 四边无边框",
                    price: 2199,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9103,
                    name: '联想23.8英寸全高清显示器L24e-10',
                    pic: '//p2.lefile.cn/product/adminweb/2020/04/01/kcPz4X2etb2ZoF7hzoEv7ajfT-5110.jpg',
                    description: "23.8英寸1080p高清",
                    introduce: 22,
                    berif: " 23.8英寸1080p高清",
                    price: 799,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9104,
                    name: '联想27英寸全高清显示器',
                    pic: '//p3.lefile.cn/product/adminweb/2020/04/01/jRMJcDXrnBkMjcLOxuyqpIIpf-4409.jpg',
                    description: "27英寸全高清超窄边框",
                    introduce: 22,
                    berif: " 27英寸全高清超窄边框",
                    price: 1099,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9105,
                    name: '联想 27英寸2K 内置音箱显示器X27q-20 ',
                    pic: '//p1.lefile.cn/product/adminweb/2019/10/10/iADd3XP57f7JYAW45vugaRPrq-7729.jpg',
                    description: "27英寸IPS（2K）支持壁挂",
                    introduce: 22,
                    berif: "27英寸IPS（2K）支持壁挂",
                    price: 1949,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9106,
                    name: '拯救者Y27q-20 27英寸电竞显示器',
                    pic: '//p1.lefile.cn/product/adminweb/2019/08/30/xXP0TkNRoznYRatYsbpY9k9US-1757.jpg',
                    description: "27英寸 QHD 2K 高清显示  165Hz刷新率 1ms急速响应  FreeSync技术 画片更流畅",
                    introduce: 22,
                    berif: "27英寸 QHD 2K 高清显示  165Hz刷新率 1ms急速响应  FreeSync技术 画片更流畅 ",
                    price: 2999,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9107,
                    name: ' 联想/ThinkVision 14英寸 便携显示器M14',
                    pic: '//p4.lefile.cn/product/adminweb/2019/08/07/nHcii4kwLFXqDAkfgsKc963Hf-1795.jpg',
                    description: "14英寸窄边框便携式显示器，最薄处4.4mm，598g自重，可翻折设计，Type-C一线连接,接口：USB3.1Type-C(DP1.2AltMode)x2，支持外部供电、TÜV低蓝光认证、护眼不闪屏、支持壁挂",
                    introduce: 22,
                    berif: " 14英寸窄边框便携式显示器，最薄处4.4mm，598g自重，可翻折设计，Type-C一线连接,接口：USB3.1Type-C(DP1.2AltMode)x2，支持外部供电、TÜV低蓝光认证、护眼不闪屏、支持壁挂",
                    price: 1549,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9108,
                    name: '联想/ThinkVision 22.5英寸16:10商用电脑办公显示器S23d',
                    pic: '//p3.lefile.cn/product/adminweb/2018/06/15/yAe78F7jdUKIPp2Yp0BjB0PgS-4243.jpg',
                    description: "22.5英寸，广视角IPS类硬屏，1920*1200，16:10商用办公首选，72%NTSC，接口：VGA+DVI，分辨率较23”16:9提升11%、TÜVLowBlueLight低蓝光认证、超窄2.3mm外边框、理线器、Kensington锁、免工具拆卸，便捷安装",
                    introduce: 22,
                    berif: " 22.5英寸，广视角IPS类硬屏，1920*1200，16:10商用办公首选，72%NTSC，接口：VGA+DVI，分辨率较23”16:9提升11%、TÜVLowBlueLight低蓝光认证、超窄2.3mm外边框、理线器、Kensington锁、免工具拆卸，便捷安装",
                    price: 799,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 9109,
                    name: 'Alice',
                    pic: '//p4.lefile.cn/fes/cms/2020/11/24/cbafderb97kbolz590bt9e2hx8sbnk657042.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab10: [
                {
                    id: 10101,
                    name: '联想小新笔记本电脑双肩包',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/21/HWzIe1Ce0f80roKEt1yOC2ss6-1005.jpg',
                    description: "可容纳15.6英寸及以下轻薄本",
                    introduce: 22,
                    berif: "  可容纳15.6英寸及以下轻薄本",
                    price: "99",
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10102,
                    name: '小新笔记本电脑内胆包',
                    pic: '//p1.lefile.cn/product/adminweb/2021/02/21/yh43emibH7xuaTobvNNbD59EG-2845.jpg',
                    description: "可容纳14英寸及以下轻薄本",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 59,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10103,
                    name: '小新新选 新动系列 平板支架',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/19/d5gLrUARjbhD3optk57DoQIKj-5049.jpg',
                    description: "小新平板多角度便携支架",
                    introduce: 22,
                    berif: " 小新平板多角度便携支架",
                    price: 99,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10104,
                    name: '联想小新蓝牙鼠标深色静音版',
                    pic: '//p1.lefile.cn/product/adminweb/2020/12/28/DZXiKRbdOgNPkWRHxg85pDNk5-4010.jpg',
                    description: "联想小新蓝牙静音鼠标",
                    introduce: 22,
                    berif: " 联想小新蓝牙静音鼠标",
                    price: 49,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10105,
                    name: '小新新选 新奇系列 电脑散热支架X1',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/19/CPyZcn4vzSC6285XpWcyA9gEp-8712.jpg',
                    description: "小新新选 新奇系列 电脑散热支架X1",
                    introduce: 22,
                    berif: "   小新新选 新奇系列 电脑散热支架X1",
                    price: 49,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10106,
                    name: 'YOGA双肩包 小号 岩灰色',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/19/GqZdixW5l2EK4uL7VLl9VOmaz-4026.jpg',
                    description: "可容纳15.6英寸及以下轻薄本",
                    introduce: 22,
                    berif: " 可容纳15.6英寸及以下轻薄本",
                    price: 289,
                    state: '8299',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10107,
                    name: '小新 USB-C 五合一多功能扩展坞 银色',
                    pic: '//p1.lefile.cn/product/adminweb/2020/11/11/IcfSTi7tiLeIZxIB5NgGrjpwr-2074.jpg',
                    description: "小新 USB-C 五合一多功能扩展坞 银色",
                    introduce: 22,
                    berif: " 小新 USB-C 五合一多功能扩展坞 银色",
                    price: 129,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10108,
                    name: '联想电脑屏幕护眼灯',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/24/v0DdmQwFtsI3U11tNJSTgU8yv-6686.jpg ',
                    description: "多功能屏幕护眼灯",
                    introduce: 22,
                    berif: "多功能屏幕护眼灯",
                    price: 149,
                    state: '爆款',
                    model1: '白色',
                    model2: '黑色',
                },
                {
                    id: 10109,
                    name: 'Alice',
                    pic: '//p1.lefile.cn/fes/cms/2021/01/10/o9igtyfkmhnnaxp3osla54fge4hcec079603.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],

        }





    ]);
});


var shoppinglist = [
    {
        id: 10101,
        name: '联想小新笔记本电脑双肩包',
        pic: '//p3.lefile.cn/product/adminweb/2021/02/21/HWzIe1Ce0f80roKEt1yOC2ss6-1005.jpg',
        description: "可容纳15.6英寸及以下轻薄本",
        introduce: 22,
        berif: "  可容纳15.6英寸及以下轻薄本",
        price: "99",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10102,
        name: '小新笔记本电脑内胆包',
        pic: '//p1.lefile.cn/product/adminweb/2021/02/21/yh43emibH7xuaTobvNNbD59EG-2845.jpg',
        description: "可容纳14英寸及以下轻薄本",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 59,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10103,
        name: '小新新选 新动系列 平板支架',
        pic: '//p3.lefile.cn/product/adminweb/2021/02/19/d5gLrUARjbhD3optk57DoQIKj-5049.jpg',
        description: "小新平板多角度便携支架",
        introduce: 22,
        berif: " 小新平板多角度便携支架",
        price: 99,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10104,
        name: '联想小新蓝牙鼠标深色静音版',
        pic: '//p1.lefile.cn/product/adminweb/2020/12/28/DZXiKRbdOgNPkWRHxg85pDNk5-4010.jpg',
        description: "联想小新蓝牙静音鼠标",
        introduce: 22,
        berif: " 联想小新蓝牙静音鼠标",
        price: 49,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10105,
        name: '小新新选 新奇系列 电脑散热支架X1',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/19/CPyZcn4vzSC6285XpWcyA9gEp-8712.jpg',
        description: "小新新选 新奇系列 电脑散热支架X1",
        introduce: 22,
        berif: "   小新新选 新奇系列 电脑散热支架X1",
        price: 49,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10106,
        name: 'YOGA双肩包 小号 岩灰色',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/19/GqZdixW5l2EK4uL7VLl9VOmaz-4026.jpg',
        description: "可容纳15.6英寸及以下轻薄本",
        introduce: 22,
        berif: " 可容纳15.6英寸及以下轻薄本",
        price: 289,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10107,
        name: '小新 USB-C 五合一多功能扩展坞 银色',
        pic: '//p1.lefile.cn/product/adminweb/2020/11/11/IcfSTi7tiLeIZxIB5NgGrjpwr-2074.jpg',
        description: "小新 USB-C 五合一多功能扩展坞 银色",
        introduce: 22,
        berif: " 小新 USB-C 五合一多功能扩展坞 银色",
        price: 129,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10108,
        name: '联想电脑屏幕护眼灯',
        pic: '//p1.lefile.cn/product/adminweb/2020/08/24/v0DdmQwFtsI3U11tNJSTgU8yv-6686.jpg ',
        description: "多功能屏幕护眼灯",
        introduce: 22,
        berif: "多功能屏幕护眼灯",
        price: 149,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 10109,
        name: 'Alice',
        pic: '//p1.lefile.cn/fes/cms/2021/01/10/o9igtyfkmhnnaxp3osla54fge4hcec079603.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 9101,
        name: '联想27英寸2K故宫文创联名版显示器',
        pic: '//p4.lefile.cn/product/adminweb/2020/06/23/ByEwokslSReX3Ke9duGT08Kwh-6166.jpg',
        description: "27英寸 2K  75HZ刷新率",
        introduce: 22,
        berif: " 27英寸 2K  75HZ刷新率",
        price: "1999",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9102,
        name: ' 思匠27全面屏显示器P27h-20',
        pic: '//p3.lefile.cn/product/adminweb/2020/08/07/mzkW6QO8c0ur6RPcNP6Vak2KT-8291.jpg',
        description: "27英寸 2K 四边无边框",
        introduce: 22,
        berif: " 27英寸 2K 四边无边框",
        price: 2199,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9103,
        name: '联想23.8英寸全高清显示器L24e-10',
        pic: '//p2.lefile.cn/product/adminweb/2020/04/01/kcPz4X2etb2ZoF7hzoEv7ajfT-5110.jpg',
        description: "23.8英寸1080p高清",
        introduce: 22,
        berif: " 23.8英寸1080p高清",
        price: 799,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9104,
        name: '联想27英寸全高清显示器',
        pic: '//p3.lefile.cn/product/adminweb/2020/04/01/jRMJcDXrnBkMjcLOxuyqpIIpf-4409.jpg',
        description: "27英寸全高清超窄边框",
        introduce: 22,
        berif: " 27英寸全高清超窄边框",
        price: 1099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9105,
        name: '联想 27英寸2K 内置音箱显示器X27q-20 ',
        pic: '//p1.lefile.cn/product/adminweb/2019/10/10/iADd3XP57f7JYAW45vugaRPrq-7729.jpg',
        description: "27英寸IPS（2K）支持壁挂",
        introduce: 22,
        berif: "27英寸IPS（2K）支持壁挂",
        price: 1949,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9106,
        name: '拯救者Y27q-20 27英寸电竞显示器',
        pic: '//p1.lefile.cn/product/adminweb/2019/08/30/xXP0TkNRoznYRatYsbpY9k9US-1757.jpg',
        description: "27英寸 QHD 2K 高清显示  165Hz刷新率 1ms急速响应  FreeSync技术 画片更流畅",
        introduce: 22,
        berif: "27英寸 QHD 2K 高清显示  165Hz刷新率 1ms急速响应  FreeSync技术 画片更流畅 ",
        price: 2999,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9107,
        name: ' 联想/ThinkVision 14英寸 便携显示器M14',
        pic: '//p4.lefile.cn/product/adminweb/2019/08/07/nHcii4kwLFXqDAkfgsKc963Hf-1795.jpg',
        description: "14英寸窄边框便携式显示器，最薄处4.4mm，598g自重，可翻折设计，Type-C一线连接,接口：USB3.1Type-C(DP1.2AltMode)x2，支持外部供电、TÜV低蓝光认证、护眼不闪屏、支持壁挂",
        introduce: 22,
        berif: " 14英寸窄边框便携式显示器，最薄处4.4mm，598g自重，可翻折设计，Type-C一线连接,接口：USB3.1Type-C(DP1.2AltMode)x2，支持外部供电、TÜV低蓝光认证、护眼不闪屏、支持壁挂",
        price: 1549,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9108,
        name: '联想/ThinkVision 22.5英寸16:10商用电脑办公显示器S23d',
        pic: '//p3.lefile.cn/product/adminweb/2018/06/15/yAe78F7jdUKIPp2Yp0BjB0PgS-4243.jpg',
        description: "22.5英寸，广视角IPS类硬屏，1920*1200，16:10商用办公首选，72%NTSC，接口：VGA+DVI，分辨率较23”16:9提升11%、TÜVLowBlueLight低蓝光认证、超窄2.3mm外边框、理线器、Kensington锁、免工具拆卸，便捷安装",
        introduce: 22,
        berif: " 22.5英寸，广视角IPS类硬屏，1920*1200，16:10商用办公首选，72%NTSC，接口：VGA+DVI，分辨率较23”16:9提升11%、TÜVLowBlueLight低蓝光认证、超窄2.3mm外边框、理线器、Kensington锁、免工具拆卸，便捷安装",
        price: 799,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 9109,
        name: 'Alice',
        pic: '//p4.lefile.cn/fes/cms/2020/11/24/cbafderb97kbolz590bt9e2hx8sbnk657042.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 8101,
        name: '联想蜂窝胎滑板车M2（黑色）',
        pic: '//p4.lefile.cn/product/adminweb/2020/06/05/vzzTuni729QPIlf02ytzrqD0e-7995.jpg',
        description: "【升级版，新品上市】三重刹车，三重减震，折叠车身，120KG承重，APP智能锁车，好玩不止一点",
        introduce: 22,
        berif: " 【升级版，新品上市】三重刹车，三重减震，折叠车身，120KG承重，APP智能锁车，好玩不止一点",
        price: "1799",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8102,
        name: '联想个人云存储A1 3TB',
        pic: '//p4.lefile.cn/product/adminweb/2020/08/14/ql0k3QlYjnhhhqixVnre0k2Oa-8483.jpg ',
        description: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
        introduce: 22,
        berif: " 【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
        price: 1099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8103,
        name: '联想E1指纹锁智能门锁',
        pic: '//p3.lefile.cn/product/adminweb/2020/04/15/pd95CPjmqhgukoZpAi303Nz0a-7143.jpg',
        description: "【顺丰包邮】密码防盗，活体指纹识别，防猫眼电子锁",
        introduce: 22,
        berif: "【顺丰包邮】密码防盗，活体指纹识别，防猫眼电子锁",
        price: 899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8104,
        name: 'YOGA 14s 2021款',
        pic: '//p2.lefile.cn/product/adminweb/2020/04/14/F6HgOYJINsLJ3dD7MALMAi2eI-9593.jpg',
        description: "联想智能扫地机器人Pro版银色+集尘宝",
        introduce: 22,
        berif: " 联想智能扫地机器人Pro版银色+集尘宝",
        price: 3999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8405,
        name: '联想(Lenovo)T6S 手机投影仪家用 迷你便携式微型无线高清投影机 ',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/26/N5bKrSLE8azIHDoKmHyt2hTIB-1416.jpg',
        description: "小巧便携/梯形校正/高清护眼/内置电池/无线同屏/杜比音效",
        introduce: 22,
        berif: " 小巧便携/梯形校正/高清护眼/内置电池/无线同屏/杜比音效",
        price: 1499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8106,
        name: '联想个人云存储A1 4TB 故宫文创联名款 饕餮',
        pic: '//p4.lefile.cn/product/adminweb/2020/08/18/MSd7WtldnsxViZw7oRwYz53Rm-8346.jpg ',
        description: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据",
        introduce: 22,
        berif: "【家庭私有】私有云盘/畅享高速存储/远程访问/多人共享数据 ",
        price: 1499,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8107,
        name: '智能体脂秤Mini E2 ',
        pic: '//p2.lefile.cn/product/adminweb/2020/05/25/hW99vuxZdEOOiIhy0cxi6ZULq-9911.jpg',
        description: "全家使用 20项核心指标测量 不连手机也可读取体脂率，云存储同步 体重秤男女健康减肥 一年换新质保售后无忧",
        introduce: 22,
        berif: "全家使用 20项核心指标测量 不连手机也可读取体脂率，云存储同步 体重秤男女健康减肥 一年换新质保售后无忧",
        price: 7499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8108,
        name: '联想智能机器人L-EDR002  蓝色',
        pic: '//p3.lefile.cn/product/adminweb/2020/11/02/FZLHknivPfr0ktTtSvHmigVaF-6640.jpg',
        description: " 智能陪伴，益智儿童教育机",
        introduce: 22,
        berif: " 智能陪伴，益智儿童教育机",
        price: 109,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 8109,
        name: 'Alice',
        pic: '//p3.lefile.cn/fes/cms/2020/11/17/3rhfivd1bkxu9gtlips5cmm7xmdfgq901462.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 7101,
        name: 'Lenovo Care+整机延保1年（小新&ideapad&MIIX）',
        pic: '//p4.lefile.cn/product/adminweb/2020/09/01/j5xkLAOQ3Z9sSiHNtt4LlrmjG-8399.jpg',
        description: "原厂硬件 | 全国联保 | 免费换件",
        introduce: 22,
        berif: " 原厂硬件 | 全国联保 | 免费换件",
        price: "349",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7102,
        name: '联想无线静音鼠标N911 Pro 黑色（送电脑远程调修服务）',
        pic: '//p2.lefile.cn/product/adminweb/2019/10/16/XcNkqN9Y3wiNTD4EMdg1niRrz-4160.jpg ',
        description: "无线静音 | 舒适防滑 | 省电耐用",
        introduce: 22,
        berif: "  无线静音 | 舒适防滑 | 省电耐用",
        price: 59,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7102,
        name: '联想都市简约双肩包B1801 Pro 灰黑色（送电脑远程调修服务）',
        pic: '//p3.lefile.cn/product/adminweb/2020/09/02/r3luJlgtYcZOf9Y2NWmVbSSDY-5488.jpg ',
        description: "25升大容量 | 防泼溅面料 | 背部透气网格| 两侧防渗水侧边带",
        introduce: 22,
        berif: " 25升大容量 | 防泼溅面料 | 背部透气网格| 两侧防渗水侧边带",
        price: 69,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7104,
        name: '联想简约手提电脑包B12 奶油粉',
        pic: '//p2.lefile.cn/product/adminweb/2021/02/22/6X7NRFRtS4NhPmOnf9y6SW3Be-9083.jpg ',
        description: "气垫防震 | 轻简随行 | 防泼面料 | 柔软内里",
        introduce: 22,
        berif: "气垫防震 | 轻简随行 | 防泼面料 | 柔软内里",
        price: 79,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7105,
        name: '联想都市简约手提内胆包B11 灰黑色（送电脑远程调修服务） ',
        pic: '//p3.lefile.cn/product/adminweb/2020/09/02/kLkLGtWgti75nzh67iXqI8Zk8-1032.jpg',
        description: "大容量、轻重量 | 隐藏式提手 | 内衬短毛绒布 | 防泼溅面料",
        introduce: 22,
        berif: " 大容量、轻重量 | 隐藏式提手 | 内衬短毛绒布 | 防泼溅面料",
        price: 49,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7106,
        name: '联想清洁套装C01',
        pic: '//p2.lefile.cn/product/adminweb/2019/03/27/SYAHyvfWomlIOgBZjoceIEGeH-1463.jpg',
        description: "强力去污 | 清洁彻底 | 无腐蚀性 | 多设备通用",
        introduce: 22,
        berif: "强力去污 | 清洁彻底 | 无腐蚀性 | 多设备通用",
        price: 39,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7107,
        name: '重装系统 ',
        pic: '//p1.lefile.cn/fes/cms/2020/12/08/8yr8hwsdquq465pywg3k10o1zlv1gi040083.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "重装系统服务",
        price: 108,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7108,
        name: '联想一键服务机械键盘K310 黑色 青轴',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/09/zJl7odzy3hFBrDyhGNMOZQsgC-2683.jpg',
        description: "108键全键无冲 | 磁吸上盖 | 白色背光 | PBT键帽 | 机械青轴",
        introduce: 22,
        berif: "   GTX 1650Ti独显",
        price: 349,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 7109,
        name: 'Alice',
        pic: '//p1.lefile.cn/fes/cms/2021/03/03/ciac91e9uon0m3i92xf1own2g5e9zj185863.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 6101,
        name: '联想小新Air2双模鼠标-冰河银',
        pic: '//p1.lefile.cn/product/adminweb/2018/08/24/U1OHDCmnoNi958Mps3I07yy5F-5552.jpg',
        description: "【无线蓝光】 全金属表层 无线切割 便携办公 台式机笔记本鼠标",
        introduce: 22,
        berif: " 【无线蓝光】 全金属表层 无线切割 便携办公 台式机笔记本鼠标",
        price: "89",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6102,
        name: '联想大红点M120 Pro无线鼠标',
        pic: '//p3.lefile.cn/product/adminweb/2018/08/17/K1pI8Tx6SCtoQjM1UAMksnqXr-8649.jpg ',
        description: "轻巧便携，光学引擎，轻松办公，笔记本电脑通用",
        introduce: 22,
        berif: " 轻巧便携，光学引擎，轻松办公，笔记本电脑通用",
        price: 29.9,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6103,
        name: '联想笔记本5合1清洁套装J5',
        pic: '//p2.lefile.cn/product/adminweb/2020/11/30/TJxVwXTugkmzqBUB0fWvMtbOy-2777.jpg',
        description: "联想笔记本5合1清洁套装J5",
        introduce: 22,
        berif: " 联想笔记本5合1清洁套装J5",
        price: 36.9,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6104,
        name: '联想笔记本支架X06',
        pic: '//p2.lefile.cn/product/adminweb/2020/11/30/5aZV0i0nG8HaX4pzC7VoXcLGy-0106.jpg ',
        description: "小新笔记本支架 / 7档高度调节 / 铝合金材质 / 可折叠易收纳",
        introduce: 22,
        berif: " 小新笔记本支架 / 7档高度调节 / 铝合金材质 / 可折叠易收纳",
        price: 59,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6105,
        name: '联想蓝牙耳机H12 Pro（锖黑色） ',
        pic: '//p4.lefile.cn/product/adminweb/2020/11/24/nqYu5EtEchqfmCS0nDFYyFMsx-0160.jpg',
        description: "智能蓝牙5.0 / 低功耗强续航 / CVC双麦降噪 / AI语音交互 / 可同时连接两部耳机",
        introduce: 22,
        berif: " 智能蓝牙5.0 / 低功耗强续航 / CVC双麦降噪 / AI语音交互 / 可同时连接两部耳机",
        price: 169,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6106,
        name: '联想 USB3.0 移动硬盘F308 黑 2TB',
        pic: '//p3.lefile.cn/product/adminweb/2018/05/04/zeudx78z6mJKXAxexKJRK0Q7h-2774.jpg',
        description: "联想 移动硬盘 抗压抗震设计Windows/Mac多系统兼容小巧身材轻薄  稳定便携联想原装品质  值得信赖高速3.0高速传输",
        introduce: 22,
        berif: "联想 移动硬盘 抗压抗震设计Windows/Mac多系统兼容小巧身材轻薄  稳定便携联想原装品质  值得信赖高速3.0高速传输",
        price: 429,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6107,
        name: '联想小新X3C Pro双接口闪存盘(64GB)银 ',
        pic: '//p1.lefile.cn/product/adminweb/2019/10/25/hifv6aw8PJL03izS3vzrtQWRP-0930.jpg',
        description: "联想小新USB3.1双接口闪存盘，精耀于感，匠心制造，全金属旋转机身，双接口设计，文件轻松转移，原装存储芯片，高效稳定传输，智能app管理，5重防护，超强耐久",
        introduce: 22,
        berif: "联想小新USB3.1双接口闪存盘，精耀于感，匠心制造，全金属旋转机身，双接口设计，文件轻松转移，原装存储芯片，高效稳定传输，智能app管理，5重防护，超强耐久",
        price: 53.9,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6108,
        name: '拯救者Y7000P 2020 ',
        pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
        description: "联想拯救者电竞耳机 游戏耳麦 Star Y360 （黑色）",
        introduce: 22,
        berif: " 联想拯救者电竞耳机，7.1环绕声道，独立usb声卡",
        price: 6999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 6109,
        name: 'Alice',
        pic: '//p3.lefile.cn/fes/cms/2021/01/14/m8p6xd83cfuma3we1snqkjslsenscq795810.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 5101,
        name: '联想平板小新Pad Pro 11.5英寸 影音娱乐办公学习平板电脑 深空灰',
        pic: '//p1.lefile.cn/fes/cms/2020/12/29/lby6widd89p4df5ag27aftpfbxgqm3385410.jpg',
        description: "Qualcomm® Snapdragon™ 730G/8核/Android系统/11.5英寸/6G/128G/WIFI版/深空灰",
        introduce: 22,
        berif: " Qualcomm® Snapdragon™ 730G/8核/Android系统/11.5英寸/6G/128G/WIFI版/深空灰",
        price: "2499",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5102,
        name: '联想平板小新Pad 11',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/19/NoeJczGGH8C9kSfEewgII6vcv-5920.jpg',
        description: "2K分辨率LCD屏",
        introduce: 22,
        berif: " 2K分辨率LCD屏",
        price: 1399,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5103,
        name: '联想平板小新Pad 11英寸 学习娱乐平板电脑 深空灰',
        pic: '//p4.lefile.cn/product/adminweb/2020/12/21/oSgL65ex0EpFr52u5gSMh8sth-3483.jpg ',
        description: "Qualcomm® Snapdragon™ 662/8核/Android系统/11英寸/4G/64G/WIFI版/深空灰",
        introduce: 22,
        berif: " Qualcomm® Snapdragon™ 662/8核/Android系统/11英寸/4G/64G/WIFI版/深空灰",
        price: 1299,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5104,
        name: '联想M10 plus TB-X606F 2020新款 学习网课护眼平板电脑',
        pic: '//p3.lefile.cn/product/adminweb/2021/01/08/sQDY7ni4PWIMQjHqj9ppiwSjl-9679.jpg',
        description: "8核心/Android系统/10.3英寸/4G/64G/WIFI版",
        introduce: 22,
        berif: "8核心/Android系统/10.3英寸/4G/64G/WIFI版",
        price: 1099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5105,
        name: '联想YOGA tab5网课平板 4G+64G 10.1英寸8核 学生护眼平板 WIFI版 ',
        pic: '//p3.lefile.cn/product/adminweb/2019/10/28/KlB15FKLS2Au5RrEwbyc6ByZT-7036.jpg',
        description: "高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板",
        introduce: 22,
        berif: "   高通439八核/Android系统/10.1英寸/4GB/64GB/WIFI版/深空灰/网课平板",
        price: 1399,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5106,
        name: '联想平板M8 8英寸 4G+64G WiFi版 杜比全景声 网课平板',
        pic: '//p2.lefile.cn/product/adminweb/2020/04/26/wCCKQbErs715ptpS7K2zvjvjX-9082.jpg ',
        description: "MTK P22T/8核/Android  Pie 9/8英寸/4G/64G/管控模式/人脸验证/双频WIFI/银色",
        introduce: 22,
        berif: " MTK P22T/8核/Android  Pie 9/8英寸/4G/64G/管控模式/人脸验证/双频WIFI/银色 ",
        price: 5899,
        state: '999',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5107,
        name: 'YOGA Tab3 Plus-X703F 10.1英寸平板电脑 WIFI版 黑色 ',
        pic: '//p4.lefile.cn/product/adminweb/2016/10/24/P6uxmpuzPl4Y4BWHC5bNo1Vyz-4109.jpg',
        description: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
        introduce: 22,
        berif: " 2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
        price: 1499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5108,
        name: 'YOGA Tab3 Plus-X703F 10.1英寸平板电脑 WIFI版 黑色',
        pic: '//p4.lefile.cn/product/adminweb/2016/10/24/P6uxmpuzPl4Y4BWHC5bNo1Vyz-4109.jpg',
        description: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
        introduce: 22,
        berif: "2560x1600分辨率/高通骁龙八核/3GB/32GB/9300mAh/黑色/网课平板",
        price: 1999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 5109,
        name: 'Alice',
        pic: '//p3.lefile.cn/fes/cms/2021/01/21/h8yg36qtslacys0k9t23w3wmgjzfl4156463.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 4101,
        name: '摩托罗拉 motorola edge s 8GB+128GB 翡色琉光',
        pic: '//p2.lefile.cn/product/adminweb/2021/01/26/nnMw7xVb8X9M3VawO54FqvPPM-3974.jpg',
        description: "骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
        introduce: 22,
        berif: "   骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
        price: "2399",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4102,
        name: 'motorola 摩托罗拉 刀锋 5G 8GB+256GB 天选金',
        pic: '//p3.lefile.cn/product/adminweb/2020/12/22/lYtJ6lTaoc8dvrKrCWwtSxIqm-1319.jpg ',
        description: "5G刀锋折叠屏 | 双屏双视界 | 无缝无折痕 | 4800万像素超强自拍",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 9999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4103,
        name: '联想乐檬K12 4GB+64GB 渐变蓝',
        pic: '//p1.lefile.cn/product/adminweb/2020/12/15/vEGhF0zgXSp0DiybeSEVz5gIS-8564.jpg ',
        description: "5000mAh充电宝级续航 | 4800万像素全场景AI双摄 | 6.5英寸炫彩全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
        introduce: 22,
        berif: "   到手价3999元",
        price: 4099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4104,
        name: '拯救者电竞手机 Pro 12GB+256GB 炽焰战甲',
        pic: '//p2.lefile.cn/product/adminweb/2020/12/08/wraEKjH1Bpl4mSsklLaQzXekE-8946.jpg ',
        description: "次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
        introduce: 22,
        berif: "   【代言人同款】",
        price: 3699,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4105,
        name: '摩托罗拉 motorola edge s 8GB+128GB 雪霁初晴 ',
        pic: '//p2.lefile.cn/product/adminweb/2021/01/26/1OfOkUDT5gGBy1qh1ZB99o9u3-8898.jpg',
        description: "骁龙870 5G旗舰处理器 | 6400万超广角前后六摄丨5000mAh超长续航 | LPDDR5+UFS3.1",
        introduce: 22,
        berif: "   高色域全面屏",
        price: 4599,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4106,
        name: 'motorola 摩托罗拉 刀锋 5G 8GB+256GB 天选金',
        pic: '//p1.lefile.cn/product/adminweb/2020/12/21/tqW8YYcid0gtLTeiJMgyXvn4r-5640.jpg ',
        description: "5G刀锋折叠屏 | 双屏双视界 | 无缝无折痕 | 4800万像素超强自拍",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 9999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4107,
        name: '联想乐檬K12 Pro 4GB+64GB 墨青 ',
        pic: '//p3.lefile.cn/product/adminweb/2020/12/28/2W5tktXw6zB7DpMUcfAidz0bA-2065.jpg',
        description: "6000mAh大电池，三天一充 | 6400万像素全场景AI三摄 | 6.8英寸微孔超大全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
        introduce: 22,
        berif: " 6000mAh大电池，三天一充 | 6400万像素全场景AI三摄 | 6.8英寸微孔超大全面屏 |一键触达侧键，一键启动高频应用 | 骁龙8核旗舰级体验 | 大存储空间自由拓展",
        price: 899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4108,
        name: '拯救者电竞手机 Pro 12GB+256GB 炫蓝冰刃 90W充电器版 ',
        pic: '//p3.lefile.cn/product/adminweb/2021/01/08/yeXKvSPoyGJPwhxKsV5jY37Le-3427.jpg',
        description: "次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
        introduce: 22,
        berif: "   次世代中置架构/高通骁龙865 Plus旗舰处理器/90W 超级闪充/双X 轴线性马达/144Hz电竞屏/横屏UI设计/主播级中置前摄",
        price: 3899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 4109,
        name: 'Alice',
        pic: '//p2.lefile.cn/fes/cms/2021/03/04/grnzuqka68eykisx89zwxu60fj7t9s600582.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
    {
        id: 3101,
        name: 'ThinkPad X1 Nano',
        pic: '//p3.lefile.cn/product/adminweb/2020/12/20/8RQvyeZbVkQxTOQwmG9dYKOxl-2668.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650 独显",
        price: "5799",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3102,
        name: 'ThinkPad X13 锐龙版',
        pic: '//p3.lefile.cn/product/adminweb/2020/07/10/6XLKJoyAcvL2QoCg0BxzX1nfc-7306.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3103,
        name: 'ThinkPad T14 锐龙版 笔记本电脑 20UD0004CD',
        pic: '//p1.lefile.cn/product/adminweb/2020/07/13/pSlw0iTOapQM5cvcy1ePA7T4V-0328.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   到手价3999元",
        price: 4099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3104,
        name: 'ThinkPad E14 锐龙版',
        pic: '//p1.lefile.cn/product/adminweb/2020/05/26/tgyqoVyERNzJhO9GzU2RdY2DQ-9465.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   【代言人同款】",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3105,
        name: 'ThinkPad X1 Carbon 2020 ',
        pic: '//p3.lefile.cn/product/adminweb/2020/05/18/hbaHG1DaZD239B21KwjK9ey17-4292.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   高色域全面屏",
        price: 4599,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3106,
        name: '【王源同款】全新ThinkBook 14 酷睿版英特尔酷睿i5 锐智系创造本',
        pic: '//p1.lefile.cn/product/adminweb/2020/11/12/HXsY4tFCION5FtIAOsYZDgdLl-4139.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "  RTX 2060 独显  ",
        price: 5899,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3107,
        name: '全新ThinkBook 15 ',
        pic: '//p2.lefile.cn/product/adminweb/2020/09/30/kWK1ZniB9VixFCjFlhEGgu1S5-1791.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   RTX 2060 独显",
        price: 7499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3108,
        name: '【王源推荐】ThinkBook 15p 英特尔酷睿i5 视觉系创造本 01CD',
        pic: '//p2.lefile.cn/product/adminweb/2020/11/06/vgRzgzSwfMIteVFIgyjELom6N-4294.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650Ti独显",
        price: 6999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 3109,
        name: 'Alice',
        pic: '//p3.lefile.cn/fes/cms/2021/02/23/kkh0sgbjesgi051u7e4hnn61bw21oh126346.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },

    {
        id: 101,
        name: '联想 HE05 颈挂式蓝牙耳机-黑色',
        pic: 'https://p4.lefile.cn/product/adminweb/2020/10/13/9Q1xV4JRbHAzyajsLgwA3g6x8-7950.jpg',
        description: "联想 HE05 颈挂式蓝牙耳机-黑色",
        introduce: 22,
        berif: "   联想 HE05 颈挂式蓝牙耳机-黑色",
        count: "0",
        price: "33.9",
        price1: "49",
        model1: '白色',
        model2: '黑色',
    },
    {
        id: 102,
        name: '联想大红点M120 Pro无线鼠标',
        pic: 'https://p3.lefile.cn/product/adminweb/2018/08/17/a0lTvGo6vKxqPeAM0eprptrjy-2615.jpg ',
        description: "联想大红点M120 Pro无线鼠标",
        introduce: 22,
        berif: "   联想大红点M120 Pro无线鼠标",
        count: "0",
        price: "29.9",
        price1: "49.9",
        model1: '白色',
        model2: '黑色',
    },
    {
        id: 103,
        name: '拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款',
        pic: 'https://p4.lefile.cn/product/adminweb/2020/05/15/k70eARSAz6rBDzYtODij54miV-3675.jpg',
        introduce: 22,
        berif: "   拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款",
        description: "拯救者 R7000 2020款 15.6英寸游戏笔记本 幻影黑 定制款",
        count: "0",
        price: "5888",
        price1: "6088",
        model1: '白色',
        model2: '黑色',
    },
    {
        id: 104,
        name: '联想闪存盘R120 32G',
        "pic": 'https://p2.lefile.cn/product/adminweb/2021/02/22/CRciT0reOMioXYvOrVwZog6b5-5107.jpg',
        introduce: 22,
        berif: "   联想闪存盘R120 32G",
        description: "联想闪存盘R120 32G",
        count: "0",
        price: "55",
        price1: "79",
        model1: '白色',
        model2: '黑色',
    },
    {
        id: 1101,
        name: '拯救者 R7000  冰魄白',
        pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650 独显",
        price: "5799",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1102,
        name: 'YOGA14s 2021酷睿标压版',
        pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1103,
        name: '小新Air14 2021锐龙版',
        pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   到手价3999元",
        price: 4099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1104,
        name: 'YOGA 14s 2021款',
        pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   【代言人同款】",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1105,
        name: '小新Air15 2021锐龙版 ',
        pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   高色域全面屏",
        price: 4599,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1106,
        name: '拯救者 Y7000P 2020款',
        pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "  RTX 2060 独显  ",
        price: 5899,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1107,
        name: '拯救者 R7000P ',
        pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   RTX 2060 独显",
        price: 7499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1108,
        name: '拯救者Y7000P 2020 ',
        pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650Ti独显",
        price: 6999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 1109,
        name: 'Alice',
        pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
        introduce: 22,
        count:'0',
    },
    {
        id: 2101,
        name: 'AIO 520C-24IWL 十代英特尔酷睿i3 23.8英寸一体台式机 黑色',
        pic: '//p3.lefile.cn/product/adminweb/2021/01/05/jjYh0FahA6JC7Vz3IgiVp8tb7-2312.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650 独显",
        price: "5799",
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2102,
        name: '天逸510S-07IMB 分体式台式机',
        pic: '//p2.lefile.cn/product/adminweb/2020/10/13/K3euPTYrFqj2Rb9SrelfWntVB-9916.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   晒单送1年延保",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2103,
        name: '拯救者 刃7000P-26AMR 专业版 分体式游戏主机',
        pic: '//p4.lefile.cn/product/adminweb/2020/11/04/vzr4CMsrJvQZ37kMykEUmKs3a-3079.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   到手价3999元",
        price: 4099,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2104,
        name: 'AIO 520C-24IMB 酷睿版 十代英特尔酷睿i5 23.8英寸一体机 白色',
        pic: '//p3.lefile.cn/product/adminweb/2021/01/05/3URLW9GuIQqGA8cTpvyZGkTDs-2738.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   【代言人同款】",
        price: 5899,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2105,
        name: 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色 ',
        pic: '//p4.lefile.cn/product/adminweb/2021/01/05/uiBi61fXr8EMcr6nHFqYx6Uqe-3628.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   高色域全面屏",
        price: 4599,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2106,
        name: '天逸510S-07IMB 分体式台式机 银灰',
        pic: '//p3.lefile.cn/product/adminweb/2020/08/20/ckk196GqiJ7o63rtfZGMtAYuB-6880.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "  RTX 2060 独显  ",
        price: 5899,
        state: '8299',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2107,
        name: '联想GeekPro 2020 英特尔酷睿i7 分体式台式机 ',
        pic: '//p2.lefile.cn/product/adminweb/2020/06/05/fux9rwC9C2tkZwF3YMoCT7UxB-8356.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   RTX 2060 独显",
        price: 7499,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2108,
        name: 'ideacentre AIO 520C-24IWL 23.8英寸一体台式机 黑色 ',
        pic: '//p4.lefile.cn/product/adminweb/2021/01/05/SWtQAbdBtkL5W3Y2WFUBHnVKP-5768.jpg ',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        berif: "   GTX 1650Ti独显",
        price: 6999,
        state: '爆款',
        model1: '白色',
        model2: '黑色',
        count:'0',
    },
    {
        id: 2109,
        name: 'Alice',
        pic: '//p1.lefile.cn/fes/cms/2021/01/21/u4bot9x3r7px70k38unn8gq96uops1706341.jpg',
        description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
        introduce: 22,
        count:'0',
    },
]
router.get('/shoppinglist', function (req, res) {
    console.log("请求购物车列表")
    res.json(
        shoppinglist
    );
});
module.exports = router;


