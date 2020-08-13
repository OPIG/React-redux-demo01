import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    let state={
        listData:[
            {cid:123,title:'Hello React !!'},
            {cid:456,title:'React is great !!'},
            {cid:789,title:'Good study React !!'}
        ]
    }
    return (
      <ul>
          {
              state.listData.map((item,index)=>{
                  return (
                    <li key={item.cid+index}>
                        <Link to={'/list/'+item.cid}>{item.title}</Link>
                    </li>
                  )
              })
          }
      </ul>
    )
  }

  export default Home