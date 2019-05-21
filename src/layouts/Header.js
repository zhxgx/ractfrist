import React,{Component} from 'react';

import style from '../assets/css/Header.module.css';
import {NavLink} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className={style.nav}>
                <ul>
                <li >
                    {/* <a href="index_m.html">首页</a> style.active
                    NavLink只能替代a标签 ，跳转使用to，样式activeClassName链接样式点击时显示为，未点击时不显示
                    声明式跳转
                */}
                    <NavLink to='/home' activeClassName={style.active}>首页</NavLink>
                </li>
                <li>
                    {/* <a href="fllow_m.html">关注</a> */}
                <NavLink to='/follow' activeClassName={style.active}>关注</NavLink>
                </li>
                <li>
                    {/* <a href="column_m.html">栏目</a> */}
                    <NavLink to='/column' activeClassName={style.active}>栏目</NavLink>
                </li>
                </ul>
            </div>
        )
    }

}

export default Header;