import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home'
import './style/index.css'
import Video from './pages/Video'
import Workplace from './pages/Workplace'
import NotFound from './pages/NotFound'


// function App(props){
//   return ( 
//     <Router>
//       <li><Link to="/">home page</Link></li>
//       <li><Link to='/test'>sub page</Link></li>
//       {console.log(arguments)}
//       {console.log(props)}
//       <Route path='/' exact component={Home}></Route>
//       <Route path='/test' component={Sub}></Route>
//     </Router>
//    )
// }

class AppRouter extends Component {
  render() { 
    let routeConfig = [
      {path:'/',title:'博客首页',exact:true,component:Home},
      {path:'/video',title:'视频教学',exact:false,component:Video},
      {path:'/wp',title:'职场技能+',exact:false,component:Workplace},
      {component:NotFound}
    ]
    return ( 
      <Router>
        <div className='mainDiv'>
          <div className='leftNav'>
            <h3>一级导航</h3>
            <ul>
              {
                routeConfig.map((item,index)=>{
                  return (
                    item.path?
                  <li key={item+index}><Link to={item.path}>{item.title}</Link></li>:''
                  )
                })
              }
            </ul>
          </div>
          <div className='rightMain'>
            <Switch>
              {
                routeConfig.map((item,index)=>{
                  return (
                    <Route key={item+index} path={item.path} exact={item.exact} component={item.component}></Route>
                  )
                })
              }
              </Switch>
          </div>
        </div>
      </Router>
     )
  }
}

 
export default AppRouter