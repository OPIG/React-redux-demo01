
import {INPUTVALUE_CHANGE,ADD_ITEM,DEL_ITEM,GETDATA_BYAXIOS} from './ActionType'
export const ChangeInputValue = (value)=>({
    type:INPUTVALUE_CHANGE,
    value
})

export const AddItem = ()=>({
    type:ADD_ITEM
})

export const DeleteItem = (index)=>({
    type:DEL_ITEM,
    index
})

export const GetDataByAxios = (data)=>({
    type:GETDATA_BYAXIOS,
    data
})