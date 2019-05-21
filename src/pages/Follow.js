import React,{Component} from 'react';

import Cell from '../components/Cell';

import '../assets/css/Follow.css';//引入样式
import axios from 'axios';  //引入axios

class Follow extends Component{
    state={
        cells:[]
    };
    render(){
        return(
            <div className="Follow">
                <Cell cells={this.state.cells} dataName="follow"/>
            </div>
        )
    }


    async componentDidMount(){
        let res = await axios({url:'/mock/follow',params:{_limit:8}});

        this.setState({cells:res.data.page_data});//双向绑定修改数据，

        console.log(res)
    }

}

export default Follow;