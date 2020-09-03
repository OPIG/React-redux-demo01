import React, { Component } from 'react'


class CountWithComponent extends Component{
    constructor(props){
        super(props)
        this.state=
            {
                count: 0
            }
        

        this.clickMe = this.clickMe.bind(this)
    }
    render(){
        return (
            <div>
                <p>{ this.state.count }</p>
                <button onClick = {this.clickMe}>Click</button>
            </div>
        )
    }

    clickMe(){
        let count
        count = this.state.count
        count++
        this.setState({count})
    }
}

export default CountWithComponent;