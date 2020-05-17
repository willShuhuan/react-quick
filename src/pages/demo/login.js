import React ,{useState}from 'react'
import {Form,Input,Button} from "antd";
import {useHistory} from "react-router-dom";
import './demo.scss'
import axios from 'axios'

/**
 * @Description:
 * @author dongshuhuan
 * @date 2020-05-16
 */
const FormItem = Form.Item;
export default function DemoLogin() {

    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
    const history = useHistory();

    return <Form className={"login-form"}>
        <FormItem>
            <Input placeholder={"请输入用户名"} maxLength={5} onChange={(event)=>{
                setName(event.target.value)
            }}/>
        </FormItem>
        <FormItem>
            <Input placeholder={"请输入密码"} maxLength={5} type="password" onChange={(event)=>{
                setPwd(event.target.value)
            }}/>
        </FormItem>
        <label>用户名：{name}    密码：{pwd}</label>
        <FormItem>
            <Button type={"primary"} onClick={()=>{
                login(name,pwd).then((response)=>{
                    let res = response.data;
                    if (res.code===0){
                        history.push('/demohome')
                    }
                })
            }}>登录</Button>
        </FormItem>


    </Form>
}

function login(name,pwd) {
    return axios.get('login.json',{
        params:{
            name,pwd
        }
    })
}