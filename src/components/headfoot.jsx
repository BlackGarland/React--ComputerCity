// 页面顶部和页面底部模块
import React, { Component, ReactNode } from 'react'
import { useState } from 'react'
// import Link from 'next/link'
// import Head from 'next/head'
import "../css/headfoot.scss"
import ReactDom from 'react-dom'
import { Affix, Button } from 'antd';
import { title } from 'process'
import { render } from '@testing-library/react';
import { fetchget } from '../utils/zgfetch'
import { Badge } from 'antd';
import { Input } from 'antd';
const { Search } = Input;
// type IProps =Readonly<{
//     children?: ReactNode
//     title?: string
// }>




class headfoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            big: "70px",
            guding: "static",
            top: "50px",
            height: "1111",
            loggedIn: "",
            login: "none",
            login2: "none",
            number:"0",
            search:"block",
            searchdata:"",
            msg:""
        };
        this.HandleScroll = this.HandleScroll.bind(this)
    }
    // 以下语句用于监听鼠标滚动距离从而缩小顶部导航栏的高度
    componentDidMount() {
        window.addEventListener('scroll', this.HandleScroll);
        this.sendRequest()

    }

    componentDidUpdate(){
         fetch("/api/number2")
            .then(res => res.json())
            .then(data => {
                // console.log(data[0], "从服务器获取到的number")
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    number: data[0].number
                })
            })
    }

    async sendRequest(){
        let data = await fetchget("/api/islogin")
        console.log(data[0], "sssssssssssssssssssss")
        if (data[0].name != "1") {
            this.setState({
                name: data[0].name,
                login: "none",
                login2: "block"
            })
        }else{
            this.setState({
                login2: "none",
                login: "block"
            })
        }
    }
    HandleScroll() {
       
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        console.log(scrollTop)
        if (scrollTop > 50) {


            console.log("done")
            // console.log("12211221",this.State.value)
            this.setState({
                height: "50px",
                big: "50px",
                guding: "fixed",
                top: "0px",
                search:"none"

            })
        } else if (scrollTop < 50) {
            this.setState({
                height: "50px",
                big: true,
                guding: "static",
                top: "50px",
                search:"block",
            })
        }


    }
    shoppingcar(){
        this.props.history.push('/shoppingcar');
    }
    changesearch(e){
        var search=e.target.value
        // console.log(search,"搜索")
        this.setState({
            searchdata:search
        })
    }
    onsearch(value, event){
        if(this.state.searchdata!=""){
            var search=this.state.searchdata
            console.log(search,"点击")
            var url='/api/search?searchdata='+search.toString()
            fetch(url,{
                method:'get'
            }).then(this.props.history.push({pathname:"/search/"+ search}))
             .then(this.searchgoods())
        }
    }

    searchgoods(){
        if(typeof this.props.searchgoods=== 'undefined'){
            
            console.log(typeof this.props.searchgoods,"类型111111")
        }else{
            this.props.searchgoods()
        }
        
    }
    render() {
        // console.log(this.props.name, "name22222222")
        var number=this.state.number
        const onSearch = value => console.log(value);

        // var number1=parseInt(this.props.number)
        // var number=0
        // console.log(number, "拿到购物车数值1")
        // console.log(number1, "拿到购物车数值")
        // if(typeof(this.props.number)!=='undefined'){
            // number=number1+number
        // }
        return (


            <div>
                
                <header>
                    <nav style={{ position: "relative" }}>

                        <div className="head">
                            <Affix offsetTop={0}>
                                <a href="/#" className="Logo">
                                    <img src="https://p1.lefile.cn/product/adminweb/2018/12/13/2d4534f6-29f3-4a05-8e68-97d9904c7bd2.png" style={{ height: '100%', zIndex: '999' }} alt="" />
                                </a>
                            </Affix>
                            <div className="content">
                                <a href="/#" className="lis">联想首页</a>
                                <a href="#/goodshop" className="lis">商城</a>
                                <a href="/#" className="lis">服务</a>
                                <a href="/#" className="lis">会员</a>
                                <a href="/#" className="lis">社区</a>
                                <a href="/#" className="lis">门店</a>
                                <a href="/#" className="lis">品牌</a>
                                <div id="downloadapp" className="lis">
                                    <a href="/#" className="lis">
                                        <span style={{ color: '#E1140A' }}>下载app</span></a>
                                    <div className="erweima"></div>
                                </div>
                                <Affix offsetTop={0}>
                                    <div className="headright">
                                        {/* 未登录 */}
                                        <div style={{ display: this.state.login }}>
                                            <a href="#/regist">注册</a>

                                            <div className="box688gift">
                                                <a href="#/regist"><span>注册送688大礼包</span></a>

                                                <img alt="" src="https://p2.lefile.cn/product/adminweb/2019/01/18/fbd80d7a-1078-42cd-9558-53e374aada77.png"></img>
                                            </div>

                                            <i className="verticalline"></i>
                                            <a href="/#/login">登录</a>
                                            <span>&nbsp;&nbsp;</span>
                                            <div className="phonelogo">
                                                <img src="https://p1.lefile.cn/product/adminweb/2019/01/18/c8f87ce8-1e14-4bb3-854e-f86af0f07072.png" alt="" />
                                                <div className="phone_hov">
                                                    <div className="righterweimabox">


                                                    </div>


                                                    <div className="rightbox">
                                                        <span className="span1">联想智选APP</span>
                                                        <span className="span2">下载既享688新人礼</span>
                                                    </div>
                                                </div>
                                            </div>
                                             {/* 购物车 */}
                                        <div className="shopping-carimgbox" style={{float:"right", marginRight:"30px",marginLeft:"20px"}} onClick={this.shoppingcar.bind(this)}>
                                            <Badge count={number}>
                                            <img className="hd-shopping-car" src="https://p4.lefile.cn/product/adminweb/2018/11/07/b789b6bc-b958-467c-bd78-8cc616f39f1f.png"/>
                                            </Badge>
                                        </div>
                                        
                                        </div>
                                        
                                        {/* 已登录 */}
                                        <div style={{ display: this.state.login2 }}>
                                            <span style={{ color: "#e1140a" }}>{this.state.name}已登录</span>
                                            <div className="shopping-carimgbox" style={{float:"right", marginRight:"30px",marginLeft:"20px"}} onClick={this.shoppingcar.bind(this)}>
                                            <Badge count={number}>
                                            <img className="hd-shopping-car" src="https://p4.lefile.cn/product/adminweb/2018/11/07/b789b6bc-b958-467c-bd78-8cc616f39f1f.png"/>
                                            </Badge>
                                        </div>
                                        </div>
                                       
                                    </div>
                                </Affix>

                            </div>

                        </div>
                        {/* 顶部导航栏 */}
                        <div className="changewight" ref={this.changewight} style={{ height: this.state.big, width: "100%", position: this.state.guding, top: this.state.top, zIndex: "9" }} >
                            <Affix offsetTop="0" style={{ height: "100%" }}>
                                <div className="headerbox" id="tip" >
                                    <div className="navigationbar">
                                        <ul>
                                            <li><a href="/#">新品</a></li>
                                            <li><a href="/#">定制</a></li>
                                            <li><a href="/#">合伙人</a></li>
                                            <li><a href="/#">以旧换新</a></li>
                                            <li><a href="/#">0元试用</a></li>
                                            <li><a href="/#">乐豆购</a></li>
                                            <li><a href="/#">学生</a></li>
                                            <li><a href="/#">直播</a></li>
                                            <li><a href="/#">企业购</a></li>
                                            <li><a href="/#">0元购</a></li>
                                        </ul>
                                        <Search placeholder="输入搜索内容" onSearch={onSearch} enterButton style={{ width: 200 ,float:'right',color: '#1890ff',height:"20px",marginTop:"20px",display:this.state.search}} onChange={(e) => this.changesearch(e)} onSearch={(value, event) => this.onsearch(value, event)}/>
                                    </div> 
                                </div>
                            </Affix>
                        </div>
                    </nav>
                </header>
                {/* {children} */}
                {/* 以下为页面底部部分 */}

            </div>




        )
    }
}




export default headfoot


