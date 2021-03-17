import React, { Component, ReactNode } from 'react'
import "../css/goodlis.scss"

class goodlis extends Component {
    // selectgood=(good)=>{
    //     this.props.selectgood(good)  //组件传值
    // }
    Click1(){
        const goodlist1=this.props.goodlist
        console.log(goodlist1,"执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[0] });
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
        const goodlist1=this.props.goodlist
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
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[2] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[3])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click4(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[3] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[4])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click5(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[4] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[4])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click6(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[5] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[5])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click7(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[6] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[6])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click8(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[7] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[7])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }
    Click9(){
        const goodlist1=this.props.goodlist
        console.log("执行方法")
        // this.props.history.push({pathname:"/gooddetail" ,good:goodlist1[8] });
        fetch('/api/gooddetaillist', {
            method: 'POST',
            body: new URLSearchParams([["list", JSON.stringify(goodlist1[8])]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data[0].gooddetaillist,"发送的数据")
         this.props.history.push({pathname:"/gooddetail" });
        
        }))
    }


    render() {
        const goodlist1=this.props.goodlist
        console.log(goodlist1,"xxxxxoooooo")
        return (
            <div>
                <div className="product-main-wrap">
                    {/* 左侧 */}
                    <div className="banner-img-left">
                        <div className="swiper-container" onClick={this.Click9.bind(this)}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-slide-active" style={{width: "230px"}}>
                                    <a href="javascript:;"><img src={goodlist1[8].pic} alt="" /></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* 右侧 */}
                    <div className="product-list-right">
                        <ul className="product-list-ul">
                            <li className="product-detail-card" onClick={this.Click1.bind(this)} id="a10101">
                                <div className="product-detail-pic" >
                                    <a href="javascript:;" >
                                        <img src={goodlist1[0].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                    <a href="javascript:;" className="product-des-title">{goodlist1[0].name}</a>
                                    <a href="javascript:;" className="product-des-subtitle">{goodlist1[0].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[0].price}</p>
                                </div>
                            </li>
                            {/* 2 */}
                            <li className="product-detail-card" onClick={this.Click2.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[1].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[1].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[1].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[1].price}</p>
                                </div>
                            </li>
                            {/* 3 */}
                            <li className="product-detail-card" onClick={this.Click3.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[2].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[2].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[2].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[2].price}</p>
                                </div>
                            </li>
                            {/* 4 */}
                            <li className="product-detail-card" onClick={this.Click4.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[3].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[3].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[3].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[3].price}</p>
                                </div>
                            </li>
                            {/* 5 */}
                            <li className="product-detail-card" onClick={this.Click5.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[4].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[4].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[4].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[4].price}</p>
                                </div>
                            </li>
                            {/* 6 */}
                            <li className="product-detail-card" onClick={this.Click6.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[5].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[5].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[5].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[5].price}</p>
                                </div>
                            </li>
                            {/* 7 */}
                            <li className="product-detail-card" onClick={this.Click7.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[6].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[6].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[6].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[6].price}</p>
                                </div>
                            </li>
                            {/* 8 */}
                            <li className="product-detail-card" onClick={this.Click8.bind(this)}>
                                <div className="product-detail-pic">
                                   <a href="javascript:;">
                                        <img src={goodlist1[7].pic} alt=""/>
                                    </a>
                                </div>
                                <div className="product-des-box">
                                   <a href="javascript:;" className="product-des-title">{goodlist1[7].name}</a>
                                   <a href="javascript:;" className="product-des-subtitle">{goodlist1[7].berif}</a>
                                    <p className="product-card-price">¥&nbsp;{goodlist1[7].price}</p>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

        )
    }
}

export default goodlis