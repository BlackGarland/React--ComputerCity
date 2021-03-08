import React, { Component } from 'react';
import { Carousel } from 'antd';
import "../css/producttab.scss"
import { fetchget } from '../../src/utils/zgfetch'

class producttab extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            goodli: null,
            goodlistnum: ""
            // border:"",
            // border1:"",
            // border2:"",
            // border3:"",
            // border4:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);

        this.onMouseOver1 = this.onMouseOver1.bind(this)
        this.onMouseOver2 = this.onMouseOver2.bind(this)
        this.onMouseOver3 = this.onMouseOver3.bind(this)
        this.onMouseOver4 = this.onMouseOver4.bind(this)
        this.onMouseOver5 = this.onMouseOver5.bind(this)
        this.onMouseOver6 = this.onMouseOver6.bind(this)
        this.onMouseOver7 = this.onMouseOver7.bind(this)

        // this.handleNext = this.handleNext.bind(this);
        this.thebottom = React.createRef();
        this.thebottom1 = React.createRef();
        this.thebottom2 = React.createRef();
        this.thebottom3 = React.createRef();
        this.thebottom4 = React.createRef();
        this.tab_content1 = React.createRef();
        this.tab_content2 = React.createRef();
        this.tab_content3 = React.createRef();
        this.tab_content4 = React.createRef();
        this.tab_content5 = React.createRef();

        // const goodlilist=this.state.goodli[0].tabbox1.tab1
        // const goodlilist1=this.state.goodli[0].tabbox1.tab1
        // const goodlilist2=this.state.goodli[0].tabbox1.tab2
        // const goodlilist3=this.state.goodli[0].tabbox1.tab3
        // const goodlilist4=this.state.goodli[0].tabbox1.tab4
        // const goodlilist5=this.state.goodli[0].tabbox1.tab5
        // const goodlilist6=this.state.goodli[0].tabbox1.tab6
        // const goodlilist7=this.state.goodli[0].tabbox1.tab7
    }

    handleClick() {
        this.thebottom.current.style.borderBottom = "5px solid #b1b9c2"
        this.thebottom1.current.style.borderBottom = ""
        this.thebottom2.current.style.borderBottom = ""
        this.thebottom3.current.style.borderBottom = ""
        this.thebottom4.current.style.borderBottom = ""
        this.tab_content1.current.style.display = "block"
        this.tab_content2.current.style.display = "none"
        this.tab_content3.current.style.display = "none"
        this.tab_content4.current.style.display = "none"
        this.tab_content5.current.style.display = "none"

    }
    handleClick1() {
        this.thebottom.current.style.borderBottom = ""
        this.thebottom1.current.style.borderBottom = "5px solid #b1b9c2"
        this.thebottom2.current.style.borderBottom = ""
        this.thebottom3.current.style.borderBottom = ""
        this.thebottom4.current.style.borderBottom = ""
        this.tab_content1.current.style.display = "none"
        this.tab_content2.current.style.display = "block"
        this.tab_content3.current.style.display = "none"
        this.tab_content4.current.style.display = "none"
        this.tab_content5.current.style.display = "none"

    }
    handleClick2() {
        this.thebottom.current.style.borderBottom = ""
        this.thebottom1.current.style.borderBottom = ""
        this.thebottom2.current.style.borderBottom = "5px solid #b1b9c2"
        this.thebottom3.current.style.borderBottom = ""
        this.thebottom4.current.style.borderBottom = ""
        this.tab_content1.current.style.display = "none"
        this.tab_content2.current.style.display = "none"
        this.tab_content3.current.style.display = "block"
        this.tab_content4.current.style.display = "none"
        this.tab_content5.current.style.display = "none"
    }
    handleClick3() {
        this.thebottom.current.style.borderBottom = ""
        this.thebottom1.current.style.borderBottom = ""
        this.thebottom2.current.style.borderBottom = ""
        this.thebottom3.current.style.borderBottom = "5px solid #b1b9c2"
        this.thebottom4.current.style.borderBottom = ""
        this.tab_content1.current.style.display = "none"
        this.tab_content2.current.style.display = "none"
        this.tab_content3.current.style.display = "none"
        this.tab_content4.current.style.display = "block"
        this.tab_content5.current.style.display = "none"

    }
    handleClick4() {
        this.thebottom.current.style.borderBottom = ""
        this.thebottom1.current.style.borderBottom = ""
        this.thebottom2.current.style.borderBottom = ""
        this.thebottom3.current.style.borderBottom = ""
        this.thebottom4.current.style.borderBottom = "5px solid #b1b9c2"
        this.tab_content1.current.style.display = "none"
        this.tab_content2.current.style.display = "none"
        this.tab_content3.current.style.display = "none"
        this.tab_content4.current.style.display = "none"
        this.tab_content5.current.style.display = "block"

    }

    componentDidMount() {
        fetch("/api/goodli")
            .then(res => res.json())
            .then(data => {
                console.log(data, "xxxxxxxxxxxxxxxxxxx")
                console.log(data[0].pic, "xxxxxxxxxxxxxxxxxxx")
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    goodli: data
                })
            })

    }

    onMouseOver1() {
        this.setState({
            goodlistnum: "1"
        })
    }
    onMouseOver2() {
        this.setState({
            goodlistnum: "2"
        })
    }
    onMouseOver3() {
        this.setState({
            goodlistnum: "3"
        })
    }
    onMouseOver4() {
        this.setState({
            goodlistnum: "4"
        })
    }
    onMouseOver5() {
        this.setState({
            goodlistnum: "5"
        })
    }
    onMouseOver6() {
        this.setState({
            goodlistnum: "6"
        })
    }
    onMouseOver7() {
        this.setState({
            goodlistnum: "7"
        })
    }




    render() {
        const { goodli } = this.state;
        console.log(goodli, "gggg")
        if (goodli === null) {
            return null;
        }

        let goodlilist = this.state.goodli[0].tabbox1
        let goodlilist1 = this.state.goodli[0].tabbox2
        let goodlilist2 = this.state.goodli[0].tabbox1
        let goodlilist3 = this.state.goodli[0].tabbox2
        let goodlilist4 = this.state.goodli[0].tabbox1
        let goodlilist5 = this.state.goodli[0].tabbox2
        let goodlilist6 = this.state.goodli[0].tabbox1
        let goodlilist7 = this.state.goodli[0].tabbox2
        if (this.state.goodlistnum == "1") {
            goodlilist = goodlilist1
        } if (this.state.goodlistnum == "2") {
            goodlilist = goodlilist2
        } if (this.state.goodlistnum == "3") {
            goodlilist = goodlilist3
        } if (this.state.goodlistnum == "4") {
            goodlilist = goodlilist4
        } if (this.state.goodlistnum == "5") {
            goodlilist = goodlilist5
        } if (this.state.goodlistnum == "6") {
            goodlilist = goodlilist6
        } if (this.state.goodlistnum == "7") {
            goodlilist = goodlilist7
        }


        return (
            <div style={{ width: "100%" }}>
                <div style={{ width: "100%", backgroundColor: "#f9f9f9" }}>
                    <div className="producttabbox" style={{ backgroundClip: "#f9f9f9" }}>
                        <div className="tab_navTop ">
                            <ul className="ulTop">
                                <li className="tab_item" ref={this.thebottom} onClick={this.handleClick} ><p>个人及家庭产品</p></li>
                                <li className="tab_item" ref={this.thebottom1} onClick={this.handleClick1} ><p>中小企业产品</p></li>
                                <li className="tab_item" ref={this.thebottom2} onClick={this.handleClick2}><p>政企大客户产品</p></li>
                                <li className="tab_item" ref={this.thebottom3} onClick={this.handleClick3} ><p>数据中心产品</p></li>
                                <li className="tab_item" ref={this.thebottom4} onClick={this.handleClick4} ><p> 行业智能软件产品</p></li>
                            </ul>
                        </div>
                        <div className="tab_content">
                            <ul ref={this.tab_content1}>
                                <li className="tab_item2" onMouseOver={this.onMouseOver1}>
                                    <a href="">
                                        <img className="img1" src="//p4.lefile.cn/fes/cms/2020/04/08/vfbcjd39v1456u7mpyioz72m8eq3k2381777.png" alt="Lenovo 台式机" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/04/08/s6zpki0pv388hptvvv17981re615el674750.png" alt="Lenovo 台式机" />
                                        <p className="hover_color_0">Lenovo 台式机</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver2}>
                                    <a href="">
                                        <img className="img1" src="//p4.lefile.cn/fes/cms/2020/04/08/702gq0xnquz7s0xyzlsur121uonxzm508888.png" alt="Lenovo 笔记本" />
                                        <img className="img2" src="//p2.lefile.cn/fes/cms/2020/04/08/uha1lyckunvqbcxxedh1almpd40un8852769.png" alt="Lenovo 笔记本" />
                                        <p className="hover_color_0">Lenovo 笔记本</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver3}>
                                    <a href="">
                                        <img className="img1" src="//p1.lefile.cn/fes/cms/2020/04/08/cjeknvo9ae75gbknzjaznz0183egos878109.png" alt="ThinkPad 电脑" />
                                        <img className="img2" src="//p2.lefile.cn/fes/cms/2020/04/08/8s2but0nyymqy4dz81exj6efp1kqy1623555.png" alt="ThinkPad 电脑" />
                                        <p className="hover_color_0">ThinkPad 电脑</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver4}>
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/10/29/g3o46sqa64m2gpu3lj0nzopbepd9p3762921.png" alt="网课平板" />
                                        <img className="img2" src="//p2.lefile.cn/fes/cms/2020/10/29/ed45uwv36hpbiirkq9o5jko4r7vs7f313197.png" alt="网课平板" />
                                        <p className="hover_color_0">网课平板</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver5}>
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/10/29/jt9srkz77jc4ht7a9fyg18in6gwxxh700290.png" alt="手机" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/10/29/3ej4fizsmj6gvqc3m6ujhs0w471r8b516355.png" alt="手机" />
                                        <p className="hover_color_0">手机</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver6}>
                                    <a href="">
                                        <img className="img1" src="//p4.lefile.cn/fes/cms/2020/10/29/ydmuq4j0bwpippbjiyz1sp0ek7l93r042091.png" alt="选件/服务" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/10/29/pbveu9awz61l7k2kjkau22etlosdz1220039.png" alt="选件/服务" />
                                        <p className="hover_color_0">选件/服务</p>
                                    </a>
                                </li>
                                <li className="tab_item2" onMouseOver={this.onMouseOver7}>
                                    <a href="">
                                        <img className="img1" src="//p1.lefile.cn/fes/cms/2020/10/29/ys6pp1zpb24rbp9jy30ejuoji5vizl440852.png" alt="智能产品/打印机" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/10/29/0r8w9kimha205ywvo6vbpk4cmc9rbt069653.png" alt="智能产品/打印机" />
                                        <p className="hover_color_0">智能产品/打印机</p>
                                    </a>
                                </li>
                            </ul>
                            <ul ref={this.tab_content2} style={{ display: "none" }}>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/08/02/072otup1xu8e586strwazebihjxnpa366302.png" alt="" />
                                        <img className="img2" src="//p3.lefile.cn/fes/cms/2020/08/02/9vljerdyu97aok8mjj6egn0kti7nju116640.png" alt="" />
                                        <p className="hover_color_1">扬天</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p1.lefile.cn/fes/cms/2020/08/02/yv3rgvcvzsip1b429b0f433wtw2g6n704099.png" alt="" />
                                        <img className="img2" src="//p3.lefile.cn/fes/cms/2020/08/02/t5mpjdad326sk0l934hh286ls5uxl4022028.png" alt="" />
                                        <p className="hover_color_1">ThinkPad</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p4.lefile.cn/fes/cms/2020/08/02/rtvxvmrnwh7s5cbupenilev96xf217352392.png" alt="" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/08/02/wxyhmup4yxwer8wq9opg6qbopsmm1f951301.png" alt="" />
                                        <p className="hover_color_1">配件/办公</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/12/02/aje43g2vng5q7h3p1hs8rypw77hljv884460.png" alt="" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/12/02/r4bw21d32nhetvzwl255sopftqf5qt095947.png" alt="" />
                                        <p className="hover_color_1">打印机</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p3.lefile.cn/fes/cms/2020/12/02/ujvrg9s570slsl8lv0eg0vvtu07bzb473925.png" alt="" />
                                        <img className="img2" src="//p3.lefile.cn/fes/cms/2020/12/02/na1xt4iufift44mfbyut7ko3r9jlx7645398.png" alt="" />
                                        <p className="hover_color_1">解决方案</p>
                                    </a>
                                </li>
                            </ul>
                            <ul ref={this.tab_content3} style={{ display: "none" }}>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p3.lefile.cn/fes/cms/2020/04/08/u70y885lffr4y74k2ecn6anzl4yemk484192.png" alt="" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/04/08/k8hgb4nv26swm9xl06sb5t0w9flzqg697820.png" alt="" />
                                        <p className="hover_color_1">商用电脑</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/05/28/xja87f73fo5pgwx56etflsipoaahe9740560.png" alt="" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/05/28/2379gjq01si7czrvc3e13q4b4y8lo0571013.png" alt="" />
                                        <p className="hover_color_1">商用IOT</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/05/28/cuxn5txeo0mwbeu6i2j9etgcwpso7l571797.png" alt="" />
                                        <img className="img2" src="//p3.lefile.cn/fes/cms/2020/05/28/r8m9umei5tzp1rls8hswv0ubygdv84683691.png" alt="" />
                                        <p className="hover_color_1">商用解决方案</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p3.lefile.cn/fes/cms/2020/05/28/rh2ic73rb6zlorqmv0kf5v8p91pxhh933759.png" alt="" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/05/28/gzklg2fvsiykni0m61hbnncybplhy9826803.png" alt="" />
                                        <p className="hover_color_1">联想E采</p>
                                    </a>
                                </li>
                                <li className="tab_item3">
                                    <a href="">
                                        <img className="img1" src="//p3.lefile.cn/fes/cms/2020/05/28/slreppqvn102d8ms22bnyrujrml81g259643.png" alt="" />
                                        <img className="img2" src="//p3.lefile.cn/fes/cms/2020/05/28/r4px9vbp9r83459qm8lhoic4m5mks7563070.png" alt="" />
                                        <p className="hover_color_1">商用服务</p>
                                    </a>
                                </li>
                            </ul>
                            <ul ref={this.tab_content4} style={{ display: "none" }}>
                                <li className="tab_item3" style={{ width: "50%" }}>
                                    <a href="">
                                        <img className="img1" src="//p1.lefile.cn/fes/cms/2020/04/08/a019z9jbat4pt3nq4jr0l6ei1hcxc1407955.png" alt="" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/04/08/08dkha7nejt5862i4pxdpvgi3eqdw4478557.png" alt="" />
                                        <p className="hover_color_1">数据中心产品</p>
                                    </a>
                                </li>
                                <li className="tab_item3" style={{ width: "50%" }}>
                                    <a href="">
                                        <img className="img1" src="//p4.lefile.cn/fes/cms/2020/04/08/pe08uv3gcp4d1xofqms5uyfkp2aij7627020.png" alt="" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/04/08/cezxv5wxf4tdv5877vln3tsgrm6ef0863818.png" alt="" />
                                        <p className="hover_color_1">数据中心解决方案</p>
                                    </a>
                                </li>
                            </ul>
                            <ul ref={this.tab_content5} style={{ display: "none" }}>
                                <li className="tab_item3" style={{ width: "50%" }}>
                                    <a href="">
                                        <img className="img1" src="//p2.lefile.cn/fes/cms/2020/05/06/pe180pen4k452ux6jjzba8mwbh3adh883748.png" alt="" />
                                        <img className="img2" src="//p1.lefile.cn/fes/cms/2020/05/06/9rkxu31sm4dmgk7sgcrilqojevn6ez276183.png" alt="" />
                                        <p className="hover_color_1">Leap平台级软件产品</p>
                                    </a>
                                </li>
                                <li className="tab_item3" style={{ width: "50%" }}>
                                    <a href="">
                                        <img className="img1" src="//p3.lefile.cn/fes/cms/2020/05/06/1ullxj6deequfm1i2cypy7fg0eb798374903.png" alt="" />
                                        <img className="img2" src="//p4.lefile.cn/fes/cms/2020/05/06/hy8eekz0fxfn6k5twbffnqg8am48pj156624.png" alt="" />
                                        <p className="hover_color_1">专业技术服务</p>
                                    </a>
                                </li>
                            </ul>

                            <div className="goodli">
                                <div className="clearfix">
                                    <div className="goodlibox">
                                        <a href="">
                                            <img src={goodlilist.tab1.pic} alt="" />
                                            <div className="goodlilistcontent">
                                                <p className="goodlilistcontentname">{goodlilist.tab1.name}</p>
                                                <p className="goodlilistcontentberif"> {goodlilist.tab1.berif}</p>
                                                <p className="goodlilistcontentprie">￥ <span gcode="1008412">{goodlilist.tab1.prie}</span></p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="goodlibox">
                                        <a href="">
                                            <img src={goodlilist.tab2.pic} alt="" />
                                            <div className="goodlilistcontent">
                                                <p className="goodlilistcontentname">{goodlilist.tab2.name}</p>
                                                <p className="goodlilistcontentberif"> {goodlilist.tab2.berif}</p>
                                                <p className="goodlilistcontentprie">￥ <span gcode="1008412">{goodlilist.tab2.prie}</span></p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="goodlibox" style={{ marginRight: "0px" }}>
                                        <a href="">
                                            <img src={goodlilist.tab3.pic} alt="" />
                                            <div className="goodlilistcontent">
                                                <p className="goodlilistcontentname">{goodlilist.tab3.name}</p>
                                                <p className="goodlilistcontentberif"> {goodlilist.tab3.berif}</p>
                                                <p className="goodlilistcontentprie">￥ <span gcode="1008412">{goodlilist.tab3.prie}</span></p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="gg_banner">
                                        <div className="gg_left">
                                            <a href="">
                                                <img src={goodlilist.tab4.pic} alt="" />
                                            </a>
                                        </div>
                                        <div className="gg_right">
                                            <div>
                                                <a href="">
                                                    <img src={goodlilist.tab5.pic} alt="" />
                                                </a>
                                            </div>
                                            <div className="gg_rightitem">
                                                <a href="">
                                                    <img src={goodlilist.tab6.pic} alt="" />
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div style={{ width: "100%", backgroundColor: "#fff" }}>
                    <div className="Successfulcase_Market">
                        <h2 className="hotH2">成功案例<img src="https://p3.lefile.cn/fes/cms/2019/12/02/yqli80q6sgjcvjhw3knku7m2b6y1ps420386.png" style={{ verticalalign: "super", width: "15px", marginLeft: "5px" }} alt="" /></h2>

                        <a href="" className="Hotmor">更多
                        <img className="Hotmorimg" src="http://p2.lefile.cn/fes/cms/2019/12/03/lb93zd2i90396u3cofz77lz53e5wln486248.svg" alt="" />
                        </a>
                        <div style={{ width: "100%", marginTop: "95px" }}>
                            <div className="Successfulcase_Marketswiper">
                                <a href="#/success1">
                                    <img src="http://p1.lefile.cn/fes/cms/2020/10/13/zp0v8cuy8lyxbj947kl0we9sd5yeiu259999.png" alt="" />
                                </a>
                            </div>
                            <div className="Successfulcase_Marketswiper">

                                <a href="#/success2">
                                    <img src="http://p4.lefile.cn/fes/cms/2020/10/13/zyr3zuspx6hh4c712gvxq7gy93yonq754397.png" alt="" />
                                </a>

                            </div>

                            <div className="Successfulcase_Marketswiper" style={{ marginRight: "0px" }}>
                                <a href="#/success3">
                                    <img src="http://p2.lefile.cn/fes/cms/2020/10/13/oyz73fau9jv22444g7eb6v3jw9jt63291948.png" alt="" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", backgroundColor: "#f9f9f9" }}>
                    <div className="Successfulcase_Market" style={{ backgroundColor: "#f9f9f9" }}>
                        <h2 className="hotH2">市场活动<img src="https://p3.lefile.cn/fes/cms/2019/12/02/yqli80q6sgjcvjhw3knku7m2b6y1ps420386.png" style={{ verticalalign: "super", width: "15px", marginLeft: "5px" }} alt="" /></h2>

                        <a href="" className="Hotmor">更多
                        <img className="Hotmorimg" src="http://p2.lefile.cn/fes/cms/2019/12/03/lb93zd2i90396u3cofz77lz53e5wln486248.svg" alt="" />
                        </a>
                        <div style={{ width: "100%", marginTop: "95px" }}>
                            <div className="Successfulcase_Marketswiper">
                                <a href="#/marketnews">
                                    <img src="http://p1.lefile.cn/fes/cms/2020/11/16/w7labvisb5f1xsjva0z0yh3npjjqs2919987.jpg" alt="" />
                                </a>
                            </div>
                            <div className="Successfulcase_Marketswiper">

                                <a href="#/marketnews2">
                                    <img src="http://p4.lefile.cn/fes/cms/2020/11/25/cr9nhwi4qdk215eli6miidbm2nj0gu536324.jpg" alt="" />
                                </a>

                            </div>

                            <div className="Successfulcase_Marketswiper" style={{ marginRight: "0px" }}>
                                <a href="#/marketnews3">
                                    <img src="http://p1.lefile.cn/fes/cms/2020/11/16/w7labvisb5f1xsjva0z0yh3npjjqs2919987.jpg" alt="" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                {/* 以下为新闻模块 */}
                <div style={{ width: "100%", backgroundColor: "#fff" }}>
                    <div className="news_content">
                        <div className="news_title">
                            <h2 className="news_name">新闻中心<img src="https://p3.lefile.cn/fes/cms/2019/12/02/yqli80q6sgjcvjhw3knku7m2b6y1ps420386.png" style={{ verticalalign: "super", width: "15px", marginLeft: "5px" }} alt="" /></h2>

                            <a href="" className="news_mor">更多
                                <img className="Hotmorimg" src="http://p2.lefile.cn/fes/cms/2019/12/03/lb93zd2i90396u3cofz77lz53e5wln486248.svg" alt="" />
                            </a>
                        </div>
                        {/* 轮播图 */}
                        <div className="popshold">
                            <Carousel autoplay>
                                <div>
                                    <h3><a href="#/news4">
                                        <img src="http://p3.lefile.cn/fes/cms/2021/02/02/mgbey1mu4b9vfar8al6y870sq9py25593509.jpg" title="" />
                                        <p className="popname">联想 X 王一博 ｜ 生而向上，敢想敢搏</p>
                                    </a></h3>
                                </div>
                                <div>
                                    <h3><a href="#/news5">
                                        <img src="http://p2.lefile.cn/fes/cms/2021/02/02/yphlllxg6rtxixfuaszo51jsr48ndb547312.jpg" title="" />
                                        <p className="popname">党央媒集体点赞联想2021开年视频《开局》</p>
                                    </a></h3>
                                </div>
                                <div>
                                    <h3><a href="#/news6">
                                        <img src="//p1.lefile.cn/fes/cms/2021/02/02/wqhfs0dz0f98ykp30faamj41uyuw80374847.jpg" title="" />
                                        <p className="popname">市值破千亿！双引擎驱动联想中国“开局”</p>
                                    </a></h3>
                                </div>
                            </Carousel>
                        </div>
                        <div className="news_word">
                            <div className="news_worditem">
                                <a href="#/news1">
                                    <div className="news_left">
                                        <h2>01</h2>
                                        <p>2021年02月3日</p>
                                    </div>
                                    <div className="news_right">
                                        <h3>联想第三财季，营收与利润双位数劲增</h3>
                                        <p>继第二财季实现创纪录的业绩之后，本财季联想再次创造了史上最佳</p>
                                        <i className="Arrow_news"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="news_worditem">
                                <a href="#/news2">
                                    <div className="news_left">
                                        <h2>02</h2>
                                        <p>2021年01月26日</p>
                                    </div>
                                    <div className="news_right">
                                        <h3>联想motorolaedges全球首发</h3>
                                        <p>联想Motorola正式发布了新锐实力派motorola edge s</p>
                                        <i className="Arrow_news"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="news_worditem">
                                <a href="#/news3">
                                    <div className="news_left">
                                        <h2>03</h2>
                                        <p>2021年01月13日</p>
                                    </div>
                                    <div className="news_right">
                                        <h3>用中国智慧 干出开局精彩</h3>
                                        <p>这支充满回忆的影片，在短短的3分钟里，凝聚了几代人的燃情岁月</p>
                                        <i className="Arrow_news"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* 热门推荐板块 */}
                <div style={{ width: "100%", backgroundColor: "#fff" }}>
                    <div className="Successfulcase_Market">
                        <h2 className="hotH2">推荐热门板块<img src="https://p3.lefile.cn/fes/cms/2019/12/02/yqli80q6sgjcvjhw3knku7m2b6y1ps420386.png" style={{ verticalalign: "super", width: "15px", marginLeft: "5px" }} alt="" /></h2>

                        <a href="" className="Hotmor">更多
                        <img className="Hotmorimg" src="http://p2.lefile.cn/fes/cms/2019/12/03/lb93zd2i90396u3cofz77lz53e5wln486248.svg" alt="" />
                        </a>
                        <div style={{ width: "100%", marginTop: "95px" }}>
                            <div className="Successfulcase_Marketswiper">
                                <a href="">
                                    <img src="http://p4.lefile.cn/fes/cms/2020/04/08/ksth5p8gss1dh72vtsoagupw9cpw09720022.jpg" alt="" />
                                </a>
                            </div>
                            <div className="Successfulcase_Marketswiper">

                                <a href="">
                                    <img src="http://p2.lefile.cn/fes/cms/2020/04/08/xpf16q4hai8cnm5njr0gonuokr3dn2847037.jpg" alt="" />
                                </a>

                            </div>

                            <div className="Successfulcase_Marketswiper" style={{ marginRight: "0px" }}>
                                <a href="">
                                    <img src="http://p3.lefile.cn/fes/cms/2020/04/08/295fpej1yrhr4p2ymzl5vfyrxgg4l5421001.jpg" alt="" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// function smallonChange(props) {



//     const contentStyle = {
//         height: '160px',
//         color: '#fff',
//         lineHeight: '160px',
//         textAlign: 'center',
//         background: '#364d79',
//     };


//     return (
//         <div className="popshold">
//             <Carousel autoplay>
//                 <div>
//                     <h3 style={contentStyle}>
//                         <img src="http://p3.lefile.cn/fes/cms/2021/02/02/mgbey1mu4b9vfar8al6y870sq9py25593509.jpg" title="" />
//                         <p className="popname">联想 X 王一博 ｜ 生而向上，敢想敢搏</p>
//                     </h3>
//                 </div>
//                 <div>
//                     <h3 style={contentStyle}>
//                         <img src="http://p2.lefile.cn/fes/cms/2021/02/02/yphlllxg6rtxixfuaszo51jsr48ndb547312.jpg" title="" />
//                         <p className="popname">党央媒集体点赞联想2021开年视频《开局》</p>
//                     </h3>
//                 </div>
//                 <div>
//                     <h3 style={contentStyle}>
//                         <img src="//p1.lefile.cn/fes/cms/2021/02/02/wqhfs0dz0f98ykp30faamj41uyuw80374847.jpg" title="" />
//                         <p className="popname">市值破千亿！双引擎驱动联想中国“开局”</p>
//                     </h3>
//                 </div>
//             </Carousel>
//         </div>
//     )


// }



export default producttab