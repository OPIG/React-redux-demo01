import React from 'react';
import {INPUT_CHANGE,ADD_ITEM,DEL_ITEM} from './store/actionType'
import {connect} from 'react-redux'//连接器

const TodoList=(props)=> {
        let {placeholder,inputValue,InputChange,AddItem,listData,DeleteItem} = props

        return ( 
            <div>
                <input 
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={InputChange}
                />
                <button
                    onClick={AddItem}
                >Add</button>
                <ul>
                    {
                    listData.map((item,index)=>{
                        return (
                            <li
                                key={index+item}
                            >
                                {item}
                                <button 
                                    onClick={()=>DeleteItem(index)}
                                >Del</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
         )
}

const stateToProps = (state)=>{
    return {
        placeholder:state.placeholder,
        inputValue:state.inputValue,
        listData:state.listData
    }
}

const dispatchToProps=(dispatch)=>{
    return {
        InputChange(e) {
            const action = {
                type:INPUT_CHANGE,
                value:e.target.value
            }
    
            dispatch(action)
        },

        AddItem(){
            const action={
                type:ADD_ITEM
            }
            dispatch(action)
        },

        DeleteItem(index){
            const action ={
                type:DEL_ITEM,
                index
            }
            dispatch(action)
        }
    
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);