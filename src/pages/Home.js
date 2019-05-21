import React,{Component} from 'react';
import '../assets/css/Home.css';//引入样式
import axios from 'axios';  //引入axios

import Swiper from '../components/Swiper'
import Cell from '../components/Cell'

class Home extends Component{
    state={
        cells:[],
        swiper:[]
    };
    render(){
        return(
            <div className="home">
                 {/* <h3>wudewuiyrewyrewhfuewihriuewrhy上课的幻觉额   雕塑丢石头阿权 额我和无法额外
                    当时才大四房吗你可以撒野都市图读书也是人们在西方你的可见亚瑟和vuudfrewu4iyxz jshdiut 
                    uwqydfjw诶还有对顺风耳与独一份热u如有  如有丢失布局图都是昆明生日歌结合
                </h3> */}
                <Swiper swiper={this.state.swiper}/>
                <Cell  cells={this.state.cells} dataName="home"/>
            </div>
        )
    }
    /**
     * async 异步操作
     * await 等到执行完毕才执行
     */
    async componentDidMount(){
        let resHome = await axios({url:'/mock/home',params:{_limit:10}});
        this.setState({cells:resHome.data.page_data});//双向绑定修改数据，

        // console.log(res)
        let resSwiper = await axios({url:'/mock/banner',params:{_limit:6}});//limit
        this.setState({swiper:resSwiper.data.page_data});//双向绑定修改数据，
    }
}

export default Home;