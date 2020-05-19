import React  from 'react';
import store from "./store";
import TodoList2 from "./reactreduxdemo";
import {Provider} from 'react-redux'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-19
 */

// export const ProviderTodoList2 = ()=>(
//     <Provider store={store}>
//         <TodoList2 />
//     </Provider>
// )

//等价于 ↓ ↓ ↓

export function ProviderTodoList2() {
    return (
        <Provider store={store}>
            <TodoList2/>
        </Provider>)
}