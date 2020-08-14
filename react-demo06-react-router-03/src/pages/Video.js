import React from 'react'
import {Route, Link,Redirect,Switch} from 'react-router-dom'
import Vue from './video/Vue'
import ReactT from './video/React'
import Flutter from './video/Flutter'

function Video(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to="/video/vue">Vue step by step</Link></li>
                    <li><Link to="/video/react">React step by step</Link></li>
                    <li><Link to="/video/flutter">Flutter step by step</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <h3>Tourial videos</h3>
                <Switch>
                <Route path='/video/vue' component={Vue}></Route>
                <Route path='/video/react' component={ReactT}></Route>
                <Route path='/video/flutter' component={Flutter}></Route>
                <Redirect to='/video/react'/>
                </Switch>
            </div>
        </div>
        
    )
}

export default Video