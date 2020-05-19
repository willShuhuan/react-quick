import React from "react";
import {Button, Input, List} from "antd";


/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-19
 */

// export default class ToDoListUI extends React.Component{
//
//     render() {
//         return (
//             <div className={'container'}>
//                 <div>
//                     <Input placeholder={this.props.placeHolder}
//                            style={{width:'250px'}}
//                            onChange={this.props.handleInputChange}
//                            value={this.props.inputValue}/>
//                     <Button className={'button'} type={"primary"} onClick={this.props.handleAdd}>添加工作项</Button>
//                 </div>
//                 <div className={'list'}>
//                     <List bordered
//                           dataSource={this.props.list}
//                           renderItem={(item,index)=>(
//                               <List.Item onClick={()=>this.props.deleteItem(index)}>{item}</List.Item>
//                           )}/>
//                 </div>
//             </div>
//         )
//     }
//
// }

//无状态组件
export default function TodoListUI(props) {
    return <div className={'container'}>
        <div>
            <Input placeholder={props.placeHolder}
                   style={{width:'250px'}}
                   onChange={props.handleInputChange}
                   value={props.inputValue}/>
            <Button className={'button'} type={"primary"} onClick={props.handleAdd}>添加工作项</Button>
        </div>
        <div className={'list'}>
            <List bordered
                  dataSource={props.list}
                  renderItem={(item,index)=>(
                      <List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>
                  )}/>
        </div>
    </div>
}