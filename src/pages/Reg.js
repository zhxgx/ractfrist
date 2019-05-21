import React,{Component} from 'react';
import '../assets/css/Reg.css';//引入样式
import {NavLink,Link} from 'react-router-dom'

class Reg extends Component{
  goback= ()=>{
    this.props.history.go(-1)
  }
    render(){
        return(
            <div className="content">
            <p className="fhbtn"><a href="javascript:;" onClick={this.goback}></a></p>
            <h1></h1>
            <div className="login-box">
              <p className="lsolid"></p>
              <div className="login">
                {/* <a href="login_m.html">登录</a> */}
                <Link to='/login'>登录</Link>
                <span></span>
                {/* <a href="reg_m.html">注册</a> */}
                <Link to='/reg'>注册</Link>
              </div>
              <p className="rsolid"></p>
            </div>
            <ul>
              <li className="lifirst">
                <input type="text" defaultValue=""/>
                <span>帐号</span>
              </li>
              <li>
                <input type="text" defaultValue=""/>
                <span>密码</span>
              </li>
            </ul>
            <div className="footbox">
              <input type="button" value="注 册" className="login-btn"/>
              <a href="javascript:;" className="tishi">忘记密码？</a>
            </div>
          </div>
        )
    }

}

export default Reg;