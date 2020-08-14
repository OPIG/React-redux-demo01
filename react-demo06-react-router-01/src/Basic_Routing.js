import React from 'react';
import {BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom'


function Home(){
    return (
        <h3>This is home content</h3>
    )
}

function Sub(){
    return (
        <h3>this is sub content</h3>
    )
}
function NotFound(){
    return (
        <h3>Not Found</h3>
    )
}

export default function Basic_Routing(){
    return (
        <Router>
            <div>
                <ul style={{display:'flex'}}>
                    <li style={{width:'20%',listStyle:'none'}}><Link to='/'>Home</Link></li>
                    <li style={{width:'20%',listStyle:'none'}}><Link to='/sub'>Sub</Link></li>
                </ul>
                <div className='content'>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path='/' exact render={()=>Home()}></Route>
                        <Route path='/sub'><Sub/></Route>
                        <Route path='*' render={()=>NotFound()}/>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

