import React, { Component } from "react";
import "../../css/shoppingcar.scss"
import "../../css/headfoot.scss"
import Foot from "../../components/foot"
import { fetchget } from '../../utils/zgfetch'
import "../../css/pay.scss"
import moment from 'moment'
// import { List, Typography, Divider } from 'antd';

class pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodlist: [],
            all: false,
            sumprice: 0,
            one: false,
            sumcount: 0,
            datalist: "",
            price: "",
            countprice: "",
            userinformation: [],
            ordernum:"",
            time:"",
        };

    }
    componentDidMount() {
        fetch("/api/pay")
            .then(res => res.json())
            .then(data => {

                console.log(data, "支付列表列表数据")
                // var goods = JSON.parse(JSON.stringify(data))
                // var list = goods.filter(item => item.count !== "0")
                // // console.log(list, "购物车列表数据goods")
                // list.find(item => {
                //     item.price = parseInt(item.count) * parseInt(item.price)
                // })
                // console.log(list, "购物车列表数据最终")
                this.setState({
                    goodlist: data
                })

                var countprice = "0"
                this.state.goodlist.find(item => {
                    countprice = parseInt(item.price) + parseInt(countprice)
                })
                // console.log(countprice, "商品总价")
                this.setState({
                    countprice: countprice
                })
            })

        fetch("/api/payinformation")
            .then(res => res.json())
            .then(data => {
                console.log(data, "用户信息")
                this.setState({
                    userinformation: data
                })
            })
            var max=999999999999999999999
            var min=9999999999999999999
            var num = parseInt(Math.random()*(max-min+1)+min,10);
            num="lenovo2020"+num
            this.setState({
                ordernum:num
            })
            var time=moment().format('YYYY-MM-DD HH:mm:ss')
            this.setState({
                time:time
            })





    }
    Clickpay(){

    }
    render() {
        var goodlist = this.state.goodlist
        console.log(this.state.goodlist, "购物车列表")
        // goodlist.find(item => {
        //     item.price = parseInt(item.count) * parseInt(item.price)
        // })
        var IDcard=JSON.stringify(this.state.userinformation.idcard)
        
        if(IDcard){
            var a=IDcard.length
            IDcard=IDcard.slice(-6,-1)

            for(var i=a - 6;i>=0;i--){
            IDcard="x"+IDcard
            // console.log(IDcard,"身份证")
            
        }
        }
        
        return (
            

            this.state.goodlist.length && <div>

                {/* 头 */}

                <img src="https://p3.lefile.cn/product/adminweb/2019/01/14/4879b596-0b39-4534-bcc8-a50693fe825e.jpg" alt="" style={{ width: "50px", float: "left" }} />
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
                    {/* <Affix offsetTop={0}> */}
                    <div className="headright">
                        <div>
                            <i className="verticalline"></i>

                            <div className="phonelogo">
                                <img src="https://p2.lefile.cn/product/adminweb/2019/05/14/5d811034-b989-43a5-98cc-82df4bace7de.png" alt="" />
                                <span ></span>
                                <div className="phone_hov">
                                    <div className="righterweimabox">
                                    </div>
                                    <div className="rightbox">
                                        <span className="span1">联想智选APP</span>
                                        <span className="span2">下载既享688新人礼</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="top_logob">
                    <img src="//m1.lefile.cn/trade/cn/pc/images/base/pic-13.jpg" className="top_logob_imga" />
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1728989038,4289372846&fm=26&gp=0.jpg" className="top_logob_imgb" style={{ height: "38px" }}></img>
                </div>
                {/* 列表 */}
                <div className="buycart" id="buycart">
                    <div className="cart_main">
                        <div className="bc_option">
                            <div className="bc_all">

                            </div>
                        </div>
                        <div className="bc_table">
                            <table cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th colspan="3" width="462">商品</th>
                                        <th width="163">规格</th>
                                        <th width="152">单价</th>
                                        <th width="152">数量</th>
                                        <th width="152">金额</th>
                                        <th width="117">操作</th>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0">
                                <tbody>

                                    {
                                        this.state.goodlist.map((item, index) => {
                                            return <div >

                                                <tr className="tr2">
                                                    {/* <td width="57" className="bc_table_sel">
                                                        <input type="checkBox" className="checkbox" ref="mytext"
                                                            onChange={() => { this.handleChange.bind(this, index) }} checked={item.checked} value="" />
                                                    </td> */}
                                                    <td width="148" className="bc_table_img">
                                                        <a href="" target="_blank">
                                                            <img src={item.pic} alt="" />
                                                            <div className="bc_zhezhao"></div>
                                                        </a>
                                                    </td>
                                                    <td width="257" className="bc_proname bc_name_gift">
                                                        <a href="" target="_blank">{item.name}</a>
                                                    </td>
                                                    <td width="163"></td>
                                                    <td width="152" style={{ position: "relative" }}>
                                                        <span className="current_price">{item.price}</span>

                                                    </td>
                                                    <td width="152">
                                                        <span>{item.count}</span>
                                                    </td>
                                                    <td width="152" className="bc_red">{item.price}</td>
                                                    <td width="117" style={{ textAlign: "left" }}>
                                                        <a href="javascript:;" style={{ color: "#000" }} title="删除" >删除</a>

                                                        <a href="javascript:;" style={{ color: "#000" }} title="收藏" >移入收藏夹</a>

                                                    </td>
                                                </tr>

                                            </div>

                                        })
                                    }
                                    <div className="bc_num">
                                        <div className="userinformation">
                                            <p><span className="useertitle">姓名</span>&nbsp;<span className="userinf">{this.state.userinformation.name}</span> </p>
                                            <p><span className="useertitle">电话</span>&nbsp;<span className="userinf">{this.state.userinformation.phone}</span> </p>
                                            <p><span className="useertitle">身份证</span>&nbsp;<span className="userinf">{IDcard}</span> </p>
                                            <p><span className="useertitle">地区</span>&nbsp;<span className="userinf">{this.state.userinformation.region}</span> </p>
                                            <p><span className="useertitle">配送地址</span>&nbsp;<span className="userinf">{this.state.userinformation.home}</span> </p>

                                        </div>
                                        <ul className="bc_num_fr">
                                            <li style={{ margintop: "0" }}>商品总价：{this.state.countprice} </li>
                                            <li>优惠节省：0.00 </li>
                                            <li>合计：<span className="bc_red" id="totalmoneyf">{this.state.countprice} </span></li>
                                        </ul>
                                    </div>
                                    <div className="bottombox">
                                        <div className="payinformationbox">
                                            <p className="payinformationboxtitle">订单详情</p>
                                            <p><span className="payinformationbox-order">订单编号：</span><span className="payinformationbox-inf">{this.state.ordernum}</span> </p>
                                            <p><span className="payinformationbox-order">支付方式：</span><span className="payinformationbox-inf">待支付</span> </p>
                                            <p><span className="payinformationbox-order">商品快照：</span><span className="payinformationbox-inf">核对交易细节时，可作为判断依据</span> </p>
                                            <p><span className="payinformationbox-order">物流公司：</span><span className="payinformationbox-inf">默认顺丰到付</span> </p>
                                            <p><span className="payinformationbox-order">下单时间：</span><span className="payinformationbox-inf">{this.state.time}</span> </p>
                                            <p></p>
                                        </div>
                                        <div className="bc_probtn clearfix" style={{position:"absolute",bottom:"0px",right:"0px",paddingBottom:"20px",paddingRight:"20px"}}>
                                        <a href="javascript:;" title="去结算" id="submit" event-name="PC_去结算" onClick={this.Clickpay.bind(this)} >去结算</a>
                                    </div>
                                    </div>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>



                <Foot></Foot>
            </div>
        )
    }
}
export default pay