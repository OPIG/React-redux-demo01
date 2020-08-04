import React, { Component } from 'react';
import store from './store'
import {INPUT_CHANGE,ADD_ITEM,DEL_ITEM} from './store/actionType'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        console.log(this.state)
        this.InputChange= this.InputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.AddItem = this.AddItem.bind(this)
        this.DeleteItem = this.DeleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( 
            <div>
                <input 
                    value={this.state.inputValue}
                    onChange={this.InputChange}
                />
                <button
                    onClick={this.AddItem}
                >Add</button>
                <ul>
                    {
                    this.state.listData.map((item,index)=>{
                        return (
                            <li
                                key={index+item}
                            >
                                {item}
                                <button 
                                    onClick={()=>this.DeleteItem(index)}
                                >Del</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
         )
    }
    storeChange(){
       this.setState(store.getState())
    }
    InputChange(e){
        const action = {
            type:INPUT_CHANGE,
            value:e.target.value
        }

        store.dispatch(action)
    }

    AddItem(){
        const action={
            type:ADD_ITEM
        }
        store.dispatch(action)
    }

    DeleteItem(index){
        const action ={
            type:DEL_ITEM,
            index
        }
        store.dispatch(action)
    }
}
 
export default TodoList;