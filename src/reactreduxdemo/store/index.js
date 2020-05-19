import {createStore} from 'redux'
import reducer from './reducer'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-19
 */

const store = createStore(reducer)

export default store