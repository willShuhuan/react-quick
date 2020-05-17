import React from 'react';
import '../App.scss';

/**
 * Demo
 */
class App extends React.Component{

    state = {
        val:'',
        list:[]
    }

    handleChange=(event)=>{
        let val = event.target.value;
        this.setState({
            val
        })
    }


    handleAdd=()=>{
        let {val,list} = this.state;
        list.push(val);
        this.setState({
            list
        })
    }

    render() {
        const {val,list} = this.state;
        return <div>
            <p>欢迎学习react</p>
            <h1>Hello World</h1>
            <input type="text" value ={val} onChange={this.handleChange}/>
            <button onClick={this.handleAdd}>添加</button>
            <ul>
                {list.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    }
}


export default App;
