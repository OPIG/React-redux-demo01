import React from 'react'
import { Link, Route,Switch,Redirect } from 'react-router-dom'
import Office from './workplace/Office'

function Workplace(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to ='/wp/office'>Office</Link></li>
                </ul>
            </div>
            <div className='wpContent'>
                <Switch>
                    <Route path='/wp/office' component={Office}></Route>
                    <Redirect to='/wp/office'/>
                </Switch>
            </div>
        </div>
    )
}

export default Workplace