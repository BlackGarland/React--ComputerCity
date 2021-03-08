import React from "react";
import { HashRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home/index"
import Goodshop from "../pages/goodshop/goodshop"
import Login from "../pages/login/login"
import Regist from "../pages/regist/regist"
import Success from "../pages/news/success1"
import Success2 from "../pages/news/success2"
import Success3 from "../pages/news/success3"
import Gooddetail from "../pages/gooddetail/gooddetail"
import Shoppingcar from "../pages/shoppingcar/shoppingcar"
import Order from "../pages/order/order"
import Pay from "../pages/pay/pay"
import Marketnews from "../pages/news/marketnews"
import Marketnews2 from "../pages/news/marketnews2"
import Marketnews3 from "../pages/news/marketnews3"
import News1 from "../pages/news/news1"
import News2 from "../pages/news/news2"
import News3 from "../pages/news/news3"
import News4 from "../pages/news/news4"
import News5 from "../pages/news/news5"
import News6 from "../pages/news/news6"

function RouterMap() {
  return (
    <HashRouter>
    <Switch>
 
      <Route path='/' exact component={Home}></Route>
      <Route path='/goodshop' exact component={Goodshop}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/regist' exact component={Regist}></Route>
      <Route path='/success1' exact component={Success}></Route>
      <Route path='/success2' exact component={Success2}></Route>
      <Route path='/success3' exact component={Success3}></Route>
      <Route path='/gooddetail' exact component={Gooddetail}></Route>
      <Route path='/shoppingcar' exact component={Shoppingcar}></Route>
      <Route path='/order' exact component={Order}></Route>
      <Route path='/pay' exact component={Pay}></Route>
      <Route path='/marketnews' exact component={Marketnews}></Route>
      <Route path='/marketnews2' exact component={Marketnews2}></Route>
      <Route path='/marketnews3' exact component={Marketnews3}></Route>
      <Route path='/news1' exact component={News1}></Route>
      <Route path='/news2' exact component={News2}></Route>
      <Route path='/news3' exact component={News3}></Route>
      <Route path='/news4' exact component={News4}></Route>
      <Route path='/news5' exact component={News5}></Route>
      <Route path='/news6' exact component={News6}></Route>


      <Redirect to="/" ></Redirect>
    </Switch>
    </HashRouter>
  )
}

export default RouterMap;