import React,{Component} from 'react';

import style from '../assets/css/Footer.module.css';//进入模块变量
import {NavLink} from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
                            // 有中划线的需要用[]进行变量引入
            <div className={style["foot-btn"]}>
                {/* <h3>hfuhwfuah</h3> */}
                <ul>
                    <li className={style.home}>
                        {/* <a href="index_m.html"></a> */}
                        <NavLink to='/home' ></NavLink>
                    </li>
                    <li className={style.write}>
                        {/* <a href="javascript:;"></a> */}
                        <NavLink to='/shopcart' ></NavLink>
                    </li>
                    <li className={style.my}>
                        {/* <a href="mydoc_m.html"></a> */}
                        <NavLink to='/user' ></NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Footer;