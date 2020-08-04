
import {INPUTVALUE_CHANGE,ADD_ITEM,DEL_ITEM,GETDATA_BYAXIOS,GET_MY_LIST} from './ActionType'

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

export const GetMyList = ()=>({
    type:GET_MY_LIST
})