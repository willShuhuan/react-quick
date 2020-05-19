/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-18
 */

import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from './action-types'
import axios from 'axios'
import store from "./index";

export const changeInputAction = (val) =>({
    type:INPUTCHANGE,
    value:val
});

export const addItemAction = () =>({
    type:ADD_ITEM
});

export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
});

export const getListAction = (data) =>({
    type:GET_LIST,
    data
});

// react-thunk 中间件方式请求数据
export const getTodoList = () =>{
  return(dispacth)=>{
      axios.get('todolist.json')
          .then((res)=>{
              console.log(res.data)
              if (res.data.code===0){
                  const data = res.data.data;
                  const action = getListAction(data);
                  dispacth(action)
              }

          })
  }
};

//redux-saga 中间件方式请求数据
export const getMyListAction =()=>({
    type:GET_MY_LIST
});