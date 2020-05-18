import React from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from "antd";
import './redux.scss'
import store from './reduxdemo/store/index'
import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './reduxdemo/store/action-types'
import {changeInputAction} from './reduxdemo/store/action-creators'

/**
 * @Description: redux基础应用
 * @author dongshuhuan
 * @date 2020-05-18
 */

export default class ToDoList extends React.Component{

    constructor(props){
        super(props)
        // console.log(store.getState())
        //1.通过store（reducer）给state赋值
        this.state = store.getState();
        //4.订阅 并改变组件状态 注意 store<=>组件 数据变化
        store.subscribe(this.storeChange.bind(this))
    }

    storeChange(){
        this.setState(store.getState())
    }

    //2. 处理输入事件
    handleInputChange = (event) =>{
        let val = event.target.value;
        console.log(val)
        // const action = {
        //     type:INPUTCHANGE,
        //     value:val
        // }
        // //3. 接收到了input值,传递给了reducer
        // store.dispatch(action)
        //7 action-creators封装action操作
        const action = changeInputAction(val)
        store.dispatch(action)
    }

    // 5.dispatch派发处理按钮事件
    handleAdd = () =>{
        const action = {type:ADD_ITEM}
        store.dispatch(action)
    }

    //6. 删除事件 带参传入action
    deleteItem (index){
        const action = {type:DELETE_ITEM,index}
        store.dispatch(action)
    }

    render() {
        return <div className={'container'}>
            <div>
                <Input placeholder={this.state.placeHolder}
                       style={{width:'250px'}}
                       onChange={this.handleInputChange}
                       value={this.state.inputValue}/>
               <Button className={'button'} type={"primary"} onClick={this.handleAdd}>添加工作项</Button>
            </div>
            <div className={'list'}>
                <List bordered
                dataSource={this.state.list}
                      renderItem={(item,index)=>(
                          <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>
                      )}/>
            </div>
        </div>
    }
}