import {call, put, takeLatest} from 'redux-saga/effects'

 import ServerCall from '../shared/serverCall'

function* getComments(){
debugger
const res=yield call(ServerCall.fnSendGetReq,'comments')
yield put({
    type:'COMMENTS',
    payload:res.data
})
}

function* insertComments(){

}

function* commentsSaga(){
//register same commebts will get not 10 tumes if we use saga redux

yield takeLatest("GET_COMMENTS",getComments);
yield takeLatest("INSERT_COMMENTS",insertComments);

}

export default commentsSaga;