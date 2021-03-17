// 购物车页面
import React, { Component } from "react";
import "../../css/shoppingcar.scss"
import "../../css/headfoot.scss"
import Foot from "../../components/foot"
import { fetchget } from '../../utils/zgfetch'
import { message } from 'antd';
class shoppingcar extends Component {
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
        };

    }
    componentDidMount() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
        fetch("/api/shoppinglist")
            .then(res => res.json())
            .then(data => {
                console.log(data, "购物车列表数据")
                var goods = JSON.parse(JSON.stringify(data))
                var list = goods.filter(item => item.count !== "0")
                // console.log(list, "购物车列表数据goods")
                list.find(item => {
                    item.price = parseInt(item.count) * parseInt(item.price)
                })
                console.log(list, "购物车列表数据最终")
                this.setState({
                    goodlist: list
                })

                var countprice = "0"
                this.state.goodlist.find(item => {
                    countprice = parseInt(item.price) + parseInt(countprice)
                })
                console.log(countprice, "商品总价")
                this.setState({
                    countprice: countprice
                })
            })

    }
    handleChange(event) {
        // console.log(this.checked)
        //     if(this.checked=this.checked){
        console.log(event.target.value, "选中")
        //     var price =this.state.goodlist[index].price
        //     var goodprice=price=this.state.price
        //     this.setState({
        //         price:goodprice
        //     })
        //     console.log("选中")
        // }


        // var every=list.every({item,one : some  //设定结算框的样式是哪个，根据list[index].checked
        // })

        // this.SumPrice()
    }
    Clickorder() {
        fetch("/api/islogin")
            .then(res => res.json())
            .then(data => {
                if (data[0].name == "1") {
                    message.info('请先登录，再进行操作~');
                    this.props.history.push('/login');
                } else {
                    this.props.history.push('/order');
                }

            })



    }
    render() {
        var goodlist = this.state.goodlist
        console.log(this.state.goodlist, "购物车列表")
        // goodlist.find(item => {
        //     item.price = parseInt(item.count) * parseInt(item.price)
        // })

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
                        </div>

                    </div>
                </div>
                <div className="top_logob">
                    <img src="//m1.lefile.cn/trade/cn/pc/images/base/pic-13.jpg" className="top_logob_imga" />
                    <img src="//m1.lefile.cn/trade/cn/pc/images/base/pic-12.jpg" className="top_logob_imgb"></img>
                </div>
                {/* 列表 */}
                <div className="buycart">
                    <div className="cart_main">
                        <div className="bc_option">
                            <div className="bc_all">

                            </div>
                        </div>
                        <div className="bc_table">
                            <table cellPadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <th colSpan="3" width="462">商品</th>
                                        <th width="163">规格</th>
                                        <th width="152">单价</th>
                                        <th width="152">数量</th>
                                        <th width="152">金额</th>
                                        <th width="117">操作</th>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding="0" cellspacing="0">
                                <tbody>

                                    {
                                        this.state.goodlist.map((item, index) => {
                                            return <div key={index}>

                                                <tr className="tr2">
                                                    <td width="57" className="bc_table_sel">
                                                        {/* <a href="javascript:;"></a> */}
                                                        <input type="checkBox" className="checkbox" ref="mytext"
                                                            onChange={() => { this.handleChange.bind(this, index) }} checked={item.checked} value="" />
                                                    </td>
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
                                        <ul className="bc_num_fr">
                                            <li style={{ margintop: "0" }}>商品总价：{this.state.countprice} </li>
                                            <li>优惠节省：0.00 </li>
                                            <li>合计：<span className="bc_red" id="totalmoneyf">{this.state.countprice} </span></li>
                                        </ul>
                                    </div>
                                    <div className="bc_probtn clearfix">
                                        <a href="javascript:;" title="去结算" id="submit" event-name="PC_去结算" onClick={this.Clickorder.bind(this)}>去结算</a>
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
export default shoppingcar