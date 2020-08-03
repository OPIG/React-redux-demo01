
import {INPUTVALUE_CHANGE,ADD_ITEM,DEL_ITEM,GETDATA_BYAXIOS} from './ActionType'
import axios from 'axios'

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

export const GetListDataByAxios = ()=>{
    return (dispatch)=>{
        (console.log('success'))
        axios.get("https://easy-mock.com/mock/5f16c3f094896b22a7fa795c/ReactDemo01/getList").then((res)=>{
            const action = GetDataByAxios(res.data)
            dispatch(action)
        })
    }
}