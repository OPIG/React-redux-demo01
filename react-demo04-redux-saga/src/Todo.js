import React, {Component} from 'react'
import store from './store'
import {ChangeInputValue,AddItem,DeleteItem,GetMyList} from './store/ActionCreater'
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
       const action = GetMyList()
        store.dispatch(action)

        document.addEventListener('keydown',this.onkeydown)
    }

    componentDidUpdate(){
        // document.addEventListener('keydown',this.onkeydown)//放在这个生命周期函数中，首次加载页面点击回车不会有效果
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

    onkeydown=(e)=>{
        if(e.keyCode ===13){
            this.AddItem()
            }
        }

    AddItem(){
        console.log("test")
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