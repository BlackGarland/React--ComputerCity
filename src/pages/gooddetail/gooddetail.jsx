import React, { Component } from "react";
import { Carousel } from 'antd';
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"
import "../../css/gooddetail.scss"
class gooddetail extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            color1: "#DADADA",
            color2: "#DADADA",
            color3: "#DADADA",
            color4: "#DADADA",
            value:"1",
            good:"",
            ShoppingCartvalue:"0",
            gooddetaillist:"",
            id:"",
            model1:"",
            model2:"",
            model:""
            

        }

    }
    componentDidMount(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
        fetch("/api/gooddetaillist1")
        .then(res => res.json())
        .then(data => {
            console.log(data, "从服务器获取到的商品详情")
            //把数据赋值给 banners 然后渲染在页面上 
            this.setState({
                gooddetaillist: data,
                model1:data.model1,
                model2:data.model2,
                model:this.state.model1

            })
        })
    }
    Click1() {
        this.setState({
            color1: "#ff0000",
            color2: "#DADADA",
            model:this.state.model1,

        })
    }
    Click2() {
        this.setState({
            color2: "#ff0000",
            color1: "#DADADA",
            model:this.state.model2,
        })
    }
    Click3() {
        if (this.state.color3 == "#DADADA") {
            this.setState({
                color3: "#ff0000"
            })
        } else {
            this.setState({
                color3: "#DADADA"
            })
        }
    }
    Click4() {
        if (this.state.color3 == "#DADADA") {
            this.setState({
                color4: "#ff0000"
            })
        } else {
            this.setState({
                color4: "#DADADA"
            })
        }
    }
    Clickpus(){
        var value=this.state.value
        value++
        this.setState({
            value:value
        })
    }
    Clickminus(){
        var value=this.state.value
        value--
        this.setState({
            value:value
        })
        
    }
    ClickShoppingCart(){
        this.setState({
            good:this.state.gooddetaillist,
            ShoppingCartvalue:this.state.value,
            id:this.state.gooddetaillist.id,
        })
        var id=this.state.gooddetaillist.id
        fetch('/api/number', {
            method: 'POST',
            body: new URLSearchParams([["number", this.state.value],["id",id]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].number,"拿到购物车数值")
         this.setState({
            ShoppingCartvalue:data[0].number
                })
        
        }))

    }

    render() {
        var good = this.state.gooddetaillist
        // console.log(good, "传来的数据")
        console.log(this.state.gooddetaillist.id, "传来的数据id")
        // console.log(this.state.ShoppingCartvalue,"传到购物车的数量")
        return (
            <div>
                <Headfoot number={this.state.ShoppingCartvalue} good={this.state.good} history={this.props.history}></Headfoot>
                <div className="detail">
                    {/* 顶部 */}
                    <div className="nav">
                        <div className="nav_con">
                            <a href="https://shop.lenovo.com.cn">首页 </a>&gt; 商品详情 &gt; 拯救者 R7000 15.6英寸游戏笔记本 冰魄白
                                <a target="_blank" className="go-to-customer-service-wrap" href="/" style={{ display: "inline" }}>
                                <div className="gtcs">
                                    <span>联系客服</span>
                                    <img src="https://p4.lefile.cn/product/adminweb/2019/08/14/4467e513-fa34-4081-bbc3-05390e1196e3.png" className="origin" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="detail_main">
                        <div className="con_left">
                            {/* 轮播图 */}
                            <Carousel autoplay effect="fade">
                                <div>
                                    <h3 ><img src={good.pic} alt="" /></h3>
                                </div>
                                <div>
                                    <h3 ><img src={good.pic} alt="" /></h3>
                                </div>
                                <div>
                                    <h3 ><img src={good.pic} alt="" /></h3>
                                </div>
                                <div>
                                    <h3 ><img src={good.pic} alt="" /></h3>
                                </div>
                            </Carousel>
                            <div className="good_action">
                                {/* <a className="action-pic" id="ppicture_open">
                                    <span className="icon-open">&nbsp;</span>
                                    <span className="des">查看图库</span>
                                </a> */}
                                <span className="good_code">商品编号：<span>82B6000ECD</span></span>
                                <div className="good-do">
                                    <a id="a_share" latag="latag_pc_detail_underslide_分享有礼_null_1012545">
                                        <span className="share_icon"></span>
                                        <span className="share-txt">分享有礼</span>
                                    </a>
                                </div>
                                <div className="good-do">
                                    <a href="javascript:void(0);" >
                                        <span className="bg collect_img"></span>
                                        <span className="collect">收藏</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="con_right">
                            <div>
                                <h1 className="title" >{good.name}</h1>
                            </div>
                            <div className="dec">{good.description}</div>
                            <div className="price-detail-wrapbox">
                                <div className="price-detail-wrap">
                                    <div className="prc-container">
                                        <div className="price-desc" style={{ color: "" }}>商城价</div>
                                        <div className="sign-prc-group">
                                            <span className="price-sign">¥</span>
                                            <span className="price-show" >{good.price}</span>
                                        </div>
                                    </div>
                                    <div className="total-evaluate-wrap">
                                        <div className="total-evaluate-desc">累计评价</div>
                                        <div className="total-evaluate-count" >33737</div>
                                    </div>
                                </div>
                            </div>
                            {/* 以旧换新 */}
                            <div className="business-staff-container" id="old_change_new">
                                <div className="business-title">增值业务</div>
                                <div className="business-detail ">
                                    <span className="span-bd">支持</span>
                                    <div className="old-for-new">
                                        <img className="old-for-new-img" src="https://p3.lefile.cn/product/adminweb/2019/07/04/a66983ae-df77-4380-8d3c-6ff2d467465b.png" alt="" />
                                        <a href="" target="_blank" ><span>以旧换新</span></a>
                                    </div>
                                    <span className="span-bd">高价回收，急速到账换新机</span>
                                </div>
                            </div>
                            <div className="business-staff-container " id="container_guige">
                                <ul id="guige">
                                    <li className="guige-li " id="guigeitem1">
                                        <div className="guige-item-title">操作系统</div>
                                        <div className="guige-item-detail">
                                            <span title="Windows 10 家庭中文版" className="spec-big active" style={{ color: "#ff0000", borderColor: "#ff0000" }}><i>Windows 10 家庭中文版</i></span>
                                        </div>
                                    </li>
                                    <li className="guige-li " id="guigeitem0"><div className="guige-item-title">选择配置</div>
                                        <div className="guige-item-detail">
                                            <span className="spec-big" onClick={this.Click1.bind(this)} style={{ color: this.state.color1, borderColor: this.state.color1 }}><i>{good.model1}</i></span>
                                            <span className="spec-big" onClick={this.Click2.bind(this)} style={{ color: this.state.color2, borderColor: this.state.color2 }}><i>{good.model2}</i>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>



                            <div className="business-staff-container">
                                <div className="business-title"></div>
                                <ul id="guige">
                                    <li className="guige-li " id="guigeitem0"><div className="guige-item-title">推荐服务</div>
                                        <div className="guige-item-detail" style={{marginBottom:"10px"}}>
                                            <span className="spec-big" onClick={this.Click3.bind(this)} style={{ color: this.state.color3, borderColor: this.state.color3,display:"inline" }}><i>上门检测</i></span>
                                            <span className="spec-big" onClick={this.Click4.bind(this)} style={{ color: this.state.color4, borderColor: this.state.color4,display:"inline"  }}><i>三年保修</i>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="business-staff-container">
                                <div className="business-title"></div>
                                <ul id="guige">
                                    <li className="guige-li " id="guigeitem0"><div className="guige-item-title">可分期付款</div>
                                        <div className="guige-item-detail">
                                            <span className="spec-big" style={{ color: "#ff0000", borderColor: "#ff0000" }}>
                                                <img src="https://p3.lefile.cn/product/adminweb/2019/05/06/e655fdc5-86aa-4b71-81bd-a03e5bab0be4.png" alt="" />
                                                <i>花呗分期</i></span>
                                            <span className="spec-big" style={{ color: "#ff0000", borderColor: "#ff0000" }}>
                                                <img src="https://p3.lefile.cn/product/adminweb/2020/03/08/76da00ca-136c-4d8d-9fb7-86db374a85d9.png" alt="" />
                                                <i>白条分期</i>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* 购买数量 */}
                            <div className="business-staff-container">
                                <div className="business-title"></div>
                                <ul id="guige">
                                    <li className="guige-li " id="guigeitem0"><div className="guige-item-title">购买数量</div>
                                        <div className="add-count-wrap">
                                            <span className="reduce">
                                                <i className="buy-count-plus" onClick={this.Clickminus.bind(this)}>- </i>
                                            </span>
                                            <input type="text" className="txt" id="buy_number" value={this.state.value}></input>
                                            <span className="add" id="add_buy_number" onselectstart="return false">
                                                <i className="buy-count-minus" onClick={this.Clickpus.bind(this)}>+</i>
                                            </span>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                            {/* 购买||加入购物车 */}
                            <div className="div_button_group">
                                <div className="button-pay">立即购买</div>
                                <div className="button-add" onClick={this.ClickShoppingCart.bind(this)}>加入购物车</div>
                            </div>
                            {/* 联想智选APP */}
                            <div className="toAppLoad">
                            <p>使用<span className="toAppHover">联想智选APP</span>下单，享受更多优惠
                            <img className="toAppQrCode" src="https://p2.lefile.cn/product/adminweb/2020/04/17/4afd4fcf-bb8a-4fa9-88d3-93ed78644c90.png"  />
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Foot></Foot>
            </div>
        )
    }
}

export default gooddetail