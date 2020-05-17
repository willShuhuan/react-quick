import React from 'react'
import {Link,useParams,useHistory} from "react-router-dom";
import './app.scss'
import {Button} from 'antd'
// import 'antd/dist/antd.css'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-16
 */

export default function Detail() {
    //useParams 使用 查看图5所示
    const params = useParams();
    //useHistory
    const history = useHistory();
    return <div  className="container">
        {/*useParams */}
        {/*<h1>this is detail</h1>*/}
        {/*<p>当前的参数json数据为：{JSON.stringify(params)}</p>*/}
        {/*<p>当前的参数值为：{params.goodsId}</p>*/}

        {/*useHistory*/}
        <h1>this is detail</h1>
        <p>当前的参数值为：{params.goodsId}</p>
        <Button onClick={()=>{
            history.push('/')
        }}>跳转</Button>
    </div>
}


//有状态组件
// export default class Detail extends React.Component{
//
//     jumpHome=()=>{
//         this.props.history.push('/')
//     }
//
//     render() {
//         return <div className="container">
//             <h1>this is detail</h1>
//             {/*React Hooks使用 图4所示 */}
//             <p>当前的参数值为：{this.props.match.params.goodsId}</p>
//             <Button onClick={this.jumpHome}>跳转</Button>
//         </div>
//     }
// }