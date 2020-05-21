import React, { Component } from 'react';
import './reactredux.scss'
import {connect} from "react-redux";

/**
 * @Description: react-redux学习
 * @author dongshuhuan
 * @date 2020-05-19
 */


// class TodoList2 extends Component {
//
//     constructor(props){
//         super(props)
//     }
//
//     render() {
//
//         // return ( <div className={'container'}>
//         //     <div>
//         //         <input value={this.props.inputValue} onChange={this.props.inputChange} />
//         //         <button onClick={this.props.addItem}>提交</button>
//         //     </div>
//         //     <ul>
//         //         {
//         //             this.props.list.map((item,index)=>{return <li key={index} onClick={()=>this.props.deleteItem(index)}>{item}</li>})
//         //         }
//         //     </ul>
//         // </div> );
//
//         //this.props 解构优化
//         let {inputValue ,inputChange,addItem,deleteItem,list} = this.props;
//         return ( <div className={'container'}>
//             <div>
//                 <input value={inputValue} onChange={inputChange} />
//                 <button onClick={addItem}>提交</button>
//             </div>
//             <ul>
//                 {
//                     list.map((item,index)=>{return <li key={index} onClick={()=>deleteItem(index)}>{item}</li>})
//                 }
//             </ul>
//         </div> );
//     }
// }

//改为无状态组件，提高性能
const TodoList2 =(props)=>{
    let {inputValue ,inputChange,addItem,deleteItem,list} = props;
    return ( <div className={'container'}>
        <div>
            <input value={inputValue} onChange={inputChange} />
            <button onClick={addItem}>提交</button>
        </div>
        <ul>
            {
                list.map((item,index)=>{return <li key={index} onClick={()=>deleteItem(index)}>{item}</li>})
            }
        </ul>
    </div> );
}

//连接器映射关系 组件状态映射
const stateToProps = (state) =>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

//派发函数
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'changeInput',
                value:e.target.value
            };
            dispatch(action)
        },
        addItem(){
            let action = {type:'addItem'};
            dispatch(action)
        },
        deleteItem(index){
            let action = {
                type:'deleteItem',
                value:index
            };
            dispatch(action)
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList2);