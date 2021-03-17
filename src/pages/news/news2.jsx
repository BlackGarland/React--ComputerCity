import React, { Component, ReactNode } from 'react'
import "../../css/success.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"

class news2 extends Component {


    render() {
        return (
            <div>
                <Headfoot></Headfoot>
                <div className="successpage">
                    <div className="mbx-nav">
                        <img src="https://p4.lefile.cn/fes/cms/2019/08/22/37np1gbhhwncnbxv7v6fyr5i02hb4x146562.png" className="home-bg" alt=""></img>
                        <span>首页  品牌  合作伙伴&案例  成功案例   联想motorola edge s全球首发骁龙870，重新定义新锐实力派</span>
                    </div>
                    <div className="center-content">
                        <p className="details-title"> 联想motorola edge s全球首发骁龙870，重新定义新锐实力派</p>
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
                        <div className="info-line"></div>
                        <div className="pcContent">
                            <p><img src="https://p3.lefile.cn/fes/cms/2021/01/29/1mbfeynjuy5yqfvrxgwjf2wrzs2n04610683.jpg" /></p>
                            {/* <p style={{ textAlign: "center" }}>
                                <video poster="https://p4.lefile.cn/fes/cms/2020/10/28/wtlrgxbeifbds63nafvetrjxsq9nsj723528.JPG" src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4">
                                    <source src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4" type="video/mp4" />
                                </video>
                            </p> */}
                            {/* <h1 className="pcContenth1">案例简介</h1> */}
                            <p>2021年1月26日，联想Motorola正式发布了新锐实力派motorola edge s。这是全球首款搭载高通骁龙870旗舰芯片新机，也是edge系列在中国发布的首款旗舰系列机型。

edge意为“边界”， 联想中国区手机业务部总经理陈劲表示，摩托罗拉一直以来都严守对品质的坚持和对经典元素的传承，并利用创新科技打破空间的边界，通过产品打破应用的边界。</p>
                            {/* <h1 className="pcContenth1">客户介绍</h1> */}
                            <p>motorola edge s传承摩托罗拉商务基因及匠心品质，全球首发高通骁龙870 旗舰芯片，配合LPDDR5+UFS3.1最强存储配置，打造新锐实力派；AI全能前后六摄、My UI为娱乐、办公等场景再度加码，令用户的使用与交互体验再度跃升至新境界。</p>
                            <h1 className="pcContenth1">全球首发骁龙870旗舰芯</h1>
                            <p >作为一款全新5G性能旗舰，motorola edge s采用高通骁龙870旗舰芯片，CPU采用Kryo 585核心，主频最高提升至3.2GHz。采用“1+3+4”的三丛集架构方案，最大程度上兼顾了性能与功耗的平衡，还能够很好地解决发热问题，为用户带来时刻冷静的流畅体验。</p>
                            {/* <h1 className="pcContenth1">解决方案</h1> */}
                            <p>对智能手机而言，处理器、运行内存和闪存是推动性能攀升的三架马车。一款5G时代的性能旗舰绝不止于一颗优秀的处理器，运行内存和闪存也同样重要。</p>
                            <p>motorola edge s支持Turbo LPDDR5及Turbo UFS3.1闪存技术，数据传输速率提高72%，闪存性能提高25%。无论是大型游戏的读取，还是高清视频的加载，用户都能明显感受到效率的大幅提升。值得一提的是，motorola edge s还支持拓展虚拟内存的技术，在同时运行大型游戏及其他应用的情况下，可实时将虚拟内存拓展至更大容量，带来更加顺畅的使用体验，为性能旗舰至强实力再度加码。</p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

}


export default news2