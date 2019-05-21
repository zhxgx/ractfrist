import React,{Component} from 'react';
import '../assets/css/Cell.css';//引入样式
import {NavLink,Link} from 'react-router-dom'
import axios from 'axios';  //引入axios

class Cell extends Component{
    render(){
        //解出得到的数据
        let {cells,dataName} = this.props
        return(
            <div className='cell'>
                {/* <a href="article_m.html">
                    <h2>1.xx</h2>
                    <p>oooo</p>
                </a>
                没有路由激活状态 | 导航高亮 使用Link
                 */}

                 {
                     cells.map(item =>(
                        <Link 
                        // to = '/detail'
                        key = {item.id}
                        to={{
                            pathname:'/detail/' + item.id,
                            search:"?dataName=" + dataName
                        }}
                        >
                            <h2>{item.id}.{item.title}</h2>
                            <p>{item.des}</p>
                        </Link>
                     ))
                 }
                
            </div>
        )
    }

}

export default Cell;