import React, { Component, ReactNode } from 'react'
import "../../css/marketnews.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"
import { Affix, Button } from 'antd';


class marketnews3 extends Component {




    render() {
        return (

            <div>
                <Headfoot></Headfoot>
             <Affix offsetTop={50} style={{zIndex:"2"}}>   
            <div style={{backgroundColor:"rgb(247, 248, 249)",zIndex:"2"}}>

            
                <div className="header1">
                    <div className="router">
                        <p>智慧中国行</p>
                    </div>
                    <div className="header-right">
                        <div className="wechat-code" data-smarket="qrcode" data-smarket-name="手机观看" data-smarket-scope="顶部导航条" style={{color: "#666"}}>
                            <i className="iconico"></i>
                            <span className="moblie-text">手机观看</span>
                            <div className="wechat-box">
                                <div id="qr-code-new">
                                    {/* <canvas width="85" height="85"></canvas> */}
                                    </div>
                                {/* <span>手机扫码观看</span> */}
                            </div>
                        </div>
                    </div>
                </div>
               
                </div> 
                 </Affix>
                <div className="banner1">
                    <div className="img-banner">
                        <div className="img-bg">
                        <img src="//f.smarket.net.cn/s/template/config/files/2780/20201203/435582396e8c7abf7fd99d08f19bfb39.jpg" alt="" />
                        </div>
                    </div>
                    <div className="main-text">
                        <p className="m-title">联想智慧中国行 智慧教育论坛2020 上海站</p>
                        <p className="m-info">会议时间：2020年12月11日 14:30</p>
                        <p></p>
                        <Button type="primary" value="large" >观看视频</Button>
                    </div>
                </div>
                <div className="m-content">
                    <div className="m-introduce-box">
                    <p className="m-title2"  style={{color:"#333333"}}>会议介绍</p>
                    <div className="intro">
                    <p>联想深耕中国教育行业30余年，联想智慧教育方案中心深度融合教研、技术不断探索创新，致力于为教育用户打造更易捷的各类解决方案，覆盖教室、课堂、校园，响应客户不断变化的各类业务需求，为教育行业用户提供从设备、应用到服务的端到端的整体解决方案。</p>
                    </div>
                    </div>
                </div>
                <Foot></Foot>
            
            </div>
        )
    }
}

export default marketnews3