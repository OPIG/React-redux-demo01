import React, {Component} from 'react'
import store from './store'
import axios from 'axios'
import {ChangeInputValue,AddItem,DeleteItem, GetDataByAxios} from './store/ActionCreater'
//import TodoUI from './TodoUI'
import TodoUI from './TodoUI_noState' // 无状态组件

class Todo extends Component{
    constructor(props){
        super(props)
        console.log(store.getState().ListData)
        this.state = store.getState()
        this.AddItem=this.AddItem.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this)
        this.DeleteMe = this.DeleteMe.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    
    componentDidMount(){
        axios.get("https://easy-mock.com/mock/5f16c3f094896b22a7fa795c/ReactDemo01/getList").then((res)=>{
            const action = GetDataByAxios(res.data)
            store.dispatch(action)
        })
    }

    render(){
        

        return (
            <TodoUI
                placeholder={this.state.placeholder}
                inputValue={this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                AddItem = {this.AddItem}
                ListData = {this.state.ListData}
                DeleteMe = {this.DeleteMe}
            />
        )
    }

    //
    storeChange(){
        this.setState(store.getState())
    }

    changeInputValue(e){
        const action = ChangeInputValue(e.target.value)
        store.dispatch(action)
    }

    AddItem(){
        if(this.state.inputValue){
            const action =AddItem()
            store.dispatch(action)
        }
        else{
            alert(`please input anything`)
        }
    }

    DeleteMe(index){
        console.log(index)
        const action=DeleteItem(index)
        store.dispatch(action)
    }
}

export default Todo