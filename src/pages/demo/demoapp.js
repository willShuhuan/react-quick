import React from 'react'
import {Link} from "react-router-dom";
import './demo.scss'
import 'antd/dist/antd.css'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-16
 */

export default function DemoApp() {

    return <div  className="container">
        <h1>欢迎来到React的世界</h1>
        {/*Link的使用*/}
        {/*如果是HashRouter  浏览器地址栏输入http://localhost:3000/#/login#/即可跳转到登录页 */}
        <Link to="/demologin">跳转登录</Link>
        <br/>
        <Link to="/demohome">跳转主页</Link>
        <br/>
    </div>
}


