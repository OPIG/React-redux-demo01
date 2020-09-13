import React, {createContext, useContext, useState} from 'react'

const countContext = createContext()

function useContextDemo(){
    let [count, setCounter] = useState(0)

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>{setCounter(count+1)}}>click me</button>
            <countContext.Provider value={count}>
                <GetCount/>
            </countContext.Provider>
        </div>
    )
}

function GetCount(){
    let receiveCount = useContext(countContext)

    return (
        <h2>
            {receiveCount}
        </h2>
    )
}

export default useContextDemo