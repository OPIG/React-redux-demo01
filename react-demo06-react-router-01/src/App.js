import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Home(){
  return (
    <div>
      <h2>this is home page 1</h2>
    </div>
  )
}

function Sub(){
  return (
    <h2>this is sub page</h2>
  )
}

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
        <li><Link to='/test'>sub page</Link></li>
        {console.log(arguments)}
        <Route path='/' exact component={Home}></Route>
        <Route path='/test' component={Sub}></Route>
      </Router>
     )
  }
}

 
export default App;