import React from 'react';
import PropTypes from 'prop-types'

function TodoList(props){
    return ( 
        <li>
            { props.content}
            <button style={{marginLeft:20,backgroundColor:'yellow',cursor:'pointer'}}
                    onClick={()=> props.Del( props.index)}
            >Del</button>
        </li>
     );
}


TodoList.propTypes={
    content:PropTypes.string,
    index:PropTypes.number,
    Del:PropTypes.func
}
 
export default TodoList;