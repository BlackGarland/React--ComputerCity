// 页面顶部和页面底部模块
import React, { Component, ReactNode } from 'react'
import  {useState} from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import  "../css/headfoot.scss"
import ReactDom from 'react-dom' 
import { Affix, Button } from 'antd';
import { title } from 'process'
import { render } from '@testing-library/react';
// type IProps =Readonly<{
//     children?: ReactNode
//     title?: string
// }>



  
class foot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            big:"70px",
            guding:"static",
            top:"50px",
            height:"1111",
            loggedIn:""
        };
        // this.handleScroll=this.handleScroll.bind(this)
      }
    // 以下语句用于监听鼠标滚动距离从而缩小顶部导航栏的高度
    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll);
 
     }
     
     
    render () {
        // console.log(this.props.name,"name22222222")
        
        
      return (
       

    <div>
     
        {/* 以下为页面底部部分 */}
        <footer>
            <div className="footer">
                <div style={{width:"100%",backgroundColor:"white"}}>
                <div className="imgbox">
                    <img src="https://p2.lefile.cn/product/adminweb/2019/08/19/8359a28f-9cce-463d-aaf5-b3c7148872f7.png" alt=""/>
                </div>
                </div>
                <div className="footmsgbox">
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">购物指南</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">服务商信息</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">购买流程</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">注册登录</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">商品评价</a></p>
                    </div>
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">配送方式</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">配送方式</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">配送方式信息</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">签收原则</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">物流查询</a></p>
                    </div>
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">支付方式</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">分期支付</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">支付方式</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">支付问题</a></p>
                    </div>
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">订单信息</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">订单信息</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">发票信息</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">手机激活查询</a></p>
                    </div> 
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">售后服务</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">售后服务总则</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">24h在线客服</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">联想服务入口</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">热门解决方案</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">Lenovo Quick Fix工具</a></p>
                    </div>
                    <div className="footmsgboxinner">
                        <p className="footmsgboxinnertitle"><a href="/#">其他说明</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">服务承诺</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">账户安全</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">手机产品购买须知</a></p>
                        <p className="footmsgboxinnermain"><a href="/#">环境信息</a></p>
                    </div>
                   {/* 右侧竖杠以及电话号码 */}
                   
                   <div className="footmsgboxright">
                   <h3>400-990-8888转4</h3>
                   <span>周一到周日 9:00-21:00</span>
                   <a href="/#">
                       {/* 在线客服 */}
                   </a>
                   </div>
                </div>
                <div className="foot_bot">
                    <div className="foot_bot_con">
                        <div className="foot_bot_left">
                            <span>版权所有：1998-2021 联想集团</span>{" "}
                            <span>|</span>{" "}
                            <a href="">法律公告</a>{" "}
                            <span>|</span>{" "}
                            <a href="">隐私权政策</a>{" "}
                            <span>|</span>{" "}
                            <a href="">产品安全</a>
                        </div>
                        <div className="foot_bot_right">
                            <a href="">京ICP备11035381</a>{" "}
                            <span>|</span>{" "}
                            <a href="">京公网安备110108007970号</a>{" "}
                            <span>|</span>{" "}
                            <a href="">营业执照:91110108700000458B</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    </div>



        
      )
    }
  }




export default foot


