import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Headfoot from "../../components/headfoot";
import Carouselmap from "../../components/Carouselmap"
import "../../css/goodshop.scss"
import Goodshopnavbar from "../../components/goodshopnavbar"
import Countdown from "../../components/countdown"
import Goodlis from "../../components/goodlis"
import { BackTop } from 'antd';
import Foot from "../../components/foot"

class goodshop extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            goodlist: null,
            countdown: null,
            goodlis: null,
            height: 'none',
        }
        this.handleScroll = this.handleScroll.bind(this)

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        fetch("/api/goodshop")
            .then(res => res.json())
            .then(data => {
                console.log(data, "xxxxxxxxxxxxxxxxxxx")
                console.log(data[0].pic, "xxxxxxxxxxxxxxxxxxx")
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    goodlist: data
                })
                console.log("00300")
            })

        fetch("/api/countdown")
            .then(res => res.json())
            .then(data => {
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    countdown: data

                })
                console.log(this.state.countdown, "00000000000000000000002")
            })

        fetch("/api/goodlis")
            .then(res => res.json())
            .then(data => {
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    goodlis: data

                })
                console.log(this.state.countdown, "00000000000000000000002")
            })

    }
    handleScroll() {

        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        // this.setState({
        //     height:scrollTop
        // })

        console.log(scrollTop)
        if (scrollTop > 200) {



            console.log("done")

            this.setState({
                height: "block",


            })
        } else if (scrollTop < 200) {
            this.setState({
                height: "none",

            })
        }


    }
    checkgood=(good)=>{
        // 接收到子组件传过来的值以后进行页面跳转
        //    this.props.history.push('/gooddetail/'+good);
        console.log(good,"11")
       }

    render() {


        const { goodlist, countdown, goodlis } = this.state;

        if (goodlist === null) {
            return null;
        } else if (countdown === null) {
            return null;
        } else if (goodlis === null) {
            return null;
        }
        // console.log(this.state.countdown, "00000000000000000000001")
        // console.log(this.state.childrenMsg, "111111111111000000000011111")
        console.log(this.state.goodlis[0],"商城商品列表")
        return (
            <div>
                <Headfoot history={this.props.history}></Headfoot>
                    {/* 侧面悬浮导航栏 */}
                    <div className="Floatingdialog" style={{ display: this.state.height }}>
                        <ul>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p4.lefile.cn/fes/cms/2020/02/21/ff0w0gh8csqt5bge80ry5ml86ku29z865084.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p4.lefile.cn/fes/cms/2020/02/21/xj5385rvoe8faxspi7o411x9jsxlob188755.png" alt="" />
                                </a>
                            </li>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p2.lefile.cn/fes/cms/2020/02/21/totssmb3o8jre371uvi0t8nqzsk6xr906384.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p2.lefile.cn/fes/cms/2020/02/21/t4empwrv6dtg02fw2yoky5t0uwqts7415366.png" alt="" />
                                </a>
                            </li>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p3.lefile.cn/fes/cms/2020/02/21/yz0vrnil45t7ywklc9aso1azz2lg4n819485.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p4.lefile.cn/fes/cms/2020/02/21/auivk5c3kmxy9c78p4qaxonhkaelx3624822.png" alt="" />
                                </a>
                            </li>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p2.lefile.cn/fes/cms/2020/02/21/bouuhncipsz2g0tl39isq9pans2c4s839564.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p4.lefile.cn/fes/cms/2020/02/21/lmdpfpd9veva84nrx17tt2iinykye9347318.png" alt="" />
                                </a>
                            </li>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p1.lefile.cn/fes/cms/2020/02/21/67xvz6pb7um0yvcwagmk968qmp7mk0776973.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p3.lefile.cn/fes/cms/2020/02/21/r5ct09nrprhlsgvct3uuefcretjfua116929.png" alt="" />
                                </a>
                            </li>
                            <li className="firstLevel">
                                <a href="">
                                    <img className="Floatingdialogimg1" src="//p4.lefile.cn/fes/cms/2020/02/21/htq7ni4wft2x6fx9l4abx6imk57asl590424.png" alt="" />
                                    <img className="Floatingdialogimg2" src="//p4.lefile.cn/fes/cms/2020/02/21/9gsplvnjhhlef7xuwvq0mk75km82sn037679.png" alt="" />
                                </a>
                            </li>
                            
                        </ul>
                        <BackTop>
                                <div className="firstLevel">
                                    <img className="Floatingdialogimg1" src="https://p3.lefile.cn/product/adminweb/2020/02/12/c8ade3e1-724d-45e1-8d40-7d4b51ad6cec.png" alt="" />
                                    <img className="Floatingdialogimg2" src="https://p3.lefile.cn/product/adminweb/2020/02/12/9e4d19d9-cf6b-4970-a506-f792a2f1106a.png" alt="" />
                                </div>
                            </BackTop>
                    </div>
                    <div style={{ height: "600px", position: "relative" }}>
                        <div className="shop_banner_n">
                            <div className="shop_nav_c">
                                <div className="list_nav">
                                    <ul>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    Lenovo电脑
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2021/01/07/qrv6r23gy5xiyyprqv1g7nmaxg46k0809795.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p2.lefile.cn/fes/cms/2021/01/21/bmabircmw8o9ukzuu4twdq2jrnga37406341.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    ThinkPad电脑
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2020/12/22/9tdgt7sj1zdl5p82hrpywo2j1402xv234383.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p1.lefile.cn/fes/cms/2021/02/23/ta24n4u73ahcjqb9aphkxeef82o6hy297415.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">ThinkPad</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">X1 系列（尊贵旗舰）</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    手机/通信
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p3.lefile.cn/fes/cms/2021/01/25/qigirjv5i3wqikz3nkct8yn01kiud4169020.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p1.lefile.cn/fes/cms/2021/01/25/5252y0ey9fp20scphzddi121regwum805926.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    智能产品
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2020/01/02/nbycxj9vjgjyeqcslf77216towwaj0980099.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2020/03/19/q10zjs9yect7bd2cxrghs6s778mq3k841198.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    配件/办公
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p1.lefile.cn/fes/cms/2021/01/15/g540gschvjjq1rvcqo15ilcwwqis1d967501.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p3.lefile.cn/fes/cms/2021/01/15/ugobmcxxdmse0dt0h0cqcljuz5gwv1891232.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    平板电脑
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2021/01/21/vdl0hviurjzarb7arsqq78rubr0wec809882.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p4.lefile.cn/fes/cms/2021/01/21/acl7u8738d7vsr4es7erv9fgacip82406815.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_name">
                                                <a href="" className="list_nm">
                                                    增值服务
                                            <span className="list_iconb"></span>
                                                </a>
                                                <div className="list_cont" >
                                                    <div className="list_rt">
                                                        <a href="">
                                                            <img src="//p1.lefile.cn/fes/cms/2021/01/08/3qoj99qvozf0pnevp4h9df2h5671jp981320.jpg" alt="" />
                                                        </a>
                                                        <a href="">
                                                            <img src="//p1.lefile.cn/fes/cms/2021/01/08/hlutih40pb8drsvcvo5e2aqxxt5k9s111915.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">游戏本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">拯救者Y7000</a>
                                                                </li>
                                                                <li><a href="">拯救者Y7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000P</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者R7000</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">拯救者Y9000K</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">IP选件</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">轻薄本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">小新Air 14</a>
                                                                </li>
                                                                <li><a href="">小新Air 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新 15</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro 13</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">小新Pro14</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">Y9000X</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">便携本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">YOGA 13s</a>
                                                                </li>
                                                                <li><a href="">YOGA 14c</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA 14s</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C940</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA C740</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">YOGA S940</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">常规本</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">IdeaPad 14s</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="list_lt">
                                                        <div className="list_lta">
                                                            <p><a href="" target="_blank" latag="">分体台式机</a></p>
                                                            <ul className="clearfix">
                                                                <li><a href="" target="_blank" latag="">GeekPro</a>
                                                                </li>
                                                                <li><a href="">天逸510S</a>
                                                                </li>
                                                                <li><a href="" target="_blank" latag="">天逸510 Pro</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Carouselmap goodlist={this.state.goodlist}></Carouselmap>
                        <Goodshopnavbar></Goodshopnavbar>


                    </div>
                    <Countdown countdown={this.state.countdown} history={ this.props.history }></Countdown>
                    {/* 商品列表 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">Lenovo 电脑</span>
                            </div>
                            <div className="product-level-list">
                                <div className="product-list-topright">
                                    <a className="top-level-list" href="">
                                        <span>拯救者</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>小新</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>轻薄本</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>笔记本周边选件</span>
                                    </a>
                                </div>
                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab1} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表2 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">Lenovo 台式机</span>
                            </div>
                            <div className="product-level-list">
                                <div className="product-list-topright">
                                    <a className="top-level-list" href="">
                                        <span>AIO系列</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>BOX系列</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>GeekPro系列</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>刃系列</span>
                                    </a>
                                </div>
                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab2} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表3 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">ThinkPad 电脑</span>
                            </div>
                            <div className="product-level-list">
                                <div className="product-list-topright">
                                    <a className="top-level-list" href="">
                                        <span>X1 系列 </span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>X系列 </span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>E系列 </span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>S系列</span>
                                    </a>

                                </div>
                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab3} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表4 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">手机/配件</span>
                            </div>
                            <div className="product-level-list">

                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab4} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表5 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">平板电脑</span>
                            </div>
                            <div className="product-level-list">
                                <div className="product-list-topright">
                                    <a className="top-level-list" href="">
                                        <span>小新平板 </span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>网课平板</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>M10 PLUS 增强版</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>M8</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>TAB4</span>
                                    </a>
                                </div>
                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab5} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表6 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">选件</span>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab6} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表7 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">服务/配件</span>
                            </div>
                            <div className="product-level-list">
                                <div className="product-list-topright">
                                    <a className="top-level-list" href="">
                                        <span>原厂保修</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>软件服务</span>
                                    </a>
                                    <a className="top-level-list" href="">
                                        <span>维修保养</span>
                                    </a>

                                </div>
                                <div className="product-list-more">
                                    <a href="">
                                        <span>更多</span>
                                        <img className="morelink" src="https://p1.lefile.cn/product/adminweb/2019/10/09/d279bd4e-7d9b-4c3d-9d8c-043ae6ac78e3.png" alt="" />
                                        <img className="morelink-hover" src="https://p3.lefile.cn/product/adminweb/2019/10/09/fe99a8aa-8bfd-4c07-a185-a8bab52d6e1f.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab7} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表8 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">智能</span>
                            </div>
                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab8} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表9 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">显示器</span>
                            </div>

                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab9} history={ this.props.history }></Goodlis>
                    </div>
                    {/* 商品列表10 */}
                    <div className="product-list-container">
                        <div className="product-top-wrap">
                            <div className="product-level-name">
                                <span className="level-name-left">IP周边</span>
                            </div>

                        </div>
                        <Goodlis goodlist={this.state.goodlis[0].tab10} history={ this.props.history }></Goodlis>
                    </div>
                <Foot></Foot>


            </div>
        )
    }



}

export default goodshop