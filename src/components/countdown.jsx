import React, { Component, ReactNode } from 'react'
import { Affix, Button } from 'antd';
import { render } from '@testing-library/react';
import "../css/countdown.scss"
import NoTimeContent from "./NoTimeContent"

class countdown extends Component {


    Click1(){
        const goodlist1=this.props.countdown

        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[0])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click2(){
        const goodlist1=this.props.countdown
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[1] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[1])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click3(){
        const goodlist1=this.props.countdown
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[2] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[2])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click4(){
        const goodlist1=this.props.countdown
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[3] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[3])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }



    render() {
        console.log(this.props.countdown, "0000000000000000")
        return (
            <div className="countdown">
               <a href="javascript:;">
                    <div className="flash-left">
                        <div className="flash-left-title">
                            <i className="left-txt-icon"></i>
                        </div>
                        <div className="flash-left-countdown">
                            <i className="slash-icon"></i>
                        </div>
                        <div className="countdownbox">
                            <span className="left-round">12:00</span>
                            <span className="left-round-txt">场</span>
                            <p className="flash-countdown-txt">距离结束还剩</p>

                        </div>
                        <div className="NoTimeContentbox">
                            <NoTimeContent></NoTimeContent>
                        </div>
                    </div>
                </a>
                <div className="flash-middle">
                    <div className="middle-countdown-cont">
                        <div className="middle-countdown">
                           <a href="javascript:;">
                                <span>12:00场-正在抢购</span>
                            </a>
                            <span className="begininaminute">00:00场-正在抢购</span>
                        </div>
                    </div>
                    <div className="middle-product-list">
                       <a href="javascript:;">
                            <div className="selkill-pro-placeholder" onClick={this.Click1.bind(this)}>
                                <div className="product-detail-img" onClick={this.Click1.bind(this)}>
                                    <img className="pro-thumbnail" src={this.props.countdown[0].pic} alt="" />
                                </div>
                                <div className="product-detail-title" >
                                    <span className="pro-detail-txt" >{this.props.countdown[0].berif}</span>
                                </div>
                                <div className="product-detail-icons">
                                    <div className="discount" style={{ display: "block" }}>
                                        <i className="pro-icon-pic"></i>
                                        <span className="pro-icon-txt">7折</span>
                                    </div>
                                </div>
                                <div className="product-detail-price">
                                    <div className="pro-cur-price">
                                        <span className="currency-sign">¥</span>
                                        <span className="pro-price">{this.props.countdown[0].price}</span>
                                    </div>
                                    <div className="pro-del-price">
                                        <span className="del-sign">¥</span>
                                        <span className="del-price">{this.props.countdown[0].price1}</span>
                                    </div>
                                    </div>
                            </div>
                            <div className="selkill-pro-placeholder" onClick={this.Click2.bind(this)}>
                                <div className="product-detail-img">
                                    <img className="pro-thumbnail" src={this.props.countdown[1].pic} alt="" />
                                </div>
                                <div className="product-detail-title">
                                    <span className="pro-detail-txt" >{this.props.countdown[1].berif}</span>
                                </div>
                                <div className="product-detail-icons">
                                    <div className="discount" style={{ display: "block" }}>
                                        <i className="pro-icon-pic"></i>
                                        <span className="pro-icon-txt">7折</span>
                                    </div>
                                </div>
                                <div className="product-detail-price">
                                    <div className="pro-cur-price">
                                        <span className="currency-sign">¥</span>
                                        <span className="pro-price">{this.props.countdown[1].price}</span>
                                    </div>
                                    <div className="pro-del-price">
                                        <span className="del-sign">¥</span>
                                        <span className="del-price">{this.props.countdown[1].price1}</span>
                                    </div>
                                    </div>
                            </div>
                            <div className="selkill-pro-placeholder" onClick={this.Click3.bind(this)}>
                                <div className="product-detail-img">
                                    <img className="pro-thumbnail" src={this.props.countdown[2].pic} alt="" />
                                </div>
                                <div className="product-detail-title">
                                    <span className="pro-detail-txt" >{this.props.countdown[2].berif}</span>
                                </div>
                                <div className="product-detail-icons">
                                    <div className="discount" style={{ display: "block" }}>
                                        <i className="pro-icon-pic"></i>
                                        <span className="pro-icon-txt">7折</span>
                                    </div>
                                </div>
                                <div className="product-detail-price">
                                    <div className="pro-cur-price">
                                        <span className="currency-sign">¥</span>
                                        <span className="pro-price">{this.props.countdown[2].price}</span>
                                    </div>
                                    <div className="pro-del-price">
                                        <span className="del-sign">¥</span>
                                        <span className="del-price">{this.props.countdown[2].price1}</span>
                                    </div>
                                    </div>
                            </div>
                            <div className="selkill-pro-placeholder" onClick={this.Click4.bind(this)}>
                                <div className="product-detail-img">
                                    <img className="pro-thumbnail" src={this.props.countdown[3].pic} alt="" />
                                </div>
                                <div className="product-detail-title">
                                    <span className="pro-detail-txt" >{this.props.countdown[3].berif}</span>
                                </div>
                                <div className="product-detail-icons">
                                    <div className="discount" style={{ display: "block" }}>
                                        <i className="pro-icon-pic"></i>
                                        <span className="pro-icon-txt">7折</span>
                                    </div>
                                </div>
                                <div className="product-detail-price">
                                    <div className="pro-cur-price">
                                        <span className="currency-sign">¥</span>
                                        <span className="pro-price">{this.props.countdown[3].price}</span>
                                    </div>
                                    <div className="pro-del-price">
                                        <span className="del-sign">¥</span>
                                        <span className="del-price">{this.props.countdown[3].price1}</span>
                                    </div>
                                    </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flash-right">
                <div className="right-center-cont">
                   <a href="javascript:;" >
                        <span>更多秒杀</span>
                        <i className="right-more-icon"></i>
                    </a>
                </div>
                </div>

            </div>
        )
    }
}

export default countdown