import React, { Component } from 'react';
import store from '../store'
import TodoUI from './TodoUI';
import {ADD,INPUT_CHANGE,DEL} from '../store/actionType'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state=store.getState()

        this.inputChange=this.inputChange.bind(this)
        this.addClick=this.addClick.bind(this)
        this.DeleteItem=this.DeleteItem.bind(this)
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    render(){
        return(
            <TodoUI
                placeholder={this.state.placeholder}
                inputVal={this.state.inputVal}
                inputChange={this.inputChange}
                addClick={this.addClick}
                ListData={this.state.ListData}
                DeleteItem={this.DeleteItem}
            />
        )
    }

    inputChange(e){
        const action={
            type:INPUT_CHANGE,
            value:e.target.value
        }
        store.dispatch(action)
    }

    addClick(){
        const action={
            type:ADD
        }

        store.dispatch(action)
    }

    DeleteItem(ind){
        const action={
            type:DEL,
            index:ind
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
}

export default Todo