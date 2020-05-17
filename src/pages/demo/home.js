import React,{useEffect,useState} from 'react'
import { Table } from 'antd';
import {Link} from 'react-router-dom'
import './home.scss'
import axios from 'axios'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-16
 */
export default function DemoHome() {
    const [data,setData] = useState([]);
    const [index,setIndex] = useState(0);
    const columns = [
        {
            title:'地区',
            dataIndex:'area'
        },{
            title:'Java',
            dataIndex:'java'
        },{
            title:'Php',
            dataIndex:'php'
        },{
            title:'Node',
            dataIndex:'node'
        },{
            title:'JS',
            dataIndex:'js'
        },{
            title:'Python',
            dataIndex:'python'
        }
    ];

    useEffect(()=>{
        axios.get("/data.json").then((response)=>{
            const res = response.data;
            if (res.code===0){
                setData(res.data)
            }
        })
    },[])

    return <div className={"home"}>
        <h1>语言大数据报告</h1>
            <div className={"wrap"}>
            <p>数据纯属虚构</p>
            <div className={"nav"}>
                <a className={index==0 ?"checked":""} onClick={()=>setIndex(0)}>语言动态</a>
                <a className={index==1 ?"checked":""} onClick={()=>setIndex(1)}>语言地图</a>
                <a className={index==2 ?"checked":""} onClick={()=>setIndex(2)}>语言热搜</a>
                <a className={index==3 ?"checked":""} onClick={()=>setIndex(3)}>语言播报</a>
            </div>
            <Table bordered
                   pagination={false}
                   columns={columns}
                   dataSource={data} />
            <Link to={'/demo'} className="nav-link">回到首页</Link>

        </div>

    </div>
}

//class 有状态组件实现页面交互功能
// export default class DemoHome extends React.Component{
//
//     //初始化表格 数据源
//     state={
//         data:[],
//         index:0,
//         columns : [{
//             title:'地区',
//             dataIndex:'area'
//         },{
//             title:'Java',
//             dataIndex:'java'
//         },{
//             title:'Php',
//             dataIndex:'php'
//         },{
//             title:'Node',
//             dataIndex:'node'
//         },{
//             title:'JS',
//             dataIndex:'js'
//         },{
//             title:'Python',
//             dataIndex:'python'
//         }],
//
//     }
//
//     componentDidMount() {
//         axios.get("/data.json").then((response)=>{
//             const res = response.data;
//             if (res.code===0){
//                 this.setState({
//                     data:res.data
//                 })
//             }
//         })
//     }
//
//     handleSwitch =(index)=>{
//         this.setState({
//             index
//         })
//     }
//
//     render() {
//         const {index,columns,data} = this.state;
//         return <div className={"home"}>
//             <h1>语言大数据报告</h1>
//             <div className={"wrap"}>
//                 <p>数据纯属虚构</p>
//                 <div className={"nav"}>
//                     <a className={index==0 ?"checked":""} onClick={()=>this.handleSwitch(0)}>语言动态</a>
//                     <a className={index==1 ?"checked":""} onClick={()=>this.handleSwitch(1)}>语言地图</a>
//                     <a className={index==2 ?"checked":""} onClick={()=>this.handleSwitch(2)}>语言热搜</a>
//                     <a className={index==3 ?"checked":""} onClick={()=>this.handleSwitch(3)}>语言播报</a>
//                 </div>
//                 <Table bordered
//                        pagination={false}
//                        columns={columns}
//                        dataSource={data} />
//                 <Link to={'/demo'} className="nav-link">回到首页</Link>
//
//             </div>
//
//         </div>
//     }
//
// }
