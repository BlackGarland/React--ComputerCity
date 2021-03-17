import React, { Component } from "react";
import "../../css/shoppingcar.scss"
import "../../css/headfoot.scss"
import Foot from "../../components/foot"

class order extends Component {
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
            Idcard:"",
            Name:"",
            Region:"",
            Home:"",
            Phone:"",
            userinformation:{},

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

    changeData1(e){//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        const name = e.target.value
        // console.log(name,"这是名字")
        this.setState({
            Name:name
        })  
        
       

    }


    changeData2(e){//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        const Idcard = e.target.value
        this.setState({
            Idcard:Idcard
        })  
        
       

    }
    changeData3(e){//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        const Region = e.target.value
        this.setState({
            Region:Region
        })  
        
       

    }
    changeData4(e){//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        const Home = e.target.value
        this.setState({
            Home:Home
        })  
        
        
       

    }
    changeData5(e){//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        const Phone = e.target.value
        this.setState({
            Phone:Phone
        })  
       

    }
   

    Clickpay(){
        const name=this.state.Name
        const idcard =this.state.Idcard
        const region =this.state.Region
        const home= this.state.Home
        const phone =this.state.Phone
        const userinformation={}
        if(name!=""&&idcard!=""&&region!=""&&home!=""&&phone!="" ){
            userinformation.name=name
            userinformation.idcard=idcard
            userinformation.region=region
            userinformation.home=home
            userinformation.phone=phone
            
            // this.setState({
            //     userinformation:userinformation
            // })
            fetch('/api/order', {
                method: 'POST',
                body: new URLSearchParams([["userinformation", JSON.stringify(userinformation)],["orderlist",JSON.stringify(this.state.goodlist)]])//.toString()  这里是请求对象
            })
          

            this.props.history.push('/pay');

        }




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
                <div className="toptitle"><span></span></div>
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
                                        <th width="117"></th>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding="0" cellspacing="0">
                                <tbody>

                                    {
                                        this.state.goodlist.map((item, index) => {
                                            return <div >

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
                                    <div className="main-title">订购信息填写</div>
                                    <div className="each-area">
                                        <p className=" card-title">已选择：<strong>
                                            <span id="provinceSpan"></span>&nbsp;<span id="priceSpan"></span>&nbsp;<span id="videoSpan"></span></strong></p>

                                        <p className="area-title">根据国家实名制要求，请提供准确的身份信息</p>
                                        <div className="input-area">
                                            <div className="each-input">
                                                <label for="">姓名</label>
                                                <input id="nameInput" type="text" placeholder="请输入身份证件姓名" className="no-border-input" maxlength="16"  onChange={(e)=>this.changeData1(e)}/>
                                                {/* <p id="nameWarn" className="input-tips">请输入身份证件姓名</p> */}
                                            </div>
                                            <div className="each-input">
                                                <label for="">身份证号</label>
                                                <input id="idInput" type="text" placeholder="请输入身份证号" className="no-border-input" maxlength="18" onChange={(e) => this.changeData2(e)} />
                                                {/* <p id="idWarn" className="input-tips hide">请输入正确的身份证号</p> */}
                                            </div>
                                            <div className="each-input">
                                                <label for="">所在地区</label>
                                                <input id="telInput" type="tel" maxlength="11" placeholder="请输入联系所在地区" className="no-border-input"  onChange={(e) => this.changeData3(e)}/>
                                                {/* <p id="telWarn" className="input-tips ">您的手机号码格式有误，请重新输入</p> */}
                                            </div>
                                        </div>


                                    </div>

                                    {/* 222 */}
                                    <div className="each-area">

                                        <p className="area-title">请填写配送地址</p>
                                        <div className="input-area">

                                            <div className="each-input ">
                                            <label for="">配送地址</label>
                                                <input id="locationInput" type="text" placeholder="街道/镇+村/小区/写字楼+门牌号" className="no-border-input whole" maxlength="200" onclick="prompt()"  onChange={(e) => this.changeData4(e)}/>
                                                {/* <p id="locationWarn" className="input-tips">详细地址不能为空</p> */}
                                            </div>

                                            <div className="each-input">
                                                <label for="">联系电话</label>
                                                <input id="telInput" type="tel" maxlength="11" placeholder="请输入联系人手机号码" className="no-border-input"  onChange={(e) => this.changeData5(e)}/>
                                                {/* <p id="telWarn" className="input-tips ">您的手机号码格式有误，请重新输入</p> */}
                                            </div>
                                        </div>


                                    </div>







                                    <div className="agreement-check-wrap">
                                        <label className="o-checkbox">
                                            <input id="agreementBtn" type="checkbox" /><span className="show-btn" ></span><em>我已阅读并同意</em>
                                        </label>
                                        <a id="netAgreementBtn" className="color-m">《用户入网协议》</a>
                                    </div>
                                    <div className="bc_probtn clearfix">
                                        <a href="javascript:;" title="去结算" id="submit"  onClick={this.Clickpay.bind(this)}>去结算</a>
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
export default order



