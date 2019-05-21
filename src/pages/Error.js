import React,{Component} from 'react';

import '../assets/css/Error.css';//引入样式
class Error extends Component{
    render(){
        return(
            <div className='Error'>
                <h3>您访问的页面不存在</h3>
            </div>
        )
    }

}

export default Error;