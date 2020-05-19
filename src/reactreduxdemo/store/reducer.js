/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-19
 */

const defalutState = {
    inputValue:'',
    list : []
};

export default (state = defalutState,action) =>{
    if (action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState
    }
    if (action.type==='addItem'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue=''
        return newState
    }
    if (action.type==='deleteItem'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}