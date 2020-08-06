import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom'

function Home(){
  return (
    <div>
    <h2>this is home page</h2>

    </div>
  )
}

function Sub(){
  return (
    <h2>this is sub page</h2>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
        <li><Link to="/">home page</Link></li>
        <li><Link to='/test'>sub page</Link></li>
        <p>
        <Route path='/' exact component={Home}></Route>
        <Route path='/test' component={Sub}></Route>
        </p>
      </Router>
     );
  }
}
 
export default App;