import React, { Component, ReactNode } from 'react'
import "../../css/success.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"

class news4 extends Component {


    render() {
        return (
            <div>
                <Headfoot></Headfoot>
                <div className="successpage">
                    <div className="mbx-nav">
                        <img src="https://p4.lefile.cn/fes/cms/2019/08/22/37np1gbhhwncnbxv7v6fyr5i02hb4x146562.png" className="home-bg" alt=""></img>
                        <span>首页  品牌  合作伙伴&案例  成功案例  联想 X 王一博 ｜ 生而向上，敢想敢搏</span>
                    </div>
                    <div className="center-content">
                        <p className="details-title">联想 X 王一博 ｜ 生而向上，敢想敢搏？</p>
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
                            <p><img src="https://p3.lefile.cn/fes/cms/2021/01/05/u2o2yy25abhn4h1i26q38pc4xsigab554863.jpg" /></p>
                            {/* <p style={{ textAlign: "center" }}>
                                <video poster="https://p4.lefile.cn/fes/cms/2020/10/28/wtlrgxbeifbds63nafvetrjxsq9nsj723528.JPG" src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4">
                                    <source src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4" type="video/mp4" />
                                </video>
                            </p> */}
                            {/* <h1 className="pcContenth1">案例简介</h1> */}
                           
                           <p><img src="https://p1.lefile.cn/fes/cms/2021/01/05/3rym8g2e1wpu0n9g9yyncd5vbbkisl597211.jpg" alt=""/></p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

}


export default news4