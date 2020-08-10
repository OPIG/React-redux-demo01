import {ADD,INPUT_CHANGE,DEL} from './actionType'
const defaultState={
            inputVal:'',
            placeholder:'enter something',
            ListData:[
                "this is list 1",
                "this is list 2",
                "this is list 3"
            ]
}
export default (state=defaultState,action)=>{
    if(action.type===ADD){
        const newState = JSON.parse(JSON.stringify(state))
        newState.ListData.push(newState.inputVal)
        newState.inputVal=''
        return newState
    }

    if(action.type===INPUT_CHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal=action.value
        return newState
    }

    if(action.type===DEL){
        const newState = JSON.parse(JSON.stringify(state))
        newState.ListData.splice(action.index,1)
        return newState
    }

    return state
}