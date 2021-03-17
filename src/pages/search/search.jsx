// 搜索商品页面
import React, { Component } from "react";
import "../../css/search.scss"
import Headfoot from "../../components/headfoot";
import Foot from "../../components/foot"
import Item from "antd/lib/list/Item";

class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodlist: [],
            productNum: "",
            notfund: "false",
        };
        this.searchgoods = this.searchgoods.bind(this)
        // this.itemclick = this.itemclick.bind(this)
    }
    componentDidMount() {

        this.searchgoods()



    }
    searchgoods() {
        fetch("/api/searchgoods")
            .then(res => res.json())
            .then(data => {
                if (data.length != 0) {
                    //把数据赋值给 banners 然后渲染在页面上 
                    this.setState({
                        goodlist: data,
                        productNum: data.length,
                        notfund: false
                    })
                } else {
                    this.setState({
                        notfund: true
                    })
                }

                console.log(this.state.goodlist, "搜索拿到的数据")

            })
    }



    componentDidUpdate() {



    }
    itemclick(item){
        console.log(item,"被点击了")
        var id=item.id;
        var url='/api/goodid?id='+id.toString()
        fetch(url,{
            method:'get'
        }).then(this.props.history.push({pathname:"/gooddetail" }))
    }


    render() {

        var searchmsg = this.props.match.params.search
        // console.log(this.state.productNum, "长度")
        // var goodli = this.state.goods
        // console.log(goodli, "展示的商品")
        return (
            <div>
                <Headfoot history={this.props.history} searchgoods={this.searchgoods}></Headfoot>
                <div className="searchbody" style={{ display: this.state.notfund == false ? "block" : "none" }}>
                    <div className="resultbar">
                        <div className="headUl">
                            <div className="resultBox">
                                <div className="allresult">
                                    <span>全部结果&nbsp;</span>
                                    <span className="resault">{searchmsg}</span>
                                </div>
                                <div className="allresult"></div>
                                <div className="productNum">
                                    <span>
                                        共
                        <span className="num"><span>{this.state.productNum}</span></span>
                        种商品
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 商品列表 */}
                    <div className="goodbox1">
                        <div className="goodlistitembox">


                            {

                                this.state.goodlist.map((item, index) => {
                                    return (

                                        <div className="goodlist" key={index} onClick={this.itemclick.bind(this,item)}>
                                            <a href="javascript:;" className="pic" >
                                                <img src={item.pic} />
                                            </a>
                                            <div className="search_name" >
                                                <span><a href="javascript:;">{item.name}</a></span>
                                            </div>
                                            <div className="search_mes">
                                                <a href="javascript:;">{item.description}</a>
                                            </div>
                                            <div className="search_price">
                                                <a href="javascript:;">￥&nbsp;{item.price}</a>
                                            </div>
                                        </div>


                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                {/* 没有找到结果的显示 */}
                <div className="notfund" style={{ display: this.state.notfund == true ? "block" : "none" }}>
                    <p>
                        <span className="nf-icon"></span>
                        <span>抱歉！没有找到与</span>
                        <span className="resault">{searchmsg}</span>
                        <span>相关的商品，您可以看看联想商城正在热卖的商品</span>
                    </p>
                </div>
                <Foot></Foot>
            </div>
        )
    }
}

export default search