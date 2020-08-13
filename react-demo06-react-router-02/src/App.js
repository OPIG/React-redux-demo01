import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Sub from './pages/Sub'

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

class App extends Component {
  render() { 
    return ( 
      <Router>
        <li><Link to="/">home page</Link></li>
        <li><Link to={'/test/'+Math.floor(Math.random()*1000)}>sub page</Link></li>
        {console.log(arguments)}
        <Route path='/' exact component={Home}></Route>
        <Route path='/test/:id' component={Sub}></Route>
      </Router>
     )
  }
}

 
export default App;