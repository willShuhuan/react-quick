// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import React from 'react'
import App from "./pages/simplerouter/app";
import Login from "./pages/simplerouter/login";
import Home from "./pages/simplerouter/home";
import Detail from "./pages/simplerouter/detail";
import NoMatch from "./pages/simplerouter/404";
import DemoApp from "./pages/demo/demoapp";
import DemoLogin from "./pages/demo/login";
import DemoHome from "./pages/demo/home";

/**
 * @Description: 路由的应用
 * @author dongshuhuan
 * @date 2020-05-16
 */
export default function IRouter(){
    return  <Router>
            {/*普通方式，根据path匹配,但是App的内容会出现在Login上方*/}
            {/*<Route path = "/" component={App}></Route>*/}
            {/*<Route path = "/login" component={Login}></Route>*/}
            {/*<Route path = "/home" component={Home}></Route>*/}

        {/*如果用swithc，浏览器输入/home也只会加载App页，因为/home先匹配了/*/}
        {/*加上 exact 可以精准匹配*/}
        {/*如果导入的是HashRouter，会自动加上# 如 http://localhost:3000/login#/*/}
        <Switch>
            <Route exact path = "/" component={App}/>
            <Route path = "/login" component={Login}/>
            <Route path = "/home" component={Home}/>

            {/*动态路由 浏览器输入http://localhost:3000/#/detail/123 即可看到效果*/}
            <Route path = "/detail/:goodsId" component={Detail}/>
            {/*重定向*/}
            <Route path = "/detail/:goodsId" component={Detail}>
                <Redirect to={'/login'}/>
            </Route>


        {/*  ---------------------------------综合应用案例----------------------------------  */}

            <Route path = "/demo" component={DemoApp}/>
            <Route path = "/demologin" component={DemoLogin}/>
            <Route path = "/demohome" component={DemoHome}/>


            {/*404* 如果都没匹配到  输入http://localhost:3000/#/goods等不存在的路径即可看到效果 */}
            <Route path = "*" component={NoMatch}/>
        </Switch>

    </Router>
}