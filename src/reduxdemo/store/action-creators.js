/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-18
 */

import {INPUTCHANGE,ADD_ITEM,DELETE_ITEM} from './action-types'

export const changeInputAction = (val) =>({
    type:INPUTCHANGE,
    value:val
})