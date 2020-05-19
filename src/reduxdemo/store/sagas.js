import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './action-types'
import axios from "axios";
import {getListAction} from "./action-creators";

/**
 * @Description: redux saga中间件使用
 * @author dongshuhuan
 * @date 2020-05-19
 */

//generator函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList() {
    const res = yield axios.get('todolist.json');
    const action = getListAction(res.data.data)
    yield put(action)

}

export default mySaga