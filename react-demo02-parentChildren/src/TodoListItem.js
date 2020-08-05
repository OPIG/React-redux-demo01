import React from 'react';
import PropTypes from 'prop-types'

const TodoListItem = (props)=>{
    return (
        <li
            onClick ={()=>props.HandleDelte(props.index)}
        >
            {props.content}
        </li>
      );
}
 
TodoListItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    HandleDelte:PropTypes.func
}

export default TodoListItem;