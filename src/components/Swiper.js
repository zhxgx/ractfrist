import React,{Component} from 'react';
import '../assets/css/Swiper.css'

import $ from 'jquery';
import Swipe from '../library/swipe';



class Swiper extends Component{
    render(){
        let {swiper} = this.props;
        return(
            <div className="banner">
                <ul className="clearfix">

                    {
                        swiper.map(item =>(
                            //  {/* public省略直接访问，不需要路径访问 */}
                    <li key={item.id}>
                        <img src={item.banner} alt=""/>
                        <div className="text-box">
                        <h2>{item.title}</h2>
                        <p>{item.sub_title}</p>
                        </div>
                    </li>
                        ))
                    }
                   
                
                </ul>

            </div>
        )
    }

    componentDidUpdate(){  //componentDidMount：代表生命周期渲染完毕   componentDidUpdate：代表生命周期更新完毕 
        new Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropation:true,
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        })
    }
  
}

export default Swiper;