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
    var namepass={
        name:name,
        pass:name
    }
    res.json([

        {
            name:req.body.name,
            pass:req.body.password
            


        },])

    user.splice(1, 0,namepass) 
    console.log(user)


});
var number=0
var shopping=[{
    count:"0",
    id:"",
}]
router.post('/number', function (req, res, next) {
    var number1 = req.body.number;
    shopping.count=req.body.number;
    shopping.id=parseInt(req.body.id)
    console.log(req.body.id,"这位是id")
    console.log('number:' + number);
    console.log("执行number购物车")

    number=parseInt(number1)+parseInt(number)
    res.json([

        {

            number: number,


        },




    ]);

    var id= shopping.id;
    var count=shopping.count
    // console.log(id,"id 列表")
    // console.log(count," count列表")
    var find = shoppinglist.find(item => {
        if (item.id == id ) {
            item.count=parseInt(item.count)+parseInt(count)

            console.log(shoppinglist,"shopping列表")
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
var gooddetaillist=""
router.post('/gooddetaillist', function (req, res, next) {
    var list = req.body.list;
    gooddetaillist =JSON.parse(list)

    // console.log(list,"执行goodlistdetail")


    res.json([

        {

            gooddetaillist


        },




    ]);


});

router.get("/gooddetaillist1", (req, res) => {

    // console.log(number,"这是服务器")
    // gooddetaillist= gooddetaillist.split(',');
        res.json(
    
            
    
                gooddetaillist
    
    
            
    
    
    
    
        );
        
    })



var orderlist1=""
var userinformation1=""
router.post("/order", function (req, res) {
  let userinformation=req.body.userinformation
  let orderlist=req.body.orderlist
//   var obj = eval('(' + orderlist + ')');
  var obj2=JSON.parse(orderlist)
var userinformation2=JSON.parse(userinformation)
  console.log(userinformation,"这是订单详情发过来的订单信息");
//   console.log(obj2,"这是发过来的订单物品列表");
  orderlist1=obj2;
  userinformation1=userinformation2;

})
router.get('/pay', function (req, res) {
   
  console.log(orderlist1,"这是发过来的订单物品列表");
// var userinformation=JSON.stringify(userinformation1)
//  console.log(userinformation,"这是订单详情发过来的订单信息");


   if(orderlist1!==""){
       res.json(
        orderlist1,
      
       )

   }
});
router.get('/payinformation', function (req, res) {
    console.log(userinformation1,"这是user");
 
 
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
                name: "AIO 520C-24IMB 十代英特尔酷睿i5 23.8英寸一体台式机 黑色",
                berif: " 十代英特尔酷睿i5-10400T/Windows 10 家庭中文版/23.8英寸/16G/1T+256G SSD/独立显卡/黑色",
                prie: "5099"

            },
            tab2: {
                pic: "http://p4.lefile.cn/fes/cms/2021/02/22/9grjwwkqwuck9ltsd9e7tjqsv9qdoj507330.png",
                name: "拯救者 刃7000K 2020十代英特尔酷睿i7 分体台式机 黑色",
                berif: "  十代英特尔酷睿i7-10700/i7-10700F/Windows 10 家庭中文版/16G/ 512G SSD/GTX1660 SUPER-6GB/黑色",
                prie: "6799"
            },
            tab3: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/13/fucb72lemr89f3q4jsjqyexxc4q6wn215553.png",
                name: "联想GeekPro 2020 英特尔酷睿i5 分体式台式机",
                berif: "  十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                prie: "4299"
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
                prie: "8299"

            },
            tab2: {
                pic: "http://p2.lefile.cn/fes/cms/2021/01/13/fucb72lemr89f3q4jsjqyexxc4q6wn215553.png",
                name: "联想GeekPro 2020 英特尔酷睿i5 分体式台式机",
                berif: "  十代英特尔酷睿i5-10400F/i5-10400/Windows 10 家庭中文版 /8G/1T+256G SSD/GTX1650_4GB/黑色",
                prie: "5499"
            },
            tab3: {
                pic: "http://p2.lefile.cn/fes/cms/2020/11/03/fvc1cktdsa4me5resdgacaaqe7vgb1391617.png",
                name: "YOGA 13s 2021款英特尔Evo平台 13.3英寸全面屏轻薄笔记本 深空灰",
                berif: "   第十一代英特尔酷睿i5-1135G7/Windows 10 家庭中文版/13.3英寸/16G/512G SSD/集成显卡/深空灰",
                prie: "5699"
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
        },

    ]);
});


router.get('/goodlis', function (req, res) {
    res.json([
        {
            tab1: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    introduce: 22,
                },
            ],
            tab2: [
                {
                    id: 101,
                    name: 'AIO 520C-24IWL 十代英特尔酷睿i3 23.8英寸一体台式机 黑色',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/05/jjYh0FahA6JC7Vz3IgiVp8tb7-2312.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '天逸510S-07IMB 分体式台式机',
                    pic: '//p2.lefile.cn/product/adminweb/2020/10/13/K3euPTYrFqj2Rb9SrelfWntVB-9916.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 刃7000P-26AMR 专业版 分体式游戏主机',
                    pic: '//p4.lefile.cn/product/adminweb/2020/11/04/vzr4CMsrJvQZ37kMykEUmKs3a-3079.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'AIO 520C-24IMB 酷睿版 十代英特尔酷睿i5 23.8英寸一体机 白色',
                    pic: '//p3.lefile.cn/product/adminweb/2021/01/05/3URLW9GuIQqGA8cTpvyZGkTDs-2738.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色 ',
                    pic: '//p4.lefile.cn/product/adminweb/2021/01/05/uiBi61fXr8EMcr6nHFqYx6Uqe-3628.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '天逸510S-07IMB 分体式台式机 银灰',
                    pic: '//p3.lefile.cn/product/adminweb/2020/08/20/ckk196GqiJ7o63rtfZGMtAYuB-6880.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '联想GeekPro 2020 英特尔酷睿i7 分体式台式机 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/06/05/fux9rwC9C2tkZwF3YMoCT7UxB-8356.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'ideacentre AIO 520C-24IWL 23.8英寸一体台式机 黑色 ',
                    pic: '//p4.lefile.cn/product/adminweb/2021/01/05/SWtQAbdBtkL5W3Y2WFUBHnVKP-5768.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p1.lefile.cn/fes/cms/2021/01/21/u4bot9x3r7px70k38unn8gq96uops1706341.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab3: [
                {
                    id: 101,
                    name: 'ThinkPad X1 Nano',
                    pic: '//p3.lefile.cn/product/adminweb/2020/12/20/8RQvyeZbVkQxTOQwmG9dYKOxl-2668.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'ThinkPad X13 锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2020/07/10/6XLKJoyAcvL2QoCg0BxzX1nfc-7306.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'ThinkPad T14 锐龙版 笔记本电脑 20UD0004CD',
                    pic: '//p1.lefile.cn/product/adminweb/2020/07/13/pSlw0iTOapQM5cvcy1ePA7T4V-0328.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'ThinkPad E14 锐龙版',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/26/tgyqoVyERNzJhO9GzU2RdY2DQ-9465.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'ThinkPad X1 Carbon 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/05/18/hbaHG1DaZD239B21KwjK9ey17-4292.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '【王源同款】全新ThinkBook 14 酷睿版英特尔酷睿i5 锐智系创造本',
                    pic: '//p1.lefile.cn/product/adminweb/2020/11/12/HXsY4tFCION5FtIAOsYZDgdLl-4139.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '全新ThinkBook 15 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/30/kWK1ZniB9VixFCjFlhEGgu1S5-1791.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '【王源推荐】ThinkBook 15p 英特尔酷睿i5 视觉系创造本 01CD',
                    pic: '//p2.lefile.cn/product/adminweb/2020/11/06/vgRzgzSwfMIteVFIgyjELom6N-4294.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/23/kkh0sgbjesgi051u7e4hnn61bw21oh126346.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab4: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab5: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab6: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab7: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab8: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab9: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],
            tab10: [
                {
                    id: 101,
                    name: '拯救者 R7000  冰魄白',
                    pic: '//p2.lefile.cn/product/adminweb/2021/02/08/0htJdEJqsFUn7fgPIoG54EFQE-9194.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650 独显",
                    price: "5799",
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA14s 2021酷睿标压版',
                    pic: '//p4.lefile.cn/product/adminweb/2021/02/23/A7x1gNWJ2P2cBp4XxvXgkZZIp-5036.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   晒单送1年延保",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air14 2021锐龙版',
                    pic: '//p3.lefile.cn/product/adminweb/2021/02/23/vfmOPLvmtbASXnhB7hKYFTdzJ-1898.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   到手价3999元",
                    price: 4099,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: 'YOGA 14s 2021款',
                    pic: '//p2.lefile.cn/product/adminweb/2020/12/21/Iu60Nktsn3AtgAG9bmpOAEoE2-5419.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   【代言人同款】",
                    price: 5899,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '小新Air15 2021锐龙版 ',
                    pic: '//p2.lefile.cn/product/adminweb/2020/09/22/ykoExTS9L4cvgJEvwSGux6FeW-4908.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   高色域全面屏",
                    price: 4599,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者 Y7000P 2020款',
                    pic: '//p1.lefile.cn/product/adminweb/2020/05/21/gZnY1JY6YWIaO5vG5uaSMVtVJ-1021.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "  RTX 2060 独显  ",
                    price: 5899,
                    state: '8299'
                },
                {
                    id: 102,
                    name: '拯救者 R7000P ',
                    pic: '//p1.lefile.cn/product/adminweb/2020/08/19/yuc9Mhus8iUqaXcenp4821Vsk-5999.jpg',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   RTX 2060 独显",
                    price: 7499,
                    state: '爆款'
                },
                {
                    id: 102,
                    name: '拯救者Y7000P 2020 ',
                    pic: '//p3.lefile.cn/product/adminweb/2020/09/16/93Pvr3ZwPmCOJT3lFJGdYy6Xw-7690.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                    berif: "   GTX 1650Ti独显",
                    price: 6999,
                    state: '爆款'
                },
                {
                    id: 105,
                    name: 'Alice',
                    pic: '//p3.lefile.cn/fes/cms/2021/02/26/otj0i65rzqkdhe32129p1k59iqgvu0278146.jpg ',
                    description: "AMD Ryzen 5 4600H/Windows 10 家庭中文版/15.6英寸/16G/512G SSD/ GeForce GTX 1650 4G独显/冰魄白",
                    introduce: 22,
                },
            ],

        }





    ]);
});


var shoppinglist=[

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
        count:"0"
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
        count:"0"
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
        count:"0"
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
        count:"0"
    },

]
router.get('/shoppinglist', function (req, res) {
   console.log("请求购物车列表")
    res.json(
        shoppinglist
    );
});
module.exports = router;