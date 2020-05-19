import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './action-types'

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
        '中午1点半，起来下午工作'
    ]

}

export default (state=defaultState,action)=>{
    console.log(state,action)
    //Reducer里只能接收state，不能改变state
    // 4.处理action 返回新的state
    if (action.type===INPUTCHANGE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type===ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if (action.type===DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if (action.type===GET_LIST){
        console.log('网络请求')
        let newState = JSON.parse(JSON.stringify(state))
        const data = action.data
        newState.list = [...newState.list,...data]
        return newState
    }
    return state
}