import React,{Component} from 'react';
import '../assets/css/Login.css';//引入样式
import {NavLink,Link} from 'react-router-dom'

import axios from 'axios'

class Login extends Component{
    state = {
        username:'',
        password:''
    }

    changeIpt = (ev)=>{//改变事件
        this.setState({
            [ev.targer.name]:ev.target.value
        })
    }

    submit = async ()=>{//提交事件
       let res= await axios({
           utl:'/mock/login',
           params:{
               username:this.state.username,
               password:this.state.password
            }
        })//提交携带的数据到指定地址

        console.log(res)
    }
    render(){
        return(
            <div className="content">
            <p className="hbtn"><a href="javascript:window.history.go(-1);"></a></p>
                {/* <p className="hbtn"><a href="mydoc_m.html"></a></p> */}
                <h1></h1>
                <div className="login-box">
                <p className="lsolid"></p>
                <div className="login">
                    {/* <a href="login_m.html">登录</a> */}
                    <Link to='/reg'>登录</Link>
                    <span></span>
                    {/* <a href="reg_m.html">注册</a> */}
                    <Link to='/reg'>注册</Link>
                </div>
                <p className="rsolid"></p>
                </div>
                <ul>
                <li className="lifirst">
                    <input type="text" name='username' value={this.state.username} onChange={this.changeIpt}/>
                    <span>帐号</span>
                </li>
                <li>
                    <input type="text" name='password' value={this.state.password} onChange={this.changeIpt}/>
                    <span>密码</span>
                </li>
                </ul>
                <div className="footbox">
                <input type="button" value="登 录" className="login-btn" onClick={this.submit}/>
                <a href="javascript:;" className="tishi">忘记密码？</a>
                </div>
            </div>
        )
    }

}

export default Login;