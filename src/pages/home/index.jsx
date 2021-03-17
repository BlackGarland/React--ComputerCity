import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Headfoot from "../../components/headfoot";
import Carouselmap from "../../components/Carouselmap"
import Producttab from "../../components/producttab"
import Foot from "../../components/foot"

// const home1 = () => {

//     return (
//         <Headfoot>
//             <Carouselmap></Carouselmap>
//             <Producttab></Producttab>
//         </Headfoot>
//     )
// }

class home extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
            goodlist: null,
            name: ""
        }

    }
    componentDidMount() {
        fetch("/api/goodlist")
            .then(res => res.json())
            .then(data => {
                console.log(data, "xxxxxxxxxxxxxxxxxxx")
                console.log(data[0].pic, "xxxxxxxxxxxxxxxxxxx")
                //把数据赋值给 banners 然后渲染在页面上 
                this.setState({
                    goodlist: data
                })
            })
        this.setState({
            name: this.props.history.location.search
        })

    }

    render() {
        console.log(this.state.name, "name -----------  name")
        var name=this.state.name
        const { goodlist } = this.state;
        console.log(goodlist, "211111112333")
        if (goodlist === null) {
            return null;
        }

        return (
            <div>
                <Headfoot name={name} history={this.props.history}></Headfoot>
                    <Carouselmap goodlist={this.state.goodlist} history={this.props.history}></Carouselmap>
                    <Producttab history={this.props.history}></Producttab>
                <Foot></Foot>


            </div>
        )
    }



}

export default home