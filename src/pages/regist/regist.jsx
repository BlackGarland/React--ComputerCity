import React, { Component, ReactNode } from 'react'
import "../../css/headfoot.scss"
import "../../css/regist.scss"

class regist extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            phone:"none",
            poblome:"",
            password:"",
            password1:"",
            name:"",
            login:"",
            loginname:""
        }
       

    }

    changeData=(e)=>{//input输入什么，就监听这个方法，然后再修改state，然后返回到视图
        
           const  phone=e.target.value
           if(phone.length<10||phone.length>15){
               console.log("小于10")
               this.setState({
                   phone:"block",
                    poblome:"电话长度",
                    

               })
           }else if(isNaN(phone)){
            this.setState({
                phone:"block",
                 poblome:"电话字符类型"

            })
           }else{
            this.setState({
                phone:"none",
                 name:phone

            })
        }
        
    }
    changeData2=(e)=>{
        const password=e.target.value
        if(password.length8||password.length>20){
            this.setState({
                phone:"block",
                 poblome:"密码长度"

            })
        }else if(isNaN(password)){
            this.setState({
                phone:"block",
                 poblome:"密码类型"

            })
        }
        else{
            this.setState({
                phone:"none",
                password:password
                 

            })
        }
    }
    changeData3=(e)=>{
        const password1=e.target.value
        const password=this.state.password
        if(password1!=password){
            this.setState({
                phone:"block",
                poblome:"密码不一致，"
                 

            })
        }else{
            this.setState({
                phone:"none",
                // poblome:"密码不一致，"
                 

            })
        }
    }
    handleClick(){
        var name=this.state.name
        var password=this.state.password
        fetch('/api/regist', {
            method: 'POST',
            body: new URLSearchParams([["name", name], ["password", password]])//.toString()  这里是请求对象
        })
        .then(res=>res.json()
        .then(data=>{console.log(data)
         this.setState({
                    login:"true",
                    // loginname:res
                })
        
         if(this.state.login=="true"){
                console.log("tiaozhuan")
                this.props.history.push('/login');
            }
        })
        )
    }

    render() {
        return (
            <div>
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
                    {/* </Affix> */}

                </div>
                <div className="regist">
                    <div className="regist_title">注册联想会员</div>
                    <div className="regist_main">
                        <div className="regist_info_person">
                            <div className="regist_item">
                                <input type="text" className="phone_person" placeholder="输入手机号" onChange={(e)=>this.changeData(e)} />
                                
                                <i className="icon-clear"></i>
                            </div>
                            <div id="slider_person" className="slider"></div>

                            <div className="regist_item">
                                <input type="password" className="pwd" placeholder="密码由8-20位字母或数字组合" onChange={(e)=>this.changeData2(e)} />
                                <i className="icon-clear"></i>
                            </div>
                            <div className="regist_item">
                                <input type="password" className="repwd" placeholder="再次输入密码" onChange={(e)=>this.changeData3(e)}/>
                                <i className="icon-clear"></i>
                            </div>
                            
                              <a href="#/regist" className="regist_button" onClick={this.handleClick.bind(this)}>立即注册</a>
                              <div>
                              <span style={{display:this.state.phone,color:"#e22319",fontSize:"12px"}}>{this.state.poblome}不符合要求</span>
                              </div>
                              <p className="agreementInfo">注册账号即表示您同意并愿意遵守联想 使用条款 和 隐私权政策</p>
                              <p className="go_other">
                                  <span className="go_login">已有账号 <a href="#/login" className="go-login">点此登录</a></span>
                                  </p>
                        </div>
                       
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default regist