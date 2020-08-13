import React from 'react'
function Sub(props={}){
  console.log(props)
  let tenantId = props.match.params.id

    return (
    <h2>this is sub page--{tenantId}</h2>
    )
  }

  export default Sub