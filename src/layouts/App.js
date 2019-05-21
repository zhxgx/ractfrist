import React,{Component} from 'react';
//引入样式
import '../assets/css/App.css'

//引入组件
import Header from './Header'
import Footer from './Footer'

import Home from '../pages/Home'
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";

import AuthRoute from "../guard/Auth";//引用路由守卫，戒权目录

import {Route,Switch,Redirect} from 'react-router-dom'  //路由做匹配

class App extends Component{
    render(){
        return(
            <div className="App">
                
                <Header/>
                
                {/* 开发组件 */}
                 <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/follow" component={Follow}/>

                    {/* <Route path="/user" component={User}/> */}
                    <AuthRoute path="/user" component={User}/>  {/*戒权路由守卫链接 */}
                    
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/column" component={Column}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Error}/>
                </Switch> 
                {/* <h3>wudewuiyrewyrewhfuewihriuewrhy上课的幻觉额   雕塑丢石头阿权 额我和无法额外
                    当时才大四房吗你可以撒野都市图读书也是人们在西方你的可见亚瑟和vuudfrewu4iyxz jshdiut 
                    uwqydfjw诶还有对顺风耳与独一份热u如有  如有丢失布局图都是昆明生日歌结合
                </h3> */}
                <Footer/>
            </div>
        )
    }

}

export default App;