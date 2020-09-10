import React, {useState  , useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log('老弟，你来Index')
        return ()=>{
            console.log('老弟，你离开Index了')
        }
    },[])
    return <h3>this is home page</h3>
}

function Sub(){
    useEffect(()=>{
        console.log('老弟，你已经进入sub页面')
        return ()=>{
            console.log('老弟，你已经离开Sub页面')
        }
    },[])
    return <h3>this is Sub page</h3>
}

function CountWithHook2(){
    let name = useState("Atom")
    let gender = useState("male")
    let [ age,setAge ] = useState(18)
    useEffect(()=>{
        console.log(`use effect: ${age}`)
        return ()=>{
            console.log('你点击了按钮')
        }
    },[age])
    return (
        <div>
            {/* <p>Name: {name}</p>
            <p>Gender: {gender}</p> */}
            <p>age: {age}</p>
            <button onClick={()=>{setAge(age+1)}}>Click Me</button>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">Sub</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list" component={Sub}></Route>
            </Router>

        </div>
    )
}

export default CountWithHook2