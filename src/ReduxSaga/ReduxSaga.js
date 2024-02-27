import React    from "react";
import template from "./ReduxSaga.jsx";
import mystore from "../store/myRduxStore.js";
class ReduxSaga extends React.Component {
  fnGetComments(){
debugger
//dispatch funtion will dispatch it to reducer which we r usinng in our application
mystore.dispatch(
  {
    type:"GET_COMMENTS"
  }
)
  }
  fnGetAlbums(){
debugger
mystore.dispatch(
  {
    type:"GET_ALBUMS"
  }
)
  }
  render() {
    return template.call(this);
  }
}

export default ReduxSaga;
