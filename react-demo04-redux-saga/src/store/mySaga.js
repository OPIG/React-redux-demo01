import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from './ActionType'
import axios from 'axios'
import {GetDataByAxios} from './ActionCreater'
//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList)
}

function * getList(){
    
     const res= yield axios.get("https://easy-mock.com/mock/5f16c3f094896b22a7fa795c/ReactDemo01/getList")
     const action =GetDataByAxios(res.data)
     yield put(action)
}
export default mySaga