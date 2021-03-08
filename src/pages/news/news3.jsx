import React, { Component, ReactNode } from 'react'
import "../../css/success.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"

class news3 extends Component {


    render() {
        return (
            <div>
                <Headfoot></Headfoot>
                <div className="successpage">
                    <div className="mbx-nav">
                        <img src="https://p4.lefile.cn/fes/cms/2019/08/22/37np1gbhhwncnbxv7v6fyr5i02hb4x146562.png" className="home-bg" alt=""></img>
                        <span>首页  品牌  合作伙伴&案例  成功案例  用中国智慧 干出开局精彩</span>
                    </div>
                    <div className="center-content">
                        <p className="details-title">如何利用5G提升古镇运营效率和管理水平，打造旅游古城的新名片？</p>
                        <div className="details-info">
                            <span className="time">2020年03月16日</span>

                            <span className="card">智慧城市</span>
                            <div className="head-right">
                                <span className="browse ">浏览 <em>90907</em></span>
                                <span className="vertical-line"></span>
                                <span className="share" >分享 <em>27</em></span>
                                <img src="https://p3.lefile.cn/product/adminweb/2019/08/27/2635857d-5696-4aa0-8428-d4cacd8cee62.png" className="share-bg " />
                            </div>
                        </div>
                        <div class="info-line"></div>
                        <div className="pcContent">
                            <p><img src="https://p4.lefile.cn/fes/cms/2021/01/15/oxtq4916xuwk477lx4pt8v4gsopz19425131.jpg" /></p>
                            {/* <p style={{ textAlign: "center" }}>
                                <video poster="https://p4.lefile.cn/fes/cms/2020/10/28/wtlrgxbeifbds63nafvetrjxsq9nsj723528.JPG" src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4">
                                    <source src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4" type="video/mp4" />
                                </video>
                            </p> */}
                            {/* <h1 className="pcContenth1">案例简介</h1> */}
                            <p>经历了艰难的2020年，在中国全面建成小康社会收官，开启全面建设社会主义现代化国家新征程之年，联想发布了《开局》品牌视频。这支充满回忆的影片，在短短的3分钟里，凝聚了几代人的燃情岁月。

为建设边疆，数万名官兵和知识青年来到北大荒，向荒原要粮。为完成原子弹原理与数据验证，数百位科研人员聚精会神拨打算盘，协助计算机辅助测算。“世界握有领先的工具，他们只有铁锹、算盘和钢笔。白天不够用，他们就把夜晚攥进手里”。</p>
                            {/* <h1 className="pcContenth1">客户介绍</h1> */}
                            <p>从中国人无惧困难的坚韧民族性格来说，这样的集体回忆是符合艺术真实的。但同样不能忽视的是，开拓新局面，需要的不仅仅是豪情壮志，在许多历史时刻，需要决绝，更需要智慧。原子弹研制不仅有手摇计算机、计算尺等现代工具的辅助，更离不开电子计算机的关键作用，原子弹工程可以说是中国电子计算机事业的摇篮，在后来于敏团队对氢弹原理的突破中，华东计算所研制的J501电子计算机，更是厥功至伟。</p>
                            {/* <h1 className="pcContenth1">业务痛点</h1> */}
                            <p >没有每秒一亿次以上运算速度的计算机，就没有中国科技的快速进步。开局人用智慧创造新的工具，新的工具又孕育新的工具，历史就是这样开创的。《开局》这支影片，就把这样的历史规律很好表现了出来：无论是建国初期在没有大型机械化设备的条件下，开展铁路等基础设施的建设；还是新中国工业的起步，一大批新的钢铁、煤炭、电力、机械等企业的建立；直至被称为中国企业元年的1984年，中科院计算所南门一间15平方米的传达室里，11名科技人员下海创业，创办今天的联想。</p>
                            {/* <h1 class="pcContenth1">解决方案</h1> */}
                            <p>赤手空拳是我们命运的起点，但今天的我们，早已“手握强大工具，手里就有明天”。每一次改写命运，都意味着新的工具被中国人所掌握，新的智慧被中国人所展现。疫情是历史的加速器，在这次的艰难时刻，全国人民体现了自律、勇敢和坚韧，而疫情得以控制，依靠的是人民群众的大智慧：每个人都知道怎样去保护自己，如何去保护家人，还知道如何集体行动来控制疫情。这种大智慧，西方国家难以效仿复制，世卫专家说：最让我感动的是每个中国人都知道该如何做。</p>
                            <p>2021年，十四五的开局，一个小康国家的开局，站在“两个一百年”的历史交汇点上，这样一个民族复兴进程中有特殊意义的开局，更需要一个国家的智慧。就联想这些中国企业来说，他们能做些什么？</p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

}


export default news3