import {INPUT_CHANGE,ADD_ITEM,DEL_ITEM} from './actionType'
const defaultState={
    placeholder:'Enter something',
    inputValue:'',
    listData:[
        "this is item1",
        "this is item2"
    ]
}

export default (state=defaultState,action)=>{
        if(action.type===INPUT_CHANGE){
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        }

        if(action.type===ADD_ITEM){
            const newState = JSON.parse(JSON.stringify(state))
            newState.listData.push(newState.inputValue)
            newState.inputValue=''
            return newState
        }

        if(action.type===DEL_ITEM){
            const newState=JSON.parse(JSON.stringify(state))
            newState.listData.splice(action.index,1)
            return newState
        }

        return state
}