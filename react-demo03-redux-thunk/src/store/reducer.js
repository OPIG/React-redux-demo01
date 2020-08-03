import {ADD_ITEM, INPUTVALUE_CHANGE,DEL_ITEM,GETDATA_BYAXIOS} from './ActionType'

const defaultState={
    inputValue:'',
    placeholder:'enter something',
    ListData:[
        "this is item1",
        "this is item2"
    ]
}
export default (state=defaultState,action)=>{
        if(action.type===ADD_ITEM){
            const newState = JSON.parse(JSON.stringify(state))
            newState.ListData.push(newState.inputValue)
            console.log(newState.inputValue)
            newState.inputValue=''
            console.log(newState)
            return newState
        }

        if(action.type===INPUTVALUE_CHANGE){
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        }

        if(action.type===DEL_ITEM){
            const newState = JSON.parse(JSON.stringify(state))
            newState.ListData.splice(action.index,1)
            return newState
        }

        if(action.type===GETDATA_BYAXIOS){
            const newState = JSON.parse(JSON.stringify(state))
            newState.ListData = action.data.data.ListData
            return newState
        }

        return state
}