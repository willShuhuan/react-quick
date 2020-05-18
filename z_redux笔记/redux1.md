### redux工作流
![]()
![]()
![]()

### 安装
- redux安装：npm install redux --save
- 调试工具Redux DevTools安装：chrome应用商店下载

### 1. 基础入门
1. 在src下新建reduxdemo.js
2. 在src下新建reduxdemo/store文件夹存放数据存储代码
3. reduxdemo/store下先编写index.js
4. reduxdemo/store下新建reducer.js存放数据
 
 **src/reduxdemo.js**
 ````
 import React from 'react'
 import 'antd/dist/antd.css'
 import {Input,Button,List} from "antd";
 import './redux.scss'
 import store from './reduxdemo/store/index'
 
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
         const action = {
             type:'inputChange',
             value:val
         }
         //3. 接收到了input值,传递给了reducer
         store.dispatch(action)
     }
 
     // 5.dispatch处理按钮事件
     handleAdd = () =>{
         const action = {type:'addItem'}
         store.dispatch(action)
     }
 
     //6. 删除事件 带参传入action
     deleteItem (index){
         const action = {type:'deleteItem',index}
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
 ````
 **reduxdemo/store/index.js**
 ````
 /**
  * @Description: store仓库创建
  * @author dongshuhuan
  * @date 2020-05-18
  */
 
 import {createStore} from 'redux'
 import reducer from './reducer'
 
 //reducer 注入
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  chrome配置redux插件拓展
 const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 export default store
 ````

**reduxdemo/store/reducer.js**
````
/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-18
 */

const defaultState = {
    inputValue:'',
    placeHolder:'输入内容',
    list : [
        '早九点开晨会，分配任务',
        '中午12点吃饭',
        '中午12点半，睡觉',
        '中午1点半，起床下午工作'
    ]

}
export default (state=defaultState,action)=>{
    console.log(state,action)
    //Reducer里只能接收state，不能改变state
    // 4.处理action 返回新的state
    if (action.type==='inputChange') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type==='addItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if (action.type==='deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}
````
#### action_types 将action类型进行封装
- reduxdemo/store下新建action-types.js定义操作
- 在reducer.js和reduxdemo.js中使用action-types中的actions
- 这样做的好处时有效预防拼写错误
**action-types.js**
````
export const INPUTCHANGE = 'inputChange'
export const ADD_ITEM = 'addItem'
export const DELETE_ITEM = 'deleteItem'
````
**reducer.js中修改**
````
import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './action-types'

...

if (action.type==='inputChange') -> (action.type===INPUTCHANGE)
````
**reduxdemo.js中修改**
````
import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './action-types'

...

handleAdd = () =>{
        const action = {type:'addItem'}
        store.dispatch(action)
    }
    
    //修改为如下代码↓ ↓ ↓
    
handleAdd = () =>{
        const action = {type:ADD_ITEM}
        store.dispatch(action)
    }
````

#### actionCreator 将reduxdemo.js中的action操作进行封装  
- reduxdemo/store下新建action-creators.js封装操作
- reduxdemo.js中使用action-creators中封装的方法

**action-creators.js**
````
import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './action-types'

export const changeInputAction = (val) =>({
    type:INPUTCHANGE,
    value:val
})
````
**eduxdemo.js中修改**
````
import {changeInputAction} from './reduxdemo/store/action-creators'

...

    //2. 处理输入事件
    handleInputChange = (event) =>{
        let val = event.target.value;
         const action = {
             type:INPUTCHANGE,
             value:val
         }
        store.dispatch(action)
        
        //修改为如下代码↓ ↓ ↓
        
        //7 action-creators封装action操作
        const action = changeInputAction(val)
        store.dispatch(action)
    }
````