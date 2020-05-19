import React from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from "antd";
import './redux.scss'
import store from './store/index'
import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './store/action-types'
import {changeInputAction, addItemAction, deleteItemAction, getListAction,getTodoList,getMyListAction} from './store/action-creators'
import ToDoListUI from "./reduxdemoui";
import axios from 'axios'

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
        store.subscribe(this.storeChange.bind(this));
        this.deleteItem = this.deleteItem.bind(this)
    }


    //9 axios异步请求与redux的结合
    componentDidMount() {
        //接口不可用，仅作为演示使用
        // const url = 'https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList';
        // axios.get('todolist.json')
        //     .then((res)=>{
        //         console.log(res.data)
        //         if (res.data.code===0){
        //             const data = res.data.data;
        //             const action = getListAction(data);
        //             store.dispatch(action)
        //             // console.log(data)
        //         }
        // })

        //10. redux-thunk中间件处理网络请求
        // action-creators中 中间件进行异步请求网络
        // const action = getTodoList();
        // store.dispatch(action)

        //11. redux-saga中间件处理网络请求
        const action = getMyListAction();
        store.dispatch(action)
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
        // const action = {type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }

    //6. 删除事件 带参传入action
    deleteItem (index){
        // const action = {type:DELETE_ITEM,index}
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() {
        // return
        // <div className={'container'}>
        //     <div>
        //         <Input placeholder={this.state.placeHolder}
        //                style={{width:'250px'}}
        //                onChange={this.handleInputChange}
        //                value={this.state.inputValue}/>
        //        <Button className={'button'} type={"primary"} onClick={this.handleAdd}>添加工作项</Button>
        //     </div>
        //     <div className={'list'}>
        //         <List bordered
        //         dataSource={this.state.list}
        //               renderItem={(item,index)=>(
        //                   <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>
        //               )}/>
        //     </div>
        // </div>

        //    8 封装UI代码
        return <ToDoListUI inputValue = {this.state.inputValue}
                           handleInputChange = {this.handleInputChange}
                           placeHolder = {this.state.placeholder}
                           list = {this.state.list}
                           handleAdd = {this.handleAdd}
                           deleteItem = {this.deleteItem}/>

    }
}