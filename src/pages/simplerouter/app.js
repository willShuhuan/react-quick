import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import './app.scss'
import {Button} from 'antd'
import 'antd/dist/antd.css'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-16
 */

export default function App() {
    //useState
    const [count,setCount] = useState(10);
    //useEffect 第二个参数传递空数组 log只会打印一次
    //可以在serCount修改初始值
    useEffect(()=>{
        console.log("执行了useEffect");
        setCount(100);
    },[])

    return <div  class="container">
        <h1>欢迎来到React的世界</h1>
        {/*Link的使用*/}
        {/*如果是HashRouter  浏览器地址栏输入http://localhost:3000/#/login#/即可跳转到登录页 */}
        <Link to="/login">点击跳转到登录页</Link>
        <br/>
        <Link to="/home">点击跳转到主页面</Link>
        <br/>
        {/*useState*/}
        <p>
            当前count次数:{count}
        </p>
        <Button onClick={()=>{setCount(count+1)}}>更新次数</Button>
    </div>
}



//有状态组件
// export default class App extends React.Component{
//
//     handleJump=()=>{
//         this.props.history.push("/login");
//     }
//
//     render() {
//         return <div className="container">
//             <h1>欢迎来到React的世界</h1>
//             {/*Link的使用*/}
//             {/*如果是HashRouter  浏览器地址栏输入http://localhost:3000/#/login#/即可跳转到登录页 */}
//             <Link to="/login">点击跳转到登录页</Link>
//             <br/>
//             <Link to="/home">点击跳转到主页面</Link>
//             <br/>
//             <Button onClick={this.handleJump}>登录跳转登录</Button>
//         </div>
//     }
// }