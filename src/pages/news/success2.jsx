import React, { Component, ReactNode } from 'react'
import "../../css/success.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"

class success1 extends Component {


    render() {
        return (
            <div>
                <Headfoot></Headfoot>
                <div className="successpage">
                    <div className="mbx-nav">
                        <img src="https://p4.lefile.cn/fes/cms/2019/08/22/37np1gbhhwncnbxv7v6fyr5i02hb4x146562.png" className="home-bg" alt=""></img>
                        <span>首页  品牌  合作伙伴&案例  成功案例  如何为北京冬奥提供更加精准、清晰、绿色环保的天气预报计算工作？</span>
                    </div>
                    <div className="center-content">
                        <p className="details-title">如何为北京冬奥提供更加精准、清晰、绿色环保的天气预报计算工作？</p>
                        <div className="details-info">
                            <span className="time">2020年03月16日</span>

                            <span className="card">智慧城市</span>
                            <div className="head-right">
                                <span className="browse ">浏览 <em>90907</em></span>
                                <span className="vertical-line"></span>
                                <span className="share" >分享 <em>27</em></span>
                                <img src="//p2.lefile.cn/fes/cms/2020/05/26/vz5msm0cbtthd7u2e593y67uo1ge29885211.jpg" className="share-bg " />
                            </div>
                        </div>
                        <div className="info-line"></div>
                        <div className="pcContent">
                            <p><img src="//p2.lefile.cn/fes/cms/2020/03/16/qtfngdfvjzxdfpeh1tcahubmf0wzw9208140.jpg" /></p>
                            {/* <p style={{ textAlign: "center" }}>
                                <video poster="https://p4.lefile.cn/fes/cms/2020/10/28/wtlrgxbeifbds63nafvetrjxsq9nsj723528.JPG" src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4">
                                    <source src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4" type="video/mp4" />
                                </video>
                            </p> */}
                            <h1 className="pcContenth1">案例简介</h1>
                            <p>2017年8月，北京2022年冬奥会和冬残奥会气象中心（简称冬奥气象中心）启动。气象是冬奥会成功举办的关键因素之一，北京市气象局携手联想，建设高能效绿色数据中心和高性能计算系统，以确保支持冬奥期间需求的精准赛事气象专项预报、兼顾多方需求的气象信息服务和高水平的沟通组织服务能力。</p>
                            <h1 className="pcContenth1">客户介绍</h1>
                            <p>北京市气象局由北京市国家气象系统各级管理机构实行上级主管气象机构与本级人民政府双重领导，以上级气象主管机构领导为主的管理体制。在上级气象主管机构和本级人民政府的领导下，根据授权承担北京市行政区域内气象工作的政府行政管理职能，依法履行气象主管机构的各项职责。</p>
                            <h1 className="pcContenth1">业务痛点</h1>
                            <p >2022年北京冬奥会雪上项目在山地特殊气候条件下举行，受天气气候的影响情况复杂。组委会需要时间精确到分钟级、空间到百米级的精准赛事气象专项预报和兼顾多方需求的气象信息服务。北京气象局承担本次冬奥会的专业气象预报的发布工作，现有多套高性能计算机服务</p>
                            <h1 className="pcContenth1">解决方案</h1>
                            <p>在综合对比和多家厂商的整体方案，并经过公开招投标之后，北京气象局最终选择了联想HPC端到端的整体解决方案和专业服务。</p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

}


export default success1