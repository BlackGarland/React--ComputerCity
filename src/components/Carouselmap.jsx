// 轮播图
// import React , { Component }  from 'react'
// import { render } from 'react-dom'
// import sampleUserData from "../utils/sample-data"
// import { User } from '../interfaces'
// import Link from 'next/link'
// import { Carousel } from 'antd';
// import goodlist from "../utils/goodlist"
// import '../css/tab.less'

import { fetchget } from '../../src/utils/zgfetch'
import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../css/tab.css'





// export default ListDetail


 
class ListDetail extends Component{
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            goodlist:null,
        }
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    componentDidMount() {
    fetch("/api/goodlist")
    .then(res => res.json())
    .then(data => {
        console.log(data,"xxxxxxxxxxxxxxxxxxx")
        console.log(data[0].pic,"xxxxxxxxxxxxxxxxxxx")
        //把数据赋值给 banners 然后渲染在页面上 
        this.setState({
            goodlist:data
        })
    })

    }
    

    handlePrev () {
        this.div.prev();
      }
    
      handleNext (){
        this.div.next();
      }
    
    
    render() {
        const { goodlist } = this.state;
        console.log(goodlist,"211111112333")
        if (goodlist === null) {
            return null;
          }
            
        return (
           <div style={{position:'relative'}}>
            <div className="Carouselmapbox">
               <div className="left" style={{width:'52px'}} onClick={this.handlePrev}></div>
                <div className="right" style={{width:'52px'}}  onClick={this.handleNext}></div>
                {/* <div style={{height:'100px'}}></div> */}
            <Carousel autoplay effect="fade" ref={dom => { this.div = dom; }}>  
         
         <div>
            <h3><img src={this.props.goodlist[0].pic}  alt="logo" /></h3>
        </div>
        <div>
            <h3><img src={this.props.goodlist[1].pic}  alt="logo" /></h3>
        </div>
        <div>
            <h3><img src={this.props.goodlist[2].pic}  alt="logo" /></h3>
        </div>
        <div>
            <h3><img src={this.props.goodlist[3].pic}  alt="logo" /></h3>
        </div>
        <div>
            <h3><img src={this.props.goodlist[4].pic}  alt="logo" /></h3>
        </div>
           
         </Carousel>
          
        </div>
        </div>
        )
        
    }
}
export default ListDetail;