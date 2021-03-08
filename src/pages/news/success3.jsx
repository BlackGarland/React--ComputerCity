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
                        <span>首页  品牌  合作伙伴&案例  成功案例  如何让心血管病患或高发人群实现舒适的远程慢病管理，并获得及时的医疗分析反馈？</span>
                    </div>
                    <div className="center-content">
                        <p className="details-title">如何让心血管病患或高发人群实现舒适的远程慢病管理，并获得及时的医疗分析反馈？</p>
                        <div className="details-info">
                            <span className="time">2020年03月16日</span>

                            <span className="card">智慧城市</span>
                            <div className="head-right">
                                <span className="browse ">浏览 <em>90907</em></span>
                                <span className="vertical-line"></span>
                                <span className="share" >分享 <em>27</em></span>
                                <img src="//p3.lefile.cn/fes/cms/2020/08/11/osmabsdo11puvubspfgb7pi1aztyma067398.jpg" className="share-bg " />
                            </div>
                        </div>
                        <div class="info-line"></div>
                        <div className="pcContent">
                            <p><img src="//p2.lefile.cn/fes/cms/2020/03/16/qtfngdfvjzxdfpeh1tcahubmf0wzw9208140.jpg" /></p>
                            {/* <p style={{ textAlign: "center" }}>
                                <video poster="https://p4.lefile.cn/fes/cms/2020/10/28/wtlrgxbeifbds63nafvetrjxsq9nsj723528.JPG" src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4">
                                    <source src="https://lenovo-1257188835.file.myqcloud.com/brand/%E8%81%94%E6%83%B3%E4%B8%BD%E6%B1%9F%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82.mp4" type="video/mp4" />
                                </video>
                            </p> */}
                            <h1 className="pcContenth1">案例简介</h1>
                            <p>人群健康状况的实时监测是一项开创性工作，联想结合穿戴产品和智能体征监护平台，利用5G和量子加密等技术，为解放军总医院第二医学中心建设并首次启用“远程医疗急救指导系统”，成功实施国庆阅兵典礼的健康保障任务。</p>
                            <h1 className="pcContenth1">客户介绍</h1>
                            <p>解放军总医院第二医学中心创建于1953年，是集医疗、保健、教学、科研于一体的大型现代化综合性医院。是中央重要保健基地，承担军委、总部等多个体系单位、官兵的医疗保健工作。</p>
                            <h1 className="pcContenth1">业务痛点</h1>
                            <p >心血管新增人群每年6000万，保有量2亿。生活节奏和生活质量导致青壮年也增加了心脏风险，国庆阅兵期间，为确保相关健康保障工作，需要医护团队进行分层次全时段监测，但医护团队在执行健康管理时面临两大挑战：
                            传统心电监测实时性和舒适性差：传统心电监测一般需要患者前往医院，由医生开具处方后挂脖子佩戴，从佩戴设备到监测到数据结果读取平均需要三天，不具备实时性，且佩戴舒适性较差。

特殊场景不具备佩戴条件：遇特殊需要特别健康监控的场景（如登山、旅游或参与重大活动、赛事等），传统的监控方法往往缺乏佩戴条件，很难满足实时健康预警和全时段监测的需求。
                            </p>
                            <h1 class="pcContenth1">解决方案</h1>
                            <p>为保证国庆阅兵相关的健康全时段监测，解放军总医院第二医学中心选中了联想的智慧远程体征监护穿戴产品及监控平台。

从智能穿戴设备数据采集到人工智能算法支持形成完整的医疗健康管理服务平台，整体设计采用设备前端、手持设备端和云端三级算法体系架构，专业的心电数据分析和心电异常、疾病分析算法/系统；整合了人工智能，5G，云视频，量子加密技术使整个方案更加智能化，精确化的同时保证其实时性和保密性。配合解放军总医院第一医学中心专家和现场医护团队实施了此次典礼保健任务。</p>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }

}


export default success1