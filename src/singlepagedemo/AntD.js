import React from 'react';
import {Input,Button,Select} from "antd";
import 'antd/dist/antd.css'

const Search = Input.Search;
const Option = Select.Option;


/**
 * AntD 演示
 */
class AntD extends React.Component{

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

    handleSearch=(value)=>{
        let {list} = this.state;
        list.push(value);
        this.setState({
            list
        })
    }

    render() {
        const {val,list} = this.state;
        const options =[];
        //width 是一个object对象
        const width = {width:300};

        return <div>
            <p>欢迎学习react</p>
            <h1>Hello World</h1>
            <Input type="text" value ={val} style={width} onChange={this.handleChange}/>
            <Button type={"primary"} onClick={this.handleAdd}>添加</Button>
            <ul>
                {list.map((item,index)=>{
                    options.push(<Option key={index}>{item}</Option>)
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <div>
                <Search
                    style={width}
                    enterButton={"搜索"}
                    onSearch={this.handleSearch}/>
                    <br/>
                <Select style={{width:200}} >
                    {options}
                </Select>
            </div>
        </div>
    }
}

export default AntD;
