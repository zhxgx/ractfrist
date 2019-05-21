import React,{Component} from 'react';//引入框架
import '../assets/css/Column.css';//引入样式
import Cell from '../components/Cell';
import axios from 'axios';  //引入axios

class Column extends Component{
    state={
        cells:[]
    };

    render(){
        return(
            <div className='Column'>
                 <Cell cells={this.state.cells} dataName="column"/>
                <h3>Column组件</h3>
            </div>
        )
    }
    async componentDidMount(){
        let res = await axios({url:'/mock/column',params:{_limit:5}});

        this.setState({cells:res.data.page_data});//双向绑定修改数据，

        console.log(res)
    }
}

export default Column;