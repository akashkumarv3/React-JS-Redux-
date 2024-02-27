import { call, put, take, takeLatest } from "redux-saga/effects";
import ServerCall from "../shared/serverCall";

function* getAlbum(){
const res=yield call(ServerCall.fnSendGetReq,'albums')
  yield put({
    type:'ALBUMS',
    payload:res.data
  })
}

function* updateAlbum(){

}

function* albumsSaga(){
yield takeLatest("GET_ALBUMS",getAlbum);
yield takeLatest("UPDATE_ALBUMS",updateAlbum);

}
export default albumsSaga;