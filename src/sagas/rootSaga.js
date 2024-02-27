import albumsSaga from "./albumSaga";
import commentsSaga  from "./commentSaga";
import { all } from "redux-saga/effects";

function* rootSaga(){
yield all(
    [
        albumsSaga(),
        commentsSaga()
    ]
);
}

export default rootSaga;