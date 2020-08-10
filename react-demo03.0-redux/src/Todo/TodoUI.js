import React,{Component} from 'react';
import TodoList from './TodoList'

function TodoUI(props){
    return ( 
        <div>
            <input 
                placeholder={props.placeholder}
                value={props.inputVal}
                onChange={props.inputChange}
            />
            <button
                onClick={props.addClick}
            >
                Add
            </button>

            <ul>
                
                {
                    props.ListData.map((item,index)=>{
                        return (
                            <TodoList
                                content={item}
                                key={index+item}
                                index={index}
                                Del = {props.DeleteItem}
                            >
                            </TodoList>
                        )
                    })
                }
            </ul>
        </div>
     );
}


export default TodoUI;